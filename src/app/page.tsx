"use client";
import Greeting from "@/components/landing/Greeting";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="dark:text-white">
          <Greeting></Greeting>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
