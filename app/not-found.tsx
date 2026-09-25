import Link from "next/link";
import { PageShell } from "@/components/PageShell";
export default function NotFound() {
  return (
    <PageShell className="contact-page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <Link className="pill-button" href="/work">
        Back to work →
      </Link>
    </PageShell>
  );
}
