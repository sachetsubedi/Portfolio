import { Metadata } from "next";
import { FC, ReactNode } from "react";
export const metadata: Metadata = {
  title: "About | Sachet Subedi",
  description:
    "Welcome to the portfolio of Sachet Subedi, a passionate junior full-stack developer with expertise in modern web technologies like Next.js, Tailwind CSS, Prisma, and Express. Explore innovative projects like custom UI components, payroll systems, and creative Matter.js animations. With a strong focus on scalability and unique ideas, Sachet thrives on building meaningful solutions and is always eager to learn and experiment. Dive into projects that blend creativity and functionality, showcasing a developer dedicated to crafting exceptional user experiences.",
};

const layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
