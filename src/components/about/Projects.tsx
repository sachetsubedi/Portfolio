import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Card className="border-none outline-none mt-32 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="tracking-widest text-lg">Projects</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <ProjectCard
                title={project.title}
                description={project.description}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Projects;
