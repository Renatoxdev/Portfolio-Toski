import { BotanicalMark } from "./BotanicalMark";
import { SocialLinks } from "./SocialLinks";
export function Footer() {
  return (
    <footer className="footer">
      <small className="eyebrow">© 2026 Toski. All rights reserved.</small>
      <span className="footer-mark">
        <BotanicalMark />
      </span>
      <div className="footer-right">
        <SocialLinks compact />
        <span className="eyebrow footer-motto">
          Art creates a kinder tomorrow.
        </span>
      </div>
    </footer>
  );
}
