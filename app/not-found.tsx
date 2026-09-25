import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
export default async function NotFound() {
  const t = await getTranslations();
  return (
    <PageShell className="contact-page">
      <p className="eyebrow">404</p>
      <h1>{t("pageNotFound")}</h1>
      <Link className="pill-button" href="/work">
        {t("backToWork")} →
      </Link>
    </PageShell>
  );
}
