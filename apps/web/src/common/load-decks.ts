import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";

/**
 * Repo-level `content/` directory. Astro bundles this module under `dist/`, so
 * the path is found by walking up from the working directory.
 */
function findContentDir(): string {
  let dir = process.cwd();
  for (let depth = 0; depth < 6; depth += 1) {
    const candidate = join(dir, "content", "decks");
    if (existsSync(candidate)) return dirname(candidate);
    dir = dirname(dir);
  }
  throw new Error(`content/decks not found above ${process.cwd()}`);
}

const contentDir = findContentDir();

export type SlideMeta = {
  id: string;
  deck: string;
  nn: string;
  slug: string;
  paperNodeId: string;
  name: string;
  title: string;
  section: string;
  sourceLine: string;
  images: string[];
};

export type Deck = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  href: string;
  slides: string[];
};

export type Slide = SlideMeta & {
  index: number;
  html: string;
  deckTitle: string;
  deckHref: string;
  total: number;
  prev?: string;
  next?: string;
};

/** Every deck definition, in reading order (master first). */
export function loadDecks(): Deck[] {
  const dir = join(contentDir, "decks");
  const order = ["master", "playbooks", "cases", "register"];
  return readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(readFileSync(join(dir, file), "utf8")) as Deck)
    .toSorted((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}

function readMeta(id: string): SlideMeta {
  return JSON.parse(readFileSync(join(contentDir, "slides", `${id}.json`), "utf8")) as SlideMeta;
}

/** Slide metadata for a deck, without the (large) HTML bodies. */
export function loadDeckSlides(deck: Deck): SlideMeta[] {
  return deck.slides.map(readMeta);
}

/** Every slide across every deck, with HTML and its position in its own deck. */
export function loadSlides(): Slide[] {
  return loadDecks().flatMap((deck) =>
    deck.slides.map((id, index) => ({
      ...readMeta(id),
      index,
      total: deck.slides.length,
      deckTitle: deck.title,
      deckHref: deck.href,
      html: readFileSync(join(contentDir, "slides", `${id}.html`), "utf8"),
      prev: deck.slides[index - 1],
      next: deck.slides[index + 1],
    })),
  );
}
