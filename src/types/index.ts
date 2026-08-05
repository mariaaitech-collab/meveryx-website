/**
 * Shared application types.
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  details?: string;
  date?: string;
  time?: string;
  timezone?: string;
  meetingPreference?: string;
}
