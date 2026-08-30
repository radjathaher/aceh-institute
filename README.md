# Aceh Institute

Source for **acehinstitute** — the website of _Aceh 2045 · Production Autonomy_, a
source-linked deck on Aceh's special autonomy: what the Helsinki MoU promised, what
Law 11/2006 enacted, what was never implemented, and a production agenda that uses
the powers Aceh already holds before asking Jakarta for precise new ones.

Every slide is one static HTML page. The design source of truth is a Paper.design
file; slides are exported as HTML and kept in sync from there (see `tools/paper-sync`).

```
apps/web          Astro 7 static site      → /s/01 … /s/86, /about
content           exported slides (html + json) and master.json (slide order)
docs              research notes with sources, outline, design brief, endnotes
tools/paper-sync  Paper → HTML build script and sync procedure
```

## Develop

```sh
bun install
bun run sync        # rebuild content/slides from tools/paper-sync/raw
bun run dev         # http://localhost:4321
bun run build       # astro check + static build → apps/web/dist
bun run lint && bun run fmt:check && bun run typecheck
```

Requires Bun 1.3+ and Node 22.12+ (Astro runs on Node; Bun is the package manager
and script runner).

## Deploy

The site is plain static output. `apps/web/wrangler.jsonc` is prepared for
Cloudflare Workers static assets (`bun run --cwd apps/web deploy`); no deployment
is configured yet.

## Licence

- Code (`apps/`, `tools/`, configuration): [MIT](LICENSE).
- Content — slides, research notes, generated images, the Aceh Institute name:
  copyright © 2026 Radja Thaher, all rights reserved. See [LICENSE-CONTENT](LICENSE-CONTENT).
