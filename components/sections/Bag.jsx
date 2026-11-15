// What's in my bag — one row of app logos with their names. Nothing else.

// The four Adobe apps are drawn as letter badges in CSS (.adobe); the others are svg files.
const ADOBE = { pr: 'Pr', ae: 'Ae', ps: 'Ps' };

function Logo({ id }) {
  return (
    <span className="logo">
      {ADOBE[id] ? <span className="adobe">{ADOBE[id]}</span> : <img src={`/tools/${id}.svg`} alt="" />}
    </span>
  );
}

const CIRCLES = [
  ['[creator]', 'M60 3 C 92 2, 99 14, 97 22 C 94 36, 40 39, 14 34 C 0 30, 1 12, 20 6 C 34 2, 60 2, 72 5'],
  ['[brand]', 'M40 4 C 80 0, 100 12, 96 24 C 92 38, 30 40, 10 30 C -2 22, 6 8, 30 5'],
  ['[channel]', 'M55 2 C 90 4, 100 16, 95 26 C 88 38, 34 38, 12 32 C -4 26, 4 8, 26 4 C 40 2, 56 3, 66 4'],
  ['[studio]', 'M48 3 C 86 2, 100 14, 96 24 C 92 37, 36 40, 12 33 C -2 28, 2 10, 24 5'],
];

export default function Bag({ v }) {
  return (
    <section id="bag" data-io="bag" style={{ position: 'relative', padding: '130px 0 120px' }}>
      <div className="wrap">
        <div className="rv" data-io style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '56px' }}>
          <div>
            {/* <p className="sm kicker">page 02 — the stack</p> */}
            <h2 className="fr h2">what&apos;s in <i className="nr" style={{ color: '#a78bfa' }}>my bag.</i></h2>
          </div>
          <p className="kl doodle" style={{ margin: '0', fontSize: '26px', color: '#c4b5fd', transform: 'rotate(-3deg)' }}>(the essentials. no gatekeeping.)</p>
        </div>

        <ul className="stack" data-io>
          {v.tools.map((t) => (
            <li key={t.id} className="sitem kl" style={{ '--c': t.color, '--i': t.i }}>
              <Logo id={t.id} />
              {t.name}
            </li>
          ))}
        </ul>

        <div className="rv" data-io style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 24px', marginTop: '56px' }}>
          <span className="kl" style={{ fontSize: '24px', color: '#a9a1b8' }}>people i&apos;ve cut for:</span>
          {CIRCLES.map(([who, d]) => (
            <span key={who} className="ppl kl">{who}<svg aria-hidden="true" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2"><path d={d}></path></svg></span>
          ))}
        </div>
      </div>
    </section>
  );
}
