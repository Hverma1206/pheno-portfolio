// Content for the portfolio. Swap the [placeholders] with real details.

// "What's in my bag" — the app dock.
export const TOOLS = [
  ['pr', 'Premiere Pro', 'my home base — every cut starts here.', ['reels', 'youtube edits', 'pacing + story']],
  ['ae', 'After Effects', 'titles, transitions and the fancy bits.', ['motion graphics', 'kinetic type', 'vfx cleanup']],
  ['dv', 'DaVinci Resolve', 'where the mood happens.', ['color grading', 'skin tones', 'looks']],
  ['au', 'Audition', 'clean audio = respect for the viewer.', ['noise cleanup', 'mixing', 'sfx']],
  ['ps', 'Photoshop', 'thumbnails that actually get clicked.', ['thumbnails', 'stills', 'retouching']],
  ['bl', 'Blender', '3d, slowly but surely.', ['3d titles', 'product shots', 'still learning']],
  ['cc', 'CapCut', 'quick reels, from anywhere.', ['on-the-go edits', 'captions', 'trends']],
  ['fg', 'Figma', 'plan before i cut.', ['storyboards', 'moodboards', 'layouts']],
];

// "Everything, in motion" — the work grid. k: reel | long | note
// Layout in the 'all' view (4 cols): rows alternate reel + wide / wide + reel, 4 rows total.
// Video source: yt (YouTube id), vimeo (Vimeo id) or ig (Instagram reel id). end = stop after N seconds.
// thumb overrides the cover image (YouTube covers are automatic; Instagram has none, so it shows the th art).
export const WORK = [
  { k: 'reel', title: 'reel 01', sub: 'short-form edit · [client]', dur: '1:11', th: 'th1', glyph: '01', vimeo: '1028740549',
    thumb: 'https://i.vimeocdn.com/video/1948944196-340ff201e241ab12a90418cb56ae73b0a5b14824213f357ba41a41870f0758cd-d_640' },
  { k: 'long', title: 'the untold story of python', sub: 'codesource · youtube', dur: '9:25', th: 'th6', glyph: 'yt', wide: true, yt: 'DsYIdMmI5-Q' },
  { k: 'long', title: 'how to study anything with notebooklm', sub: 'james blue · youtube', dur: '9:18', th: 'th2', glyph: 'yt', wide: true, yt: 'TBKjg9ObgY4' },
  { k: 'reel', title: 'reel 02', sub: 'short-form edit · [client]', dur: '', th: 'th3', glyph: '02', ig: 'De0rRmnhemc' },
  // TODO: reel 03 — add its vimeo / ig id.
  { k: 'reel', title: 'reel 03', sub: 'short-form edit · [client]', dur: '', th: 'th5', glyph: '03', ig: '' },
  // TODO: video 3 (-PFgaR7YhXI) has embedding disabled by its owner — put the replacement's id here.
  { k: 'long', title: '[video 3]', sub: '[channel] · youtube', dur: '', th: 'th4', glyph: 'yt', wide: true, yt: '' },
  { k: 'long', title: 'how to grow on instagram', sub: 'tube sensei · youtube', dur: '19:33', th: 'th5', glyph: 'yt', wide: true, yt: 'Veqx9UJmiLw' },
  // TODO: reel 04 — add its vimeo / ig id.
  { k: 'reel', title: 'reel 04', sub: 'short-form edit · [client]', dur: '', th: 'th1', glyph: '04', ig: '' },
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
