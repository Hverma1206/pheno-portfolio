'use client';

import { useEffect, useRef } from 'react';

// "Light through blinds": purple window light, blind slats and a swaying leaf shadow.
// Fragment shader ported verbatim from the fxpheno site; the runner below is a trimmed React version of its loader.
const FRAG = `
#version 300 es
precision highp float;
precision highp int;
uniform vec2 uRes;      // canvas size in canvas pixels
uniform float uDpr;     // canvas pixels per CSS pixel
uniform float uTime;    // seconds times the speed param
uniform float uReal;    // real seconds
uniform float uPeriod;  // shader time in one loop (6 s at the default speed)
uniform vec3 uBg;       // --bg, sRGB 0..1
uniform vec3 uFg;       // --fg
uniform vec3 uAccent;   // --accent
out vec4 outColor;
#define TAU 6.28318530718
vec3 lin(vec3 c) { return mix(c / 12.92, pow((c + .055) / 1.055, vec3(2.4)), step(.04045, c)); }
vec3 toDisplay(vec3 c) { c = clamp(c, 0., 1.); return mix(c * 12.92, 1.055 * pow(c, vec3(1. / 2.4)) - .055, step(.0031308, c)); }
uint pcg(uint v) { uint s = v * 747796405u + 2891336453u; uint w = ((s >> ((s >> 28u) + 4u)) ^ s) * 277803737u; return (w >> 22u) ^ w; }
float hash(vec2 p) { uvec2 q = uvec2(ivec2(floor(p)) + 65536); return float(pcg(q.x ^ pcg(q.y))) * (1. / 4294967295.); }
vec2 gdir(vec2 c) { float a = hash(c) * TAU; return vec2(cos(a), sin(a)); }
// gradient noise, about -1..1
float gnoise(vec2 p) {
  vec2 i = floor(p), f = p - i;
  vec2 u = f * f * f * (f * (f * 6. - 15.) + 10.);
  float a = dot(gdir(i), f);
  float b = dot(gdir(i + vec2(1, 0)), f - vec2(1, 0));
  float c = dot(gdir(i + vec2(0, 1)), f - vec2(0, 1));
  float d = dot(gdir(i + vec2(1, 1)), f - vec2(1, 1));
  return 1.4 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
// gradient noise with its analytic derivative: (value, d/dx, d/dy)
vec3 gnoised(vec2 p) {
  vec2 i = floor(p), f = p - i;
  vec2 u = f * f * f * (f * (f * 6. - 15.) + 10.);
  vec2 du = 30. * f * f * (f * (f - 2.) + 1.);
  vec2 ga = gdir(i), gb = gdir(i + vec2(1, 0)), gc = gdir(i + vec2(0, 1)), gd = gdir(i + vec2(1, 1));
  float a = dot(ga, f), b = dot(gb, f - vec2(1, 0)), c = dot(gc, f - vec2(0, 1)), d = dot(gd, f - vec2(1, 1));
  float k1 = b - a, k2 = c - a, k3 = a - b - c + d;
  float n = a + k1 * u.x + k2 * u.y + k3 * u.x * u.y;
  vec2 g = ga + u.x * (gb - ga) + u.y * (gc - ga) + u.x * u.y * (ga - gb - gc + gd) + du * (vec2(k1, k2) + k3 * u.yx);
  return 1.4 * vec3(n, g);
}
// curl of gradient noise: a divergence-free current
vec2 curl(vec2 p) { vec3 n = gnoised(p); return vec2(n.z, -n.y); }
// sub-LSB dither so smooth tones never band on 8-bit panels
vec3 dith(vec3 c) { return c + (hash(gl_FragCoord.xy) - .5) / 255.; }
// how landscape the frame is: 0 for phones and tablets upright, 1 for desktop
float landscape() { return smoothstep(.9, 1.3, uRes.x / uRes.y); }
// The copy column, soft-edged: 1 behind the type (the lower left at desktop, the top band on
// upright screens), 0 where the field may run. A texture multiplies its field by 1 - u_calm * copyMask()
// so the headline and small text sit on bare --bg; data-calm 0 gives the full-bleed field back.
float copyMask() {
  vec2 css = uRes / uDpr, fc = gl_FragCoord.xy / uDpr, uv = gl_FragCoord.xy / uRes;
  float wide = (1. - smoothstep(.56, .72, uv.x)) * (1. - smoothstep(.52, .68, uv.y));
  float tall = smoothstep(css.y - 560., css.y - 380., fc.y);
  return mix(tall, wide, landscape());
}
// Every motion is a function of this angle, so frame 0 and frame 180 of a 6 s, 30 fps loop match.
float loopAngle() { return TAU * uTime / uPeriod; }
// a point travelling once round a circle of radius r per loop: noise sampled along it loops too
vec2 orbit(float r, float k) { float a = loopAngle() + k; return r * vec2(cos(a), sin(a)); }

uniform float u_grain, u_slats, u_haze;

// soft box: 1 inside [a,b], ramps of width w at both ends
float band(float x, float a, float b, float w) { return smoothstep(a - w, a + w, x) * smoothstep(b + w, b - w, x); }

vec2 rot(vec2 p, float a) { float c = cos(a), s = sin(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }
float segment(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)); }
// a slender leaf along +x from the origin: a pointed ellipse, distance roughly in the same units
float leaf(vec2 p, float l, float w) {
  p.x -= l * .5;
  float k = 1. - smoothstep(l * .1, l * .5, abs(p.x)) * .3;   // narrows to a point at both ends
  return (length(p / vec2(l * .5, w * .5 * k)) - 1.) * w * .5;
}
// The shadow of a leafy branch from a plant by the window: a stem with leaves on alternate sides,
// swaying. Returns 0..1 cover, with an edge softness that matches the light's penumbra.
float branch(vec2 x, vec2 B, vec2 dir, float len, float soft, float t) {
  vec2 p = rot(x - B, -(.07 * sin(t) + .025 * sin(t * 2. + 1.)));   // a slow sway once a loop
  float a0 = atan(dir.y, dir.x);
  vec2 q = rot(p, -a0);                       // stem runs along +x
  q.y -= .05 * sin(q.x / len * 2.4) * len;    // a gentle bow
  float d = segment(q, vec2(0.), vec2(len, 0.)) - .0035;
  for (int i = 0; i < 9; i++) {
    float fi = float(i);
    float at = len * (.12 + fi * .1);
    float side = mod(fi, 2.) < .5 ? 1. : -1.;
    float flutter = .1 * sin(t * 3. + fi * 1.3);                       // each leaf flutters faster
    float l = mix(.2, .11, fi / 8.) * len / .5, w = l * .46;
    vec2 lp = rot(q - vec2(at, 0.), -(side * .78 + flutter));
    d = min(d, leaf(lp, l, w));
  }
  return 1. - smoothstep(-soft, soft, d);
}

void main() {
  float s = min(uRes.x, uRes.y);
  vec2 x = gl_FragCoord.xy / s;
  float xmax = uRes.x / s, ymax = uRes.y / s;
  float land = landscape();
  float t = loopAngle();

  // The window's patch of light on the wall: a slanted parallelogram, low and to the right of the
  // type. (u, v) run across and down the patch; v is 0 at the window's top edge.
  vec2 O = mix(vec2(.30, .50 * ymax), vec2(xmax * .55, .97), land);   // top-left corner of the patch
  float Wd = mix(.92, .78, land), Ht = mix(.62 * ymax - .02, 1.05, land);
  O.x += .03 * sin(t);                                           // the sun moves
  vec2 d = x - O;
  float shear = mix(.55, .62, land);                                   // light comes from high left
  float v = -d.y;
  float u = d.x - shear * v;
  // the penumbra widens with distance from the window, as a real blind's shadow does
  // one penumbra for every edge of the patch: it widens a little with distance from the window, but
  // the top edge is as soft as the side edges, so the patch reads as one light, not a pasted box
  float soft = .014 + .012 * clamp(v / Ht, 0., 1.);
  float win = band(u, 0., Wd, soft * 1.6) * band(v, 0., Ht, soft * 2.6);   // the top edge is as soft as the sheared side reads
  // one mullion splits the window into two panes
  win *= 1. - band(u, Wd * .5 - .012, Wd * .5 + .012, soft);
  // slats: light only passes between them; the gap opens and closes a little as the blind sways
  float P = (.05 + .03 * (1. - u_slats)) * mix(1.22, .95, land);
  float gap = .5 + .1 * sin(t + 1.);
  float ph = v / P + .03 * sin(u * 3. + .6 * sin(t));
  float f = fract(ph);
  float k = floor(ph);
  float gk = gap + .07 * (hash(vec2(k, 3.)) - .5);    // no two slats hang exactly alike
  float slat = band(f, .5 - gk * .5, .5 + gk * .5, soft / P * .9);
  float I = win * slat;
  // the branch's shadow falls across the light, softer than the blind's edge (the plant stands
  // further from the wall)
  vec2 B = mix(vec2(1.06, .26 * ymax), vec2(xmax * 1.03, .4), land);
  vec2 dir = normalize(mix(vec2(-.62, .78), vec2(-.8, .6), land));
  float leaves = branch(x, B, dir, mix(.62, .62, land), .003 + soft * .5, t);
  I *= 1. - .93 * leaves;
  // brighter where the patch is nearest the window, fading towards its foot
  I *= .55 + .45 * smoothstep(Ht, 0., v);
  // the light gathers over the first few slats rather than starting on a hard line
  I *= smoothstep(-.02, .2 * Ht, v);
  // a cloud crosses: a slow, broad dimming that moves through the patch
  float cloud = gnoise(vec2(u * 1.3, v * .8 + 4.) + orbit(.9, 0.)) * .5 + .5;
  I *= .72 + .28 * smoothstep(.15, .75, cloud);
  // room haze: a little light scattered off the patch, so the wall beside it is not dead black
  vec2 cdist = vec2(max(max(-u, u - Wd), 0.), max(max(-v * 1.6, v - Ht), 0.));
  float halo = exp(-length(cdist) * 9.) * (.012 + .024 * u_haze);

  float tone = clamp(I * .86 + halo + .04 * win * (1. - I), 0., .9);
  // grain lives only where there is light: amplitude follows tone*(1-tone), so the dark wall and the
  // calm area stay flat and clean. One grain is one CSS pixel at every width.
  vec2 g = floor(gl_FragCoord.xy / uDpr);
  float n = hash(g) - .5;
  tone = clamp(tone + n * (.55 * u_grain + .1) * tone * (1. - tone) * 2.2, 0., 1.);

  vec3 bg = lin(uBg), ac = lin(uAccent), fg = lin(uFg);
  vec3 light = mix(ac, fg, .22);       // the light is the accent, lifted towards --fg, never white
  vec3 col = mix(bg, light, tone);
  outColor = vec4(dith(toDisplay(col)), 1.);
}
`;
const VERT = '#version 300 es\nvoid main(){vec2 p=vec2((gl_VertexID<<1)&2,gl_VertexID&2);gl_Position=vec4(p*2.-1.,0.,1.);}';

