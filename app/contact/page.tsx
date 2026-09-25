import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";
export async function generateMetadata() {
  const t = await getTranslations();
  return { title: t("contact") };
}
export default async function Contact() {
  const t = await getTranslations();
  return (
    <PageShell className="contact-page">
      <h1>{t("contact")}</h1>
      <p className="availability">{t(site.availability)}</p>
      <a className="contact-email" href={`mailto:${site.email}`}>
        {site.email}
        <span aria-hidden="true"> ↗</span>
      </a>
      <p className="contact-note">
        {t("contactIntro")}
        <br />
        {t("contactDetails")}
      </p>
      <SocialLinks />
    </PageShell>
  );
}
