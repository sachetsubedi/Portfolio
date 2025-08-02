"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { FC } from "react";

const TabItem: FC<{ icon: string; label: string }> = ({ icon, label }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-2 items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon icon={icon} className="text-2xl" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default TabItem;
