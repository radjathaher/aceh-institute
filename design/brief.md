## Design brief (Paper)
- Mood: **signage** — ink black × Aceh red on pure white (the flag's own triad; "gallery/pop" pairing per Paper guide).
- Palette tokens: `--color-ground #FFFFFF` · `--color-ink #0B0B0B` · `--color-red #D42127` (Bulan Bintang red) · `--color-red-deep #9E1218` · `--color-stripe #1A1A1A` (black stripe) · `--color-muted #6B6B6B` · `--color-line #E4E4E4` · `--color-tint #FBECEC` (red 6%).
- Type (all verified available): **Fraunces** (display, opsz, 600-800) for action titles; **Inter** (400/500/600) body; **JetBrains Mono** 500 for figures, axis labels, source lines.
- Scale: title 44px/48 · subtitle 22px/30 · body 18px/28 · caption/source 13px/18 mono · big-number 120px Fraunces.
- Motif: thin crescent-star geometry as section markers (SVG, 1px ink strokes), red rule under titles, black/white stripe as row divider on canvas — flag semantics without the flag.
- Slide anatomy (fixed lanes): section tag (mono, top-left) · action title (Fraunces) · 2-3 visual panels · takeaway box (tint) · footer: source line (mono) + slide number.

## Canvas geometry
- Artboard 1920×1080. Row = section. Gap 120px between slides, 480px between rows. Row header = text node "0N · SECTION NAME" at row start (x = -600).
- Artboard naming: `S{row:02}-{n:02} {short title}` (e.g. `S04-03 Ports & airports`).
- Pages: `Intro Deck` (core), `M1 Sector Playbooks`, `M2 Peer Case Studies`, `M3 Gap Register`.

