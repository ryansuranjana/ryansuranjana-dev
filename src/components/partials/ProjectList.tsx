import { fetchProjects } from "@/lib/data/projects";
import SectionList from "../ui/SectionList";
import ProjectCard from "../ui/ProjectCard";

const ProjectList = async () => {
  const projects = await fetchProjects();

  return (
    <SectionList>
      {projects?.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
        />
      ))}
    </SectionList>
  );
};

export default ProjectList;
