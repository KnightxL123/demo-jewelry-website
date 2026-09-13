"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed hero video.
 *
 * Falls back to the poster image in three cases, all of which are normal
 * rather than error states:
 *   - the viewer prefers reduced motion
 *   - autoplay is refused (iOS Low Power Mode is the common one)
 *   - the file fails to load
 *
 * The poster is frame 0 of the video, so the still and the first frame of
 * playback are the same image and there is no visible swap when it starts.
 */

const LANDSCAPE = { mp4: "/video/hero.mp4", webm: "/video/hero.webm" };
const PORTRAIT = { mp4: "/video/hero-portrait.mp4", webm: "/video/hero-portrait.webm" };
const POSTER = "/images/hero-poster.jpg";
const POSTER_PORTRAIT = "/images/hero-poster-portrait.jpg";

/** Below this width we serve the vertical crop. Matches Tailwind's `md`. */
const PORTRAIT_MAX_WIDTH = 768;

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // `null` until we've measured on the client, so SSR doesn't guess wrong.
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const portraitQuery = window.matchMedia(`(max-width: ${PORTRAIT_MAX_WIDTH - 1}px)`);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setIsPortrait(portraitQuery.matches);
      setReducedMotion(motionQuery.matches);
    };
    sync();

    portraitQuery.addEventListener("change", sync);
    motionQuery.addEventListener("change", sync);
    return () => {
      portraitQuery.removeEventListener("change", sync);
      motionQuery.removeEventListener("change", sync);
    };
  }, []);

  // Autoplay can be refused even with muted + playsInline (iOS Low Power Mode).
  // Nothing to recover — the poster is already showing underneath.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion || isPortrait === null) return;
    video.play().catch(() => {});
  }, [reducedMotion, isPortrait]);

  const poster = isPortrait ? POSTER_PORTRAIT : POSTER;

  // Reduced motion, or before we've measured: poster only, no video fetched.
  if (reducedMotion || isPortrait === null) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={POSTER}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    );
  }

  const sources = isPortrait ? PORTRAIT : LANDSCAPE;

  return (
    <video
      ref={videoRef}
      // `key` forces a fresh element (and a fresh source list) when the viewer
      // crosses the breakpoint; <source> changes alone are ignored by browsers.
      key={isPortrait ? "portrait" : "landscape"}
      className="h-full w-full object-cover"
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={sources.webm} type="video/webm" />
      <source src={sources.mp4} type="video/mp4" />
    </video>
  );
}
