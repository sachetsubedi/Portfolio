"use client";
import { T_Game } from "@/lib/games";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const GameCard: FC<T_Game> = ({ img, name, url, slug }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/play/${slug}`);
      }}
      className="flex flex-col  gap-3 border-2 border-black dark:border-white p-5 rounded-md cursor-pointer hover:scale-[1.01] transition-transform duration-300"
    >
      <Image
        src={img}
        alt={name}
        width={300}
        height={300}
        className="rounded-lg h-36"
      />
      <div className="text-lg flex justify-between items-center">
        <div>{name}</div>
        <Tooltip delayDuration={0}>
          <TooltipTrigger className="z-10">
            <Link href={url} target="_blank">
              <Icon icon="solar:global-bold" width="24" height="24" />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="font-bold">Go To Website</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default GameCard;
