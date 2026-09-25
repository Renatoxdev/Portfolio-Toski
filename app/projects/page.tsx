import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
export const metadata = { title: "Projects" };
export default function Projects() {
  return (
    <PageShell className="projects-page">
      <SectionHeading title="Projects" />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </PageShell>
  );
}
