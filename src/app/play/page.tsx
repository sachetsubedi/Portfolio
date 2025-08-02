"use client";
import GameCard from "@/components/games/GameCard";
import { Card, CardContent } from "@/components/ui/card";
import { games } from "@/lib/games";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  return (
    <motion.div
      className="container mx-auto px-4 py-8 pt-24 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon
            icon="solar:gameboy-bold"
            className="text-4xl sm:text-5xl text-orange-500"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Games
          </h1>
        </motion.div>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Interactive games built with modern web technologies. Challenge yourself and have fun!
        </motion.p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
      >
        <motion.div variants={statsVariants}>
          <Card className="bg-gradient-to-br from-orange-600/5 to-red-600/10 border border-orange-200/30 dark:border-red-700/40 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {games.length}
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Games Available
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={statsVariants}>
          <Card className="bg-gradient-to-br from-blue-600/5 to-purple-600/10 border border-blue-200/30 dark:border-purple-700/40 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                100%
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Browser Based
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={statsVariants}>
          <Card className="bg-gradient-to-br from-green-600/5 to-emerald-600/10 border border-green-200/30 dark:border-emerald-700/40 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                Free
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                To Play
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Games Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {games.map((game) => (
          <motion.div
            key={game.name}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <GameCard {...game} />
          </motion.div>
        ))}
      </motion.div>

      {/* Coming Soon Section */}
      <motion.div
        className="mt-16 text-center"
        variants={itemVariants}
      >
        <Card className="bg-gradient-to-br from-purple-600/5 to-pink-600/10 border border-purple-200/30 dark:border-pink-700/40">
          <CardContent className="p-8">
            <Icon
              icon="solar:rocket-bold"
              className="text-4xl text-purple-500 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              More Games Coming Soon!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Stay tuned for more exciting games. I&apos;m constantly working on new projects to challenge and entertain you.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Page;
