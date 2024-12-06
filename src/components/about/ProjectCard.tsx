"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { FC } from "react";
import { HoverEffect } from "../landing/CardHoverEffect";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SkillLabels from "./SkillLabels";

const ProjectCard: FC<{
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  img: string;
  techStacks: { title: string; color: string }[];
}> = ({ title, description, demoUrl, githubUrl, img, techStacks }) => {
  return (
    <Card className="grid grid-cols-8 bg-transparent border-2 border-black dark:border-white">
      <div className="m-2 col-span-8 md:col-span-4 sm:col-span-4">
        <Image
          src={img || ""}
          alt="img"
          width={600}
          height={600}
          className="w-full h-full rounded-md"
        ></Image>
      </div>

      <div className="flex flex-col justify-between col-span-8 md:col-span-4">
        <div>
          <CardHeader>
            <CardTitle className="font-bold tracking-widest">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between flex-col gap-2">
            <span>{description}</span>
            <SkillLabels items={techStacks}></SkillLabels>
          </CardContent>
        </div>
        <div className="w-fit flex justify-center items-center mr-2 mb-3">
          <HoverEffect
            className=" h-fit p-0 flex "
            items={[
              {
                title: "",
                description: "",
                link: githubUrl || "",
                icon: <Icon icon={"mdi:github"}></Icon>,
                iconText: "Github",
              },
              {
                title: "",
                description: "",
                link: demoUrl || "",
                icon: <Icon icon={"mdi:globe"}></Icon>,
                iconText: "Demo",
              },
            ]}
          ></HoverEffect>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
