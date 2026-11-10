// Top navigation
// Ported from the design canvas (05 — Diary × Edit Bay).
export default function Nav({ v }) {
  return (
    <>
<header className="hdr">
<nav className="hnav" aria-label="main">
<a href="#top" className="hbrand kl f2" aria-label="Pheno, back to top">
{"Pheno"}
<svg className="hstar" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"><path d="M12 2v6M12 16v6M2 12h6M16 12h6"></path></svg>
</a>
<div className="hlinks sm">
<a className="nl" href="#bag">{"the bag"}</a>
<a className="nl" href="#proud">{"proudest"}</a>
<a className="nl" href="#work">{"work"}</a>
<a className="nl" href="#words">{"words"}</a>
</div>
<a href="#socials" className="hcta">{"write to me "}<span aria-hidden="true">{"→"}</span></a>
<span className="hprog" aria-hidden="true"></span>
</nav>
</header>
    </>
  );
}
