import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import ContactIcons from "./ContactIcons";
import IconGlobe from "./IconGlobe";

const nameData = [
  "H",
  "i",
  ",",
  "",
  "I",
  "'",
  "m",
  "",
  "S",
  "a",
  "c",
  "h",
  "e",
  "t",
  "",
  "S",
  "u",
  "b",
  "e",
  "d",
  "i",
];

const Greeting = () => {
  return (
    <div className="flex justify-between items-center gap-24 md:p-0">
      <div className="left text-4xl font-extrabold">
        <div className="flex">
          {nameData.map((char, index) => (
            <motion.div
              key={index}
              className="cursor-default text-[25px] md:text-4xl"
              whileHover={{
                skew: [0, -10, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
                transition: {
                  duration: 0.5,
                },
              }}
              animate={{
                rotate: 0,
                skew: 0,
                scale: 1,
              }}
            >
              {!char ? <span>&nbsp;</span> : char}
            </motion.div>
          ))}
          <motion.div
            className=" w-fit ml-2"
            whileHover={{
              rotate: [0, 30, 0], // Rotate to 360 degrees and back to 0
            }}
            transition={{
              duration: 0.5,
            }}
            animate={{
              rotate: 0,
            }}
          >
            👋
          </motion.div>
        </div>
        <span className="text-sm font-bold ">I build things for the web.</span>
        <ContactIcons></ContactIcons>
        <div>
          <Link href={"/about"} className="p-2 md:p-0">
            <Button variant={"outline"} className="font-bold tracking-wider">
              About Me
            </Button>
          </Link>
        </div>
      </div>
      <div className={`hidden md:block`}>
        <IconGlobe></IconGlobe>
      </div>
    </div>
  );
};

export default Greeting;
