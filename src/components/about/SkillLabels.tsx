import { motion } from "framer-motion";
import { FC } from "react";
import Label from "./Label";

const SkillLabels: FC<{
  items: {
    title: string;
    color: string;
  }[];
}> = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="flex gap-2 flex-wrap mt-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          variants={labelVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Label color={item.color} title={item.title} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillLabels;
