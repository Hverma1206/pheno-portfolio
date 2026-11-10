// Footer — sign-off + socials. Every "write to me" / "let's chat" button scrolls to #socials.
// Ported from the design canvas (05 — Diary × Edit Bay). Links live in lib/data.js (SOCIALS).
import { SOCIALS } from '@/lib/data';

const ICONS = {
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"></circle></>,
  youtube: <><rect x="2.5" y="5.5" width="19" height="13" rx="4"></rect><path d="M10.2 9.2v5.6l4.8-2.8z" fill="currentColor"></path></>,
  x: <path d="M5 4l14 16M19 4 5 20"></path>,
  discord: <path d="M4 5h16v11H9l-5 4z"></path>,
  whatsapp: <><path d="M3.5 20.5l1.3-4.4a8.5 8.5 0 1 1 3.3 3.2z"></path><path d="M9.3 8.8c.2 3.2 2.7 5.7 5.9 5.9"></path></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="2.5"></rect><path d="M3.5 6.5 12 13l8.5-6.5"></path></>,
  // any social added to SOCIALS without its own icon gets a link icon
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path>,
};

export default function Footer() {
  return (
    <>
<footer data-io="foot" style={{ padding: "24px 40px 40px" }}>
<div className="fcard gridpaper">
<div className="ftop">
<div>
<p className="kl fname f2" aria-label="Pheno"><span className="fch" style={{ "--i": "0" }}>{"P"}</span><span className="fch" style={{ "--i": "1" }}>{"h"}</span><span className="fch" style={{ "--i": "2" }}>{"e"}</span><span className="fch" style={{ "--i": "3" }}>{"n"}</span><span className="fch" style={{ "--i": "4" }}>{"o"}</span><svg className="fstar" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"></path></svg><svg className="fline" aria-hidden="true" viewBox="0 0 260 34" preserveAspectRatio="none" fill="none" stroke="#5b2fe0" strokeWidth="3" strokeLinecap="round"><path d="M6 22 C 50 14, 110 10, 160 13 C 176 14, 182 24, 172 27 C 160 30, 154 20, 168 16 C 196 9, 226 10, 254 8"></path></svg></p>
<p className="fr" style={{ margin: "22px 0 0", fontSize: "20px", fontStyle: "italic", color: "#5b2fe0" }}>{"Shreyansh, video editor & motion designer"}</p>
</div>
<p className="sticker fwrap"><span className="fwrap-s">{"that's a"}</span><span className="fwrap-b f2">{"wrap!"}</span></p>
</div>
<div id="socials" className="fsocwrap">
<p className="fhead kl">{"find me here"}<svg className="fharrow" aria-hidden="true" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8 C 22 4, 40 10, 46 32"></path><path d="M36 27 L 47 34 L 53 22"></path></svg></p>
<nav className="fsocs" aria-label="socials">
{SOCIALS.map((s, i) => {
  const inner = (
    <>
<span className="fic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{ICONS[s.name] || ICONS.link}</svg></span>
<span className="fnm">{s.name}</span>
<span className="fhd mono">{s.url ? s.handle || "say hi" : "link soon"}</span>
{s.url ? <span className="farr" aria-hidden="true">{"↗"}</span> : null}
    </>
  );
  // web links open in a new tab; mailto: stays in place
  const web = s.url.startsWith("http");
  return s.url ? (
<a key={s.name} href={s.url} className={`fsoc fs-${s.name}`} style={{ "--i": i }} target={web ? "_blank" : undefined} rel={web ? "noopener noreferrer" : undefined}>{inner}</a>
  ) : (
<span key={s.name} className={`fsoc fs-${s.name} is-soon`} style={{ "--i": i }}>{inner}</span>
  );
})}
</nav>
</div>
<span className="fplay" aria-hidden="true"></span>
<div className="fbase mono">
<span>{"© 2026 Pheno · end of reel"}</span>
<a href="#top" className="fup">{"back to top "}<span aria-hidden="true">{"↑"}</span></a>
</div>
</div>
</footer>
    </>
  );
}
