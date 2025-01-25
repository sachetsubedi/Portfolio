import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import ContactIcons from "./ContactIcons";
import IconGlobe from "./IconGlobe";

const Greeting = () => {
  return (
    <div className="flex justify-between items-center gap-24 p-5 md:p-0">
      <div className="left text-4xl font-extrabold">
        <div className="flex gap-2">
          Hi, I&apos;m Sachet Subedi
          <motion.div
            className=" w-fit"
            whileHover={{
              rotate: [0, 30, 0], // Rotate to 360 degrees and back to 0
            }}
            transition={{
              duration: 0.5,
            }}
          >
            👋
          </motion.div>
        </div>
        <br />
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
