import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
    tooltip?: string;
    iconText?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={idx}
          target="_blank"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={(e) => {
            if (!item.link) e.preventDefault();
          }}
        >
          <Tooltip delayDuration={10}>
            <TooltipTrigger className="pb-0 p-0 h-fit w-fit flex justify-center items-center">
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-xl "
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                {!item.icon && (
                  <>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </>
                )}
                <div className="flex justify-center items-center gap-2">
                  {item.icon}{" "}
                  {item.iconText && (
                    <span className="font-bold text-sm mr-1">
                      {item.iconText || ""}
                    </span>
                  )}
                </div>
              </Card>
            </TooltipTrigger>
            {!item.link && (
              <TooltipContent className="font-bold flex items-center justify-center gap-2">
                <Icon icon="typcn:warning" fontSize={15} />
                Not available
              </TooltipContent>
            )}
            {item.tooltip && item.link && (
              <TooltipContent className="font-bold  flex items-center justify-center gap-2">
                {item.tooltip}
              </TooltipContent>
            )}
          </Tooltip>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full  overflow-hidden bg-white border-2 border-black dark:bg-black   dark:border-white/[0.2]  relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold  mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-8 text-zinc-400  leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
