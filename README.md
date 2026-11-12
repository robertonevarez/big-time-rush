# Big Time Rush — Back to Big Time

A single-page album promo site built around the orange / cream / black
vinyl-and-torn-paper artwork: hero, release countdown, album + tracklist,
band, streaming links, tour dates, mailing list and footer.

No build step, no dependencies. Just static HTML, CSS and a small amount of JS.

## Preview

From this folder:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>. Opening `index.html` directly also works,
but a local server keeps the relative paths and fonts predictable.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page content and structure |
| `styles.css` | Design system, layout, torn-paper shapes, responsive rules |
| `script.js` | Countdown, mobile nav, scroll reveals, signup validation |
| `assets/` | Cover, vinyl disc, member portraits, mockup and poster |

## Artwork

- `assets/cover.jpg` fills the album sleeve.
- `assets/vinyl-disc.jpg` is the spinning disc in the hero.
- `assets/member-*.jpg` are the four band cards (crops from the album cover,
  upscaled locally to 880 × 1100 so they read sharp at the desktop four-up and
  tablet two-up layouts). They match the sleeve grade exactly.
- `assets/album-mockup.jpg` is used for `og:image` / social sharing.
- `assets/poster.jpg` is linked as a download in the footer.

The sleeve, disc and member cards all degrade gracefully to the original CSS
artwork if an image is missing. See `assets/README.md` for exact slots and
`PROMPTS.md` for the prompts used to generate or replace the art.

## Things to customize

### Release date / countdown

The countdown reads its target from the `data-date` attribute on
`#countdown` in `index.html`:

```html
<section class="countdown tear" id="countdown" data-date="2026-12-04T00:00:00">
```

Change it to any ISO date-time. When the date passes, the timer is replaced by
the “Out now” line.

### Streaming links

Every platform card in the “Listen on” section is an `<a href="#">`. Swap each
`#` for the real Spotify / Apple Music / YouTube / Amazon Music URL.
The “Pre-save the album” and “Get the vinyl” buttons can point to the same
links or to a store.

### Tracklist

Edit the two `<ol class="tracklist">` lists in the album section. Each row is:

```html
<li class="track">
  <span class="track-num">01</span>
  <span class="track-title">Back to Big Time</span>
  <span class="track-dur">3:24</span>
</li>
```

### Band photos

The four cards load `assets/member-kendall.jpg`, `member-james.jpg`,
`member-carlos.jpg` and `member-logan.jpg`. Replace any file (keep the name,
4:5 ratio) to update a card. They are upscaled crops from the album cover, so
they match the sleeve exactly and render sharp at both the four-up desktop
layout and the two-up tablet layout.

If you omit a file, the card falls back to the designed initial placeholder. A
one-off photo can also be supplied with the custom property:

```html
<div class="member-photo" style="--photo: url('assets/kendall.jpg')">
```

### Tour dates

Edit the `<li class="date-row">` items in the tour section. Use the
`date-sold` class instead of `date-link` for sold-out shows.

### Mailing list

The form validates the email and shows a success message locally. Connect it to
your provider (Mailchimp, Buttondown, ConvertKit…) by replacing the submit
handler in `script.js` with a `fetch()` to your endpoint.

## Design notes

- Display type: **Anton**; script accent: **Caveat Brush**; body: **Google Sans Flex**
  (loaded from Google Fonts as a variable font, weights 400–700).
  (loaded from Google Fonts).
- Palette: ink `#0a0a0a`, paper `#f2e8d8`, orange `#ff4a17`.
- Sections alternate between ink, paper and orange, separated by irregular
  `clip-path` “torn paper” edges.
- Film grain, halftone dots and spinning vinyl details are pure CSS/SVG, so the
  page stays lightweight.
- Motion respects `prefers-reduced-motion`; the mobile menu and countdown work
  without JavaScript (the timer shows zeros until it starts).

## Deploying

Drag the folder into Netlify, Vercel, Cloudflare Pages or GitHub Pages. There is
nothing to compile.

After deploying, change `og:image` and `twitter:image` in `index.html` to
absolute URLs (`https://your-domain/assets/album-mockup.jpg`) — social scrapers
do not resolve relative paths.

---

Unofficial concept site. “Big Time Rush” and related marks belong to their
respective owners.
