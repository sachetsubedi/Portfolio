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
            icon: <Icon icon={"mdi:github"} className="text-3xl sm:text-4xl" />,
          },
          {
            title: "",
            description: "",
            link: "https://ln.sachetsubedi001.com.np",
            icon: <Icon icon={"mdi:linkedin"} className="text-3xl sm:text-4xl" />,
          },
          {
            title: "",
            description: "",
            link: "https://insta.sachetsubedi001.com.np",
            icon: <Icon icon={"mdi:instagram"} className="text-3xl sm:text-4xl" />,
          },
        ]}
      ></HoverEffect>
    </div>
  );
};

export default ContactIcons;
