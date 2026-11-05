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

// "Everything, in motion" — the work grid. k: reel | long | motion | note
export const WORK = [
  { k: 'reel', title: 'reel 01', sub: 'product teaser · [client]', dur: '0:28', th: 'th1', glyph: '01' },
  { k: 'reel', title: 'reel 02', sub: 'creator intro · [client]', dur: '0:41', th: 'th3', glyph: '02' },
  { k: 'long', title: 'youtube 01', sub: 'talking head + b-roll · [channel]', dur: '14:22', th: 'th6', glyph: 'yt' },
  { k: 'note', title: '[x]+ more reels live on my instagram', sub: 'open instagram ↗' },
  { k: 'motion', title: 'motion 01', sub: 'kinetic type · [brand]', dur: '0:15', th: 'th4', glyph: 'mo' },
  { k: 'reel', title: 'reel 03', sub: 'event recap · [client]', dur: '0:33', th: 'th2', glyph: '03' },
  { k: 'reel', title: 'reel 04', sub: 'podcast clip · [show]', dur: '0:52', th: 'th5', glyph: '04' },
  { k: 'note', title: 'currently cutting something big. dropping soon.', sub: 'get notified →' },
];

export const WORK_LABELS = { reel: 'reel', long: 'long-form', motion: 'motion', note: 'note' };

export const WORK_TABS = [['all', 'all'], ['reel', 'reels'], ['long', 'long-form'], ['motion', 'motion']];

// Sections watched for scroll-in animations (must match data-io on each section).
export const SECTIONS = ['hero', 'bag', 'proud', 'work', 'words', 'contact', 'foot'];
