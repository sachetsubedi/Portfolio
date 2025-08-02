"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SkillLabels from "./SkillLabels";

const ProjectCard: FC<{
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  img: string;
  techStacks: { title: string; color: string }[];
}> = ({ title, description, demoUrl, githubUrl, img, techStacks }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.1 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="overflow-hidden bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-shadow duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <motion.div
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              className="relative aspect-video"
            >
              <Image
                src={img || ""}
                alt={title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center"
                  >
                    <motion.div
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex gap-4"
                    >
                      {githubUrl && (
                        <motion.a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-lg font-medium shadow-lg"
                        >
                          <Icon icon="mdi:github" className="text-xl" />
                          Code
                        </motion.a>
                      )}
                      {demoUrl && (
                        <motion.a
                          href={demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg"
                        >
                          <Icon icon="mdi:external-link" className="text-xl" />
                          Demo
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <CardHeader className="p-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                  </CardTitle>
                </motion.div>
              </CardHeader>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <CardContent className="p-0">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {description}
                  </p>
                </CardContent>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <SkillLabels items={techStacks} />
              </motion.div>
            </div>

            {/* Action Buttons - Mobile only */}
            <motion.div
              className="flex gap-3 md:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors duration-200 flex-1 justify-center"
                >
                  <Icon icon="mdi:github" className="text-lg" />
                  Code
                </motion.a>
              )}
              {demoUrl && (
                <motion.a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 flex-1 justify-center"
                >
                  <Icon icon="mdi:external-link" className="text-lg" />
                  Demo
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
