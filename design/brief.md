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


## Design System page (Paper pageId 5-0) — built 30 Aug 2026
- Row 0: DS-01 Brand foundations · DS-02 Colour · DS-03 Typography · DS-04 Grid and spacing · DS-05 Data visualisation · DS-06 Imagery · DS-07 Voice and writing
- Row 1: DS-10 Slide components · DS-11 Web components (1440, nav/hero/stat strip/cards/footer)
- Row 2: T-01 Slide master (content) `1P-0` · T-02 Section divider `7E2-0`
- Tokens added for web: breakpoints 640/960/1280/1440, containers prose 720 / web 1200 / slide 1728, web type h1 56/60, h2 36, body 17/27, radius pill, spacing 2xl 96, section 128.
- Master Deck page (1-0) holds slides only: cover + 73 content slides + 12 section dividers (S0N-00 at x = −3000 of each row).
