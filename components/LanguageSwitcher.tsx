"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { localeCookie, type Locale } from "@/i18n/config";
import { useLocale, useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function changeLanguage(next: Locale) {
    if (next === locale) return;
    document.cookie = `${localeCookie}=${next}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    startTransition(() => router.refresh());
  }

  return (
    <div className="language-switcher" role="group" aria-label={t("language")} aria-busy={pending}>
      <button type="button" onClick={() => changeLanguage("pt-BR")} disabled={pending} aria-pressed={locale === "pt-BR"} aria-label="Português (Brasil)" title="Português (Brasil)">
        <svg viewBox="0 0 30 20" aria-hidden="true"><path fill="#009b3a" d="M0 0h30v20H0z"/><path fill="#ffdf00" d="m15 2 12 8-12 8L3 10Z"/><circle cx="15" cy="10" r="5" fill="#002776"/><path d="M10.2 8.8c3.4-.7 6.5.4 9.3 2.4" fill="none" stroke="white" strokeWidth="1"/></svg>
        <span>PT</span>
      </button>
      <button type="button" onClick={() => changeLanguage("en")} disabled={pending} aria-pressed={locale === "en"} aria-label="English (England)" title="English (England)">
        <svg viewBox="0 0 30 20" aria-hidden="true"><path fill="#fff" d="M0 0h30v20H0z"/><path fill="#ce1124" d="M12 0h6v20h-6zM0 7h30v6H0z"/></svg>
        <span>EN</span>
      </button>
    </div>
  );
}
