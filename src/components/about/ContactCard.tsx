import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

const ContactCard: FC<{ hidden: boolean }> = ({ hidden }) => {
  return (
    <div hidden={hidden} className="mt-20 ">
      <Card className="shadow-none border-none bg-inherit">
        <CardHeader>
          <CardTitle className=" mb-5 tracking-widest">
            Don&apos;t hesitate to drop me a line
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
          <ContactLinks />
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCard;
