"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const pathname = usePathname();

  return (
    <div className="sticky top-0 left-0 z-[100] bg-inherit h-16 ">
      {pathname != "/" && (
        <Link href="/">
          <Tooltip delayDuration={10}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-3 left-5 z-[1000000] h-9"
              >
                <Icon icon="solar:home-2-linear" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-bold z-[1000000]">
              Home
            </TooltipContent>
          </Tooltip>
        </Link>
      )}
      {pathname != "/" && (
        <Link href="/play" className="absolute left-16">
          <Tooltip delayDuration={10}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-3 left-5 z-[1000000] h-9 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              >
                <Icon icon="icon-park-solid:game-ps" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="font-bold z-[1000000]">
              Games
            </TooltipContent>
          </Tooltip>
        </Link>
      )}
      <DropdownMenu>
        <Tooltip delayDuration={10}>
          <TooltipTrigger
            asChild
            className="absolute top-3 right-5 md:right-10  z-[1000000]"
          >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className="font-bold z-[1000000]">
            Theme
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end" className="z-[1000000]">
          <DropdownMenuItem
            className={`font-bold cursor-pointer ${
              theme === "light" ? "bg-accent" : ""
            }`}
            onClick={() => setTheme("light")}
          >
            <Icon icon="solar:sun-2-linear" width="24" height="24" />
            Burn my eyes
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`font-bold cursor-pointer ${
              theme === "dark" ? " dark:bg-accent" : ""
            }`}
            onClick={() => setTheme("dark")}
          >
            <Icon icon="solar:moon-line-duotone" width="24" height="24" />
            Peace
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`font-bold cursor-pointer ${
              theme === "system" ? " dark:bg-accent" : ""
            }`}
            onClick={() => setTheme("system")}
          >
            <Icon
              icon="solar:monitor-smartphone-linear"
              width="24"
              height="24"
            />
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
