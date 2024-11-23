import Projects from "@/components/about/Projects";
import TechStack from "@/components/about/TechStack";

const Page = () => {
  return (
    // <BackgroundBeamsWithCollision className="block -z-50 pointer-events-none">
    <div className="flex justify-center">
      <div className="w-1/2">
        <TechStack></TechStack>
        <Projects></Projects>
      </div>
    </div>
    // </BackgroundBeamsWithCollision>
  );
};

export default Page;
