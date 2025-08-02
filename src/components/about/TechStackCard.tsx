import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

const TechStackCard: FC<{
  icon: string;
  title: string;
}> = ({ icon, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 8px 25px rgba(147, 51, 234, 0.25)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    initial: {
      scale: 1,
      rotate: 0
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const shimmerVariants = {
    animate: {
      x: [-100, 100],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      className="group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover="hover"
      initial="initial"
    >
      <Card className="border-none bg-transparent shadow-none p-1">
        <CardContent className="p-0">
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl w-20 h-20 flex flex-col items-center justify-center group-hover:border-purple-400/50 dark:group-hover:border-purple-500/50 transition-colors duration-300"
          >
            {/* Shimmer/Shine effect */}
            {isHovered && (
              <motion.div
                variants={shimmerVariants}
                animate="animate"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/30 dark:via-purple-400/20 to-transparent"
                style={{ width: '200%', left: '-100%' }}
              />
            )}

            {/* Floating bubbles effect */}
            {isHovered && (
              <>
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: Math.random() * 60 - 30,
                      y: Math.random() * 60 - 30
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: -20,
                      x: Math.random() * 20 - 10
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 0.8
                    }}
                  />
                ))}
              </>
            )}

            {/* Icon */}
            <motion.div
              variants={iconVariants}
              className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 mb-1 z-10"
            >
              <Icon icon={icon} />
            </motion.div>

            {/* Title */}
            <CardTitle className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 text-center leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 z-10">
              {title}
            </CardTitle>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TechStackCard;
