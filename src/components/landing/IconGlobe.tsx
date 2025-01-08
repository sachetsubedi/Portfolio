"use client";
import { globeSlugs } from "@/lib/data";
import { IconCloud } from "../ui/icon-cloud";

const IconGlobe = () => {
  const images = globeSlugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div>
      <IconCloud images={images} />
    </div>
  );
};

export default IconGlobe;
