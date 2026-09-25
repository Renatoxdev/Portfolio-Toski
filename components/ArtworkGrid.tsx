"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import { artworks, type Artwork } from "@/data/artworks";
export function ArtworkGrid() {
  const t = useTranslations();
  const [selected, setSelected] = useState<Artwork>(artworks[0]);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  function open(art: Artwork, button: HTMLButtonElement) {
    opener.current = button;
    setSelected(art);
    dialog.current?.showModal();
  }
  function move(direction: number) {
    const index = artworks.findIndex((a) => a.id === selected.id);
    setSelected(artworks[(index + direction + artworks.length) % artworks.length]);
  }
  return (
    <>
      <div className="gallery-toolbar">
        <span className="eyebrow selection-note">
          {t("selectedWorks")} <span aria-hidden="true">/</span> 01—{String(artworks.length).padStart(2, "0")}
        </span>
      </div>
      <p className="sr-only" role="status">
        {t("artworkCount", { count: artworks.length })}
      </p>
      <div className="artwork-grid">
        {artworks.map((art) => (
          <figure
            className="artwork-card"
            key={art.id}
            style={{
              flexGrow: art.width / art.height,
              flexBasis: `${260 * (art.width / art.height)}px`,
            }}
          >
            <button
              onClick={(e) => open(art, e.currentTarget)}
              aria-label={t("viewArtwork", { title: t("artworkTitle", { number: art.number }) })}
              className="artwork-button"
            >
              <Image
                src={art.src}
                alt={t("artworkAlt", { number: art.number })}
                width={art.width}
                height={art.height}
                sizes="(max-width:600px) 100vw, (max-width:900px) 50vw, 42vw"
              />
            </button>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="artwork-title"
        onClose={() => opener.current?.focus()}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") move(1);
          if (e.key === "ArrowLeft") move(-1);
        }}
      >
        <div className="lightbox-content">
          <button
            className="lightbox-close eyebrow"
            onClick={() => dialog.current?.close()}
            autoFocus
            aria-label={t("closeArtwork")}
          >
            {t("closeImage")}
          </button>
          <Image
            src={selected.src}
            alt={t("artworkAlt", { number: selected.number })}
            width={selected.width}
            height={selected.height}
            sizes="90vw"
          />
          <div className="lightbox-caption">
            <button onClick={() => move(-1)} aria-label={t("previousArtwork")}>
              ←
            </button>
            <div>
              <h2 id="artwork-title">{t("artworkTitle", { number: selected.number })}</h2>
              <p className="eyebrow">
                {t(selected.category)} · {selected.id}
              </p>
            </div>
            <button onClick={() => move(1)} aria-label={t("nextArtwork")}>
              →
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
