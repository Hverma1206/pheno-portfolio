// What's in my bag — app dock + detail card
// Ported from the design canvas (05 — Diary × Edit Bay).
import { Fragment } from 'react';

export default function Bag({ v }) {
  return (
    <>
<section id="bag" data-io="bag" style={{ position: "relative", padding: "130px 0 120px" }}>
<div className="wrap">
<div className="rv" data-io style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "56px" }}>
<div><p className="sm kicker">{"page 02 — the stack"}</p><h2 className="fr h2">{"what's in "}<i style={{ color: "#a78bfa" }}>{"my bag."}</i></h2></div>
<p className="kl doodle" style={{ margin: "0", fontSize: "26px", color: "#c4b5fd", transform: "rotate(-3deg)" }}>{"(the essentials. no gatekeeping.)"}</p>
</div>
<div className="dockpanel rv" data-io>
<div className="dock">
<button className={`app ${v.bag.pr.on}`} onClick={v.bag.pr.pick} onMouseEnter={v.bag.pr.pick} aria-pressed={v.bag.pr.pressed}><span className="tip kl">{"every single day"}</span><span className="icon tn1"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M8.5 7.8 20 16"></path><path d="M8.5 16.2 20 8"></path></svg></span><span className="nm">{"Premiere Pro"}</span><span className="dot" aria-hidden="true"></span></button>
<button className={`app ${v.bag.ae.on}`} onClick={v.bag.ae.pick} onMouseEnter={v.bag.ae.pick} aria-pressed={v.bag.ae.pressed}><span className="tip kl">{"for the fancy bits"}</span><span className="icon tn2"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"></path><circle cx="12" cy="12" r="1.6"></circle></svg></span><span className="nm">{"After Effects"}</span><span className="dot" aria-hidden="true"></span></button>
<button className={`app ${v.bag.dv.on}`} onClick={v.bag.dv.pick} onMouseEnter={v.bag.dv.pick} aria-pressed={v.bag.dv.pressed}><span className="tip kl">{"where the mood happens"}</span><span className="icon tn3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8.5" r="4.5"></circle><circle cx="8.3" cy="15" r="4.5"></circle><circle cx="15.7" cy="15" r="4.5"></circle></svg></span><span className="nm">{"DaVinci Resolve"}</span><span className="dot" aria-hidden="true"></span></button>
<button className={`app ${v.bag.au.on}`} onClick={v.bag.au.pick} onMouseEnter={v.bag.au.pick} aria-pressed={v.bag.au.pressed}><span className="tip kl">{"clean audio = respect"}</span><span className="icon tn4"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h1.5M6.5 9v6M10 5v14M13.5 8v8M17 10.5v3M20.5 12H21"></path></svg></span><span className="nm">{"Audition"}</span><span className="dot" aria-hidden="true"></span></button>
<button className={`app ${v.bag.ps.on}`} onClick={v.bag.ps.pick} onMouseEnter={v.bag.ps.pick} aria-pressed={v.bag.ps.pressed}><span className="tip kl">{"thumbnails that get clicked"}</span><span className="icon tn5"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2.5"></rect><circle cx="9" cy="10" r="1.8"></circle><path d="M21 16l-5-5-9 8.5"></path></svg></span><span className="nm">{"Photoshop"}</span><span className="dot" aria-hidden="true"></span></button>
<button className={`app ${v.bag.bl.on}`} onClick={v.bag.bl.pick} onMouseEnter={v.bag.bl.pick} aria-pressed={v.bag.bl.pressed}><span className="tip kl">{"3d, slowly but surely"}</span><span className="icon tn6"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"></path><path d="M12 12l8-4.5M12 12v9M12 12 4 7.5"></path></svg></span><span className="nm">{"Blender"}</span><span className="dot" aria-hidden="true"></span></button>
<button className={`app ${v.bag.cc.on}`} onClick={v.bag.cc.pick} onMouseEnter={v.bag.cc.pick} aria-pressed={v.bag.cc.pressed}><span className="tip kl">{"reels on the train"}</span><span className="icon tn7"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"></rect><path d="M10.5 9.5v5l4-2.5z"></path></svg></span><span className="nm">{"CapCut"}</span><span className="dot" aria-hidden="true"></span></button>
<button className={`app ${v.bag.fg.on}`} onClick={v.bag.fg.pick} onMouseEnter={v.bag.fg.pick} aria-pressed={v.bag.fg.pressed}><span className="tip kl">{"plan before i cut"}</span><span className="icon tn8"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20l7-7 3 3-7 7z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"></path><circle cx="11" cy="11" r="2"></circle></svg></span><span className="nm">{"Figma"}</span><span className="dot" aria-hidden="true"></span></button>
</div>
<div className="detail" aria-live="polite">
<div>
<p className="sm" style={{ margin: "0", fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#a9a1b8" }}>{v.sel.idx}{" / 08 — in the bag"}</p>
<p className="fr" style={{ margin: "10px 0 0", fontSize: "clamp(40px, 4.6vw, 64px)", lineHeight: "1", fontStyle: "italic" }}>{v.sel.name}</p>
</div>
<div>
<p className="kl" style={{ margin: "0", fontSize: "24px", lineHeight: "1.4", color: "#d6d0e2" }}>{v.sel.line}</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>{(v.sel.uses || []).map((u, $index) => (<Fragment key={$index}><span className="uchip">{u.label}</span></Fragment>))}</div>
</div>
</div>
</div>
<div className="rv" data-io style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px", marginTop: "56px" }}>
<span className="kl" style={{ fontSize: "24px", color: "#a9a1b8" }}>{"people i've cut for:"}</span>
<span className="ppl kl">{"[creator]"}<svg aria-hidden="true" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2"><path d="M60 3 C 92 2, 99 14, 97 22 C 94 36, 40 39, 14 34 C 0 30, 1 12, 20 6 C 34 2, 60 2, 72 5"></path></svg></span>
<span className="ppl kl">{"[brand]"}<svg aria-hidden="true" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2"><path d="M40 4 C 80 0, 100 12, 96 24 C 92 38, 30 40, 10 30 C -2 22, 6 8, 30 5"></path></svg></span>
<span className="ppl kl">{"[channel]"}<svg aria-hidden="true" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2"><path d="M55 2 C 90 4, 100 16, 95 26 C 88 38, 34 38, 12 32 C -4 26, 4 8, 26 4 C 40 2, 56 3, 66 4"></path></svg></span>
<span className="ppl kl">{"[studio]"}<svg aria-hidden="true" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2"><path d="M48 3 C 86 2, 100 14, 96 24 C 92 37, 36 40, 12 33 C -2 28, 2 10, 24 5"></path></svg></span>
</div>
</div>
</section>
    </>
  );
}
