import { Icon } from "@iconify/react/dist/iconify.js";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const TechStackCard: FC<{
  icon: string;
  title: string;
}> = ({ icon, title }) => {
  return (
    <Card className="border border-none bg-transparent shadow-none">
      <CardContent>
        <Card className="border-2 border-black dark:border-white rounded-xl w-24 aspect-square flex flex-col items-center justify-center">
          <Icon icon={icon} className="text-5xl" />
          <CardHeader className="m-0 p-1">
            <CardTitle className="text-sm font-bold">{title}</CardTitle>
          </CardHeader>
        </Card>
      </CardContent>
    </Card>
  );
};

export default TechStackCard;
