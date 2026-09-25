"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { site } from "@/data/site";
export function Logo() {
  const t = useTranslations();
  return (
    <Link href="/" className="brand" aria-label={t("toskiHome")}>
      <span className="wordmark">
        Toski
      </span>
      <span className="eyebrow brand-subtitle">{t(site.subtitle)}</span>
    </Link>
  );
}
