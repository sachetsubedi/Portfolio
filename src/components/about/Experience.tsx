import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TimeStamp from "./TimeStamp";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="border-none bg-inherit shadow-none">
        <CardHeader className="p-0">
          <motion.div variants={itemVariants}>
            <CardTitle className="tracking-widest text-lg font-semibold text-gray-800 dark:text-gray-200">
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="pt-7">
          <motion.div variants={containerVariants}>
            {experiences.map((experience, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TimeStamp
                  title={experience.title}
                  description={experience.description}
                  startDate={experience.starDate}
                  titlePreview={{ url: experience.titlePreview?.url || "" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Experience;
