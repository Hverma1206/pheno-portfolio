// Everything, in motion — reels / videos grid
// Ported from the design canvas (05 — Diary × Edit Bay).
import { Fragment } from 'react';
import Image from 'next/image';

export default function Work({ v }) {
  return (
    <>
<section id="work" data-io="work" style={{ padding: "140px 0", borderBottom: "1px solid #2a2433" }}>
<div className="wrap">
<div className="rv" data-io style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "28px", marginBottom: "48px" }}>
<div>
<h2 className="serif h2">{"everything, "}<i className="nr" style={{ color: "#a78bfa" }}>{"in motion."}</i></h2>
</div>
</div>
<div className="wgrid" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "20px" }}>
{(v.items || []).map((it, $index) => (<Fragment key={$index}>
<a href={it.href} className={`tile ${it.cls}`} data-io aria-label={it.aria} onClick={it.embed ? (e) => { e.preventDefault(); v.play({ ...it, tall: it.mp4 || it.cls.includes('reel') }); } : undefined}>
<span className={`th ${it.th}`}>{it.thumb ? <Image src={it.thumb} alt="" fill sizes={it.sizes} /> : null}</span>
{it.thumb ? null : <span className="glyph serif" aria-hidden="true">{it.glyph}</span>}
<span className="chip mono">{it.kind}</span>
{it.dur ? <span className="dur mono">{it.dur}</span> : null}
<span className="pb" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"></path></svg></span>
<span className="tinfo"><span className="serif" style={{ fontSize: "26px", lineHeight: "1" }}>{it.title}</span><span className="mono" style={{ fontSize: "12px", color: "#a39cb2" }}>{it.sub}</span></span>
<span className="notebody"><span className="hand" style={{ fontSize: "32px", lineHeight: "1.05", color: "#c4b5fd" }}>{it.title}</span><span className="mono" style={{ fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", color: "#ece8f4" }}>{it.sub}</span></span>
</a>

</Fragment>))}
</div>
</div>
</section>
    </>
  );
}
