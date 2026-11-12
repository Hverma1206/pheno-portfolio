// What's in my bag — one plain card per app: logo, name, a line, what it gets used for.

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
<ul className="tools" data-io>
{v.tools.map((t, i) => (
<li key={t.id} className="tool" style={{ "--c": t.color, "--d": `${i * 0.06}s` }}>
<div className="thead kl"><Logo id={t.id} /><span>{t.name}</span></div>
<p className="kl tline">{t.line}</p>
<p className="sm tuses">{t.uses}</p>
</li>
))}
</ul>
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
