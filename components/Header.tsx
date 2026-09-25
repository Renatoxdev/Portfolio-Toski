"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
export function Header() {
  const t = useTranslations();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Logo />
      <button
        className="menu-toggle eyebrow"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {t(open ? "closeMenu" : "menu")}
      </button>
      <nav
        id="main-nav"
        aria-label={t("mainNavigation")}
        className={open ? "navigation is-open" : "navigation"}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={(item.href === "/" ? path === "/" : path.startsWith(item.href)) ? "page" : undefined}
          >
            {t(item.label)}
          </Link>
        ))}
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
