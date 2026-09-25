import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { projects } from "@/data/projects";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const t = await getTranslations();
  const { slug } = await params;
  return {
    title: projects.find((p) => p.slug === slug)?.title ?? t("projectNotFound"),
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const t = await getTranslations();
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <PageShell className="project-detail">
      <Link className="text-link eyebrow" href="/projects">
        ← {t("allProjects")}
      </Link>
      <div className="project-intro">
        <p className="eyebrow">
          {t(project.category)} <span> / </span> {project.year}
        </p>
        <h1>{project.title}</h1>
        <p className="editorial-copy">{project.description}</p>
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
                alt={t("artworkAlt", { number: img.number })}
                fill
                sizes={i === 0 ? "95vw" : "(max-width:600px) 95vw, 48vw"}
              />
            </div>
            <figcaption className="eyebrow">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="project-end">
        <Link href={`/projects/${next.slug}`} className="next-project">
          <span className="eyebrow">{t("nextProject")} ⟶</span>
          <span>{next.title}</span>
        </Link>
      </div>
    </PageShell>
  );
}
