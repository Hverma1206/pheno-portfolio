// Everything, in motion — reels / videos grid
// Ported from the design canvas (05 — Diary × Edit Bay).
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Work({ v }) {
  // Only the clicked tile loads its player; the rest stay as light cover images.
  // The clicked tile's video opens in a lightbox with sound and controls; the tiles themselves stay as cover images.
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);
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
<a href={it.href} className={`tile ${it.cls}`} data-io aria-label={it.aria} onClick={it.embed ? (e) => { e.preventDefault(); setOpen(it); } : undefined}>
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
{open ? (
<div className="lbox" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}>
<div className={`lbframe ${open.mp4 || open.cls.includes('reel') ? 'is-tall' : ''}`} onClick={(e) => e.stopPropagation()}>
<div className="lbscreen">
{open.mp4
  ? <video src={open.embed} title={open.title} autoPlay controls playsInline />
  : <iframe src={open.embed} title={open.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />}
</div>
<div className="lbcap"><span className="kl">{open.title}</span><button type="button" className="lbclose kl" onClick={() => setOpen(null)} autoFocus>close ✕</button></div>
</div>
</div>
) : null}
</section>
    </>
  );
}
