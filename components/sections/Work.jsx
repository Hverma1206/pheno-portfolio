// Everything, in motion — reels / videos grid
// Ported from the design canvas (05 — Diary × Edit Bay).
import { Fragment, useState } from 'react';

export default function Work({ v }) {
  // Only the clicked tile loads its player; the rest stay as light cover images.
  const [open, setOpen] = useState('');
  return (
    <>
<section id="work" data-io="work" style={{ padding: "140px 0", borderBottom: "1px solid #2a2433" }}>
<div className="wrap">
<div className="rv" data-io style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "28px", marginBottom: "48px" }}>
<div>
<h2 className="serif h2">{"everything, "}<i style={{ color: "#a78bfa" }}>{"in motion."}</i></h2>
</div>
</div>
<div className="wgrid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "20px" }}>
{(v.items || []).map((it, $index) => (<Fragment key={$index}>
{/* a tile remounts when its player closes; once anything was opened, mark tiles seen up front so it can't stay hidden */}
{open === it.embed && it.embed ? (
<div className={`tile ${it.cls} is-open`}>
<iframe className="tplayer" src={it.embed} title={it.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
</div>
) : (
<a href={it.href} className={`tile ${it.cls}`} data-io data-seen={open ? '' : undefined} aria-label={it.aria} onClick={it.embed ? (e) => { e.preventDefault(); setOpen(it.embed); } : undefined}>
<span className={`th ${it.th}`}>{it.thumb ? <img src={it.thumb} alt="" loading="lazy" /> : null}</span>
{it.thumb ? null : <span className="glyph serif" aria-hidden="true">{it.glyph}</span>}
<span className="chip mono">{it.kind}</span>
{it.dur ? <span className="dur mono">{it.dur}</span> : null}
<span className="pb" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"></path></svg></span>
<span className="tinfo"><span className="serif" style={{ fontSize: "26px", lineHeight: "1" }}>{it.title}</span><span className="mono" style={{ fontSize: "12px", color: "#a39cb2" }}>{it.sub}</span></span>
<span className="notebody"><span className="hand" style={{ fontSize: "32px", lineHeight: "1.05", color: "#c4b5fd" }}>{it.title}</span><span className="mono" style={{ fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", color: "#ece8f4" }}>{it.sub}</span></span>
</a>
)}
</Fragment>))}
</div>
</div>
</section>
    </>
  );
}
