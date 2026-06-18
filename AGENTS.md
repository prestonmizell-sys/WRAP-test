# AGENTS.md

## Cursor Cloud specific instructions

This repository (`WRAP-test`) is a **zero-dependency static website**: a responsive news-story landing page built with plain `index.html`, `styles.css`, and vanilla `script.js`. There is no package manager, no build step, no automated tests, and no lint config.

### Running the app (dev)
Serve the repo root with any static file server and open the page in a browser:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

(Per `README.md`, you can also open `index.html` directly in a browser.)

### Notes / gotchas
- All "Latest stories" and "Videos" content is rendered dynamically at load time from hardcoded arrays in `script.js`. If those sections appear empty, the JS failed to execute — check the browser console.
- Google Fonts are loaded from a CDN; without internet the page still works but falls back to system fonts.
- There is no lint, test, or build command for this repo. The only verification is serving the page and confirming stories/videos render.
