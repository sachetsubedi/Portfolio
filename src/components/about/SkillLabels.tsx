import { FC } from "react";
import Label from "./Label";

const SkillLabels: FC<{
  items: {
    title: string;
    color: string;
  }[];
}> = ({ items }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((item, idx) => {
        return <Label key={idx} color={item.color} title={item.title} />;
      })}
    </div>
  );
};

export default SkillLabels;
