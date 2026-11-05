// What they said — testimonials
// Ported from the design canvas (05 — Diary × Edit Bay).
export default function Words({ v }) {
  return (
    <>
<section id="words" className={v.io.words} data-io="words" style={{ padding: "140px 0", borderBottom: "1px solid #2a2433" }}>
<div className="wrap">
<div className="rv" style={{ marginBottom: "64px" }}>
<p className="mono label">{"04 — words"}</p>
<h2 className="serif h2">{"what they said "}<i style={{ color: "#a78bfa" }}>{"(unprompted)."}</i></h2>
</div>
<div className="tgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "24px", alignItems: "start" }}>
<figure className="quote q1" style={{ margin: "0" }}>
<span className="serif" aria-hidden="true" style={{ position: "absolute", right: "24px", top: "4px", fontSize: "120px", lineHeight: "1", color: "#3b2d55" }}>{"“"}</span>
<blockquote className="serif" style={{ margin: "0", fontSize: "27px", lineHeight: "1.25", fontStyle: "italic" }}>{"[A real client line goes here — how the edit landed, how fast it came back, what changed after.]"}</blockquote>
<figcaption style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "28px" }}><span className="mono" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2a1f3d", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#c4b5fd" }}>{"01"}</span><span><span style={{ display: "block", fontWeight: "600" }}>{"[client name]"}</span><span className="mono" style={{ fontSize: "12px", color: "#8a839a" }}>{"[channel / brand]"}</span></span></figcaption>
</figure>
<figure className="quote q2" style={{ margin: "56px 0 0" }}>
<span className="serif" aria-hidden="true" style={{ position: "absolute", right: "24px", top: "4px", fontSize: "120px", lineHeight: "1", color: "#3b2d55" }}>{"“"}</span>
<blockquote className="serif" style={{ margin: "0", fontSize: "27px", lineHeight: "1.25", fontStyle: "italic" }}>{"[Second testimonial — keep it to one or two sentences so it reads at a glance.]"}</blockquote>
<figcaption style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "28px" }}><span className="mono" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2a1f3d", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#c4b5fd" }}>{"02"}</span><span><span style={{ display: "block", fontWeight: "600" }}>{"[client name]"}</span><span className="mono" style={{ fontSize: "12px", color: "#8a839a" }}>{"[channel / brand]"}</span></span></figcaption>
</figure>
<figure className="quote q3" style={{ margin: "18px 0 0" }}>
<span className="serif" aria-hidden="true" style={{ position: "absolute", right: "24px", top: "4px", fontSize: "120px", lineHeight: "1", color: "#3b2d55" }}>{"“"}</span>
<blockquote className="serif" style={{ margin: "0", fontSize: "27px", lineHeight: "1.25", fontStyle: "italic" }}>{"[Third testimonial — a result works best: views, retention, a repeat booking.]"}</blockquote>
<figcaption style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "28px" }}><span className="mono" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2a1f3d", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#c4b5fd" }}>{"03"}</span><span><span style={{ display: "block", fontWeight: "600" }}>{"[client name]"}</span><span className="mono" style={{ fontSize: "12px", color: "#8a839a" }}>{"[channel / brand]"}</span></span></figcaption>
</figure>
</div>
</div>
</section>
    </>
  );
}
