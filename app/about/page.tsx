import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { BotanicalMark } from "@/components/BotanicalMark";
import { SocialLinks } from "@/components/SocialLinks";
import { site, clients, services } from "@/data/site";
export const metadata = { title: "About" };
export default function About() {
  return (
    <PageShell className="about-page">
      <div className="about-portrait">
        <p className="about-mantra">
          Good
          <br />
          Stories
          <br />
          Brighter
          <br />
          Worlds.
        </p>
        <figure>
          <Image
            src="/images/about/portrait.svg"
            alt="Neutral placeholder for a portrait or representative artwork by Toski"
            width={800}
            height={1100}
            sizes="(max-width:700px) 90vw, 40vw"
            priority
          />
          <figcaption>
            A quieter,
            <br />
            brighter tomorrow.
            <span className="little-rule" />
          </figcaption>
        </figure>
      </div>
      <aside className="about-facts">
        <section>
          <h2 className="eyebrow">Clients</h2>
          <p className="placeholder-label">Example categories</p>
          <ul>
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="eyebrow">Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="eyebrow">Links</h2>
          <SocialLinks />
        </section>
      </aside>
      <section className="about-bio">
        <BotanicalMark />
        <h1>Hi, I’m Toski.</h1>
        <p className="eyebrow">{site.subtitle}</p>
        <div className="biography">
          {site.biography.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <span className="little-rule" />
        <p className="availability">{site.availability}</p>
        <Link className="pill-button" href="/contact">
          Get in touch <span aria-hidden="true">⟶</span>
        </Link>
        <a className="email-link" href={`mailto:${site.email}`}>
          ✉ <span>{site.email}</span>
        </a>
      </section>
    </PageShell>
  );
}
