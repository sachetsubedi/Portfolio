import { contacts } from "@/lib/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { FC } from "react";
import { Card } from "../ui/card";

const ContactLinks = () => {
  return (
    <Card className="border-none shadow-none bg-inherit mt-10 flex flex-col gap-5">
      {contacts.map((contact) => {
        return (
          <ContactLinkItem
            key={contact.icon}
            icon={contact.icon}
            content={contact.content}
            link={contact.link}
          />
        );
      })}
    </Card>
  );
};

export default ContactLinks;

const ContactLinkItem: FC<{ icon: string; content: string; link: string }> = ({
  icon,
  content,
  link,
}) => {
  return (
    <Card className="border-none shadow-none bg-inherit">
      <Link href={link} target="_blank" className="flex gap-2 items-center">
        <Icon icon={icon} fontSize={25} />
        <p>{content}</p>
      </Link>
    </Card>
  );
};
