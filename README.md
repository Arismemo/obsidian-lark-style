# Lark-Style Theme for Obsidian

An Obsidian theme inspired by the visual design language of Lark (飞书) documents — clean, modern, and quiet. Built on top of [Semi Design](https://semi.design/) tokens (the open-source design system behind Lark's web UI) for color accuracy.

> ⚠️ **Not affiliated with Lark / Feishu / ByteDance.** This is an independent community theme that imitates the visual style. All trademarks belong to their respective owners.

## ✨ Features

- **Light + Dark mode** with accurate Lark color palette (`#1F2329` text, `#1456F0`/`#54A9FF` accent, Semi Design neutrals)
- **Typography measured from live Lark docs**: 16px body / 26px line height, system font stack (-apple-system / PingFang SC), 820px content width, 8px block spacing
- **File tree**: linear chevron indicators, single-color gray icons, translucent overlay hover/active, brand-blue selected state — matches Lark doc sidebar
- **Code blocks**: GitHub Primer syntax highlighting, consistent between Reading and Live Preview modes
- **Tables**: Lark header `#F5F6F7` + grid `#DEE0E3`, tight padding (8/12px), no zebra stripes
- **Callouts**: Lark highlight-block style (solid light background + lighter same-hue border, 8px radius, 16px padding, title stays body color, only the icon is tinted). All Obsidian callout types mapped, consistent in Reading and Live Preview
- **Quotes**: Lark quote — 2px gray left bar + secondary text color, no background
- **Lists**: nested ordered lists step `1.` → `a.` → `i.`
- **Lark text & background colors**: 7 text colors (`fc-*`) + 14 background colors (`hl-*` / `hl-*-strong`), see below
- **Headings**: Lark document scale (title 34 / H1 26 / H2 22 / H3 20 / H4 18), weight 500, -0.02em tracking; optional H1 bottom line
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
- Body font size (13–18px, default 16)
- Line height (1.4–1.9, default 1.625)
- Heading weight (400–700, default 500)
- Editor width (default 820px, takes effect with Obsidian's "Readable line length")
- Card layout mode (adds document-style margins)
- Always-underline links toggle

## 🖍 Lark text / background colors

```html
<span class="fc-red">red text</span>
<mark class="hl-blue">light blue background</mark>
<mark class="hl-orange-strong">strong orange background</mark>
```

Colors: `red` / `orange` / `yellow` / `green` / `blue` / `purple` / `grey`.

## 🗒 Changelog

### 1.1.0
- Typography re-aligned to measured Lark doc values: 16px / 1.625 body, 26/22/20/18 headings at weight 500, 34px doc title, 820px width, 8px paragraph spacing; Inter removed from font stack
- H1 bottom line is now off by default (Style Settings: "Show H1 Bottom Line")
- Callouts rebuilt as Lark highlight blocks; fixed `check` / `done` / `bug` etc. missing colors in Live Preview
- Quote, inline code, code block, table restyled to Lark values; quote now identical in Live Preview
- Added Lark 7 text colors + 14 background colors; nested ordered list markers
- Card mode shadow now applies in Live Preview too
- Unified brand blue (removed stray `#3370FF`), removed duplicated tab variables

## 📝 Credits

- Design tokens from [Semi Design](https://semi.design/) by ByteDance (MIT License)
- Code syntax colors from [GitHub Primer](https://primer.style/foundations/color/)
- Inspired by the visual style of Lark (飞书) documents

## 📄 License

MIT License — see [LICENSE](./LICENSE).
