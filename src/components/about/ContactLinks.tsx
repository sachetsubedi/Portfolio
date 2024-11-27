"use client";
import { contactSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const ContactLinks = () => {
  //   const theme = useTheme();

  const submitMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        "https://contact-backend-weld.vercel.app/send",
        {
          name: contactForm.getValues("name"),
          email: contactForm.getValues("email"),
          message: contactForm.getValues("message"),
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Got your message! Keep kooking for mine.");
    },
  });

  const onsubmit = () => {
    submitMutation.mutate();
  };

  const contactForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });

  return (
    <div className="tracking-wider flex flex-col gap-3">
      <form onSubmit={contactForm.handleSubmit(onsubmit)}>
        <div className="flex justify-between">
          <div className="w-[48%] flex flex-col gap-2">
            <Label className="font-bold">Name</Label>
            <Input type="text" {...contactForm.register("name")} />
            <Label className="text-red-500 m-3">
              {contactForm.formState.errors.name?.message}
            </Label>
          </div>

          <div className="w-[48%] flex flex-col gap-2">
            <Label className="font-bold">Email</Label>
            <Input type="text" {...contactForm.register("email")} />
            <Label className="text-red-500 m-3">
              {contactForm.formState.errors.email?.message}
            </Label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="font-bold">Message</Label>
          <Textarea {...contactForm.register("message")} />
          <Label className="text-red-500 m-3">
            {contactForm.formState.errors.message?.message}
          </Label>
        </div>

        <Button
          variant={"outline"}
          type="submit"
          disabled={submitMutation.isPending || submitMutation.isSuccess}
        >
          {submitMutation.isPending ? (
            <Icon icon="svg-spinners:ring-resize" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactLinks;
