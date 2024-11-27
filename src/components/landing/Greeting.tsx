import Link from "next/link";
import { Button } from "../ui/button";
import ContactIcons from "./ContactIcons";
import IconGlobe from "./IconGlobe";

const Greeting = () => {
  return (
    <div className="flex justify-between items-center gap-24">
      <div className="left text-4xl font-extrabold">
        Hi, I&apos;m Sachet Subedi 👋
        <br />
        <span className="text-sm font-bold tracking-wider">
          I build things for the web.
        </span>
        <ContactIcons></ContactIcons>
        <div>
          <Link href={"/about"}>
            <Button variant={"outline"} className="font-bold">
              About Me
            </Button>
          </Link>
        </div>
      </div>
      <div className="right">
        <IconGlobe></IconGlobe>
      </div>
    </div>
  );
};

export default Greeting;
