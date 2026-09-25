import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SocialLinks } from "@/components/SocialLinks";
import { site, clients, services } from "@/data/site";
export async function generateMetadata() {
  const t = await getTranslations();
  return { title: t("about") };
}
export default async function About() {
  const t = await getTranslations();
  return (
    <PageShell className="about-page">
      <div className="about-portrait">
        <figure>
          <Image
            src="/images/about/portrait.svg"
            alt={t("portraitAlt")}
            width={800}
            height={1100}
            sizes="(max-width:700px) 90vw, 40vw"
            preload
          />
        </figure>
      </div>
      <aside className="about-facts">
        <section>
          <h2 className="eyebrow">{t("clients")}</h2>
          <p className="placeholder-label">{t("exampleCategories")}</p>
          <ul>
            {clients.map((c) => (
              <li key={c}>{t(c)}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="eyebrow">{t("services")}</h2>
          <ul>
            {services.map((s) => (
              <li key={s}>{t(s)}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="eyebrow">{t("links")}</h2>
          <SocialLinks />
        </section>
      </aside>
      <section className="about-bio">
        <h1>{t("aboutTitle")}</h1>
        <p className="eyebrow">{t(site.subtitle)}</p>
        <div className="biography">
          {site.biography.map((p) => (
            <p key={p}>{t(p)}</p>
          ))}
        </div>
        <span className="little-rule" />
        <p className="availability">{t(site.availability)}</p>
        <Link className="pill-button" href="/contact">
          {t("getInTouch")} <span aria-hidden="true">⟶</span>
        </Link>
        <a className="email-link" href={`mailto:${site.email}`}>
          ✉ <span>{site.email}</span>
        </a>
      </section>
    </PageShell>
  );
}
