import { z } from "zod";

/**
 * Booking / order form validation schema (Zod v4).
 * Budget is deliberately OPEN / FREE-FORM — any text amount is accepted.
 */
export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please add a phone / WhatsApp number.")
    .max(40, "Phone number is too long."),
  service: z.string().trim().min(1, "Please select a service.").max(200),
  budget: z
    .string()
    .trim()
    .min(1, "Please type a budget — any amount works.")
    .max(200, "Budget is too long."),
  details: z.string().trim().max(5000).optional(),
  date: z.string().trim().max(20).optional(),
  time: z.string().trim().max(20).optional(),
  timezone: z.string().trim().max(100).optional(),
  meetingPreference: z.string().trim().max(40).optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
