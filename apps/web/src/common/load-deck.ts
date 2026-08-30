import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

/**
 * Repo-level `content/` directory. Astro bundles this module under `dist/`, so
 * the path is found by walking up from the working directory instead of from
 * `import.meta.url`.
 */
function findContentDir(): string {
  let dir = process.cwd();
  for (let depth = 0; depth < 6; depth += 1) {
    const candidate = join(dir, "content", "master.json");
    if (existsSync(candidate)) return dirname(candidate);
    dir = dirname(dir);
  }
  throw new Error("content/master.json not found above " + process.cwd());
}

const contentDir = findContentDir();

export type SlideMeta = {
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

export type DeckSlide = SlideMeta & {
  index: number;
  html: string;
  prev?: string;
  next?: string;
};

/**
 * Loads the ordered master deck from `content/master.json` and each slide's
 * exported HTML fragment plus its metadata sidecar.
 */
export function loadDeck(): DeckSlide[] {
  const order = JSON.parse(readFileSync(join(contentDir, "master.json"), "utf8")) as string[];
  return order.map((id, index) => {
    const meta = JSON.parse(
      readFileSync(join(contentDir, "slides", `${id}.json`), "utf8"),
    ) as SlideMeta;
    const html = readFileSync(join(contentDir, "slides", `${id}.html`), "utf8");
    return {
      ...meta,
      index,
      html,
      prev: order[index - 1],
      next: order[index + 1],
    };
  });
}
