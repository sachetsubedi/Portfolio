import { educations } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TimeStamp from "./TimeStamp";

const Education = () => {
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="bg-inherit border-none shadow-none mt-10">
        <CardHeader className="p-0">
          <motion.div variants={itemVariants}>
            <CardTitle className="tracking-widest text-lg font-semibold text-gray-800 dark:text-gray-200">
            </CardTitle>
          </motion.div>
          <CardContent className="px-0">
            <motion.div variants={containerVariants}>
              {educations.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <TimeStamp
                    title={edu.title}
                    description={edu.description}
                    startDate={edu.starDate}
                    endDate={edu.endDate}
                    titlePreview={edu.titlePreview}
                  />
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default Education;
