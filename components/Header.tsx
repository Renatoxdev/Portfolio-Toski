"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/site";
import { Logo } from "./Logo";
export function Header() {
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
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="main-nav"
        aria-label="Main navigation"
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
            aria-current={path.startsWith(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
