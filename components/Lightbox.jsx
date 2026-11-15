'use client';

import { useEffect } from 'react';

// Video lightbox shared by the hero clips and the Work grid. `item`: { title, embed, mp4, tall }.
// Lives outside the sections so it isn't caught by their paused-until-seen animations.
export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);
  if (!item) return null;
  return (
<div className="lbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
<div className={`lbframe ${item.tall ? 'is-tall' : ''}`} onClick={(e) => e.stopPropagation()}>
<div className="lbscreen">
{item.mp4
  ? <video src={item.embed} title={item.title} autoPlay controls playsInline />
  : <iframe src={item.embed} title={item.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />}
</div>
<div className="lbcap"><span className="kl">{item.title}</span><button type="button" className="lbclose kl" onClick={onClose} autoFocus>close ✕</button></div>
</div>
</div>
  );
}
