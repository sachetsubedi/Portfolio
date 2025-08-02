import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { FC } from "react";

const TechStackCardV2: FC<{
    icon: string;
    title: string;
}> = ({ icon, title }) => {
    const cardVariants = {
        initial: {
            scale: 1,
            y: 0
        },
        hover: {
            scale: 1.05,
            y: -3,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        initial: {
            scale: 1,
            rotate: 0
        },
        hover: {
            scale: 1.1,
            rotate: 3,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="group cursor-pointer"
            whileHover="hover"
            initial="initial"
            whileTap={{ scale: 0.98 }}
        >
            <motion.div
                variants={cardVariants}
                className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 min-w-[100px] max-w-[120px]"
            >
                {/* Icon */}
                <motion.div
                    variants={iconVariants}
                    className="mb-3"
                >
                    <Icon
                        icon={icon}
                        className="text-4xl text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    />
                </motion.div>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
                >
                    {title}
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default TechStackCardV2;
