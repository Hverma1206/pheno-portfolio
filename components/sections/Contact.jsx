// What I do — services checklist + contact card
// Ported from the design canvas (05 — Diary × Edit Bay).
export default function Contact({ v }) {
  return (
    <>
<section id="contact" data-io="contact" style={{ padding: "140px 0", borderBottom: "1px solid #2a2433" }}>
<div className="wrap">
<div className="wcard rv" data-io>
<div className="wgrid2" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "72px", alignItems: "center" }}>
<div>
<div style={{ borderTop: "2px solid #a594f0", borderBottom: "2px solid #a594f0", padding: "14px 0 18px" }}>
<h2 className="kl" style={{ margin: "0", fontWeight: "700", fontSize: "clamp(48px, 5vw, 76px)", lineHeight: "1.05", color: "#5b2fe0" }}>{"What I do"}</h2>
</div>
<ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
<li className="wrow"><svg className="wbox" aria-hidden="true" viewBox="0 0 36 36" fill="none" stroke="#5b2fe0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5c8-.8 16-1 24-.4.6 7.6.4 15.4-.3 22.8-7.8.6-15.6.7-23.4.2-.6-7.4-.7-15-.3-22.6z"></path><path className="tk" d="M10 18l6 6.5L33 4"></path></svg><span>{"Motion graphics"}</span></li>
<li className="wrow"><svg className="wbox" aria-hidden="true" viewBox="0 0 36 36" fill="none" stroke="#5b2fe0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5c8-.8 16-1 24-.4.6 7.6.4 15.4-.3 22.8-7.8.6-15.6.7-23.4.2-.6-7.4-.7-15-.3-22.6z"></path><path className="tk" d="M10 18l6 6.5L33 4"></path></svg><span>{"3D animation"}</span></li>
<li className="wrow"><svg className="wbox" aria-hidden="true" viewBox="0 0 36 36" fill="none" stroke="#5b2fe0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5c8-.8 16-1 24-.4.6 7.6.4 15.4-.3 22.8-7.8.6-15.6.7-23.4.2-.6-7.4-.7-15-.3-22.6z"></path><path className="tk" d="M10 18l6 6.5L33 4"></path></svg><span>{"YouTube edits"}</span></li>
<li className="wrow"><svg className="wbox" aria-hidden="true" viewBox="0 0 36 36" fill="none" stroke="#5b2fe0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5c8-.8 16-1 24-.4.6 7.6.4 15.4-.3 22.8-7.8.6-15.6.7-23.4.2-.6-7.4-.7-15-.3-22.6z"></path><path className="tk" d="M10 18l6 6.5L33 4"></path></svg><span>{"Reels & shorts"}</span></li>
</ul>
<a href="#socials" className="wbtn kl">{"let's chat!"}</a>
{/* <p className="mono" style={{ margin: "40px 0 0", fontSize: "19px", color: "#5d5868" }}>{"or write to "}<a href="mailto:you@example.com" style={{ color: "#5b2fe0", textUnderlineOffset: "4px" }}>{"[you@yourmail.com]"}</a></p> */}
</div>
<div className="wframe" data-io>
<svg className="wframe-line" aria-hidden="true" viewBox="0 0 600 560" preserveAspectRatio="none" fill="none" stroke="#6a3cf5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path pathLength="1" d="M40 8 C 200 2, 420 6, 560 12 C 590 14, 594 40, 594 70 C 596 220, 592 380, 590 500 C 590 534, 570 548, 540 550 C 380 556, 200 552, 50 548 C 20 548, 6 530, 6 500 C 4 360, 8 200, 10 60 C 10 26, 22 10, 50 8"></path></svg>
<div className="wpol">
<span className="wtape" aria-hidden="true"></span>
<div className="wphoto"><span className="mono" style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#ddd3ff" }}>{"[ your photo ]"}</span></div>
<p className="kl f2" style={{ margin: "0", padding: "14px 0 6px", textAlign: "center", fontSize: "34px", fontWeight: "700", color: "#5b2fe0" }}>{"[your name]"}</p>
</div>
{/* the apps from "what's in my bag", as hand-drawn icons */}
<div className="wtiles">
{v.tools.map((t) => (
<span key={t.id} className="wtile" title={t.name}><img src={`/tools/sketch/${t.id}.svg`} alt={t.name} width="76" height="76" loading="lazy" /></span>
))}
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
