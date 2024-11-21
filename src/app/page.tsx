"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div>This is simple text</div>
        <Button
          onClick={() => {
            setTheme("light");
          }}
        >
          Set light
        </Button>
        <Button
          onClick={() => {
            setTheme("dark");
          }}
        >
          Dark
        </Button>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
