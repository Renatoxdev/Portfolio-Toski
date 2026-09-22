import { SocialLinks } from "./SocialLinks";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-right">
        <SocialLinks compact names={["Instagram", "X", "VGen", "Bluesky"]} />
      </div>
    </footer>
  );
}
