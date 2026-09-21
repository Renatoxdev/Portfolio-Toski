import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { BotanicalMark } from "@/components/BotanicalMark";
export default function NotFound() {
  return (
    <PageShell className="contact-page">
      <BotanicalMark />
      <p className="eyebrow">404 · A little off the map</p>
      <h1>
        A story still
        <br />
        <em>to be discovered.</em>
      </h1>
      <Link className="pill-button" href="/work">
        Back to work →
      </Link>
    </PageShell>
  );
}
