"use client";
import ContactCard from "@/components/about/ContactCard";
import AnimatedBackground from "@/components/ui/animated-background";
import LoadingSkeleton from "@/components/ui/loading-skeleton";
import { Toaster } from "@/components/ui/sonner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ContactPage = () => {
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
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Let&apos;s connect! Whether you have a project in mind, want to collaborate,
                        or just want to say hello, I&apos;d love to hear from you.
                    </motion.p>
                </motion.div>

                {/* Contact Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <ContactCard hidden={false} />
                </motion.div>
            </div>

            <Toaster />
        </motion.div>
    );
};

export default ContactPage;
