# Repository Guidelines

## Project Structure & Module Organization
- `manifest.json`: Obsidian plugin metadata.
- `src/plugin/`: Entry point `main.ts` and plugin wiring.
- `src/ui/`, `src/settings/`, `src/utils/`, `src/icons/`: UI, settings, helpers, and icons.
- `assets/`: Images and promotional assets.
- Build outputs: `main.js` and `styles.css` at repo root; optional copy to a vault via `PLUGIN_DEST`.

## Build, Test, and Development Commands
- `npm run dev`: Bundles with Rollup in watch mode; emits `main.js` and `styles.css`.
- `npm run build`: One‑off production bundle.
- Copy to a vault while building: `PLUGIN_DEST="/path/to/Vault/.obsidian/plugins/highlightr-plugin" npm run dev` (or `npm run build`). This also copies `manifest.json` and `styles.css`.

## Coding Style & Naming Conventions
- Language: TypeScript (ESNext modules, target ES6, `noImplicitAny` enabled).
- Formatting: 2‑space indentation, semicolons, double quotes, trailing commas avoided.
- Naming: camelCase for files and symbols; keep directories lowercase. Prefer explicit types over `any`.
- Imports: use base‑url imports from `src/...` (configured in `tsconfig.json`).

## Testing Guidelines
- No automated tests yet. Verify manually in Obsidian:
  - Build, reload plugins, and confirm: context‑menu actions (Highlight/Remove), command palette items, settings tab behavior, and generated CSS classes/inline styles.
  - Example (macOS path): `PLUGIN_DEST="$HOME/Library/Application Support/obsidian/YourVault/.obsidian/plugins/highlightr-plugin" npm run dev`.

## Commit & Pull Request Guidelines
- Commit style (from history): `added: …`, `updated: …`, `fixed: …`, `removed: …`, `⏫ Bumped version: x.y.z`. Use imperative, concise subjects.
- PRs should include: summary, rationale, screenshots/GIFs for UI changes, reproduction/verification steps, and any related issue links. Note tested Obsidian version.

## Security & Configuration Tips
- Local `.env` is supported (via `dotenv`). Set `PLUGIN_DEST` there if convenient; avoid committing secrets. Consider adding `.env` to your local `.gitignore`.
- When bumping versions, keep `manifest.json` and `package.json` in sync and run `npm run build` before tagging/releasing.

