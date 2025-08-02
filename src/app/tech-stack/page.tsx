"use client";
import TechStack from "@/components/about/TechStack";
import AnimatedBackground from "@/components/ui/animated-background";
import LoadingSkeleton from "@/components/ui/loading-skeleton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TechStackPage = () => {
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
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Tech Stack
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        The technologies, frameworks, and tools I use to bring ideas to life.
                        From frontend to backend, here&apos;s my arsenal of development skills.
                    </motion.p>
                </motion.div>

                {/* Tech Stack Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <TechStack hidden={false} />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TechStackPage;
