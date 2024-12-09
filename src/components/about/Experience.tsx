import { experiences } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TimeStamp from "./TimeStamp";

const Experience = () => {
  return (
    <div className="mt-10">
      <Card className="border-none bg-inherit shadow-none">
        <CardHeader className="p-0 ">
          <CardTitle className="tracking-widest text-lg">Experience</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pt-7">
          {experiences.map((experience, idx) => {
            return (
              <TimeStamp
                key={idx}
                title={experience.title}
                description={experience.description}
                startDate={experience.starDate}
                titlePreview={{ url: experience.titlePreview?.url || "" }}
              />
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
