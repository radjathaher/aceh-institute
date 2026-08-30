# Agent brief — ACEH deck build (read fully before any Paper call)

## Target
- Paper file id `01M18KDSJEN0TCH6K0JPSPVCA8`, page "Intro Deck" (pageId `1-0`). ALWAYS pass `fileId` on every Paper MCP call. Call `mcp__paper__get_guide({topic:"paper-mcp-instructions"})` once first.
- MASTER TEMPLATE artboard = node `1P-0` named `S00-TEMPLATE (master, do not edit)` (1920×1080, parked at top:-2600px). Children: Header `32-0` (Section tag frame `34-0` → text `35-0`; Slide number text `33-0`), Title block `2Y-0` (Action title `31-0`, Red rule `30-0`, Subtitle `2Z-0`), Body `1T-0`, Footer `1Q-0` (Source line `1S-0`, Wordmark `1R-0`). Node `1-0` (`S00-01 Cover`, at row 0 n 0) is a second copy reserved for the cover — only Agent A touches it.
- Design tokens exist in the file (use as CSS vars): --color-ground/ink/muted/line/tint/stripe/red/red-deep/ok/warn; --font-display (Fraunces) / --font-body (Inter) / --font-mono (JetBrains Mono); --text-source 13, caption 15, body 18, subtitle 22, h2 30, title 44, hero 72, bignum 120; spacing xs 8 / sm 16 / md 24 / lg 40 / xl 64 / margin 96.

## How to make each slide (do NOT build from scratch)
1. `duplicate_nodes` on `1P-0` → get new artboard id + `descendantIdMap` (map the ids above to the clone).
2. `rename_nodes` → `S{row:02}-{n:02} {short title}` (e.g. `S04-03 Ports and airports`).
3. `update_styles` on the new artboard: `{ "left": "<x>px", "top": "<y>px" }` where **row y = -540 + row*1560**, **slide x = -960 + n*2040** (n is 0-based within the row). Never delete or edit `1P-0`.
4. `set_text_content` on the cloned Section tag text (map of `35-0`), Slide number (`33-0`), Action title (`31-0`), Subtitle (`2Z-0`), Source line (`1S-0`).
5. Replace the Body: `write_html` with `mode:"replace"` on the clone of `1T-0`, writing a new `<div layer-name="Body" style="display:flex; flex-direction:row; gap:48px; width:100%; flex-grow:1; padding:48px 0 0 0; align-items:stretch;">…</div>` with 2-3 panels. Keep Body ≤ 653px tall. Write in 2-4 write_html calls (Body shell first, then each panel via insert-children).
6. After each slide: `get_screenshot` (if it returns empty, use `get_tree_summary` and check heights sum ≤ 1080; the artboard must NOT switch to fit-content). Then `finish_working_on_nodes([artboardId])`.
7. Row label: once per row, `create_artboard` name `R{row:02} LABEL` 560×160, styles `{backgroundColor:"transparent"}`, then `update_styles` `{left:"-1640px", top:"<row y>px"}`, then write_html a text: mono 13px tracking 0.08em muted "0N" over a Fraunces 30px 600 ink section name, plus a 560×6 black/white stripe bar (two rects) beneath.

## Slide anatomy rules (mandatory)
- Action title = one full sentence stating the finding (Fraunces 44/50, 600, tracking -0.02em, width ≤1400px). Subtitle = what the visual shows + period (Inter 22/30 muted).
- Section tag text = "0N · SECTION NAME" uppercase mono. Slide number = artboard code.
- 2-3 visual panels per slide (this deck is infographic-heavy): SVG chart / SVG map / SVG diagram / stat block / generated image. Charts are inline SVG with exact numbers; axis labels JetBrains Mono 13 #6B6B6B; bars/series ink `var(--color-stripe)` with ONE red highlight `var(--color-red)`; grid `var(--color-line)`. No emoji. No HTML tables (use flex rows with fixed-width slots).
- Status colours for matrices: implemented `var(--color-ok)`, partial `var(--color-warn)`, blocked `var(--color-red)`.
- Takeaway box: tint background, mono label "SO WHAT" in red, Inter 18/28 500 text. One per slide.
- Footer source line: `Source: <publisher>, <document>, <date>. [n]` — only facts from `research/*.md`; cite the file's URL by appending it in the artboard's layer name? NO — instead append a line to `outline/sources.md` in the form `[n] <publisher> — <title/date> — <URL>` using the next free number (read file first; numbers must be unique across agents: agent A uses 1-99, B 100-199, C 200-299, D 300-399, E 400-499, F 500-599).
- Numbers: use only ✅/⚠ figures from research; never ❓. If two sources disagree, show a range.
- Tone: firm partner toward Jakarta; honest, no named individuals blamed; English. Ambitious asks paired with a precedent.
- Colours/motif: Aceh flag red/black/white as palette only; crescent-star mark only as the small header glyph (already in template). Never draw the flag.

## Images (user wants many; gpt-image-2, medium)
- Command: `creative image --quality medium --size 1536x1024 --output-format png --image /Users/radjathaher/projects/aceh/assets/img/root-style.png --out /Users/radjathaher/projects/aceh/assets/img/<slug>.png --prompt "<scene>. Editorial documentary photograph or clean isometric illustration, ink-black and deep-red accents on white, high contrast, minimal, no text, no flags, no logos, no recognisable faces."`
- Run several in the background in parallel (`run_in_background`), then embed with `<img src="paper-asset:///Users/radjathaher/projects/aceh/assets/img/<slug>.png" style="width:…px; height:…px; object-fit:cover; border-radius:4px;">`.
- Target: 1 image per section opener slide + 1 per sector/corridor/institution/peer slide where atmosphere helps. Image ≤ 45% of slide area, never behind text. Add "Image: generated" at end of source line.

## Content sources (read before writing your rows)
- `outline/core.md` — row/slide list. `research/digest.md` — compact facts. `research/{politics,economy,gap-register,telecom,peers,format}.md` — facts WITH URLs. `research/mou-helsinki-id.pdf` (MoU, ID). Fact dump sections in `outline/factdump.md`.

## Done criteria per agent
- All assigned slides exist, positioned in their row, named correctly, each screenshot-reviewed (or tree-checked), `finish_working_on_nodes` called. Sources appended to `outline/sources.md`. Report: list of artboard ids + names, images generated, any fact you could not source (left as "[verify]").
