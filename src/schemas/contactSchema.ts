import { z } from "zod";

/**
 * Contact form validation schema (Zod v4).
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().max(40, "Phone number is too long.").optional(),
  service: z.string().trim().max(200).optional(),
  budget: z.string().trim().max(200).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please add a short message (at least 10 characters).")
    .max(5000, "Message is too long (max 5000 characters)."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
