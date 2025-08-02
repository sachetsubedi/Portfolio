import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { FC } from "react";
import Education from "./Education";
import Experience from "./Experience";

const OverviewCard: FC<{ hidden: boolean }> = ({ hidden }) => {
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

  if (hidden) return null;

  return (
    <motion.div
      className="relative min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Introduction */}
      <motion.div
        className="mb-16"
        variants={sectionVariants}
      >
        <div className="text-center mb-12">
          {/* Simple Avatar */}
          <motion.div
            className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Icon icon="solar:user-bold" className="text-3xl text-white" />
          </motion.div>

          {/* Clean Text Introduction */}
          <motion.div
            variants={itemVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I&apos;m{" "}
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Sachet Subedi
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A passionate full-stack developer who loves crafting clean, efficient code and building creative digital solutions. From interactive front-end designs to robust back-end systems, I enjoy turning ideas into reality.
            </motion.p>
          </motion.div>
        </div>

        {/* Simple Stats Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          variants={sectionVariants}
        >
          <motion.div variants={statsVariants} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Years Experience
            </p>
          </motion.div>

          <motion.div variants={statsVariants} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Projects Completed
            </p>
          </motion.div>

          <motion.div variants={statsVariants} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Full Stack
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Developer
            </p>
          </motion.div>
        </motion.div>
      </motion.div>      {/* Main Content - Vertical Layout */}
      <div className="space-y-16">
        {/* Experience Section */}
        <motion.div
          variants={sectionVariants}
        >
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Icon icon="solar:case-bold" className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Experience
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Professional journey and roles
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Experience />
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={sectionVariants}
        >
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
              <Icon icon="solar:graduation-square-bold" className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Education
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Academic background and learning
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Education />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OverviewCard;
