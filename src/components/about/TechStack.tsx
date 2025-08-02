import { techStack } from "@/lib/data";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import FloatingSkills from "../ui/floating-skills";
import TechStackCard from "./TechStackCard";

const TechStack: FC<{ hidden: boolean }> = ({ hidden }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  // Helper functions for category icons and descriptions
  const getCategoryIcon = (topic: string): string => {
    const iconMap: Record<string, string> = {
      "Languages": "solar:code-bold",
      "Frameworks and Libraries": "solar:widget-bold",
      "Database amd ORM": "solar:database-bold",
      "Hosting and SAAS": "solar:cloud-bold"
    };
    return iconMap[topic] || "solar:settings-bold";
  };

  const getCategoryDescription = (topic: string): string => {
    const descMap: Record<string, string> = {
      "Languages": "Core programming languages I work with",
      "Frameworks and Libraries": "Modern frameworks and libraries for development",
      "Database amd ORM": "Database technologies and object-relational mapping",
      "Hosting and SAAS": "Cloud platforms and hosting solutions"
    };
    return descMap[topic] || "Technologies and tools";
  };

  if (hidden) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen"
    >
      <FloatingSkills />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

        {/* Left Column - Tech Categories */}
        <motion.div
          className="lg:col-span-2 space-y-12"
          variants={sectionVariants}
        >
          {techStack.map((stack, stackIndex) => (
            <motion.div
              key={stack.topic}
              variants={sectionVariants}
              className="relative"
            >
              {/* Category Header with Icon */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                variants={itemVariants}
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Icon
                    icon={getCategoryIcon(stack.topic)}
                    className="text-2xl text-white"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {stack.topic}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {getCategoryDescription(stack.topic)}
                  </p>
                </div>
              </motion.div>

              {/* Tech Cards in Responsive Grid */}
              <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
                variants={sectionVariants}
              >
                {stack.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    custom={itemIndex}
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -1, 1, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <TechStackCard icon={item.icon} title={item.title} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Animated Divider */}
              {stackIndex < techStack.length - 1 && (
                <motion.div
                  className="flex justify-center mt-12"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: stackIndex * 0.5
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column - Skills Dashboard */}
        <motion.div
          className="space-y-8"
          variants={sectionVariants}
        >
          {/* Proficiency Overview */}
          <motion.div
            variants={itemVariants}
            className="sticky top-8"
          >
            <Card className="bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <Icon icon="solar:code-2-bold" className="text-white text-xl" />
                  </div>
                  <CardTitle className="text-xl">Development Focus</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Experience Timeline */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Experience Areas</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Frontend Development (3+ years)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Projects (2+ years)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Modern Web Technologies</span>
                    </div>
                  </div>
                </div>

                {/* Current Focus */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Currently Exploring</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML Integration", "DevOps", "System Design"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/20 dark:border-purple-700/30 rounded-full text-xs text-gray-600 dark:text-gray-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Card */}
          <motion.div variants={itemVariants} className="sticky top-[28rem]">
            <Card className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-200/20 dark:border-purple-700/30">
              <CardContent className="p-6 text-center">
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {techStack.reduce((total, stack) => total + stack.items.length, 0)}+
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Technologies Mastered
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Facts */}
          <motion.div variants={itemVariants} className="sticky top-[37rem]">
            <Card className="bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon icon="solar:star-bold" className="text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-400">3+ years of experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="solar:rocket-bold" className="text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-400">Full-stack developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="solar:heart-bold" className="text-red-500" />
                    <span className="text-gray-600 dark:text-gray-400">Passionate about clean code</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechStack;