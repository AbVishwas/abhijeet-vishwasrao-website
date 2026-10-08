# Website to-do

Deferred from the build sessions of 2026-10-06/07. The site is live at
https://abvishwas.github.io/abhijeet-vishwasrao-website/ ; edit here, push, then bump the pointer in writing-room.

## Inputs needed from A.V. for the next pass

- [ ] Pictures for the timeline, each with the entry it belongs to (landscape about 3:2 or 2:1; I resize and compress)
- [ ] Which figure-less entries should get a figure: Prometheus, GTC, UMich, NVIDIA grant, KTH, CEMEF, Polytechnique, Zeus, JFM, NAL, DIAT, Pune
- [ ] Extra details per entry, or new entries with a date
- [ ] Header band: keep the cylinder wake render, or another one
- [ ] Logo chips in the timeline: yes or no; if yes, the logo files (official brand downloads)
- [ ] Headshot or illustration (none in v1 by choice)
- [ ] Accent colour (teal now), intro length, names of the four research themes on the Research page
- [ ] Address: keep the project URL, rename the repo to abvishwas.github.io for a root address, or a custom domain

## Visitor counter / analytics (A.V., 2026-10-07)

GitHub Pages is static, so counting needs a third-party service. Options, in the order I would consider them:
- [ ] GoatCounter (free for personal sites, one script tag, no cookies, GDPR-friendly; dashboard can be public, and it
      offers a visible counter widget for the page). Needs an account at goatcounter.com.
- [ ] Cloudflare Web Analytics (free, one script tag, no cookies; dashboard only, no visible counter). Needs a Cloudflare account.
- [ ] Visible "hit counter" badges from free APIs (hits.sh, counterapi): zero setup but unreliable and easily inflated; only
      if a visible number on the page matters more than accuracy.
- [ ] Decide: visible counter on the page, private dashboard, or both. Then add the snippet to all four pages (bump ?v=).

## Content sync

- [ ] Keep the intro, timeline.json and the pages in step with writing-room/personal/curriculum-vitae/master.md
  (team sizes, Diff-SPORT 57% result, Argonne wording, grant hours are on the CVs but not yet in timeline.json)
- [ ] "Beyond research" section (slot in the sidebar, empty by choice)
- [ ] Optional: generate timeline.json and the publication list from master.md with a small script
