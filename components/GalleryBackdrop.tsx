"use client";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { useEffect, useState } from "react";
import { artworks } from "@/data/artworks";

// Landscape works preserve the composition when filling the viewport.
const slides = artworks.filter(
  (art) =>
    art.width / art.height > 1.4 &&
    (art.category === "illustration" || art.category === "environments"),
);

export function GalleryBackdrop() {
  const t = useTranslations();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % slides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <>
      <div className="gallery-backdrop" aria-hidden="true">
        {slides.map((art, index) => (
          <Image
            key={art.id}
            src={art.src}
            alt=""
            fill
            sizes="100vw"
            fetchPriority={index === 0 ? "high" : undefined}
            loading="eager"
            className={`backdrop-slide${index === active ? " is-active" : ""}`}
          />
        ))}
      </div>
      {slides.length > 1 && !reducedMotion && (
        <button
          className="backdrop-toggle eyebrow"
          onClick={() => setPaused((value) => !value)}
          aria-label={
            t(paused ? "playBackgroundSlideshow" : "pauseBackgroundSlideshow")
          }
          aria-pressed={paused}
        >
          {t(paused ? "playBackground" : "pauseBackground")}
        </button>
      )}
    </>
  );
}
