import { useEffect, useState } from "react";

function useResponsive(breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 }) {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screen, setScreen] = useState("");

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Only update if dimensions have changed
      if (width !== screenSize.width || height !== screenSize.height) {
        setScreenSize({ width, height });

        if (width < breakpoints.sm) setScreen("xs");
        else if (width < breakpoints.md) setScreen("sm");
        else if (width < breakpoints.lg) setScreen("md");
        else if (width < breakpoints.xl) setScreen("lg");
        else setScreen("xl");
      }
    };

    window.addEventListener("resize", updateSize);

    // Call once on mount to set initial values
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [screenSize, breakpoints]);

  return { screenSize, screen };
}

export default useResponsive;
