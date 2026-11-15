# Pheno — portfolio

Portfolio site for **Pheno (Shreyansh)** — video editor & motion designer.
Built with **Next.js (App Router)** + React. No UI library — all styling and animation is plain CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Deploys as-is on Vercel (import the repo, no settings needed).

## Structure

```
app/
  layout.jsx        fonts + metadata
  page.jsx          renders <Portfolio />
  globals.css       every style + animation (ported 1:1 from the design)
components/
  Portfolio.jsx     page state: scroll-in triggers, hero parallax, work filter, play/pause
  sections/         Nav, Hero, Bag, Featured, Work, Words, Contact, Footer
lib/
  data.js           tools list, work grid items, filter tabs  ← edit content here
```

## How the animations work

- **Scroll-in:** every section has `data-io="…"`. An IntersectionObserver adds `inview` the first time a
  section is ~12% on screen; until then its CSS animations are paused (`[data-io]:not(.inview) *`).
  So each section animates only when the visitor scrolls to it.
- **Hero:** “Pheno” letters rise in one by one, underline draws, subtitle reveals, headline inks in,
  highlighter + circle draw, the three reels slide up & fade in, then play looping clips. Mouse parallax on the reels.
- **What’s in my bag:** one row of app logos with their names. They rise in one by one and lift on hover.
- **What I do:** points appear one by one, each checkbox draws, then its tick.
- **Footer:** letters bounce in then wave, sparkle spins, playhead runs, social icons float.
- `prefers-reduced-motion` turns everything off.

## Adding a reel video

A raw export is ~30x bigger than the web needs. Compress it to 720p with fast-start, grab a cover frame,
then add `mp4: '/reels/reel-N.mp4', thumb: '/reels/reel-N-cover.jpg'` to its entry in `lib/data.js`:

```
ffmpeg -i "export.mp4" -vf scale=720:-2 -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart public/reels/reel-N.mp4
ffmpeg -ss 1 -i public/reels/reel-N.mp4 -frames:v 1 -vf scale=540:-2 -q:v 4 public/reels/reel-N-cover.jpg
```

Keep the full-size export in `media-originals/` (git-ignored).

## To fill in

Search for `[` — placeholders like `[you@yourmail.com]`, `[@handle]`, `[client]`, `[ your photo ]`.
The reel/video thumbnails are CSS placeholders: swap them for `<video autoPlay muted loop playsInline>` with the real clips.
