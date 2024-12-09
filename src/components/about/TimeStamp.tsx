"use client";
import useResponsive from "@/hooks/useResponsive";
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
  const { screen } = useResponsive();
  console.log(screen);
  return (
    <Card className="border-none shadow-none bg-inherit flex flex-col md:flex-row gap-3 md:gap-10 ">
      <div>
        {screen !== "sm" && screen !== "xs" && (
          <CardTitle className="tracking-widest text-sm md:text-lg">
            {startDate} - {endDate ?? "Present"}
          </CardTitle>
        )}
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

        {(screen == "sm" || "xs") && (
          <CardTitle className="tracking-widest text-sm md:text-lg mt-3">
            {startDate} - {endDate ?? "Present"}
          </CardTitle>
        )}
      </div>
    </Card>
  );
};

export default TimeStamp;
