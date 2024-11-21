import Projects from "@/components/about/Projects";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";

const Page = () => {
  return (
    <BackgroundBeamsWithCollision className="block">
      <div className="flex justify-center">
        <div className="w-1/2">
          <Projects></Projects>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Page;
