import Link from "next/link";
import { site } from "@/data/site";
export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Toski — home">
      <span className="wordmark">
        Toski
      </span>
      <span className="eyebrow brand-subtitle">{site.subtitle}</span>
    </Link>
  );
}
