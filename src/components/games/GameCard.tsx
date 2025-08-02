"use client";
import { T_Game } from "@/lib/games";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const GameCard: FC<T_Game> = ({ img, name, url, slug }) => {
  const router = useRouter();

  return (
    <Card className="bg-gradient-to-br from-orange-600/5 to-red-600/10 border border-orange-200/30 dark:border-red-700/40 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
      <CardContent className="p-0">
        <motion.div
          onClick={() => {
            router.push(`/play/${slug}`);
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="h-full"
        >
          {/* Game Image */}
          <div className="relative overflow-hidden rounded-t-xl">
            <Image
              src={img}
              alt={name}
              width={400}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Play Icon Overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="bg-orange-500 rounded-full p-4 shadow-lg">
                <Icon icon="solar:play-bold" className="text-2xl text-white" />
              </div>
            </motion.div>
          </div>

          {/* Game Info */}
          <div className="p-6">
            <div className="flex justify-between items-center">
              <motion.h3
                className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {name}
              </motion.h3>

              <Tooltip delayDuration={0}>
                <TooltipTrigger
                  className="z-10 p-2 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link href={url} target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon
                        icon="solar:global-bold"
                        className="text-2xl text-orange-500 hover:text-orange-600 transition-colors duration-200"
                      />
                    </motion.div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="font-bold bg-orange-500 text-white border-orange-600">
                  Play on Website
                </TooltipContent>
              </Tooltip>
            </div>

            <motion.p
              className="text-sm text-gray-600 dark:text-gray-400 mt-2"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              Click to play this interactive game
            </motion.p>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
