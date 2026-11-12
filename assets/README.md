# Artwork

Current files, already wired into the page:

| File | Used for |
| --- | --- |
| `cover.jpg` | Album sleeve (`index.html` → `.sleeve-img`) |
| `vinyl-disc.jpg` | Spinning hero disc (`.disc-img`, spins with the CSS animation) |
| `member-kendall.jpg` | Band card 1 — 4:5, 880 × 1100 |
| `member-james.jpg` | Band card 2 — 4:5, 880 × 1100 |
| `member-carlos.jpg` | Band card 3 — 4:5, 880 × 1100 |
| `member-logan.jpg` | Band card 4 — 4:5, 880 × 1100 |
| `album-mockup.jpg` | Social share / `og:image` |
| `poster.jpg` | Footer “Poster ↓” download |
| `band-group.jpg` | Spare wide group shot, not currently placed |

The four member portraits are crops from `cover.jpg` (now upscaled locally to
880 × 1100, 4:5) so they match the sleeve exactly and stay sharp at display
widths of ~250 px (desktop four-up) to ~380 px (tablet two-up). Replace any of
them with a higher-resolution portrait using the same filename — 4:5, ideally
800 × 1000 or larger.

See `../PROMPTS.md` for prompts if you want to regenerate the cover, disc or
portraits from scratch.

Keep JPEG quality high (90+). PNG is fine for the disc if you want a pure black
background to blend more cleanly.
