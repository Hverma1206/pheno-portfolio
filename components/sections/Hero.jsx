// Hero — name intro, headline, playing reels
// Ported from the design canvas (05 — Diary × Edit Bay).
export default function Hero({ v }) {
  return (
    <>
<section className="herowrap" data-io="hero" style={{ position: "relative", padding: "28px 40px 56px" }}>
<div className="page gridpaper" onMouseMove={v.heroMove} onMouseLeave={v.heroLeave} style={{ position: "relative", minHeight: "980px", overflow: "hidden", borderRadius: "28px", backgroundColor: "#ecebe7", color: "#15111c", boxShadow: "0 40px 120px -40px rgba(124,58,237,.4)" }}>
<span className="pcorner" aria-hidden="true" style={{ left: "22px", top: "22px", borderWidth: "2px 0 0 2px" }}></span>
<span className="pcorner" aria-hidden="true" style={{ right: "22px", top: "22px", borderWidth: "2px 2px 0 0" }}></span>
<span className="pcorner" aria-hidden="true" style={{ left: "22px", bottom: "22px", borderWidth: "0 0 2px 2px" }}></span>
<span className="pcorner" aria-hidden="true" style={{ right: "22px", bottom: "22px", borderWidth: "0 2px 2px 0" }}></span>
<div className="wrap late" style={{ position: "relative", paddingTop: "64px", paddingBottom: "110px" }}>
<div className="nameblock" style={{ position: "relative", marginTop: "8px" }}>
<p className="kl" style={{ position: "relative", display: "inline-block", margin: "0 0 0 -2px", fontSize: "clamp(48px, 4.8vw, 72px)", fontWeight: "700", lineHeight: "1", color: "#5b2fe0" }}><span className="pname f2" aria-label="Pheno"><span className="pchar" style={{ animationDelay: "0.20s" }}>{"P"}</span><span className="pchar" style={{ animationDelay: "0.31s" }}>{"h"}</span><span className="pchar" style={{ animationDelay: "0.42s" }}>{"e"}</span><span className="pchar" style={{ animationDelay: "0.53s" }}>{"n"}</span><span className="pchar" style={{ animationDelay: "0.64s" }}>{"o"}</span></span><svg className="pline" aria-hidden="true" viewBox="0 0 260 34" preserveAspectRatio="none" fill="none" stroke="#5b2fe0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "0", bottom: "-16px", width: "108%", height: "22px", margin: "0" }}><path d="M6 22 C 50 14, 110 10, 160 13 C 176 14, 182 24, 172 27 C 160 30, 154 20, 168 16 C 196 9, 226 10, 254 8"></path></svg></p>
<p className="fr psub nr" style={{ margin: "22px 0 0", fontSize: "clamp(20px, 1.8vw, 26px)", fontStyle: "italic", fontWeight: "700", lineHeight: "1.2", color: "#5b2fe0" }}>{"Shreyansh, video editor & motion designer"}</p>
</div>
<h1 className="fr" style={{ position: "relative", margin: "40px 0 0", fontWeight: "350", fontSize: "clamp(40px, 6vw, 92px)", lineHeight: ".95", letterSpacing: "-.03em", maxWidth: "880px" }}>
<span className="ink d1">{"edits"}</span>{" "}<span className="ink d1">{"that"}</span>{" "}<span className="ink d2">{"feel"}</span><br />
<span className="ink d2" style={{ fontStyle: "italic" }}>{"warm"}<span style={{ color: "#7c3aed" }}>{"."}</span></span><span className="ink d3 hl nr" style={{ fontStyle: "italic" }}>{"worthy"}<span style={{ color: "#7c3aed" }}>{"."}</span></span><br />
<span className="ink d3 nr" style={{ position: "relative", fontStyle: "italic", fontWeight: "700" }}>{"wonderful"}<span style={{ color: "#7c3aed" }}>{"."}</span>
<svg className="circ doodle" aria-hidden="true" viewBox="0 0 400 140" preserveAspectRatio="none" style={{ position: "absolute", left: "-6%", top: "-10%", width: "112%", height: "125%", overflow: "visible", color: "#7c3aed" }} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M210 12 C 340 6, 398 40, 390 76 C 380 122, 250 136, 150 128 C 52 120, 4 96, 10 64 C 18 26, 120 8, 250 14"></path></svg>
</span>
</h1>
<div className="hintro" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px 36px", marginTop: "44px" }}>
<p className="kl" style={{ margin: "0", maxWidth: "470px", fontSize: "22px", lineHeight: "1.45", color: "#3b3448" }}>{"Hi, I'm Shreyansh (Pheno), a seasoned video editor with 6+ years of experience in After Effects and Premiere Pro. I specialize in motion graphics, 3D animations, and versatile video editing styles. Let's bring your vision to life!"}</p>
<a href="#work" className="kl wavy" style={{ color: "#15111c" }}>{"flip to my work ↓"}</a>
</div>
<a href="#socials" className="stamp stamp-ink" style={{ marginTop: "24px" }}>{"write to me →"}</a>
<div className="pols" style={{ position: "absolute", top: "40px", right: "40px", width: "440px", height: "720px" }}>
<svg className="arrow doodle" aria-hidden="true" viewBox="0 0 180 90" width="180" height="90" style={{ position: "absolute", left: "-130px", top: "410px", color: "#7c3aed" }} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 70 C 50 84, 120 70, 168 20"></path><path d="M150 22 L 170 18 L 166 40"></path></svg>
<span className="kl doodle proofw" aria-hidden="true" style={{ position: "absolute", left: "-110px", top: "505px", fontSize: "26px", color: "#7c3aed", transform: "rotate(-6deg)" }}>{"proof →"}</span>
<svg className="star doodle" aria-hidden="true" viewBox="0 0 24 24" width="30" height="30" style={{ position: "absolute", left: "-20px", top: "30px", color: "#7c3aed" }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6"></path></svg>
<svg className="star doodle" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" style={{ position: "absolute", left: "20px", top: "210px", color: "#a78bfa", animationDelay: "-1s" }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6"></path></svg>
<div className="pxA" style={{ position: "absolute", right: "190px", top: "10px" }}>
<div style={{ transform: v.pA, transition: "transform .7s cubic-bezier(.2,.8,.2,1)" }}>
<div className="pol pin" style={{ "--r": "-7deg", "--d": "1.6s", position: "relative" }}>
<span className="tape" aria-hidden="true"></span>
<div className="ph ph1 reelph" style={{ width: "210px", height: "300px" }}><span className="clip ph1" style={{ animationDelay: "0s" }}><span className="ctag">{"clip 01"}</span></span><span className="clip ph5" style={{ animationDelay: "-3s" }}><span className="ctag">{"clip 02"}</span></span><span className="clip ph2" style={{ animationDelay: "-6s" }}><span className="ctag">{"clip 03"}</span></span><span className="live sm"><i></i>{"playing"}</span><span className="rbar"><i style={{ animationDelay: "0s" }}></i></span></div>
<span className="cap kl">{"reel 01 — [client]"}</span>
</div>
</div>
</div>
<div className="pxB" style={{ position: "absolute", right: "0", top: "150px" }}>
<div style={{ transform: v.pB, transition: "transform .9s cubic-bezier(.2,.8,.2,1)" }}>
<div className="pol pin" style={{ "--r": "6deg", "--d": "1.9s", position: "relative" }}>
<span className="tape" aria-hidden="true" style={{ transform: "rotate(5deg)" }}></span>
<div className="ph ph4 reelph" style={{ width: "220px", height: "260px" }}><span className="clip ph4" style={{ animationDelay: "-1s" }}><span className="ctag">{"clip 01"}</span></span><span className="clip ph6" style={{ animationDelay: "-4s" }}><span className="ctag">{"clip 02"}</span></span><span className="clip ph3" style={{ animationDelay: "-7s" }}><span className="ctag">{"clip 03"}</span></span><span className="live sm"><i></i>{"playing"}</span><span className="rbar"><i style={{ animationDelay: "-1s" }}></i></span></div>
<span className="cap kl">{"sunset grade, take 3"}</span>
</div>
</div>
</div>
<div className="pxC" style={{ position: "absolute", right: "120px", top: "400px" }}>
<div style={{ transform: v.pC, transition: "transform .8s cubic-bezier(.2,.8,.2,1)" }}>
<div className="pol pin" style={{ "--r": "-3deg", "--d": "2.2s", position: "relative" }}>
<span className="tape" aria-hidden="true" style={{ transform: "rotate(-8deg)" }}></span>
<div className="ph ph6 reelph" style={{ width: "240px", height: "170px" }}><span className="clip ph6" style={{ animationDelay: "-2s" }}><span className="ctag">{"clip 01"}</span></span><span className="clip ph1" style={{ animationDelay: "-5s" }}><span className="ctag">{"clip 02"}</span></span><span className="clip ph4" style={{ animationDelay: "-8s" }}><span className="ctag">{"clip 03"}</span></span><span className="live sm"><i></i>{"playing"}</span><span className="rbar"><i style={{ animationDelay: "-2s" }}></i></span></div>
<span className="cap kl">{"youtube 01 ✓ approved"}</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
