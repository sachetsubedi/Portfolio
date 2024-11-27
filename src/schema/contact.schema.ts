import { z } from "zod";
export const contactSchema = z.object({
  name: z
    .string({
      required_error: "I need something to call you by",
      invalid_type_error: "I dont think your name is a number or a symbol",
    })
    .min(2, "I need something to call you by")
    .max(50, "Your name is'nt that long, is it?"),

  email: z.string().email({
    message: "I need a valid email to contact you back",
  }),

  message: z
    .string({
      required_error: "Maybe some words would be nice",
      invalid_type_error: "Maybe some words would be nice",
    })
    .min(10, "Maybe some more words would be nice")
    .max(100, "That's quite a lot of words! I might struggle to keep up."),
});
