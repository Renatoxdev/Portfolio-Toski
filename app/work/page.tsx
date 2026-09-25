import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { ArtworkGrid } from "@/components/ArtworkGrid";
export async function generateMetadata() {
  const t = await getTranslations();
  return { title: t("gallery") };
}
export default async function Work() {
  const t = await getTranslations();
  return (
    <PageShell className="work-page">
      <h1 className="sr-only">{t("gallery")}</h1>
      <ArtworkGrid />
    </PageShell>
  );
}
