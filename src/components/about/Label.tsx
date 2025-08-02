"use client";
import { motion } from "framer-motion";
import { FC } from "react";

const Label: FC<{ color: string; title: string }> = ({ color, title }) => {
  return (
    <motion.div
      className={`px-3 py-1 rounded-full text-xs font-medium text-white shadow-md ${color} hover:shadow-lg transition-shadow duration-200`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {title}
    </motion.div>
  );
};

export default Label;
