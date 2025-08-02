"use client";
import OverviewCard from "@/components/about/OverviewCard";
import AnimatedBackground from "@/components/ui/animated-background";
import LoadingSkeleton from "@/components/ui/loading-skeleton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex justify-center min-h-screen">
        <LoadingSkeleton />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1 }
    }
  };

  return (
    <motion.div
      className="min-h-screen pt-24 pb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12 mt-8"
          variants={headerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know me better. My journey, experiences, and what drives me
            as a developer and creative problem solver.
          </motion.p>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <OverviewCard hidden={false} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
