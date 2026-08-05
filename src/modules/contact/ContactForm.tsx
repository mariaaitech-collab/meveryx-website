"use client";

import { CircleAlert, CircleCheck, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { services } from "@/data/mockData";
import { site } from "@/lib/site";
import { contactSchema, type ContactFormData } from "@/schemas/contactSchema";
import { sendFormspreeData } from "@/services/formspreeService";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const EMPTY: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(EMPTY);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [sending, setSending] = useState(false);

  const update = <K extends keyof ContactFormData>(field: K, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    setServerError(null);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormData;
        if (key && !errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setSending(true);
    const submittedName = form.name.trim();
    try {
      await sendFormspreeData({
        name: form.name,
        email: form.email,
        phone: form.phone || "—",
        service: form.service || "General inquiry",
        budget: form.budget || "—",
        message: form.message,
        _subject: `New contact message from ${form.name}`,
        _replyto: form.email,
      });
      setSuccess(true);
      setForm(EMPTY);
      setSubmittedName(submittedName);
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Card className="p-6 sm:p-8 lg:col-span-3">
      <h2 className="font-heading text-xl font-bold text-navy">Send us a message</h2>
      <p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p>

      {success && (
        <div
          role="status"
          className="mt-5 flex items-start gap-3 rounded-xl border border-lime-500/40 bg-lime-50 p-4"
        >
          <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-lime-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-lime-800">Message sent</p>
            <p className="mt-0.5 text-sm text-slate-600">
              Thanks, {submittedName}!
              Your message was delivered to{" "}
              {site.email}. We&apos;ll reply within one business day.
            </p>
          </div>
        </div>
      )}

      {serverError && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-4"
        >
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-red-700">Couldn&apos;t send your message</p>
            <p className="mt-0.5 text-sm text-red-600">{serverError}</p>
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name *</Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              placeholder="Jane Doe"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={Boolean(fieldErrors.name)}
            />
            {fieldErrors.name && (
              <p className="mt-1.5 text-xs text-red-600">{fieldErrors.name}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(fieldErrors.email)}
            />
            {fieldErrors.email && (
              <p className="mt-1.5 text-xs text-red-600">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="0340 1217454"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="service">Service you&apos;re interested in</Label>
            <Select
              id="service"
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="General / not sure yet">General / not sure yet</option>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your project, goals, and timeline…"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
          />
          {fieldErrors.message && (
            <p className="mt-1.5 text-xs text-red-600">{fieldErrors.message}</p>
          )}
        </div>

        <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
          {sending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
