'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TOOLS, WORK, WORK_LABELS } from '@/lib/data';
import Blinds from './Blinds';
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

  // Each [data-io] block (a section, a heading, a tile, a card…) plays its animations once it
  // scrolls into view; CSS keeps them paused until data-seen is set. Set straight on the DOM so
  // no re-render is needed, and React never touches an attribute it doesn't own.
  useEffect(() => {
    const els = document.querySelectorAll('[data-io]');
    const show = (el) => el.setAttribute('data-seen', '');
    if (!('IntersectionObserver' in window)) {
      els.forEach(show);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            show(en.target);
            io.unobserve(en.target);
          }
        });
      },
      // threshold 0: a block inside a section always triggers no earlier than its section.
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const v = useMemo(() => {
    const playing = s.paused !== true;
    const mx = s.mx || 0;
    const my = s.my || 0;

    // What's in my bag
    const picked = s.tool || 'pr';
    let sel = null;
    const tools = TOOLS.map((d, i) => {
      const on = picked === d[0];
      if (on) {
        sel = {
          id: d[0],
          idx: String(i + 1).padStart(2, '0'),
          total: String(TOOLS.length).padStart(2, '0'),
          name: d[1],
          line: d[2],
          color: d[4],
          uses: d[3].map((u) => ({ label: u })),
        };
      }
      return {
        id: d[0],
        name: d[1],
        color: d[4],
        on: on ? 'on' : '',
        pressed: on ? 'true' : 'false',
        pick: () => setS((prev) => (prev.tool === d[0] ? prev : { ...prev, tool: d[0] })),
      };
    });

    // Everything, in motion
    const items = WORK.map((w) => ({
      title: w.title,
      sub: w.sub,
      dur: w.dur || '',
      th: w.th || '',
      glyph: w.glyph || '',
      kind: WORK_LABELS[w.k],
      cls: w.k === 'note' ? 'sp-note is-note' : w.k === 'reel' ? 'sp-reel is-media' : w.wide ? 'sp-wide is-media' : 'sp-vid is-media',
      href: w.k === 'note' ? '#contact' : '#proud',
      aria: w.k === 'note' ? w.title : `play ${w.title}`,
      embed: w.yt
        ? `https://www.youtube-nocookie.com/embed/${w.yt}?autoplay=1&rel=0&modestbranding=1&playsinline=1${w.end ? `&end=${w.end}` : ''}`
        : w.vimeo
          ? `https://player.vimeo.com/video/${w.vimeo}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`
          : w.ig
            ? `https://www.instagram.com/reel/${w.ig}/embed/`
            : '',
      thumb: w.thumb || (w.yt ? `https://i.ytimg.com/vi/${w.yt}/maxresdefault.jpg` : ''),
    }));

    const t = (k1, k2) => `translate(${(mx * k1).toFixed(1)}px,${(my * k2).toFixed(1)}px)`;

    return {
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
      tools,
      sel,
      items,
    };
  }, [s, handNotes, motion, setState]);

  return (
    <div
      id="top"
      className={v.rootCls}
      style={{ position: 'relative', color: '#efeaf6', overflowX: 'clip' }}
    >
      <Blinds still={!motion} />
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
