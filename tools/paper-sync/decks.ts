/** Deck definitions. A slide belongs to no deck; decks are ordered lists of slide ids. */
export type DeckId = "master" | "playbooks" | "cases" | "register";

export type DeckDef = {
  id: DeckId;
  /** Raw-filename prefix that assigns a slide to this deck. */
  prefix: string;
  title: string;
  kicker: string;
  description: string;
  href: string;
};

export const decks: DeckDef[] = [
  {
    id: "master",
    prefix: "",
    title: "Aceh 2045",
    kicker: "THE ARGUMENT",
    description:
      "The full case in order: what Helsinki promised, what the law enacted, what was never implemented, and the production agenda that follows.",
    href: "/deck",
  },
  {
    id: "playbooks",
    prefix: "m1-",
    title: "Sector playbooks",
    kicker: "TWELVE SECTORS",
    description:
      "For each sector: the market baseline, the map of instruments that govern it, and a three-phase play with proposed KPIs.",
    href: "/playbooks",
  },
  {
    id: "cases",
    prefix: "m2-",
    title: "Peer case studies",
    kicker: "NINE AUTONOMIES",
    description:
      "Bangsamoro to Sarawak: the legal basis each peer holds, the numbers it produces, and what Aceh can and cannot copy.",
    href: "/cases",
  },
  {
    id: "register",
    prefix: "m3-",
    title: "Gap register",
    kicker: "THIRTEEN ARTICLES",
    description:
      "Every UUPA mandate that was written and not executed: the instrument needed, who holds the key, and what unblocks it.",
    href: "/register",
  },
];

/** Resolves a raw filename stem to the deck that owns it. */
export function deckForId(id: string): DeckDef {
  const match = decks.find((deck) => deck.prefix !== "" && id.startsWith(deck.prefix));
  return match ?? decks[0]!;
}