const SPEED = 0.32; // shader seconds per real second
const PERIOD = 3; // shader seconds per loop (6 s at the shader's default speed of 0.5)
const STILL_T = 7; // frame drawn when motion is off
const PARAMS = { u_grain: 0.55, u_slats: 0.55, u_haze: 0.75 };
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const COLOURS = { uBg: hex('#0f0d13'), uFg: hex('#ffffff'), uAccent: hex('#8f72ff') };

export default function Blinds({ still = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, depth: false, stencil: false });
    if (!gl) return undefined; // no WebGL2: the plain dark page background stays

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src.trim());
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    };
    const prog = gl.createProgram();
    try {
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    } catch (err) {
      console.error('[blinds]', err.message);
      return undefined;
    }
    gl.useProgram(prog);
    gl.bindVertexArray(gl.createVertexArray());
    const u = (name) => gl.getUniformLocation(prog, name);
    Object.entries(COLOURS).forEach(([k, c]) => gl.uniform3fv(u(k), c));
    Object.entries(PARAMS).forEach(([k, val]) => gl.uniform1f(u(k), val));
    gl.uniform1f(u('uPeriod'), PERIOD);
    const uRes = u('uRes');
    const uDpr = u('uDpr');
    const uTime = u('uTime');

    let t = STILL_T;
    let dpr = 1;
    let quality = 1; // drops in steps on devices that can't hold ~50 fps
    const draw = () => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uDpr, dpr);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5) * quality;
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      draw();
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;
    let last = 0;
    let avg = 1 / 60;
    let seen = 0;
    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(Math.max(now - last, 0) / 1000, 1 / 15);
      last = now;
      t += dt * SPEED;
      draw();
      avg = avg * 0.95 + dt * 0.05;
      if (++seen > 90 && avg > 1 / 50 && quality > 0.5) {
        quality *= 0.8;
        seen = 0;
        resize();
      }
    };
    // Animate only while the tab is visible and motion is allowed; with motion off, hold one frame.
    const update = () => {
      cancelAnimationFrame(raf);
      if (still || reduce.matches) {
        t = STILL_T;
        draw();
      } else if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    const stage = canvas.parentElement;
    const lost = (e) => {
      e.preventDefault();
      cancelAnimationFrame(raf);
      delete stage.dataset.ready; // fade back to the plain background
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    document.addEventListener('visibilitychange', update);
    reduce.addEventListener('change', update);
    canvas.addEventListener('webglcontextlost', lost);
    resize();
    update();
    stage.dataset.ready = '';

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener('visibilitychange', update);
      reduce.removeEventListener('change', update);
      canvas.removeEventListener('webglcontextlost', lost);
    };
  }, [still]);

  return (
    <div className="blinds" aria-hidden="true">
      <canvas ref={ref} />
    </div>
  );
}
