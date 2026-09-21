import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { BotanicalMark } from "@/components/BotanicalMark";
import { projects } from "@/data/projects";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: projects.find((p) => p.slug === slug)?.title ?? "Project not found",
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <PageShell className="project-detail">
      <Link className="text-link eyebrow" href="/projects">
        ← All projects
      </Link>
      <div className="project-intro">
        <BotanicalMark />
        <p className="eyebrow">
          {project.category} <span> / </span> {project.year}
        </p>
        <h1>{project.title}</h1>
        <p className="editorial-copy">{project.description}</p>
        <p className="eyebrow sample-note">{project.note}</p>
      </div>
      <div className="project-spread">
        {project.images.map((img, i) => (
          <figure key={img.src} className={i === 0 ? "spread-wide" : ""}>
            <div
              style={{ aspectRatio: `${img.width}/${img.height}` }}
              className="spread-image"
            >
              <Image
                src={img.src}
                alt={`Placeholder for ${project.title}: ${img.caption}`}
                fill
                sizes={i === 0 ? "95vw" : "(max-width:600px) 95vw, 48vw"}
              />
            </div>
            <figcaption className="eyebrow">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="project-end">
        <p className="editorial-quote">
          Every world begins with a little curiosity.
        </p>
        <Link href={`/projects/${next.slug}`} className="next-project">
          <span className="eyebrow">Next project ⟶</span>
          <span>{next.title}</span>
        </Link>
      </div>
    </PageShell>
  );
}
