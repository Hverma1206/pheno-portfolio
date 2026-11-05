// The one i'd show first — featured showreel
// Ported from the design canvas (05 — Diary × Edit Bay).
export default function Featured({ v }) {
  return (
    <>
<section id="proud" className={v.io.proud} data-io="proud" style={{ position: "relative", padding: "130px 0 140px" }}>
<div className="wrap">
<div className="rv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "64px" }}>
<div><h2 className="fr h2">{"the one i'd show "}<font color="#a78bfa"><i>{"first"}</i></font></h2></div>
<p className="kl doodle" style={{ margin: "0", fontSize: "26px", color: "#c4b5fd", transform: "rotate(-6deg)" }}>{"headphones on for this one"}</p>
</div>
<div className="tilt">
<div className="frame">
<span className="washi" aria-hidden="true" style={{ left: "-30px", top: "10px", transform: "rotate(-38deg)" }}></span>
<span className="washi" aria-hidden="true" style={{ right: "-30px", top: "10px", transform: "rotate(38deg)" }}></span>
<div className={`screen ${v.pausedCls}`}>
<div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(#0a0710 0 30%, #1c1030 30% 46%, #3b1f6a 46% 54%, #12091f 54%)" }}></div>
<div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "54%", width: "22%", aspectRatio: "1", marginLeft: "-11%", borderRadius: "50%", transform: "translateY(-50%)", background: "repeating-linear-gradient(#c4b5fd 0 10px, transparent 10px 16px)", opacity: ".9", clipPath: "inset(0 0 50% 0)" }}></div>
<div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "54%", bottom: "0", background: "#0b0713" }}></div>
<div aria-hidden="true">
<span className="refl" style={{ top: "60%", width: "18%", marginLeft: "-9%" }}></span>
<span className="refl" style={{ top: "66%", width: "12%", marginLeft: "-6%", animationDelay: "-.6s" }}></span>
<span className="refl" style={{ top: "72%", width: "22%", marginLeft: "-11%", animationDelay: "-1.2s" }}></span>
<span className="refl" style={{ top: "79%", width: "9%", marginLeft: "-4.5%", animationDelay: "-1.8s" }}></span>
<span className="refl" style={{ top: "86%", width: "15%", marginLeft: "-7.5%", animationDelay: "-.3s" }}></span>
</div>
<p className="fr" style={{ position: "absolute", left: "4%", top: "7%", margin: "0", fontSize: "clamp(36px, 5vw, 76px)", fontStyle: "italic", fontWeight: "300", lineHeight: "1" }}>{"showreel '26"}</p>
<p className="sm" style={{ position: "absolute", left: "4%", top: "calc(7% + clamp(48px, 6vw, 92px))", margin: "0", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "#c4b5fd" }}>{"[ your landscape video goes here ]"}</p>
<button className="hplay" onClick={v.togglePlay} aria-label={v.playLabel}>
<svg className="spin" aria-hidden="true" viewBox="0 0 120 120" width="120" height="120" style={{ position: "absolute", inset: "0" }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M60 6 C 94 4, 116 30, 114 60 C 112 94, 86 116, 58 114 C 26 112, 4 88, 6 58 C 8 28, 30 8, 66 7"></path></svg>
{v.playing ? (<><svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="currentColor" style={{ position: "relative" }}><rect x="6" y="5" width="4" height="14" rx="1.5"></rect><rect x="14" y="5" width="4" height="14" rx="1.5"></rect></svg></>) : null}
{v.notPlaying ? (<><svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" style={{ position: "relative" }}><path d="M8 5v14l11-7z"></path></svg></>) : null}
</button>
</div>
<p className="kl" style={{ margin: "0", padding: "16px 6px 20px", fontSize: "26px", color: "#1b1622" }}>{"showreel - the best 2 minutes i've ever cut ♡"}</p>
</div>
</div>
<div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: "16px 56px", marginTop: "48px" }}>
</div>
</div>
</section>
    </>
  );
}
