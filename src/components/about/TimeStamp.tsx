import { FC } from "react";
import { Card, CardTitle } from "../ui/card";
import { LinkPreview } from "../ui/links-preview";

const TimeStamp: FC<{
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
  titlePreview?: { url: string };
}> = ({ description, endDate, startDate, title, titlePreview }) => {
  return (
    <Card className="border-none shadow-none bg-inherit flex gap-10">
      <div>
        <CardTitle className="tracking-widest text-lg">
          {startDate} - {endDate ?? "Present"}
        </CardTitle>
      </div>
      <div>
        <CardTitle className="tracking-widest text-lg">
          {!titlePreview?.url ? (
            title
          ) : (
            <>
              <LinkPreview url={titlePreview?.url || ""}>{title}</LinkPreview>
            </>
          )}
        </CardTitle>
        <div>{description}</div>
      </div>
    </Card>
  );
};

export default TimeStamp;
