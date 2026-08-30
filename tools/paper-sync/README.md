# paper-sync

Keeps `content/slides/` in sync with the Paper.design file
`01M18KDSJEN0TCH6K0JPSPVCA8` (page "Master Deck"). Paper has no CLI, so both
directions are driven from a Claude Code session with the Paper MCP; this
package makes the file side deterministic.

## Paper → site

1. In a Claude session, for each artboard run
   `mcp__paper__get_jsx({ fileId, nodeId, format: "inline-styles" })` and save
   the result as `raw/<nn>-<slug>.jsx`:

   ```jsx
   // paper: <nodeId>
   // name: <artboard name>
   export default function Slide() {
     return ( ...jsx from get_jsx... );
   }
   ```

2. `bun run sync` (root) renders every raw file with React, rewrites
   `paper-asset:///…/img/x.png` → `/img/x.png`, extracts title / section /
   source line / images, and writes `content/slides/<id>.html` + `.json`.
   Add `-- --init-master` to regenerate `content/master.json` in file order.

## Site → Paper

Edit `content/slides/<id>.html` (or the raw JSX), then in a Claude session
call `mcp__paper__write_html({ fileId, targetNodeId, mode: "replace", html })`
on the matching artboard child (Body / Title block). Node ids for each slide
are in `docs/design/agent-brief.md`; the artboard id is in the slide's
`paperNodeId`.
