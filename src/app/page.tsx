"use client";
import ContactIcons from "@/components/landing/ContactIcons";
import IconGlobe from "@/components/landing/IconGlobe";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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

  const greetingData = ["H", "i"];
  const restGreetingData = [",", "", "I", "'", "m"];
  const nameData = ["S", "a", "c", "h", "e", "t", "", "S", "u", "b", "e", "d", "i"];

  return (
    <BackgroundBeamsWithCollision className="min-h-screen">
      <motion.div
        className="container mx-auto px-4 py-8 h-full flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Main Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Animated Name */}
            <div className="space-y-4">
              {/* First Line: Hi, I'm */}
              <div className="flex items-center gap-1 sm:gap-2 mt-10">
                {/* Hi */}
                {greetingData.map((char, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.2,
                      color: "#7c3aed",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char || "\u00A0"}
                  </motion.span>
                ))}

                {/* Emoji after Hi */}
                <motion.span
                  className="text-2xl sm:text-4xl md:text-6xl ml-2"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  whileHover={{ rotate: [0, 20, -20, 0] }}
                >
                  👋
                </motion.span>

                {/* , I'm */}
                {restGreetingData.map((char, index) => (
                  <motion.span
                    key={index + greetingData.length + 1}
                    className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + greetingData.length + 1) * 0.05 }}
                    whileHover={{
                      scale: 1.2,
                      color: "#7c3aed",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char || "\u00A0"}
                  </motion.span>
                ))}
              </div>

              {/* Second Line: Sachet Subedi */}
              <div className="flex items-center gap-1 sm:gap-2 -mt-2">
                {nameData.map((char, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + greetingData.length + restGreetingData.length + 1) * 0.05 }}
                    whileHover={{
                      scale: 1.2,
                      color: "#7c3aed",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char || "\u00A0"}
                  </motion.span>
                ))}
              </div>

              <motion.h2
                className="text-lg sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Full-Stack Developer & Creative Problem Solver
              </motion.h2>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                I build things for the web. Passionate about creating exceptional digital experiences
                with modern technologies, clean code, and innovative solutions.
              </motion.p>
            </div>

            {/* Contact Icons */}
            <motion.div variants={itemVariants}>
              <ContactIcons />
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold tracking-wide w-full sm:w-auto"
                >
                  <Icon icon="solar:user-bold" className="mr-2" />
                  About Me
                </Button>
              </Link>
              <Link href="/play">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold tracking-wide w-full sm:w-auto"
                >
                  <Icon icon="solar:gameboy-bold" className="mr-2" />
                  Play Games
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Globe */}
          <motion.div
            className="hidden lg:flex justify-center"
            variants={itemVariants}
          >
            <IconGlobe />
          </motion.div>
        </div>

        {/* Quick Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
        >
          <motion.div variants={statsVariants}>
            <Card className="bg-gradient-to-br from-blue-600/5 to-purple-600/10 border border-blue-200/30 dark:border-purple-700/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  3+
                </motion.div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Years Experience
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={statsVariants}>
            <Card className="bg-gradient-to-br from-green-600/5 to-emerald-600/10 border border-green-200/30 dark:border-emerald-700/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  20+
                </motion.div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Projects Built
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={statsVariants}>
            <Card className="bg-gradient-to-br from-orange-600/5 to-red-600/10 border border-orange-200/30 dark:border-red-700/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                >
                  10+
                </motion.div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Technologies
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={statsVariants}>
            <Card className="bg-gradient-to-br from-purple-600/5 to-pink-600/10 border border-purple-200/30 dark:border-pink-700/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <motion.div
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  24/7
                </motion.div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Available
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </BackgroundBeamsWithCollision>
  );
}
