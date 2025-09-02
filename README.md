# Highlightr Plugin (Community Fork)

This is a community-maintained fork of Chetachi’s Highlightr-Plugin
(original: https://github.com/chetachiezikeuzor/Highlightr-Plugin).
It brings a simple, theme-friendly highlight palette to Obsidian and
lets you add/remove colored highlights quickly.

## Why This Fork

- The original project appears inactive (last update ~3 years ago).
- Goal: keep compatibility with current Obsidian, apply small fixes, and improve DX with minimal maintenance.

We deeply respect the original author and their work. This fork is not a
replacement, but a lightweight maintenance effort so users can keep using the plugin today.

## Key Features

- Adds "Highlight / Remove" to the selection context menu
- Opens the highlight palette via command palette or a hotkey
- Manage colors in Settings (inline CSS or CSS class mode)

## Install / Build

This fork is not distributed via the community store. Please install manually.

1. Install dependencies

```
npm ci
```

2. Build (one-off)

```
npm run build
```

3. Copy to your Obsidian plugins folder (example: macOS)

```
PLUGIN_DEST="$HOME/Library/Application Support/obsidian/YourVault/.obsidian/plugins/highlightr-plugin" npm run build
```

Watch build during development:

```
PLUGIN_DEST="/path/to/Vault/.obsidian/plugins/highlightr-plugin" npm run dev
```

Build outputs are emitted at the repo root as `main.js` and `styles.css`.
When `PLUGIN_DEST` is set, the build also copies `manifest.json` and `styles.css` there.

## Dev Notes (Concise)

- Language: TypeScript (ESNext, target ES6, `noImplicitAny`)
- Formatting: 2-space indent, semicolons, double quotes, no trailing commas
- Build: Rollup (`npm run dev` watch / `npm run build` production)
- Outputs at repo root: `main.js`, `styles.css`
- Base-url imports: `src/...`

## Contributing

- We welcome small compatibility fixes, bug fixes, and maintenance PRs.
- Include a summary, rationale, reproducible steps, and screenshots/GIFs for UI changes.
- Commit style examples: `added: ...`, `fixed: ...`, `updated: ...`, `⏫ Bumped version: x.y.z`

## Donations

This fork does not accept donations. If you wish to support the original author,
please use the links published on the upstream repository:
https://github.com/chetachiezikeuzor/Highlightr-Plugin

If we ever accept donations for this fork, we will clearly state that funds
support “maintenance of this fork” and that there is no affiliation with the
original author.

## Credits / License

- Original author: Chetachi (Highlightr-Plugin)
- License: MPL-2.0 (see `LICENSE` in this repository)

Short note: This is a community-maintained fork to keep Highlightr working
with current Obsidian versions. Credits to the original author. We do not
accept donations for this fork.
