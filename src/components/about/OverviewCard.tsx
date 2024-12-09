import { CardContent } from "@mui/material";
import { FC } from "react";
import { Card } from "../ui/card";
import Education from "./Education";
import Experience from "./Experience";

const OverviewCard: FC<{ hidden: boolean }> = ({ hidden }) => {
  return (
    <Card
      hidden={hidden}
      className="mt-20 text-justify bg-inherit border-none shadow-none"
    >
      <CardContent>
        <div>
          I&apos;m <strong> Sachet Subedi</strong>, a full-stack developer
          passionate about crafting clean, efficient code and building creative
          digital solutions. From interactive front-end designs to robust
          back-end systems, I enjoy turning ideas into reality.
        </div>

        <Experience />

        <Education />
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
