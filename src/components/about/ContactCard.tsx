import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

const ContactCard: FC<{ hidden: boolean }> = ({ hidden }) => {
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
      {/* Contact Stats Overview */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        variants={sectionVariants}
      >
        <motion.div variants={statsVariants}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-blue-600/10 border border-blue-200/30 dark:border-purple-700/40 backdrop-blur-sm group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <CardContent className="p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.02] to-purple-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="relative z-10 mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Icon icon="solar:chat-round-bold" className="text-2xl text-white" />
              </motion.div>

              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                24h
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                Response Time
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 opacity-80">
                I reply quickly to messages
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={statsVariants}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-green-600/5 via-emerald-600/5 to-green-600/10 border border-green-200/30 dark:border-emerald-700/40 backdrop-blur-sm group hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
            <CardContent className="p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/[0.02] to-emerald-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="relative z-10 mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Icon icon="solar:global-bold" className="text-2xl text-white" />
              </motion.div>

              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                Global
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                Availability
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 opacity-80">
                Open to remote opportunities
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={statsVariants}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-orange-600/5 via-red-600/5 to-orange-600/10 border border-orange-200/30 dark:border-red-700/40 backdrop-blur-sm group hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
            <CardContent className="p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/[0.02] to-red-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="relative z-10 mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <Icon icon="solar:users-group-two-rounded-bold" className="text-2xl text-white" />
              </motion.div>              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                Ready
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-lg">
                To Collaborate
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 opacity-80">
                Let&apos;s work together!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Main Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <motion.div
          variants={sectionVariants}
        >
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Icon icon="solar:letter-bold" className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Send a Message
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drop me a line and let&apos;s start something amazing
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>
        </motion.div>

        {/* Contact Links Section */}
        <motion.div
          variants={sectionVariants}
        >
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
              <Icon icon="solar:link-bold" className="text-2xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Connect With Me
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Find me on these platforms and social networks
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactLinks />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
