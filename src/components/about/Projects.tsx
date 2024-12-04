import { projects } from "@/lib/data";
import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import ProjectCard from "./ProjectCard";

const Projects: FC<{ hidden: boolean }> = ({ hidden }) => {
  return (
    <Card
      className="border-none outline-none mt-10 bg-transparent shadow-none"
      hidden={hidden}
    >
      <CardHeader></CardHeader>
      <CardContent className="flex flex-col gap-3">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <ProjectCard
                img={project.img}
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
