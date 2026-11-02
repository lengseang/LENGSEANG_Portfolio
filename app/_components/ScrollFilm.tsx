'use client';

import { useEffect, useRef, useState } from 'react';

import { useThemeState } from '@/app/_components/stickers/useThemeState';
import dark from '@/app/_data/bg-film-dark.json';
import light from '@/app/_data/bg-film-light.json';

// Full-page film behind every section: a night film for the dark theme, a daylight film for the light theme.
// Top of the page: the hero loop plays on its own. Below it, the scroll position scrubs one video: it rests on a fixed
// frame (a "stop") while a section is read, and plays to the next stop as the next section scrolls in. While the
// scroll rests on a stop, a short loop that starts and ends on that frame fades in over it (idle-<section>-*.mp4).
// The scrub video loads in two steps so scrolling works at once: a tiny version first, then the sharp one, which fades
// in over it once fully downloaded. Both are fetched whole into memory, so seeks never wait on the network
// (a half-buffered file is what made the film look stuck). Data-saver visitors keep the tiny one. Until the tiny one
// is in, a still of the current section's stop frame is shown (~20 KB each). layout.tsx starts the tiny download early.
// Files and stop times come from Video Genration/projects/khmer-warrior/web/build_web.py.

const FILMS = { dark, light };
type Theme = keyof typeof FILMS;
const SECTIONS = Object.keys(dark.stops) as (keyof typeof dark.stops)[]; // same sections in both films
const EASE = (p: number) => p * p * (3 - 2 * p);
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
// ?v= is a hash of the files (build_web.py): new encodes get new URLs, so no browser keeps showing cached old ones
const fileUrl = (theme: Theme, file: string) => `/bg/${theme}/${file}?v=${FILMS[theme].v}`;

