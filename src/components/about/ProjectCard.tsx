"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { FC } from "react";
import { HoverEffect } from "../landing/CardHoverEffect";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ProjectCard: FC<{
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  img: string;
}> = ({ title, description, demoUrl, githubUrl, img }) => {
  return (
    <Card className="grid grid-cols-8 bg-transparent border-2 border-black dark:border-white">
      <div className="m-2 col-span-4 sm:col-span-4">
        <Image
          src={img || ""}
          alt="img"
          width={600}
          height={600}
          className="w-full h-full rounded-md"
        ></Image>
      </div>

      <div className="flex flex-col justify-between  col-span-4">
        <div>
          <CardHeader>
            <CardTitle className="font-bold tracking-widest">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <span>{description}</span>
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
                tooltip: "Github",
                iconText: "Github",
              },
              {
                title: "",
                description: "",
                link: demoUrl || "",
                icon: <Icon icon={"mdi:globe"}></Icon>,
                tooltip: "Demo",
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
