import { Icon } from "@iconify/react/dist/iconify.js";
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
              initial={{ opacity: 0, y: 20 }}
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
                opacity: 1,
                y: 0,
              }}
            >
              {!char ? <span>&nbsp;</span> : char}
            </motion.div>
          ))}
          <motion.div
            className=" w-fit ml-2"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{
              rotate: [0, 30, 0],
            }}
            transition={{
              duration: 0.5,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              y: 0,
            }}
          >
            👋
          </motion.div>
        </div>
        <motion.div
          className="cursor-default text-[25px] md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            rotate: 0,
            skew: 0,
            scale: 1,
            opacity: 1,
            y: 0,
          }}
        >
          <span className="text-sm font-bold ">
            I build things for the web.
          </span>
          <ContactIcons></ContactIcons>
          <div className="flex items-center">
            <Link href={"/about"} className="p-2 md:p-0">
              <Button
                variant={"outline"}
                className="font-bold tracking-wider ml-2"
              >
                About Me
              </Button>
            </Link>
            <Link href={"/play"} className="p-2 md:p-0">
              <Button
                variant={"outline"}
                className="font-bold tracking-wider ml-2 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white"
              >
                <Icon icon="icon-park-solid:game-ps" width="48" height="48" />
                Play
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className={`hidden md:block`}>
        <IconGlobe></IconGlobe>
      </div>
    </div>
  );
};

export default Greeting;
