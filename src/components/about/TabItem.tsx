"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FC } from "react";

const TabItem: FC<{ icon: string; label: string }> = ({ icon, label }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
      <Icon icon={icon} className="text-2xl"></Icon>
      <span>{label}</span>
    </div>
  );
};

export default TabItem;
