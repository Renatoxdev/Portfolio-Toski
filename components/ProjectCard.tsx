import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
export async function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const t = await getTranslations();
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-image">
        <Image
          src={project.image}
          alt={t("projectCover", { title: project.title })}
          width={750}
          height={1000}
          sizes="(max-width:600px) 50vw, (max-width:1000px) 33vw, 20vw"
        />
      </div>
      <h2>{project.title}</h2>
      <p className="eyebrow">{t(project.category)}</p>
      <span className="little-rule" />
    </Link>
  );
}
