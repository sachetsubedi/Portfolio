"use client";
import { globeSlugs } from "@/lib/data";
import IconCloud from "../ui/icon-cloud";

const IconGlobe = () => {
  return (
    <div>
      <IconCloud iconSlugs={globeSlugs} />
    </div>
  );
};

export default IconGlobe;
