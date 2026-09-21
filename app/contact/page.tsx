import { PageShell } from "@/components/PageShell";
import { BotanicalMark } from "@/components/BotanicalMark";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";
export const metadata = { title: "Contact" };
export default function Contact() {
  return (
    <PageShell className="contact-page">
      <BotanicalMark />
      <p className="eyebrow">A conversation, a possibility, a new story.</p>
      <h1>
        Let’s create
        <br />
        <em>something together.</em>
      </h1>
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
      <p className="eyebrow contact-footnote">Good stories. Brighter worlds.</p>
    </PageShell>
  );
}
