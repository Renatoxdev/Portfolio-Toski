import { PageShell } from "@/components/PageShell";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <PageShell className="contact-page">
      <h1>Contact</h1>
      <p className="availability">{site.availability}</p>
      <a className="contact-email" href={`mailto:${site.email}`}>
        {site.email}
        <span aria-hidden="true"> ↗</span>
      </a>
      <p className="contact-note">
        For project enquiries, share a little about your idea,
        <br />
        your timeline, and what you have in mind.
      </p>
      <SocialLinks />
    </PageShell>
  );
}
