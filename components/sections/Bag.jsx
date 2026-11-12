// What's in my bag — spotlight on the picked app + round app dock
// Ported from the design canvas (05 — Diary × Edit Bay).
import { Fragment } from 'react';

// The four Adobe apps are drawn as letter badges in CSS (.adobe); the others are svg files.
const ADOBE = { pr: 'Pr', ae: 'Ae', ai: 'Ai', ps: 'Ps' };

function Logo({ id }) {
  return (
    <span className="logo">
      {ADOBE[id] ? <span className="adobe">{ADOBE[id]}</span> : <img src={`/tools/${id}.svg`} alt="" />}
    </span>
  );
}

export default function Bag({ v }) {
  return (
    <>
<section id="bag" data-io="bag" style={{ position: "relative", padding: "130px 0 120px" }}>
<div className="wrap">
<div className="rv" data-io style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "56px" }}>
<div><p className="sm kicker">{"page 02 — the stack"}</p><h2 className="fr h2">{"what's in "}<i className="nr" style={{ color: "#a78bfa" }}>{"my bag."}</i></h2></div>
<p className="kl doodle" style={{ margin: "0", fontSize: "26px", color: "#c4b5fd", transform: "rotate(-3deg)" }}>{"(the essentials. no gatekeeping.)"}</p>
</div>
<div className="dockpanel rv" data-io style={{ "--c": v.sel.color }}>
<div className="bagstage" aria-hidden="true">
<span className="orbit o1"></span>
<span className="orbit o2"></span>
<span className="bagbig" key={v.sel.id}><Logo id={v.sel.id} /></span>
</div>
<div className="baginfo">
<div className="detail" aria-live="polite">
<div className="bagswap" key={v.sel.id}>
<p className="sm" style={{ margin: "0", fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#a9a1b8" }}>{v.sel.idx}{" / "}{v.sel.total}{" — in the bag"}</p>
<p className="nr bagname">{v.sel.name}</p>
<p className="kl" style={{ margin: "18px 0 0", fontSize: "24px", lineHeight: "1.4", color: "#d6d0e2" }}>{v.sel.line}</p>
<div className="chips">{(v.sel.uses || []).map((u, $index) => (<Fragment key={$index}><span className="uchip">{u.label}</span></Fragment>))}</div>
</div>
</div>
<div className="dock">
{v.tools.map((t) => (
<button key={t.id} className={`app ${t.on}`} style={{ "--c": t.color }} onClick={t.pick} onMouseEnter={t.pick} aria-pressed={t.pressed} aria-label={t.name}><span className="tip kl">{t.tip}</span><span className="icon"><Logo id={t.id} /></span></button>
))}
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
