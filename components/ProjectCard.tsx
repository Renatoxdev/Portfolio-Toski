import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-image">
        <Image
          src={project.image}
          alt={`Placeholder cover for ${project.title}`}
          width={750}
          height={1000}
          sizes="(max-width:600px) 50vw, (max-width:1000px) 33vw, 20vw"
        />
      </div>
      <h2>{project.title}</h2>
      <p className="eyebrow">{project.category}</p>
      <span className="little-rule" />
    </Link>
  );
}
