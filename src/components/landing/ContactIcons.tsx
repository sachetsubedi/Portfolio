import { Icon } from "@iconify/react";
import Link from "next/link";
import { Card } from "../ui/card";

const contacts: { icon: string; link: string }[] = [
  {
    icon: "mdi:github",
    link: "https://github.sachetsubedi001.com.np",
  },
  {
    icon: "mdi:linkedin",
    link: "https://ln.sachetsubedi001.com.np",
  },
  {
    icon: "mdi:instagram",
    link: "https://insta.sachetsubedi001.com.np",
  },
];

const ContactIcons = () => {
  return (
    <div className="pt-5 flex gap-2 flex-wrap">
      {contacts.map((contact, index) => {
        return (
          <Card
            key={index}
            className="w-fit border-2 border-black dark:border-white rounded-sm p-[2px]"
          >
            <Link href={contact.link}>
              {" "}
              <Icon icon={contact.icon} fontSize={20}></Icon>{" "}
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default ContactIcons;
