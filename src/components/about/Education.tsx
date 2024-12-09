import { educations } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TimeStamp from "./TimeStamp";

const Education = () => {
  return (
    <Card className="bg-inherit border-none shadow-none mt-10">
      <CardHeader className="p-0">
        <CardTitle className="tracking-widest text-lg">Education</CardTitle>
        <CardContent>
          {educations.map((edu, idx) => {
            return (
              <TimeStamp
                key={idx}
                title={edu.title}
                description={edu.description}
                startDate={edu.starDate}
                endDate={edu.endDate}
                titlePreview={edu.titlePreview}
              />
            );
          })}
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default Education;
