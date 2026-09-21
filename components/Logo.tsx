import Link from "next/link";
import { BotanicalMark } from "./BotanicalMark";
import { site } from "@/data/site";
export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Toski — home">
      <span className="wordmark">
        <BotanicalMark />
        Toski
      </span>
      <span className="eyebrow brand-subtitle">{site.subtitle}</span>
    </Link>
  );
}
