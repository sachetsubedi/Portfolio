import { techStack } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TechStackCard from "./TechStackCard";

const TechStack = () => {
  return (
    <div>
      <Card className="bg-transparent border-none mt-10 shadow-none">
        <CardHeader>
          <CardTitle className="tracking-widest text-lg">Tech Stack</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          {techStack.map((stack) => {
            return (
              <div key={stack.topic}>
                <CardHeader>
                  <CardTitle className="text-lg">{stack.topic}</CardTitle>
                </CardHeader>
                <div className="flex flex-wrap ">
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