export function ScrollFilm() {
  const { isLight, mounted } = useThemeState();
  const [variant, setVariant] = useState<'landscape' | 'portrait'>('landscape');
  const hero = useRef<HTMLVideoElement>(null);
  const stopImg = useRef<HTMLImageElement>(null);
  const scrubLo = useRef<HTMLVideoElement>(null);
  const scrubHi = useRef<HTMLVideoElement>(null);
  const idle = useRef<HTMLVideoElement>(null);
  const theme: Theme = isLight ? 'light' : 'dark';
  const active = mounted;

  useEffect(() => {
    const mq = window.matchMedia('(max-aspect-ratio: 1/1)');
    const pick = () => setVariant(mq.matches ? 'portrait' : 'landscape');
    pick();
    mq.addEventListener('change', pick);
    return () => mq.removeEventListener('change', pick);
  }, []);

  useEffect(() => {
    if (!active) return;
    const film = FILMS[theme];
    const STOPS = SECTIONS.map((id) => film.stops[id]);
    const url = (file: string) => fileUrl(theme, file);
    const h = hero.current;
    const lo = scrubLo.current;
    const hi = scrubHi.current;
    const l = idle.current;
    const img = stopImg.current;
    if (!h || !lo || !hi || !l || !img) return;
    const stillSrc = (i: number) => url(`stop-${SECTIONS[i]}-${variant}.jpg`);
    for (let i = 0; i < SECTIONS.length; i++) new Image().src = stillSrc(i); // warm the cache: ~20 KB each
    let stillAt = 0;
    let v: HTMLVideoElement | null = null; // the scrub video being driven: none until the tiny one has loaded
    const blobs: string[] = [];
    const abort = new AbortController();
    const get = async (url: string) => (await fetch(url, { signal: abort.signal })).blob();
    const load = async (el: HTMLVideoElement, blob: Promise<Blob>) => {
      const u = URL.createObjectURL(await blob);
      if (abort.signal.aborted) return URL.revokeObjectURL(u);
      blobs.push(u);
      el.src = u;
      await new Promise((ok) => el.addEventListener('loadeddata', ok, { once: true }));
    };
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const loUrl = url(`scrub-${variant}-lo.mp4`);
    const early = (window as Window & { __filmLo?: { t: string; v: string; blob: Promise<Blob> } }).__filmLo; // layout.tsx
    load(lo, early?.v === variant && early.t === theme ? early.blob.catch(() => get(loUrl)) : get(loUrl))
      .then(() => {
        v = lo;
        if (saveData) return;
        return load(hi, get(url(`scrub-${variant}.mp4`))).then(() => {
          hi.currentTime = Math.max(shown, 0);
          hi.addEventListener(
            'seeked',
            () => {
              hi.style.opacity = '1';
              lo.pause();
              v = hi;
            },
            { once: true },
          );
        });
      })
      .catch(() => {});
    let idleSrc = '';
    const showIdle = () => {
      if (idleSrc) l.style.opacity = '1';
    };
    l.addEventListener('playing', showIdle);
    // the film plays for everyone, also with the OS 'reduce motion' setting (owner's choice)
    let shown = -1; // the time currently shown, eased toward the scroll target (-1: not started)
    let raf = 0;
    let last = performance.now();

    // iOS only decodes frames for seeking after the video has been played once
    const unlock = () => {
      for (const el of [lo, hi])
        el.play()
          .then(() => el.pause())
          .catch(() => {});
    };
    window.addEventListener('touchstart', unlock, { once: true, passive: true });

    const target = (y: number, vh: number) => {
      const tops = SECTIONS.map((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + y : Number.POSITIVE_INFINITY;
      });
      // transition k (stop k -> k+1) plays over the last part of section k, ending when section k+1 is near the top.
      // Length: 65% of section k, 0.8-1.6 screens: long sections get a slow transition, short ones keep a rest on
      // their stop (a fixed 1.6 screens left desktop sections no rest at all)
      let t = STOPS[0];
      let prevEnd = 0;
      for (let k = 0; k + 1 < STOPS.length; k++) {
        const len = Math.min(vh * 1.6, Math.max(vh * 0.8, (tops[k + 1] - tops[k]) * 0.65));
        const start = Math.max(tops[k + 1] - vh * 0.2 - len, prevEnd);
        const end = Math.max(tops[k + 1] - vh * 0.2, start + 1);
        prevEnd = end;
        const p = clamp01((y - start) / (end - start));
        if (p > 0) t = STOPS[k] + (STOPS[k + 1] - STOPS[k]) * EASE(p);
      }
      return t;
    };

    const tick = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      // hero loop fades into the scrub video over the first third of a screen
      const fade = clamp01(y / (vh * 0.35));
      h.style.opacity = String(1 - fade);
      if (fade < 1 && h.paused) h.play().catch(() => {});
      if (fade === 1 && !h.paused) h.pause();

      const goal = Math.min(target(y, vh), film.end - 0.05);
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      // ease toward the scroll target, same feel at 60 and 120 Hz
      shown = shown < 0 ? goal : shown + (goal - shown) * (1 - Math.exp(-dt / 0.15));
      if (Math.abs(shown - goal) < 0.01) shown = goal;
      if (v && !v.seeking) {
        // forward: PLAY toward the target at a matching speed: the decoder shows every frame in order (seeking
        // frame by frame managed ~17 fps with jumps of several frames). At most 4x: after a fast flick the film
        // catches up smoothly a moment later instead of skipping. Backward or far (a nav click): seek, as before.
        const ahead = goal - v.currentTime;
        if (ahead > 1 / 24 && ahead < 10) {
          // never below 1x: a slower tail made settling on a stop take ~2 s and feel floaty
          v.playbackRate = Math.min(4, Math.max(1, ahead / 0.25));
          if (v.paused) v.play().catch(() => {});
        } else {
          if (!v.paused) v.pause();
          if (Math.abs(v.currentTime - shown) > 1 / 48) v.currentTime = shown;
        }
        if (!v.paused) shown = v.currentTime; // a later seek (scrolling back) starts from what is on screen
      }
      if (!v) {
        // no video yet: show the nearest stop frame as a still
        let near = 0;
        for (let i = 1; i < STOPS.length; i++) if (Math.abs(goal - STOPS[i]) < Math.abs(goal - STOPS[near])) near = i;
        if (near !== stillAt) {
          stillAt = near;
          img.src = stillSrc(near);
        }
      }

      // resting on a stop (not the hero): play its idle loop over the frozen frame
      const at = STOPS.findIndex((s, i) => i > 0 && Math.abs(goal - s) < 0.06 && shown === goal);
      const src = at > 0 ? url(`idle-${SECTIONS[at]}-${variant}.mp4`) : '';
      if (src !== idleSrc) {
        idleSrc = src;
        // fade in slowly (500 ms), out fast (150 ms) so it doesn't ghost over the film once scrolling starts
        l.style.transitionDuration = src ? '500ms' : '150ms';
        l.style.opacity = '0'; // fades out over the frozen frame it started from, then pauses
        if (src) {
          l.src = src;
          l.play().catch(() => {});
        } else window.setTimeout(() => !idleSrc && l.pause(), 500);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('touchstart', unlock);
      l.removeEventListener('playing', showIdle);
      abort.abort();
      hi.style.opacity = '0';
      for (const u of blobs) URL.revokeObjectURL(u);
    };
  }, [active, variant, theme]);

  if (!active) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-[color:var(--background)]">
      <div className="absolute inset-0">
        {/* biome-ignore lint/performance/noImgElement: a plain swapped still under the videos, no layout or optimisation needed */}
        <img
          ref={stopImg}
          src={fileUrl(theme, `stop-home-${variant}.jpg`)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video ref={scrubLo} muted playsInline className="absolute inset-0 h-full w-full object-cover" />
        <video
          ref={scrubHi}
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300"
        />
        <video
          ref={idle}
          muted
          playsInline
          loop
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
        />
        <video
          ref={hero}
          src={fileUrl(theme, `hero-${variant}.mp4`)}
          poster={fileUrl(theme, `poster-${variant}.jpg`)}
          muted
          playsInline
          loop
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {/* readability: darken the edges and the bottom, keep the subject in the middle bright */}
      <div
        className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.75)_100%)]'
            : 'bg-[radial-gradient(ellipse_at_50%_40%,rgba(251,249,245,0.2)_0%,rgba(251,249,245,0.55)_70%,rgba(251,249,245,0.75)_100%)] portrait:bg-[rgba(251,249,245,0.5)]' // portrait: text sits over the subject
        }`}
      />
    </div>
  );
}
