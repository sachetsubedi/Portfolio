"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const FloatingSkills = () => {
    const skills = [
        { icon: "logos:react", position: { top: "10%", left: "10%" } },
        { icon: "logos:typescript-icon", position: { top: "20%", right: "15%" } },
        { icon: "logos:nextjs-icon", position: { bottom: "30%", left: "5%" } },
        { icon: "logos:nodejs-icon", position: { top: "60%", right: "10%" } },
        { icon: "logos:tailwindcss-icon", position: { bottom: "20%", right: "20%" } },
        { icon: "logos:mongodb-icon", position: { top: "40%", left: "15%" } }
    ];

    return (
        <div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden opacity-20 dark:opacity-10">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    className="absolute text-4xl"
                    style={skill.position}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                    }}
                >
                    <Icon icon={skill.icon} />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingSkills;
