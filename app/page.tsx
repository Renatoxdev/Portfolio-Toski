import { GalleryBackdrop } from "@/components/GalleryBackdrop";
import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { navigation, site } from "@/data/site";
export default function Home() {
  return (
    <main id="main-content" className="landing">
      <GalleryBackdrop />
      <div className="landing-identity">
        <section
          className="landing-panel"
          aria-label="Welcome to Toski’s portfolio"
        >
          {site.landingMark && (
            <Image
              className="landing-mark"
              src={site.landingMark}
              alt=""
              width={144}
              height={144}
            />
          )}
          <h1>Toski</h1>
          <p className="eyebrow">Digital Artist</p>
          <span className="panel-rule" />
          <nav aria-label="Main navigation">
            {navigation.filter((n) => n.href !== "/").map((n) => (
              <Link href={n.href} key={n.href}>
                {n.href === "/work" ? "Portfolio" : n.label}
              </Link>
            ))}
          </nav>
        </section>
        <div className="landing-profile-links" aria-label="Social profiles">
          <SocialLinks compact names={["Instagram", "X", "VGen", "Bluesky"]} />
        </div>
      </div>
    </main>
  );
}
