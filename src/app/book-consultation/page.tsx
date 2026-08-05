import { BookingForm } from "@/modules/booking/BookingForm";
import { PageHeader } from "@/components/ui/page-header";

export default function BookConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Order & consultation"
        title="Tell us what you want to build"
        description="Fill in your details, type any budget that works for you, and choose how and when you'd like to talk. We'll respond with next steps — no fixed packages, no pressure."
      />
      <BookingForm />
    </>
  );
}
