import { projects } from "@/lib/data";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import ProjectCard from "./ProjectCard";

const Projects: FC<{ hidden: boolean }> = ({ hidden }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "backOut" }
    }
  };

  // Group projects by category or type
  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  if (hidden) return null;

  return (
    <motion.div
      className="relative min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Stats Overview */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        variants={sectionVariants}
      >
        <motion.div variants={statsVariants}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/10 border border-blue-200/30 dark:border-purple-700/40 backdrop-blur-sm group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <CardContent className="p-8 text-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.02] to-purple-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Icon */}
              <motion.div
                className="relative z-10 mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Icon icon="solar:code-square-bold" className="text-2xl text-white" />
              </motion.div>

              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {projects.length}+
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                Projects Built
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 opacity-80">
                Full-stack applications & tools
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={statsVariants}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-green-600/5 via-emerald-600/5 to-green-600/10 border border-green-200/30 dark:border-emerald-700/40 backdrop-blur-sm group hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
            <CardContent className="p-8 text-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/[0.02] to-emerald-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Icon */}
              <motion.div
                className="relative z-10 mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Icon icon="solar:rocket-bold" className="text-2xl text-white" />
              </motion.div>

              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                {projects.filter(p => p.demoUrl).length}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                Live Demos
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 opacity-80">
                Deployed & accessible online
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={statsVariants}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-orange-600/5 via-red-600/5 to-orange-600/10 border border-orange-200/30 dark:border-red-700/40 backdrop-blur-sm group hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
            <CardContent className="p-8 text-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/[0.02] to-red-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating Icon */}
              <motion.div
                className="relative z-10 mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Icon icon="simple-icons:github" className="text-2xl text-white" />
              </motion.div>              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                {projects.filter(p => p.githubUrl).length}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                Open Source
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 opacity-80">
                Available on GitHub
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        className="mb-16"
        variants={sectionVariants}
      >
        <motion.div
          className="flex items-center gap-4 mb-8"
          variants={itemVariants}
        >
          <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
            <Icon icon="solar:star-bold" className="text-2xl text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Featured Projects
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              My most impactful and comprehensive projects
            </p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={sectionVariants}
        >
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={`featured-${idx}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <ProjectCard
                img={project.img}
                title={project.title}
                description={project.description}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
                techStacks={project.techStacks}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <motion.div
          variants={sectionVariants}
        >
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
              <Icon icon="solar:code-square-bold" className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                More Projects
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Additional projects and experiments
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={sectionVariants}
          >
            {otherProjects.map((project, idx) => (
              <motion.div
                key={`other-${idx}`}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <ProjectCard
                  img={project.img}
                  title={project.title}
                  description={project.description}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                  techStacks={project.techStacks}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
      <br /><br />
    </motion.div>
  );
};

export default Projects;
