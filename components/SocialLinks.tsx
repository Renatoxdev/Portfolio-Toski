"use client";
import { useTranslations } from "next-intl";
import { socialLinks } from "@/data/site";
function SocialIcon({ name }: { name: string }) {
  if (name === "VGen") {
    return <span className="social-icon-vgen" aria-hidden="true" />;
  }
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {name === "Instagram" ? (
        <>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </>
      ) : name === "X" ? (
        <path d="M4 3h4.5L20 21h-4.5L4 3Zm16 0L4 21" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      ) : name === "ArtStation" ? (
        <g fill="currentColor">
          <path d="m9 3 11 18h-5L4 3h5Z" />
          <path d="m11 3 11 18 1-5L15 3h-4ZM3 10l-3 5 3 6h9L3 10Z" />
        </g>
      ) : (
        <path
          d="M12 10C9 5 3 2 3 6c0 5 2 7 6 7-6 0-5 7-1 6 2-1 3-3 4-5 1 2 2 4 4 5 4 1 5-6-1-6 4 0 6-2 6-7 0-4-6-1-9 4Z"
          fill="currentColor"
        />
      )}
    </svg>
  );
}
export function SocialLinks({ compact = false, names }: { compact?: boolean; names?: string[] }) {
  const t = useTranslations();
  const links = names
    ? names.flatMap((name) => socialLinks.filter((link) => link.name === name))
    : socialLinks.slice(0, compact ? 3 : 4);
  return (
    <div className={compact ? "social-links compact" : "social-links"}>
      {links.map((link) => {
        const content = compact ? (
          <>
            <SocialIcon name={link.name} />
            <span className="sr-only">{link.name}</span>
          </>
        ) : (
          link.name
        );
        return link.href ? (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.name}
          >
            {content}
            {!compact && <span aria-hidden="true"> ↗</span>}
          </a>
        ) : (
          <span
            className="unconfigured-social"
            key={link.name}
            title={`${link.name} — ${t("profileLinkToBeAdded")}`}
          >
            {content}
            <span className="sr-only"> — {t("profileLinkToBeAdded")}</span>
          </span>
        );
      })}
    </div>
  );
}
