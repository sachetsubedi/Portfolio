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
  return (
    <Card className="border-none shadow-none bg-inherit  gap-3 md:gap-10 grid grid-cols-12">
      <div className="col-span-0 md:col-span-4 ">
        <CardTitle
          className={`hidden md:flex tracking-widest text-sm md:text-lg col `}
        >
          {startDate} - {endDate ?? "Present"}
        </CardTitle>
      </div>
      <div className="col-span-12 md:col-span-8 ">
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

        <CardTitle className="tracking-widest text-sm md:text-lg mt-3 md:hidden">
          {startDate} - {endDate ?? "Present"}
        </CardTitle>
      </div>
    </Card>
  );
};

export default TimeStamp;
