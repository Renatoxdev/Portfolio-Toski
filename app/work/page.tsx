import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ArtworkGrid } from "@/components/ArtworkGrid";
export const metadata = { title: "Work" };
export default function Work() {
  return (
    <PageShell className="work-page">
      <SectionHeading
        title="A curated selection of works —"
        subtitle="Stories, characters and imaginary places."
      />
      <ArtworkGrid />
    </PageShell>
  );
}
