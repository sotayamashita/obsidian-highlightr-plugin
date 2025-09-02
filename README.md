# Highlightr Plugin (Community Fork)

> A simple, intuitive text highlighting plugin for Obsidian with a beautiful color palette.

This is a community-maintained fork of [Chetachi's Highlightr-Plugin](https://github.com/chetachiezikeuzor/Highlightr-Plugin), providing continued compatibility and improvements for modern Obsidian versions.

## ✨ Features

- **Quick Highlighting** - Select text and highlight with your chosen color instantly
- **Context Menu Integration** - Right-click to highlight or remove highlights
- **Command Palette Support** - Access all highlighting functions via hotkeys
- **Customizable Palette** - Choose your favorite colors and styles
- **Theme-Friendly** - Works seamlessly with light and dark themes
- **Two Modes** - Use inline CSS for portability or CSS classes for consistency

## 📦 Installation

### Manual Installation

Since this fork is not yet in the community plugin store, please install manually:

1. Download the latest release from the [Releases page](https://github.com/yourusername/obsidian-highlightr-plugin/releases)
2. Extract the files to your vault's plugins folder: `VaultFolder/.obsidian/plugins/obsidian-highlightr-plugin/`
3. Reload Obsidian
4. Enable the plugin in Settings → Community plugins

### Build from Source

1. Clone the repository and install dependencies:

```bash
npm i
```

2. Build the plugin:

```bash
npm run build
```

3. Copy to your Obsidian plugins folder:

**macOS/Linux:**
```bash
PLUGIN_DEST="$HOME/Library/Application Support/obsidian/YourVault/.obsidian/plugins/obsidian-highlightr-plugin" npm run build
```

**Windows:**
```bash
set PLUGIN_DEST="%APPDATA%\obsidian\YourVault\.obsidian\plugins\obsidian-highlightr-plugin"
npm run build
```

### Development Mode

For active development with hot reload:

```bash
PLUGIN_DEST="/path/to/Vault/.obsidian/plugins/obsidian-highlightr-plugin" npm run dev
```

> **Note:** Build outputs (`main.js`, `styles.css`) are generated at the repository root. When `PLUGIN_DEST` is set, the build automatically copies all necessary files to your vault.

## 🎨 Usage

### Basic Highlighting

1. **Select text** you want to highlight
2. **Right-click** and choose "Highlight" from the context menu
3. **Pick a color** from the palette
4. Your text is now highlighted!

### Removing Highlights

- **Option 1:** Select highlighted text → Right-click → "Remove Highlight"
- **Option 2:** Use the command palette: `Highlightr: Remove highlight`

### Keyboard Shortcuts

You can set custom hotkeys for:
- Open highlight palette
- Remove highlight
- Apply specific colors directly

### Settings

- **Highlight Method:** Choose between inline CSS (portable) or CSS classes (consistent)
- **Color Customization:** Add, remove, or modify highlight colors
- **Default Behavior:** Set your preferred highlighting workflow

## 🛠️ Development

### Tech Stack

- **Language:** TypeScript (ES6+)
- **Build Tool:** Rollup
- **Framework:** Obsidian API
- **Styling:** CSS with theme variables

### Code Style

- 2-space indentation
- Double quotes for strings
- Semicolons required
- No trailing commas
- Base imports from `src/`

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test thoroughly in Obsidian
5. Commit with descriptive messages
6. Push and create a Pull Request

### Commit Message Format

```
type: description

Examples:
- added: context menu default highlighter option
- fixed: color picker not closing on mobile
- updated: dependencies to latest versions
- docs: improved installation instructions
```

### What We Accept

- ✅ Bug fixes
- ✅ Performance improvements
- ✅ Compatibility updates
- ✅ Small feature enhancements
- ✅ Documentation improvements

### Testing

Before submitting:
1. Test on both desktop and mobile Obsidian
2. Verify with light and dark themes
3. Check for console errors
4. Include screenshots/GIFs for UI changes

## 💝 Support

This fork does not accept donations. If you wish to support the original author, please visit the [original repository](https://github.com/chetachiezikeuzor/Highlightr-Plugin).

If you find this fork helpful:
- ⭐ Star the repository
- 🐛 Report issues
- 🔀 Submit pull requests
- 📢 Share with others who might benefit

## 📄 License

[MPL-2.0 License](LICENSE)

## 🙏 Credits

- **Original Author:** [Chetachi](https://github.com/chetachiezikeuzor) - Creator of the original Highlightr-Plugin
- **Community Contributors:** Everyone who has helped maintain and improve this fork

---

<div align="center">
  <sub>This is a community-maintained fork to keep Highlightr working with current Obsidian versions.</sub><br>
  <sub>We deeply respect and credit the original author for their excellent work.</sub>
</div>
