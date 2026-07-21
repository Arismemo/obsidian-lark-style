# Lark-Style Theme for Obsidian

An Obsidian theme inspired by the visual design language of Lark (飞书) documents — clean, modern, and quiet. Built on top of [Semi Design](https://semi.design/) tokens (the open-source design system behind Lark's web UI) for color accuracy.

> ⚠️ **Not affiliated with Lark / Feishu / ByteDance.** This is an independent community theme that imitates the visual style. All trademarks belong to their respective owners.

## ✨ Features

- **Light + Dark mode** with accurate Lark color palette (`#1F2329` text, `#1456F0`/`#54A9FF` accent, Semi Design neutrals)
- **14px base font size** with PingFang SC + Inter font stack (matches Lark's desktop baseline)
- **File tree**: linear chevron indicators, single-color gray icons, translucent overlay hover/active, brand-blue selected state — matches Lark doc sidebar
- **Code blocks**: GitHub Primer syntax highlighting, consistent between Reading and Live Preview modes
- **Tables**: tight Lark-style padding (8/12px), unified header background, no zebra stripes
- **Callouts**: Lark Banner style (tinted background + 1px same-color border, 3px radius — not the Notion left-bar style)
- **Quotes**: neutral gray left border + transparent background (visually distinct from callouts)
- **Headings**: Lark document scale (H1=24/H2=20/H3=18/H4=16) with H1 anchor underline
- **Compact UI**: 6px scrollbars, semi-transparent tooltip/notice with high-contrast text
- **[Style Settings](https://github.com/mgmeyers/obsidian-style-settings) support**: tunable accent color, corner radius, font size, line height, card layout

## 📦 Installation

### From Obsidian Community Themes (pending review)
1. Open Settings → Community plugins → Browse community themes
2. Search "Lark-Style"
3. Install and enable

### Manual install (from GitHub release)
1. Download `manifest.json` and `theme.css` from the [latest release](https://github.com/Arismemo/obsidian-lark-style/releases)
2. In your vault, create folder `<vault>/.obsidian/themes/Lark-Style/`
3. Copy both files into that folder
4. In Obsidian: Settings → Appearance → Theme → select "Lark-Style"

### From source (for development)
```bash
git clone https://github.com/Arismemo/obsidian-lark-style.git
cd obsidian-lark-style
# symlink or copy theme.css + manifest.json into your vault's themes folder
```

## 🎨 Design tokens

The color palette is sourced directly from the official Semi Design theme package (`@douyinfe/semi-theme-default` v2.101.x) — the actual CSS variables used by Lark's web UI.

| Role | Light | Dark |
|---|---|---|
| Primary text | `#1F2329` | `#F9F9F9` |
| Secondary text | `#646A73` | `rgba(249,249,249,0.80)` |
| Muted text | `#8F959E` | `rgba(249,249,249,0.55)` |
| Accent (brand) | `#1456F0` | `#54A9FF` |
| Hover background | `rgba(46,50,56,0.09)` | `rgba(255,255,255,0.16)` |
| Selected background | `#E8F0FF` | `rgba(84,169,255,0.18)` |
| Border | `rgba(28,31,35,0.08)` | `rgba(255,255,255,0.08)` |

## 🔧 Configuration

This theme supports the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin. After installing it, go to **Settings → Style Settings → 🚀 Lark-Style Theme** to tune:

- Accent color (Lark brand blue / Semi primary blue / custom)
- Corner radius density (compact 3px / standard 6px / loose 8px)
- Body font size (13–17px)
- Line height (1.4–1.9)
- Card layout mode (adds document-style margins)
- Always-underline links toggle

## 📝 Credits

- Design tokens from [Semi Design](https://semi.design/) by ByteDance (MIT License)
- Code syntax colors from [GitHub Primer](https://primer.style/foundations/color/)
- Inspired by the visual style of Lark (飞书) documents

## 📄 License

MIT License — see [LICENSE](./LICENSE).
