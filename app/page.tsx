import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getTranslations } from "next-intl/server";
import { GalleryBackdrop } from "@/components/GalleryBackdrop";
import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { navigation, site } from "@/data/site";
export default async function Home() {
  const t = await getTranslations();
  return (
    <main id="main-content" className="landing">
      <div className="landing-language"><LanguageSwitcher /></div>
      <GalleryBackdrop />
      <div className="landing-identity">
        <section
          className="landing-panel"
          aria-label={t("welcomeToToskisPortfolio")}
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
          <p className="eyebrow">{t("digitalArtist")}</p>
          <span className="panel-rule" />
          <nav aria-label={t("mainNavigation")}>
            {navigation.filter((n) => n.href !== "/").map((n) => (
              <Link href={n.href} key={n.href}>
                {t(n.href === "/work" ? "portfolio" : n.label)}
              </Link>
            ))}
          </nav>
        </section>
        <div className="landing-profile-links" aria-label={t("socialProfiles")}>
          <SocialLinks compact names={["Instagram", "X", "VGen", "Bluesky"]} />
        </div>
      </div>
    </main>
  );
}
