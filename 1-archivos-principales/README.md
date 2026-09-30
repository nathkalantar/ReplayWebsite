# REPLAY — The European Game Design Masters

Static redesign of [replaymasters.eu](https://www.replaymasters.eu/). No build step: plain HTML, CSS and JS.

## Publish with GitHub Pages
1. Create a repository and upload the contents of this folder (keep `index.html` at the root).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site will be live at `https://<user>.github.io/<repo>/`.

## Structure
- `index.html` and one `.html` per section (The Masters, universities, People, Curriculum, Admissions, Games, FAQ, Contact).
- `site.css` / `site.js` — shared styles, header, menu and footer.
- `data-people.js`, `data-games.js` — content for People and Games.
- `img/` — photos; `img-map.js` maps original image paths to local files.

Fonts (Bungee, Inter, Space Mono) load from Google Fonts. Game screenshots in the gallery and YouTube videos load from their original hosts.
