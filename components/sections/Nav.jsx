// Top navigation
// Ported from the design canvas (05 — Diary × Edit Bay).
export default function Nav({ v }) {
  return (
    <>
<header style={{ position: "sticky", top: "0", zIndex: "50", background: "rgba(15,13,19,.82)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid #241e2e" }}>
<nav className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px 24px", minHeight: "76px" }}>
<div className="sm" style={{ display: "flex", flexWrap: "wrap", gap: "4px 26px" }}>
<a className="nl" href="#bag">{"the bag"}</a>
<a className="nl" href="#proud">{"proudest"}</a>
<a className="nl" href="#work">{"work"}</a>
<a className="nl" href="#words">{"words"}</a>
<a className="nl" href="#contact">{"write to me"}</a>
</div>
</nav>
</header>
    </>
  );
}
