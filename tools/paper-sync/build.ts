/**
 * Paper → content build.
 *
 * Reads every `raw/<nn>-<slug>.jsx` file (written by an agent from Paper's
 * `get_jsx`), renders it to static HTML with React, rewrites local asset
 * paths, extracts slide metadata and writes `content/slides/<id>.{html,json}`.
 * With `--init-master` it also (re)writes `content/master.json` in file order.
 */
import { readdirSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const here = import.meta.dir;
const rawDir = join(here, "raw");
const cacheDir = join(here, ".cache");
const contentDir = resolve(here, "../../content");
const slidesDir = join(contentDir, "slides");

const ASSET_RE = /paper-asset:\/\/\/[^"' )]*\/img\//g;
const PAPER_CDN_RE =
  /https:\/\/app\.paper\.design\/file-assets\/[A-Z0-9]+\/([A-Z0-9]+)\.(png|jpg|jpeg|webp|svg)/g;
const paperImgDir = resolve(here, "../../apps/web/public/img/paper");

/** Downloads every Paper-hosted asset referenced in `html` once and rewrites the URL to a local path. */
async function localiseCdnAssets(html: string): Promise<string> {
  mkdirSync(paperImgDir, { recursive: true });
  const refs = Array.from(html.matchAll(PAPER_CDN_RE));
  for (const [url, id, ext] of refs) {
    const target = join(paperImgDir, `${id}.${ext}`);
    if (!existsSync(target)) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`asset ${url} → HTTP ${res.status}`);
      writeFileSync(target, new Uint8Array(await res.arrayBuffer()));
      console.log(`  fetched ${id}.${ext}`);
    }
  }
  return html.replace(PAPER_CDN_RE, (_m, id: string, ext: string) => `/img/paper/${id}.${ext}`);
}
const DISPLAY_TEXT = (size: string) =>
  new RegExp(
    `<[^>]*style="[^"]*font-family:(?:var\\(--font-display\\)|Fraunces)[^"]*font-size:${size}[^"]*"[^>]*>([^<]+)<`,
    "i",
  );

/**
 * Paper emits comparison operators ("< 9%", "> 20%") as bare JSX text, which
 * the parser reads as an unclosed tag. Wrap those lines in a string expression
 * so re-exports compile without hand-editing the raw files.
 */
function sanitiseJsx(source: string): string {
  return source.replace(
    /^([ \t]*)([<>] [^<>{}\n]*?)[ \t]*$/gm,
    (_line, indent: string, text: string) => {
      return `${indent}{${JSON.stringify(text)}}`;
    },
  );
}

type Meta = {
  id: string;
  nn: string;
  slug: string;
  paperNodeId: string;
  name: string;
  title: string;
  section: string;
  sourceLine: string;
  images: string[];
};

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function firstMatch(html: string, patterns: RegExp[]): string {
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return decodeEntities(match[1]);
  }
  return "";
}

function extractMeta(html: string, file: string, paperNodeId: string, name: string): Meta {
  const [, nn, slug] = file.match(/^(\d{2})-(.+)\.jsx$/) ?? [];
  const title = firstMatch(html, ["44px", "64px", "220px", "72px"].map(DISPLAY_TEXT));
  const section = firstMatch(html, [/>(\d\d · [A-Z][^<]{2,60})</, /(SECTION \d\d OF \d\d)/]);
  const sourceLine = firstMatch(html, [/>(Source: [^<]+)</]);
  const refs = Array.from(html.matchAll(/(?:src="|url\()(\/img\/[^"')]+)/g), (m) => m[1] ?? "");
  const images = Array.from(new Set(refs));
  return {
    id: `${nn}-${slug}`,
    nn: nn ?? "",
    slug: slug ?? "",
    paperNodeId,
    name,
    title,
    section,
    sourceLine,
    images,
  };
}

async function buildOne(file: string): Promise<Meta> {
  const source = await Bun.file(join(rawDir, file)).text();
  const paperNodeId = source.match(/^\/\/ paper: (\S+)/m)?.[1] ?? "";
  const name = source.match(/^\/\/ name: (.+)$/m)?.[1]?.trim() ?? file;
  mkdirSync(cacheDir, { recursive: true });
  const compiled = join(cacheDir, file);
  writeFileSync(compiled, sanitiseJsx(source));
  const mod = (await import(compiled)) as { default: () => unknown };
  const rendered = renderToStaticMarkup(createElement(mod.default as never)).replace(
    ASSET_RE,
    "/img/",
  );
  const html = await localiseCdnAssets(rendered);
  const meta = extractMeta(html, file, paperNodeId, name);
  writeFileSync(join(slidesDir, `${meta.id}.html`), `${html}\n`);
  writeFileSync(join(slidesDir, `${meta.id}.json`), `${JSON.stringify(meta, null, 2)}\n`);
  return meta;
}

const files = readdirSync(rawDir)
  .filter((f) => f.endsWith(".jsx"))
  .toSorted();
const metas: Meta[] = [];
for (const file of files) {
  metas.push(await buildOne(file));
  console.log(`built ${file}`);
}
const masterPath = join(contentDir, "master.json");
if (process.argv.includes("--init-master") || !existsSync(masterPath)) {
  writeFileSync(
    masterPath,
    `${JSON.stringify(
      metas.map((m) => m.id),
      null,
      2,
    )}\n`,
  );
  console.log(`wrote master.json (${metas.length} slides)`);
}
console.log(`done: ${metas.length} slides → ${slidesDir}`);
