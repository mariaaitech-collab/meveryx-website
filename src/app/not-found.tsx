import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
        Page <GradientText>not found</GradientText>
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back somewhere useful.
      </p>
      <Button href="/" className="mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to home
      </Button>
    </div>
  );
}
