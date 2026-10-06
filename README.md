# abhijeet-vishwasrao-website

Personal website, served by GitHub Pages from `main` (root). Plain HTML, CSS and a little JavaScript, no build step.

- `index.html` home: intro card over a header band, then the scroll-revealed timeline built from `data/timeline.json`
- `research.html`, `publications.html`, `talks.html`: the themed shelves, the full publication list, talks / honors / news
- `css/style.css` one stylesheet; dark theme is the default, light via the toggle (`data-theme`, remembered in localStorage)
- `js/site.js` theme toggle, timeline rendering and IntersectionObserver reveal (respects reduced motion; degrades to static)
- `assets/img/` web-sized figures from my papers; `assets/cv/` a copy of the one-page CV from writing-room

Linked into `writing-room` as the submodule `personal/website/`: edit, commit and push here first, then bump the
pointer in writing-room (see writing-room's README, section "Submodules"). Content facts come from
`writing-room/personal/curriculum-vitae/master.md`; when that changes, update `data/timeline.json` and the pages.
