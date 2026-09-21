import { BotanicalMark } from "./BotanicalMark";
export function SectionHeading({
  title,
  subtitle,
  mark = false,
}: {
  title: string;
  subtitle?: string;
  mark?: boolean;
}) {
  return (
    <div className="section-heading">
      {mark && (
        <div className="heading-mark">
          <BotanicalMark />
        </div>
      )}
      <h1>{title}</h1>
      {subtitle && <p className="eyebrow">{subtitle}</p>}
    </div>
  );
}
