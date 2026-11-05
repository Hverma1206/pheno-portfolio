// What I do — services checklist + contact card
// Ported from the design canvas (05 — Diary × Edit Bay).
export default function Contact({ v }) {
  return (
    <>
<section id="contact" className={v.io.contact} data-io="contact" style={{ padding: "140px 0", borderBottom: "1px solid #2a2433" }}>
<div className="wrap">
<div className="wcard rv">
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
<a href="mailto:you@example.com" className="wbtn kl">{"let's chat!"}</a>
<p className="mono" style={{ margin: "40px 0 0", fontSize: "15px", color: "#5d5868" }}>{"or write to "}<a href="mailto:you@example.com" style={{ color: "#5b2fe0", textUnderlineOffset: "4px" }}>{"[you@yourmail.com]"}</a></p>
</div>
<div className="wframe">
<svg className="wframe-line" aria-hidden="true" viewBox="0 0 600 560" preserveAspectRatio="none" fill="none" stroke="#6a3cf5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M40 8 C 200 2, 420 6, 560 12 C 590 14, 594 40, 594 70 C 596 220, 592 380, 590 500 C 590 534, 570 548, 540 550 C 380 556, 200 552, 50 548 C 20 548, 6 530, 6 500 C 4 360, 8 200, 10 60 C 10 26, 22 10, 50 8"></path></svg>
<div className="wpol">
<span className="wtape" aria-hidden="true"></span>
<div className="wphoto"><span className="mono" style={{ fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "#ddd3ff" }}>{"[ your photo ]"}</span></div>
<p className="kl" style={{ margin: "0", padding: "14px 0 6px", textAlign: "center", fontSize: "34px", fontWeight: "700", color: "#5b2fe0" }}>{"[your name]"}</p>
</div>
<div className="wtiles">
<span className="wtile tg1" title="motion"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"></path></svg><span className="sr">{"motion"}</span></span>
<span className="wtile tg2" title="editing"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M8.5 7.8 20 16M8.5 16.2 20 8"></path></svg><span className="sr">{"editing"}</span></span>
<span className="wtile tg3" title="3d"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"></path><path d="M12 12l8-4.5M12 12v9M12 12 4 7.5"></path></svg><span className="sr">{"3d"}</span></span>
<span className="wtile tg4" title="color"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8.5" r="4.5"></circle><circle cx="8.3" cy="15" r="4.5"></circle><circle cx="15.7" cy="15" r="4.5"></circle></svg><span className="sr">{"color"}</span></span>
<span className="wtile tg5" title="sound"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h1.5M6.5 9v6M10 5v14M13.5 8v8M17 10.5v3M20.5 12H21"></path></svg><span className="sr">{"sound"}</span></span>
<span className="wtile tg6" title="thumbnails"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2.5"></rect><circle cx="9" cy="10" r="1.8"></circle><path d="M21 16l-5-5-9 8.5"></path></svg><span className="sr">{"thumbnails"}</span></span>
<span className="wtile tg7" title="design"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20l7-7 3 3-7 7z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"></path><circle cx="11" cy="11" r="2"></circle></svg><span className="sr">{"design"}</span></span>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
