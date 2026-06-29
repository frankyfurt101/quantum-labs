# ⬡ Quantum Labs

The portfolio of **Franky Fernandez** (`frankyfurt101`) — full-stack & systems engineering,
AI agent stacks, homelab infrastructure, hardware, and console homebrew.

A single-page, dependency-free, terminal-themed site. No build step.

## Live

`https://frankyfurt101.github.io/quantum-labs/` *(once GitHub Pages is enabled)*

## Run locally

```bash
# any static server works; from the repo root:
python3 -m http.server 8080
# open http://localhost:8080
```

(Opening `index.html` directly via `file://` also works — project data is embedded JS, not fetched.)

## Edit content

Everything renders from one file: [`assets/data.js`](assets/data.js).

| Want to… | Edit in `data.js` |
|---|---|
| Add / change a project | `QL.projects[]` |
| Tweak language bars | `QL.languages[]` |
| Edit skill chips | `QL.skills[]` |
| Console homebrew cards | `QL.homebrew[]` |
| Engineering log | `QL.engineering[]` |
| Name / bio / links | `QL.profile` |

No frameworks, no secrets, no private network details — safe to host publicly.

## Structure

```
index.html        markup + section shells
assets/style.css  terminal / CRT theme
assets/app.js     boot sequence, typing, render, filter, scroll-reveal
assets/data.js    ← all content lives here
.nojekyll         tell GitHub Pages to serve files as-is
```

## Deploy on GitHub Pages

1. Push to `github.com/frankyfurt101/quantum-labs`.
2. **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
3. Live in ~1 minute at the URL above.
