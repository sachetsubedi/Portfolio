import { Icon } from "@iconify/react";
import { HoverEffect } from "./CardHoverEffect";

const ContactIcons = () => {
  return (
    <div className="pt-5 flex gap-2 flex-wrap">
      <HoverEffect
        className={`flex`}
        items={[
          {
            title: "",
            description: "",
            link: "https://github.sachetsubedi001.com.np",
            icon: <Icon icon={"mdi:github"}></Icon>,
          },
          {
            title: "",
            description: "",
            link: "https://ln.sachetsubedi001.com.np",
            icon: <Icon icon={"mdi:linkedin"}></Icon>,
          },
          {
            title: "",
            description: "",
            link: "https://insta.sachetsubedi001.com.np",
            icon: <Icon icon={"mdi:instagram"}></Icon>,
          },
        ]}
      ></HoverEffect>
    </div>
  );
};

export default ContactIcons;
