'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SECTIONS, TOOLS, WORK, WORK_LABELS, WORK_TABS } from '@/lib/data';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Bag from './sections/Bag';
import Featured from './sections/Featured';
import Work from './sections/Work';
import Words from './sections/Words';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

/**
 * One page, one state object — mirrors the design canvas logic.
 * Every section reads its values from `v`.
 */
export default function Portfolio({ handNotes = true, motion = true }) {
  const [s, setS] = useState({});
  const setState = useCallback((patch) => setS((prev) => ({ ...prev, ...patch })), []);
  const raf = useRef(0);

  // Play a section's animations only once it scrolls into view.
  useEffect(() => {
    const els = document.querySelectorAll('[data-io]');
    const mark = (id) =>
      setS((prev) => (prev.seen && prev.seen[id] ? prev : { ...prev, seen: { ...(prev.seen || {}), [id]: true } }));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => mark(el.getAttribute('data-io')));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            mark(en.target.getAttribute('data-io'));
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const v = useMemo(() => {
    const filter = s.filter || 'all';
    const playing = s.paused !== true;
    const mx = s.mx || 0;
    const my = s.my || 0;

    // What's in my bag
    const picked = s.tool || 'pr';
    const bag = {};
    let sel = null;
    TOOLS.forEach((d, i) => {
      const on = picked === d[0];
      bag[d[0]] = {
        on: on ? 'on' : '',
        pressed: on ? 'true' : 'false',
        pick: () => setS((prev) => (prev.tool === d[0] ? prev : { ...prev, tool: d[0] })),
      };
      if (on) sel = { idx: String(i + 1).padStart(2, '0'), name: d[1], line: d[2], uses: d[3].map((u) => ({ label: u })) };
    });

    // Everything, in motion
    const items = WORK.filter((w) => filter === 'all' || w.k === filter).map((w) => ({
      title: w.title,
      sub: w.sub,
      dur: w.dur || '',
      th: w.th || '',
      glyph: w.glyph || '',
      kind: WORK_LABELS[w.k],
      cls: w.k === 'note' ? 'sp-note is-note' : w.k === 'reel' ? 'sp-reel is-media' : 'sp-vid is-media',
      href: w.k === 'note' ? '#contact' : '#proud',
      aria: w.k === 'note' ? w.title : `play ${w.title}`,
    }));
    const tabs = WORK_TABS.map(([id, label]) => ({
      label,
      on: filter === id ? 'on' : '',
      pressed: filter === id ? 'true' : 'false',
      pick: () => setState({ filter: id }),
    }));

    const t = (k1, k2) => `translate(${(mx * k1).toFixed(1)}px,${(my * k2).toFixed(1)}px)`;
    const seen = s.seen || {};
    const io = {};
    SECTIONS.forEach((k) => {
      io[k] = seen[k] ? 'inview' : '';
    });

    return {
      io,
      rootCls: (handNotes ? '' : 'nonotes nolinks ') + (motion ? '' : 'calm'),
      pA: t(-30, -22),
      pB: t(26, 18),
      pC: t(-14, 30),
      heroMove: (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(() => setState({ mx: x, my: y }));
      },
      heroLeave: () => setState({ mx: 0, my: 0 }),
      playing,
      notPlaying: !playing,
      pausedCls: playing ? '' : 'paused',
      playLabel: playing ? 'pause showreel' : 'play showreel',
      togglePlay: () => setS((prev) => ({ ...prev, paused: prev.paused !== true })),
      bag,
      sel,
      tabs,
      items,
    };
  }, [s, handNotes, motion, setState]);

  return (
    <div
      id="top"
      className={`ruled ${v.rootCls}`}
      style={{ position: 'relative', backgroundColor: '#0f0d13', color: '#efeaf6', fontFamily: "'Fraunces', Georgia, serif", overflowX: 'hidden' }}
    >
      <div className="margin-line" aria-hidden="true" />
      <Nav v={v} />
      <Hero v={v} />
      <Bag v={v} />
      <Featured v={v} />
      <Work v={v} />
      <Words v={v} />
      <Contact v={v} />
      <Footer v={v} />
    </div>
  );
}
