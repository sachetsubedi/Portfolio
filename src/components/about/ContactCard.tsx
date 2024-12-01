import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ContactLinks from "./ContactLinks";

const ContactCard: FC<{ hidden: boolean }> = ({ hidden }) => {
  return (
    <div hidden={hidden} className="mt-20">
      <Card className="shadow-none border-none">
        <CardHeader>
          <CardTitle className="tracking-wider mb-5">
            Don&apos;t hesitate to drop me a line
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ContactLinks />
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCard;
