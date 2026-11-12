// The one i'd show first — featured showreel
// Ported from the design canvas (05 — Diary × Edit Bay).
import { useEffect, useRef, useState } from "react";

export default function Featured({ v }) {
  const playerRef = useRef(null);
  const screenRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const sendPlayerCommand = (func, args = []) => {
    playerRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*"
    );
  };

  useEffect(() => {
    sendPlayerCommand(isVisible && v.playing ? "playVideo" : "pauseVideo");
    sendPlayerCommand("unloadModule", ["captions"]);
  }, [isVisible, v.playing]);

  useEffect(() => {
    sendPlayerCommand(soundOn ? "unMute" : "mute");
  }, [soundOn]);

  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(screen);
    return () => observer.disconnect();
  }, []);

  return (
    <>
<section id="proud" data-io="proud" style={{ position: "relative", padding: "130px 0 140px" }}>
<div className="wrap">
<div className="rv" data-io style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "64px" }}>
<div><h2 className="fr h2">{"the one i'd show "}<font color="#a78bfa"><i className="nr">{"first"}</i></font></h2></div>
<p className="kl doodle" style={{ margin: "0", fontSize: "26px", color: "#c4b5fd", transform: "rotate(-6deg)" }}>{"headphones on for this one"}</p>
</div>
<div className="tilt" data-io>
<div className="frame">
<span className="washi" aria-hidden="true" style={{ left: "-30px", top: "10px", transform: "rotate(-38deg)" }}></span>
<span className="washi" aria-hidden="true" style={{ right: "-30px", top: "10px", transform: "rotate(38deg)" }}></span>
<div ref={screenRef} className={`screen ${v.pausedCls}`}>
<iframe
  ref={playerRef}
  className="showreel-player"
  src="https://www.youtube-nocookie.com/embed/9jZO4k1g_Do?mute=1&loop=1&playlist=9jZO4k1g_Do&controls=0&modestbranding=1&playsinline=1&enablejsapi=1&rel=0&iv_load_policy=3&cc_load_policy=0"
  title="Pheno showreel"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
  onLoad={() => {
    sendPlayerCommand(isVisible && v.playing ? "playVideo" : "pauseVideo");
    sendPlayerCommand(soundOn ? "unMute" : "mute");
    sendPlayerCommand("unloadModule", ["captions"]);
  }}
/>
</div>
<div className="showreel-caption">
<p className="kl">{"showreel - the best 2 minutes i've ever cut ♡"}</p>
<div className="sound-wrap">
<span className="sound-hint kl" aria-hidden="true" onClick={() => setSoundOn((current) => !current)}>{soundOn ? "sound on ♪" : "click for sound →"}</span>
<button
  type="button"
  className={`sound-toggle ${soundOn ? "is-on" : ""}`}
  onClick={() => setSoundOn((current) => !current)}
  aria-label={soundOn ? "Turn showreel sound off" : "Turn showreel sound on"}
  aria-pressed={soundOn}
>
<svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
<path d="M11 5L6 9H3v6h3l5 4V5z"></path>
{soundOn ? <><path d="M15.5 8.5a5 5 0 010 7"></path><path d="M18.5 5.5a9 9 0 010 13"></path></> : <path d="M16 9l5 6M21 9l-5 6"></path>}
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="rv" data-io style={{ display: "flex", flexWrap: "wrap", gap: "16px 56px", marginTop: "48px" }}>
</div>
</div>
</section>
    </>
  );
}
