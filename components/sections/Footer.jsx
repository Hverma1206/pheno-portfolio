// Footer
// Ported from the design canvas (05 — Diary × Edit Bay).
export default function Footer({ v }) {
  return (
    <>
<footer className={v.io.foot} data-io="foot" style={{ padding: "24px 40px 40px" }}>
<div className="fcard gridpaper">
<div className="ftop">
<div>
<p className="kl fname" aria-label="Pheno"><span className="fch" style={{ "--i": "0" }}>{"P"}</span><span className="fch" style={{ "--i": "1" }}>{"h"}</span><span className="fch" style={{ "--i": "2" }}>{"e"}</span><span className="fch" style={{ "--i": "3" }}>{"n"}</span><span className="fch" style={{ "--i": "4" }}>{"o"}</span><svg className="fstar" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"></path></svg><svg className="fline" aria-hidden="true" viewBox="0 0 260 34" preserveAspectRatio="none" fill="none" stroke="#5b2fe0" strokeWidth="3" strokeLinecap="round"><path d="M6 22 C 50 14, 110 10, 160 13 C 176 14, 182 24, 172 27 C 160 30, 154 20, 168 16 C 196 9, 226 10, 254 8"></path></svg></p>
<p className="fr" style={{ margin: "22px 0 0", fontSize: "20px", fontStyle: "italic", color: "#5b2fe0" }}>{"Shreyansh, video editor & motion designer"}</p>
</div>
<a href="mailto:you@example.com" className="fcta kl">{"say hi "}<span aria-hidden="true">{"→"}</span></a>
</div>
<nav className="fsocs" aria-label="socials">
<a href="mailto:you@example.com" className="fsoc"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"></rect><path d="M3.5 6.5 12 13l8.5-6.5"></path></svg>{"email"}</a>
<a href="#contact" className="fsoc"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8.5h3l1.6-2.5h6.8L17 8.5h3v10H4z"></path><circle cx="12" cy="13" r="3.4"></circle></svg>{"instagram"}</a>
<a href="#contact" className="fsoc"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 8.5v7l5.5-3.5z"></path></svg>{"youtube"}</a>
<a href="#contact" className="fsoc"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.6"></circle><path d="M15.6 12v1.6a2.4 2.4 0 0 0 4.8 0V12a8.4 8.4 0 1 0-3.3 6.7"></path></svg>{"x"}</a>
<a href="#contact" className="fsoc"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-5 4z"></path></svg>{"discord"}</a>
</nav>
<span className="fplay" aria-hidden="true"></span>
<div className="fbase mono">
<span>{"© 2026 Pheno · [you@yourmail.com]"}</span>
<a href="#top" className="fup">{"back to top "}<span aria-hidden="true">{"↑"}</span></a>
</div>
</div>
</footer>
    </>
  );
}
