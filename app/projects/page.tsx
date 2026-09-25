import { getTranslations } from "next-intl/server";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
export async function generateMetadata() {
  const t = await getTranslations();
  return { title: t("projects") };
}
export default async function Projects() {
  const t = await getTranslations();
  return (
    <PageShell className="projects-page">
      <SectionHeading title={t("projects")} />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </PageShell>
  );
}
