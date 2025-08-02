"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface SkillProgressProps {
    skills: Array<{
        name: string;
        level: number; // 0-100
        color?: string;
    }>;
    title: string;
}

const SkillProgress: FC<SkillProgressProps> = ({ skills, title }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    const progressVariants = {
        hidden: { width: 0 },
        visible: (level: number) => ({
            width: `${level}%`,
            transition: { duration: 1, delay: 0.3, ease: "easeOut" }
        })
    };

    return (
        <motion.div
            className="bg-white/5 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/30"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h3
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4"
                variants={itemVariants}
            >
                {title}
            </motion.h3>

            <div className="space-y-4">
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="space-y-2"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill.name}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {skill.level}%
                            </span>
                        </div>

                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full bg-gradient-to-r ${skill.color || "from-blue-600 to-purple-600"
                                    } rounded-full`}
                                variants={progressVariants}
                                custom={skill.level}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillProgress;
