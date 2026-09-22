import { PageShell } from "@/components/PageShell";
import { ArtworkGrid } from "@/components/ArtworkGrid";
export const metadata = { title: "Gallery" };
export default function Work() {
  return (
    <PageShell className="work-page">
      <h1 className="sr-only">Gallery</h1>
      <ArtworkGrid />
    </PageShell>
  );
}
