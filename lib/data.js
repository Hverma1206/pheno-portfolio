// Content for the portfolio. Swap the [placeholders] with real details.

// "What's in my bag" — one logo per app, in this order.
// [id, name, line, uses, brand colour] — the section shows only the logo and name; line + uses are kept for later.
// Logos: Adobe apps are CSS letter badges (Bag.jsx); the rest are /public/tools/<id>.svg.
// The "What I do" card shows each app as a hand-drawn icon, /public/tools/sketch/<id>.svg — add one for a new app.
export const TOOLS = [
  ['bl', 'Blender', '3d, slowly but surely.', ['3d titles', 'product shots', 'still learning'], '#f5792a'],
  ['pr', 'Premiere Pro', 'my home base — every cut starts here.', ['reels', 'youtube edits', 'pacing + story'], '#ea77ff'],
  ['ae', 'After Effects', 'titles, transitions and the fancy bits.', ['motion graphics', 'kinetic type', 'vfx cleanup'], '#9999ff'],
  ['hou', 'Houdini', 'simulations, particles and the heavy fx.', ['fx sims', 'particles', 'procedural'], '#ff4713'],
  ['ps', 'Photoshop', 'thumbnails that actually get clicked.', ['thumbnails', 'stills', 'retouching'], '#31a8ff'],
  ['ma', 'Maya', 'where characters start to move.', ['3d animation', 'rigging', 'scenes'], '#37c5c0'],
  ['c4d', 'Cinema 4D', 'mograph and clean 3d motion.', ['mograph', '3d motion', 'product renders'], '#7aa2ff'],
];

// "Everything, in motion" — the work grid. k: reel | long | note
// Layout in the 'all' view (4 cols): rows alternate reel + wide / wide + reel, 4 rows total.
// Video source: yt (YouTube id), vimeo (Vimeo id), ig (Instagram reel id) or mp4 (a file in /public/reels). end = stop after N seconds.
// mp4s: compress first (see README), a raw export is 30x bigger than it needs to be.
// thumb overrides the cover image (YouTube covers are automatic; Instagram and mp4 have none, so give mp4 a thumb or it shows the th art).
export const WORK = [
  { k: 'reel', title: 'reel 01', sub: 'short-form edit · [client]', dur: '1:11', th: 'th1', glyph: '01', vimeo: '1028740549',
    thumb: 'https://i.vimeocdn.com/video/1948944196-340ff201e241ab12a90418cb56ae73b0a5b14824213f357ba41a41870f0758cd-d_640' },
  { k: 'long', title: 'the untold story of python', sub: 'codesource · youtube', dur: '9:25', th: 'th6', glyph: 'yt', wide: true, yt: 'DsYIdMmI5-Q' },
  { k: 'long', title: 'how to study anything with notebooklm', sub: 'james blue · youtube', dur: '9:18', th: 'th2', glyph: 'yt', wide: true, yt: 'TBKjg9ObgY4' },
  { k: 'reel', title: 'reel 02', sub: 'short-form edit · [client]', dur: '0:18', th: 'th3', glyph: '02', mp4: '/reels/reel-2.mp4', thumb: '/reels/reel-2-cover.jpg' },
  { k: 'reel', title: 'reel 03', sub: 'short-form edit · [client]', dur: '0:42', th: 'th5', glyph: '03', vimeo: '1033458193',
    thumb: 'https://i.vimeocdn.com/video/1954581195-bb155e280273f1a732a65d6b964fbd9cd6e5d89872a76377d0547746e7384d35-d_640' },
  // TODO: video 3 (-PFgaR7YhXI) has embedding disabled by its owner — put the replacement's id here.
  { k: 'long', title: '3d animation showreel', sub: 'fxpheno · youtube', dur: '0:23', th: 'th4', glyph: 'yt', wide: true, yt: '-oXDdLQO54Y' },
  { k: 'long', title: 'how to grow on instagram', sub: 'tube sensei · youtube', dur: '19:33', th: 'th5', glyph: 'yt', wide: true, yt: 'Veqx9UJmiLw' },
  { k: 'reel', title: 'reel 04', sub: 'short-form edit · [client]', dur: '0:21', th: 'th1', glyph: '04', mp4: '/reels/reel-4.mp4', thumb: '/reels/reel-4-cover.jpg' },
];

export const WORK_LABELS = { reel: 'reel', long: 'long-form', note: 'note' };

// Footer socials, in this order. Every "write to me" / "let's chat" button scrolls to them.
// url: the full link (https://… or mailto:you@…). Leave it '' and the card shows "link soon" instead of a dead link.
// handle: the small line under the name (e.g. @fxpheno or the email address).
export const SOCIALS = [
  { name: 'instagram', handle: '@fxpheno', url: 'https://www.instagram.com/fxpheno/' },
  { name: 'youtube', handle: '', url: '' },
  { name: 'x', handle: '@fxpheno', url: 'https://x.com/fxpheno' },
  { name: 'discord', handle: '', url: 'https://discord.com/users/798812488291713034' },
  { name: 'whatsapp', handle: '', url: 'https://wa.me/917505204181' },
  { name: 'email', handle: '', url: '' },
];
