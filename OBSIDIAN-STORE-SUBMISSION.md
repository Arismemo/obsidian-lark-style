# Obsidian Theme Store Submission Guide

This file walks through submitting **Lark-Style** to the official Obsidian community themes store. Read it end-to-end before starting — most steps must be done by you (the repo owner) using your GitHub account. The assistant cannot submit the PR for you.

## Prerequisites checklist

Before submitting, verify all of these are in place:

- [x] Public GitHub repo: https://github.com/Arismemo/obsidian-lark-style
- [x] `manifest.json` with valid fields (name, version, minAppVersion, author, authorUrl)
- [x] `theme.css` at the repo root
- [x] `README.md` describing the theme
- [x] `LICENSE` (MIT)
- [ ] **Screenshots** (`lark-style-light.png` + `lark-style-dark.png`) — YOU NEED TO CAPTURE THESE
- [ ] Test install in a clean vault to verify

> ⚠️ The screenshots are mandatory for store approval. Capture them before opening the PR.

## Step 1 — Capture screenshots

1. Open Obsidian, install Lark-Style theme into a test vault (copy `manifest.json` + `theme.css` to `<test-vault>/.obsidian/themes/Lark-Style/`)
2. Open the file `demo-vault.md` from this repo in Obsidian (it showcases every style element)
3. Resize Obsidian window to ~1440×900
4. Set theme to **Light** → screenshot the whole window → save as `lark-style-light.png`
5. Set theme to **Dark** → screenshot → save as `lark-style-dark.png`
6. Put both PNGs in this repo folder
7. Commit and push:

```bash
cd ~/Desktop/obsidian-lark-style
git add *.png
git commit -m "Add screenshots for store submission"
git push
```

## Step 2 — Verify clean install

In a brand-new test vault (not your main one):

```bash
# Create test vault folder
mkdir -p ~/Desktop/test-vault/.obsidian/themes/Lark-Style
cp ~/Desktop/obsidian-lark-style/{manifest.json,theme.css} \
   ~/Desktop/test-vault/.obsidian/themes/Lark-Style/
```

Open Obsidian → "Open folder as vault" → select `~/Desktop/test-vault`. Then:
- Settings → Appearance → Theme → choose "Lark-Style"
- Toggle light/dark, browse the demo vault, check for visual bugs

If everything looks good, proceed. If you find bugs, fix them in `theme.css`, commit, push, re-test.

## Step 3 — Fork the official themes registry

1. Go to https://github.com/obsidianmd/obsidian-themes
2. Click **Fork** in the top right (creates `Arismemo/obsidian-themes` under your account)

## Step 4 — Add your theme to the registry

Clone your fork locally:

```bash
cd ~/Desktop
gh repo clone Arismemo/obsidian-themes
cd obsidian-themes
git checkout -b add-lark-style-theme
```

Open `community-themes.json` and add a new entry in alphabetical order (probably between "Larawin" and other "L" / "M" entries). Use this template:

```json
{
  "name": "Lark-Style",
  "author": "Arismemo",
  "repo": "Arismemo/obsidian-lark-style",
  "screenshot": "https://raw.githubusercontent.com/Arismemo/obsidian-lark-style/main/lark-style-light.png",
  "modes": ["light", "dark"],
  "branch": "main",
  "readme": "https://raw.githubusercontent.com/Arismemo/obsidian-lark-style/main/README.md",
  "minAppVersion": "1.5.0"
}
```

> ⚠️ Check existing entries in the JSON to match field formatting (trailing commas, indentation). The maintainers are strict about JSON validity.

Commit:

```bash
git add community-themes.json
git commit -m "Add Lark-Style theme"
git push -u origin add-lark-style-theme
```

## Step 5 — Open the Pull Request

1. Go to your fork on GitHub: `https://github.com/Arismemo/obsidian-themes`
2. Click **Compare & pull request** next to your branch
3. Base repository: `obsidianmd/obsidian-themes`, base: `main`
4. PR title: `Add Lark-Style theme`
5. PR description template:

```markdown
## Theme: Lark-Style

- **Repo:** https://github.com/Arismemo/obsidian-lark-style
- **Author:** @Arismemo
- **Modes:** Light + Dark

## Description

Lark-Style is an Obsidian theme inspired by the visual design language of Lark (飞书) documents — clean, modern, and quiet. Built on top of Semi Design tokens (the open-source design system behind Lark's web UI) for color accuracy.

Not affiliated with Lark / Feishu / ByteDance — this is an independent community theme that imitates the visual style. All trademarks belong to their respective owners.

## Features

- Light + Dark mode with accurate Lark color palette
- 14px base + PingFang SC + Inter typography
- Lark-style file tree (chevron indicators, gray icons, translucent hover)
- GitHub Primer code highlighting (Reading = Live Preview parity)
- Lark Banner-style callouts
- Tight Lark-style tables
- Style Settings integration

## Screenshots

![Light mode](https://raw.githubusercontent.com/Arismemo/obsidian-lark-style/main/lark-style-light.png)
![Dark mode](https://raw.githubusercontent.com/Arismemo/obsidian-lark-style/main/lark-style-dark.png)

## Checklist

- [x] Public repo with `manifest.json` and `theme.css`
- [x] Screenshots provided (light + dark)
- [x] Tested in a clean vault
- [x] No copyrighted assets (design tokens sourced from MIT-licensed Semi Design)
- [x] Theme name does not infringe trademarks (uses generic "Lark-Style" descriptor)
```

6. Submit and wait for review (typically 1–4 weeks)

## Step 6 — After approval

- The theme will appear in Obsidian → Settings → Community plugins → Browse community themes
- Update your README with a "Install from store" badge
- Tag a release on your repo (`gh release create v1.0.0`)

## Common rejection reasons (avoid these)

1. **Missing screenshots** — most common. Capture both modes.
2. **Invalid `manifest.json`** — `name` must match folder name (Lark-Style), all 5 fields required
3. **Copyright issues** — avoid using "Feishu" or "Lark" as the official brand in the theme name. "Lark-Style" is descriptive (like "Notion-inspired") and acceptable.
4. **Theme doesn't install** — test in a clean vault first
5. **JSON syntax errors** in `community-themes.json` — match existing entries' formatting
6. **Min App Version too low** — if you use CSS variables added in 1.5+, set `minAppVersion: "1.5.0"` or higher. We set `1.5.0`.

## Useful links

- Obsidian theme docs: https://docs.obsidian.md/Themes/App+themes
- Theme submission guide: https://docs.obsidian.md/Themes/Obsidian+Theme+submission+guidelines
- Official themes registry: https://github.com/obsidianmd/obsidian-themes
- Your repo: https://github.com/Arismemo/obsidian-lark-style
