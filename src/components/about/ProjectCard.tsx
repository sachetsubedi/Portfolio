"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FC } from "react";
import { HoverEffect } from "../landing/CardHoverEffect";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ProjectCard: FC<{
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
}> = ({ title, description, demoUrl, githubUrl }) => {
  return (
    <Card className="flex justify-between bg-transparent">
      <div>
        <CardHeader>
          <CardTitle className="font-bold tracking-widest">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between">
          <span>{description}</span>
        </CardContent>
      </div>
      <div className="w-fit flex justify-center items-center mr-2">
        <HoverEffect
          className=" h-fit p-0 flex flex-col "
          items={[
            {
              title: "",
              description: "",
              link: githubUrl || "",
              icon: <Icon icon={"mdi:github"}></Icon>,
            },
            {
              title: "",
              description: "",
              link: demoUrl || "",
              icon: <Icon icon={"mdi:globe"}></Icon>,
            },
          ]}
        ></HoverEffect>
      </div>
    </Card>
  );
};

export default ProjectCard;
