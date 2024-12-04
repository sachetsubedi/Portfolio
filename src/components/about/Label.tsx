"use client";
import { FC } from "react";

const Label: FC<{ color: string; title: string }> = ({ color, title }) => {
  return (
    <div className={`px-3 rounded-md w-fit ${color} text-white`}>{title}</div>
  );
};

export default Label;
