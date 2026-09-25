import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import { getLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
const serif = localFont({
  src: [
    { path: "../public/fonts/serif.ttf", weight: "400", style: "normal" },
    {
      path: "../public/fonts/serif-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/serif-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});
const sans = localFont({
  src: [
    { path: "../public/fonts/sans.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/sans-medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const locale = await getLocale();
  return {
  title: {
    default: `Toski — ${t("siteTitle")}`,
    template: "%s — Toski",
  },
  description: t(site.description),
  openGraph: {
    title: `Toski — ${t("siteTitle")}`,
    description: t(site.description),
    type: "website",
    locale: locale === "pt-BR" ? "pt_BR" : "en_GB",
    siteName: "Toski",
  },
};
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const t = await getTranslations();
  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <NextIntlClientProvider>
        <a className="skip-link" href="#main-content">
          {t("skipToContent")}
        </a>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
