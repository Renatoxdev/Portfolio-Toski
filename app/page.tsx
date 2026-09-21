import { GalleryBackdrop } from "@/components/GalleryBackdrop";
import Link from "next/link";
import { BotanicalMark } from "@/components/BotanicalMark";
import { navigation, site } from "@/data/site";
export default function Home() {
  return (
    <main id="main-content" className="landing">
      <GalleryBackdrop />
      <section
        className="landing-panel"
        aria-label="Welcome to Toski’s portfolio"
      >
        <BotanicalMark />
        <h1>Toski</h1>
        <p className="eyebrow">{site.subtitle}</p>
        <span className="panel-rule" />
        <nav aria-label="Main navigation">
          {navigation.map((n) => (
            <Link href={n.href} key={n.href}>
              {n.label === "Work" ? "Portfolio" : n.label}
            </Link>
          ))}
        </nav>
        <p className="landing-tagline">
          Stories, characters and
          <br />
          imaginary places.
        </p>
        <Link className="pill-button" href="/work">
          View work <span aria-hidden="true">⟶</span>
        </Link>
      </section>
    </main>
  );
}
