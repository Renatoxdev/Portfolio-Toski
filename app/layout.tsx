import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
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
export const metadata: Metadata = {
  title: {
    default: "Toski — Digital Artist & Illustrator",
    template: "%s — Toski",
  },
  description: site.description,
  openGraph: {
    title: "Toski — Digital Artist & Illustrator",
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: "Toski",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
