"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import { Card, CardTitle } from "../ui/card";
import { LinkPreview } from "../ui/links-preview";

const TimeStamp: FC<{
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
  titlePreview?: { url: string };
}> = ({ description, endDate, startDate, title, titlePreview }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        backgroundColor: "rgba(59, 130, 246, 0.05)",
        transition: { duration: 0.2 }
      }}
      className="rounded-lg p-4 -mx-4 mb-6"
    >
      <Card className="border-none shadow-none bg-inherit gap-3 md:gap-10 grid grid-cols-12">
        <div className="col-span-0 md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <CardTitle className="hidden md:flex tracking-widest text-sm md:text-lg col-span-4 text-blue-600 dark:text-blue-400 font-medium">
              {startDate} - {endDate ?? "Present"}
            </CardTitle>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <CardTitle className="tracking-widest text-lg mb-2 text-gray-800 dark:text-gray-100">
              {!titlePreview?.url ? (
                <motion.span
                  whileHover={{ color: "#3b82f6" }}
                  transition={{ duration: 0.2 }}
                >
                  {title}
                </motion.span>
              ) : (
                <LinkPreview url={titlePreview?.url || ""}>{title}</LinkPreview>
              )}
            </CardTitle>

            <motion.div
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {description}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <CardTitle className="tracking-widest text-sm md:text-lg mt-3 md:hidden text-blue-600 dark:text-blue-400 font-medium">
                {startDate} - {endDate ?? "Present"}
              </CardTitle>
            </motion.div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TimeStamp;
