"use client";
import { motion } from "framer-motion";

const LoadingSkeleton = () => {
    const shimmer = {
        animate: {
            x: [-100, 100],
            transition: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="w-full lg:w-1/2 px-4 space-y-8 mt-24">
            {/* Header skeleton */}
            <div className="text-center mb-12">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        variants={shimmer}
                        animate="animate"
                    />
                </div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto w-3/4 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        variants={shimmer}
                        animate="animate"
                    />
                </div>
            </div>

            {/* Tabs skeleton */}
            <div className="flex justify-center space-x-4 mb-8">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            variants={shimmer}
                            animate="animate"
                        />
                    </div>
                ))}
            </div>

            {/* Content skeleton */}
            <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-3">
                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                variants={shimmer}
                                animate="animate"
                            />
                        </div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                variants={shimmer}
                                animate="animate"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoadingSkeleton;
