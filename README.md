# LoveHarmonica

A Chinese-language blues harmonica field guide, 12-month roadmap, curated free-course library and interactive practice studio.

**Live site:** https://lulgabc.github.io/LoveHarmonica/

## What's inside

- **基础知识** — 10 chapters: instrument, first notes, positions, bending/overbending, rhythm & tongue blocking, theory/improvisation, tone & amplification, gear & maintenance, history, glossary (89 terms).
- **12 个月路线图** — four phases, 48 weekly focus points, output tasks, 20 checkpoints with local progress saving, plus a 10-tune starter repertoire.
- **免费课程库** — 20 curated videos, 15 YouTube channels, 24 course/tab/reference/podcast entries, with free/paid/trial labels and Chinese-language resources.
- **大师名录** — 21 blues harmonica players with recommended albums and listening notes.
- **教材书单** — 16 method books, technique books, history/culture and lick collections.
- **乐句工坊** — 10 playable tab phrases with Web Audio playback.
- **练习室** — 12-bar jam machine, interactive harp map, 2nd-position key finder, metronome, 20-minute practice timer.

## Tech

- [Astro](https://astro.build/) static site
- GitHub Pages deployment via GitHub Actions
- Web Audio API for all interactive sound (no audio files, no tracking)
- System fonts only; no external font/CDN dependency
- YouTube thumbnails and links; video playback opens a privacy-enhanced `youtube-nocookie.com` embed

## Local development

Requires Node.js **22.23.4+** (Node 24 recommended; Astro 7 will refuse older versions).

```bash
npm install
npm run dev
```

Open http://localhost:4321/LoveHarmonica/

```bash
npm run build
npm run preview
npm run check
```

## Deployment

The workflow at `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages on every push to `main`.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The Astro config uses:

```js
site: "https://lulgabc.github.io",
base: "/LoveHarmonica",
```

If you fork the project under a different repository name, update both values in `astro.config.mjs`, `src/lib/site.ts`, `public/robots.txt` and the Open Graph image.

## Content principles

- Free resources first; paid courses are clearly marked with price/trial status.
- Every external course/video/book links to the original creator or publisher.
- No pirated PDFs, no re-uploaded full courses, no impersonation.
- Historical/recording facts are cross-checked where possible; uncertainties are omitted rather than invented.

## License

- Code: MIT — see [LICENSE](./LICENSE).
- Original text, diagrams and site content: CC BY-NC-SA 4.0 — see [CONTENT-LICENSE.md](./CONTENT-LICENSE.md).
- External videos, book covers, trademarks and recording information belong to their respective owners.

## Credits

This project is built on the public teaching work of Adam Gussow, Tomlin Leckie, Liam Ward, Ronnie Shellist, Luke Clebsch / Harmonica.com, David Barrett, Howard Levy, Jason Ricci, Filip Jers, 张晓松 and many others. Please support them by visiting their original pages.

If you find a broken link, outdated price, or factual error, please open an issue.
