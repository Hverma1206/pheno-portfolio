// What's in my bag — an edit bay: every app is a clip on the timeline, the picked one plays in the monitor.
import { Fragment } from 'react';

// The four Adobe apps are drawn as letter badges in CSS (.adobe); the others are svg files.
const ADOBE = { pr: 'Pr', ae: 'Ae', ai: 'Ai', ps: 'Ps' };
// Timeline tracks, top to bottom, and the ruler's stages (6 of the 24 columns each). Clip positions live in lib/data.js.
const TRACKS = ['3d', 'motion', 'gfx', 'cut'];
const STAGES = ['brief', 'rough cut', 'motion + 3d', 'export'];

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
<div className="bay rv" data-io style={{ "--c": v.sel.color }}>
<div className="baybar sm"><span className="baydots" aria-hidden="true"><i></i><i></i><i></i></span><span>{"my_bag_final_FINAL_v"}{v.tools.length}{".prproj"}</span></div>
<div className="baybody">
<div className="baytop">
<div className="mon">
<span className="pcorner" aria-hidden="true" style={{ left: "14px", top: "14px", borderWidth: "2px 0 0 2px" }}></span>
<span className="pcorner" aria-hidden="true" style={{ right: "14px", top: "14px", borderWidth: "2px 2px 0 0" }}></span>
<span className="pcorner" aria-hidden="true" style={{ left: "14px", bottom: "14px", borderWidth: "0 0 2px 2px" }}></span>
<span className="pcorner" aria-hidden="true" style={{ right: "14px", bottom: "14px", borderWidth: "0 2px 2px 0" }}></span>
<span className="montag sm" aria-hidden="true">{"program"}</span>
<span className="bagswap" key={v.sel.id}><Logo id={v.sel.id} /></span>
</div>
<div aria-live="polite">
<div className="bagswap" key={v.sel.id}>
<p className="sm kicker" style={{ margin: "0" }}>{v.sel.idx}{" / "}{v.sel.total}{" — in the bag"}</p>
<p className="nr bagname"><span className="bhl">{v.sel.name}</span></p>
<p className="kl bagline">{v.sel.line}</p>
<div className="chips">{(v.sel.uses || []).map((u, $index) => (<Fragment key={$index}><span className="uchip">{u.label}</span></Fragment>))}</div>
</div>
</div>
</div>
<div className="tl" style={{ "--ph": v.sel.at[1] }}>
{STAGES.map((s, i) => (<span key={s} className="tstage sm" style={{ gridColumn: `${2 + i * 6} / span 6` }}>{s}</span>))}
{TRACKS.map((t, i) => (
<Fragment key={t}><span className="tname sm" style={{ gridRow: i + 2 }}>{t}</span><span className="tlane" aria-hidden="true" style={{ gridRow: i + 2 }}></span></Fragment>
))}
{v.tools.map((t) => (
<button key={t.id} className={`clip kl ${t.on}`} style={{ "--c": t.color, "--d": `${t.at[1] * 0.03}s`, gridRow: t.at[0] + 1, gridColumn: `${t.at[1] + 1} / span ${t.at[2]}` }} onClick={t.pick} onMouseEnter={t.pick} aria-pressed={t.pressed} aria-label={t.name}><Logo id={t.id} /><span className="cn">{t.name}</span></button>
))}
<span className="phead" aria-hidden="true"></span>
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
