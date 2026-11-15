// What they said — testimonials
// Ported from the design canvas (05 — Diary × Edit Bay).
import Image from 'next/image';
import { WORDS } from '@/lib/data';

export default function Words({ v }) {
  return (
    <>
<section id="words" data-io="words" style={{ padding: "140px 0", borderBottom: "1px solid #2a2433" }}>
<div className="wrap">
<div className="rv" data-io style={{ marginBottom: "64px" }}>
{/* <p className="mono label">{"04 — words"}</p> */}
<h2 className="serif h2">{"what they said "}<i className="nr" style={{ color: "#a78bfa" }}>{"(unprompted)."}</i></h2>
</div>
<div className="tgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", alignItems: "start" }}>
{WORDS.map((w, i) => w.img ? (
<figure key={i} className="quote shot" data-io style={{ margin: "0" }}>
<span className="tape" aria-hidden="true"></span>
<Image src={w.img} alt={w.alt} width={w.w} height={w.h} sizes="(max-width: 900px) 100vw, 420px" style={{ display: "block", width: "100%", height: "auto", borderRadius: "4px" }} />
<figcaption className="kl">{w.cap}</figcaption>
</figure>
) : (
<figure key={i} className="quote" data-io style={{ margin: "0" }}>
<span className="serif" aria-hidden="true" style={{ position: "absolute", right: "24px", top: "4px", fontSize: "120px", lineHeight: "1", color: "#3b2d55" }}>{"“"}</span>
<blockquote className="serif" style={{ margin: "0", fontSize: w.text.length > 200 ? "21px" : "27px", lineHeight: "1.25", fontStyle: "italic" }}>{w.text}</blockquote>
<figcaption style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "28px" }}><span className="mono" style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#2a1f3d", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#c4b5fd" }}>{w.name[0]}</span><span style={{ fontWeight: "600" }}>{w.name}</span></figcaption>
</figure>
))}
</div>
</div>
</section>
    </>
  );
}
