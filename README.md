# Jutge Dark Mode (Chromium Extension)

A tiny Chromium-based browser extension that applies a dark theme to `jutge.org`, with syntax highlighting for code blocks.

## Features

- Dark background on most page elements
- Code block highlighting using Highlight.js

## Files

- `manifest.json` - Chrome manifest v3
- `styles.css` - dark mode style overrides
- `init.js` - DOM tweaks + highlight.js initialization
- `highlight.min.js`, `cpp.min.js`, `dark.min.css` - syntax highlighter assets

## Supported browsers

- Chrome (desktop)
- Edge (Chromium)
- Brave
- Opera
- Any other Chromium-based browser with extension support

## Install (Development Mode)

1. Open Chrome (or Edge/Brave/etc.) and navigate to `chrome://extensions/` (or equivalent in other browsers).
2. Enable Developer mode (toggle in top-right).
3. Click `Load unpacked`.
4. Select this project folder (`jutge-dark-mode-chrome-ext`).
5. Confirm the extension appears and is enabled.
6. Visit `https://www.jutge.org/` (or any page under `*.jutge.org`) and verify dark theme is applied.

## Troubleshooting

- If not applying styles:
  - Ensure URL matches `*://*.jutge.org/*`.
  - Confirm extension is enabled in chrome://extensions.
  - Reload the page.

- If code highlighting is missing:
  - Open DevTools console for errors.

## Notes

- `styles.css` injects `!important` rule overrides to beat page defaults.
- You can adjust theme colors in `styles.css` by editing CSS variables in `:root`.
