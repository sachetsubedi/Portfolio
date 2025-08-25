"use client";
import { globeSlugsWithColor } from "@/lib/data";
import { useTheme } from "next-themes";
import { IconCloud } from "../ui/icon-cloud";

const IconGlobe = () => {
  const theme = useTheme();
  const getColor = (color: string | undefined) => {
    if (!color) return null;
    return theme.resolvedTheme === "dark" ? "white" : "black";
  };

  const images = globeSlugsWithColor.map((slug) => {
    const color = getColor(slug.color);
    return `https://cdn.simpleicons.org/${slug.slug}/${color}`;
  });

  return (
    <div>
      <IconCloud images={images} />
    </div>
  );
};

export default IconGlobe;
