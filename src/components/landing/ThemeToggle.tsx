"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      icon: "solar:home-2-bold",
      label: "Home",
      isActive: pathname === "/",
    },
    {
      href: "/about",
      icon: "solar:user-bold",
      label: "About",
      isActive: pathname === "/about",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      href: "/projects",
      icon: "solar:code-square-bold",
      label: "Projects",
      isActive: pathname === "/projects",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      href: "/tech-stack",
      icon: "solar:programming-bold",
      label: "Tech",
      isActive: pathname === "/tech-stack",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      href: "/contact",
      icon: "solar:phone-bold",
      label: "Contact",
      isActive: pathname === "/contact",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      href: "/play",
      icon: "solar:gameboy-bold",
      label: "Play",
      isActive: pathname.startsWith("/play"),
      gradient: "from-orange-600 to-red-600",
    },
  ];

  // Mobile view - show only essential items + hamburger menu
  const mobileEssentialItems = navItems.filter(item =>
    item.href === "/" || item.href === "/about" || item.href === "/play"
  );

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center">
        <motion.div
          className="w-fit"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/40 shadow-lg">
            <motion.div
              className="flex items-center gap-2 p-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Navigation Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link href={item.href}>
                    <Button
                      variant={item.isActive ? "default" : "ghost"}
                      size="sm"
                      className={`h-10 px-4 transition-all duration-300 ${item.isActive
                        ? item.gradient
                          ? `bg-gradient-to-r ${item.gradient} text-white hover:shadow-lg`
                          : "bg-gradient-to-r from-gray-600 to-gray-700 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                    >
                      <Icon icon={item.icon} className="text-lg" />
                      <span className="ml-2 font-medium">{item.label}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600 mx-2" />

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-10 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                    >
                      <Icon
                        icon="solar:sun-2-bold"
                        className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                      />
                      <Icon
                        icon="solar:moon-bold"
                        className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                      />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      className={`font-medium cursor-pointer transition-colors duration-200 ${theme === "light" ? "bg-accent" : ""
                        }`}
                      onClick={() => setTheme("light")}
                    >
                      <Icon icon="solar:sun-2-bold" className="mr-3 text-orange-500" />
                      Burn My Eyes
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`font-medium cursor-pointer transition-colors duration-200 ${theme === "dark" ? "bg-accent" : ""
                        }`}
                      onClick={() => setTheme("dark")}
                    >
                      <Icon icon="solar:moon-bold" className="mr-3 text-purple-500" />
                      Peace
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`font-medium cursor-pointer transition-colors duration-200 ${theme === "system" ? "bg-accent" : ""
                        }`}
                      onClick={() => setTheme("system")}
                    >
                      <Icon
                        icon="solar:monitor-smartphone-bold"
                        className="mr-3 text-blue-500"
                      />
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-4 left-4 right-4 z-50 flex md:hidden justify-center">
        <motion.div
          className="w-full max-w-sm"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/40 shadow-lg">
            <motion.div
              className="flex items-center justify-between p-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Essential Navigation Items */}
              <div className="flex items-center gap-1">
                {mobileEssentialItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <Link href={item.href}>
                      <Button
                        variant={item.isActive ? "default" : "ghost"}
                        size="sm"
                        className={`h-9 px-2 transition-all duration-300 ${item.isActive
                          ? item.gradient
                            ? `bg-gradient-to-r ${item.gradient} text-white hover:shadow-lg`
                            : "bg-gradient-to-r from-gray-600 to-gray-700 text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                      >
                        <Icon icon={item.icon} className="text-base" />
                        <span className="ml-1 text-sm font-medium">{item.label}</span>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right side controls */}
              <div className="flex items-center gap-1">
                {/* Theme Toggle */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                    >
                      <Icon
                        icon="solar:sun-2-bold"
                        className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                      />
                      <Icon
                        icon="solar:moon-bold"
                        className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                      />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      className={`font-medium cursor-pointer transition-colors duration-200 ${theme === "light" ? "bg-accent" : ""
                        }`}
                      onClick={() => setTheme("light")}
                    >
                      <Icon icon="solar:sun-2-bold" className="mr-3 text-orange-500" />
                      Burn My Eyes
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`font-medium cursor-pointer transition-colors duration-200 ${theme === "dark" ? "bg-accent" : ""
                        }`}
                      onClick={() => setTheme("dark")}
                    >
                      <Icon icon="solar:moon-bold" className="mr-3 text-purple-500" />
                      Peace
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className={`font-medium cursor-pointer transition-colors duration-200 ${theme === "system" ? "bg-accent" : ""
                        }`}
                      onClick={() => setTheme("system")}
                    >
                      <Icon
                        icon="solar:monitor-smartphone-bold"
                        className="mr-3 text-blue-500"
                      />
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* More Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                    >
                      <Icon icon="solar:menu-dots-bold" className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {navItems
                      .filter(item => !mobileEssentialItems.includes(item))
                      .map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link
                            href={item.href}
                            className={`flex items-center font-medium cursor-pointer transition-colors duration-200 ${item.isActive ? "bg-accent" : ""
                              }`}
                          >
                            <Icon icon={item.icon} className="mr-3 text-base" />
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
