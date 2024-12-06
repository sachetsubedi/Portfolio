import { techStack } from "@/lib/data";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TechStackCard from "./TechStackCard";

const TechStack: FC<{ hidden: boolean }> = ({ hidden }) => {
  return (
    <div hidden={hidden}>
      <Card className="bg-transparent border-none mt-10 shadow-none ">
        <CardContent className="p-0 ">
          {techStack.map((stack) => {
            return (
              <div key={stack.topic}>
                <CardHeader>
                  <CardTitle className="text-lg r">{stack.topic}</CardTitle>
                </CardHeader>
                <div className="flex flex-wrap justify-center lg:justify-normal">
                  {stack.items.map((item) => {
                    return (
                      <TechStackCard
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default TechStack;
