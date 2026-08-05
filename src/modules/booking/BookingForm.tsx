"use client";

import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Clock,
  Loader2,
  MessageCircle,
  Phone,
  Video,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { services } from "@/data/mockData";
import { site } from "@/lib/site";
import { bookingSchema, type BookingFormData } from "@/schemas/bookingSchema";
import { sendFormspreeData } from "@/services/formspreeService";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00",
];

const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
];

const MEETING_PREFERENCES: { key: string; label: string; Icon: LucideIcon }[] = [
  { key: "Google Meet", label: "Google Meet", Icon: Video },
  { key: "Phone Call", label: "Phone Call", Icon: Phone },
  { key: "WhatsApp", label: "WhatsApp", Icon: MessageCircle },
];

const TIMEZONES = [
  "Asia/Karachi",
  "Asia/Dubai",
  "Asia/Riyadh",
  "Asia/Calcutta",
  "Asia/Kolkata",
  "Asia/Singapore",
  "Asia/Shanghai",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Paris",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Toronto",
  "UTC",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EMPTY: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  details: "",
  date: "",
  time: "",
  timezone: "Asia/Karachi",
  meetingPreference: "Google Meet",
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatLong(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function monthCells(monthOffset: number) {
  const today = new Date();
  const first = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(first.getFullYear(), first.getMonth(), d));
  }
  return { cells, month: first };
}

function defaultTimezone() {
  if (typeof window === "undefined") return "Asia/Karachi";
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Karachi";
  } catch {
    return "Asia/Karachi";
  }
}

export function BookingForm() {
  const [form, setForm] = useState<BookingFormData>({ ...EMPTY, timezone: defaultTimezone() });
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);
  const [sending, setSending] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const todayISO = useMemo(() => toISODate(new Date()), []);
  const { cells, month } = useMemo(() => monthCells(monthOffset), [monthOffset]);
  const selectedDate = form.date ? new Date(`${form.date}T12:00:00`) : null;

  const isDayDisabled = (day: Date) => {
    const dow = day.getDay();
    if (dow === 0 || dow === 6) return true;
    return startOfDay(day) < startOfDay(new Date());
  };

  const isSlotDisabled = (slot: string) => {
    if (form.date !== todayISO) return false;
    const now = new Date();
    const [h, m] = slot.split(":").map(Number);
    return now.getHours() * 60 + now.getMinutes() >= h * 60 + m;
  };

  const update = <K extends keyof BookingFormData>(field: K, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    setServerError(null);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      const errors: Partial<Record<keyof BookingFormData, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof BookingFormData;
        if (key && !errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setSending(true);
    try {
      const callDateTime = [
        form.date,
        form.time ? `at ${form.time}` : "",
        form.timezone ? `(${form.timezone})` : "",
      ]
        .filter(Boolean)
        .join(" ") || "Flexible";

      const meetingType =
        form.meetingPreference === "Google Meet"
          ? "Video Call"
          : form.meetingPreference === "Phone Call"
            ? "Phone Call"
            : form.meetingPreference === "WhatsApp"
              ? "WhatsApp"
              : "Video Call";

      await sendFormspreeData({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        budget: form.budget,
        call_date_time: callDateTime,
        meeting_type: meetingType,
        message: form.details || "—",
        _subject: `New order request from ${form.name} — ${form.service}`,
        _replyto: form.email,
      });
      setConfirmed(true);
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

  if (confirmed) {
    return (
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-100">
          {/* 3px top accent bar: Cyan → Indigo → Magenta → Lime */}
          <div className="nav-underline h-[3px] w-full" aria-hidden="true" />

          <div className="p-8 text-center sm:p-10">
            <div className="mx-auto inline-flex rounded-full bg-lime-100 p-3">
              <CircleCheck className="h-8 w-8 text-lime-600" aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-heading text-2xl font-bold text-navy">
              Consultation request received
            </h2>
            <p className="mt-3 text-slate-600">
              Thanks{form.name.trim() ? `, ${form.name.trim()}` : ""}! We&apos;ve
              received your consultation request and notified our team at{" "}
              <span className="font-medium text-primary">{site.email}</span>. We
              will reply within one business day to confirm the details.
            </p>

            <dl className="mt-6 grid grid-cols-1 gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 text-left text-sm sm:grid-cols-2">
              <div>
                <dt className="text-slate-500">Service</dt>
                <dd className="mt-0.5 font-medium text-navy">{form.service}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Budget</dt>
                <dd className="mt-0.5 font-medium text-lime-700">{form.budget}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-slate-500">Scheduled Date &amp; Time</dt>
                <dd className="mt-0.5 font-medium text-navy">
                  {selectedDate ? formatLong(selectedDate) : "Flexible"}
                  {form.time ? ` · ${form.time}` : ""}{" "}
                  {form.timezone ? `(${form.timezone})` : ""}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-slate-500">Meeting Format</dt>
                <dd className="mt-0.5 font-medium text-navy">
                  {form.meetingPreference === "Google Meet"
                    ? "Video Meeting"
                    : form.meetingPreference === "Phone Call"
                      ? "Phone Call"
                      : form.meetingPreference}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => {
                setConfirmed(false);
                setForm({ ...EMPTY, timezone: defaultTimezone() });
                setMonthOffset(0);
              }}
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-navy transition-colors hover:border-primary/50 hover:bg-slate-50 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Book another consultation
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-16 sm:py-20">
      <form onSubmit={onSubmit} className="grid gap-10 lg:grid-cols-5" noValidate>
        {/* Order details */}
        <Card className="p-6 sm:p-8 lg:col-span-3">
          <h2 className="font-heading text-lg font-bold text-navy">Your order</h2>
          <p className="mt-1 text-sm text-slate-500">Fields marked * are required.</p>

          {serverError && (
            <div
              role="alert"
              className="mt-5 flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-4"
            >
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-red-700">Couldn&apos;t submit your order</p>
                <p className="mt-0.5 text-sm text-red-600">{serverError}</p>
              </div>
            </div>
          )}

          <div className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full name *</Label>
                <Input
                  id="name"
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

            <div>
              <Label htmlFor="phone">
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  Phone / WhatsApp *
                </span>
              </Label>
              <Input
                id="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="0340 1217454"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={Boolean(fieldErrors.phone)}
              />
              {fieldErrors.phone && (
                <p className="mt-1.5 text-xs text-red-600">{fieldErrors.phone}</p>
              )}
            </div>

            <div>
              <Label htmlFor="service">Service you need *</Label>
              <Select
                id="service"
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                aria-invalid={Boolean(fieldErrors.service)}
              >
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Full project / multiple services">
                  Full project / multiple services
                </option>
                <option value="General / not sure yet">General / not sure yet</option>
              </Select>
              {fieldErrors.service && (
                <p className="mt-1.5 text-xs text-red-600">{fieldErrors.service}</p>
              )}
            </div>

            <div>
              <Label htmlFor="budget">
                <span className="inline-flex items-center gap-1.5">
                  <Wallet className="h-3.5 w-3.5 text-lime-600" aria-hidden="true" />
                  Your budget (type any amount) *
                </span>
              </Label>
              <div className="flex flex-wrap gap-2">
                {BUDGET_RANGES.map((range) => (
                  <button
                    key={range}
                    type="button"
                    aria-pressed={form.budget === range}
                    onClick={() => update("budget", range)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                      form.budget === range
                        ? "border-transparent bg-logo-gradient text-white shadow-glow"
                        : "border-slate-200 bg-white text-slate-600 hover:border-primary/50 hover:text-navy",
                    )}
                  >
                    {range}
                  </button>
                ))}
              </div>
              <Input
                id="budget"
                required
                className="mt-2.5"
                placeholder="Type your budget (e.g. $1,500, 50,000 PKR)..."
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                aria-invalid={Boolean(fieldErrors.budget)}
              />
              {fieldErrors.budget && (
                <p className="mt-1.5 text-xs text-red-600">{fieldErrors.budget}</p>
              )}
              <p className="mt-1.5 text-xs text-slate-400">
                Open, free-form — any amount, any currency.
              </p>
            </div>

            <div>
              <Label htmlFor="details">Project details / requirements</Label>
              <Textarea
                id="details"
                placeholder="Describe your project, goals, timeline, and anything else we should know…"
                className="min-h-[140px]"
                value={form.details}
                onChange={(e) => update("details", e.target.value)}
              />
            </div>
          </div>
        </Card>

        {/* Schedule + submit */}
        <div className="space-y-6 lg:col-span-2">
          <Card className="p-6 sm:p-8">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-navy">
              <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
              Pick a call day
            </p>

            {/* Mini calendar */}
            <div className="rounded-xl border border-border p-3">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  aria-label="Previous month"
                  disabled={monthOffset <= 0}
                  onClick={() => {
                    setMonthOffset((v) => v - 1);
                    update("date", "");
                    update("time", "");
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-navy disabled:pointer-events-none disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="font-heading text-sm font-semibold text-navy">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    year: "numeric",
                  }).format(month)}
                </span>
                <button
                  type="button"
                  aria-label="Next month"
                  disabled={monthOffset >= 2}
                  onClick={() => {
                    setMonthOffset((v) => v + 1);
                    update("date", "");
                    update("time", "");
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-navy disabled:pointer-events-none disabled:opacity-40"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-2 grid grid-cols-7 gap-1 text-center">
                {WEEKDAYS.map((wd) => (
                  <span key={wd} className="py-1 text-[11px] font-medium text-slate-400">
                    {wd}
                  </span>
                ))}
                {cells.map((day, i) => {
                  if (!day) return <span key={`blank-${i}`} aria-hidden="true" />;
                  const iso = toISODate(day);
                  const disabled = isDayDisabled(day);
                  const selected = form.date === iso;
                  return (
                    <button
                      key={iso}
                      type="button"
                      disabled={disabled}
                      aria-pressed={selected}
                      aria-label={formatLong(day)}
                      onClick={() => {
                        update("date", iso);
                        update("time", "");
                      }}
                      className={cn(
                        "aspect-square rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                        disabled && "cursor-not-allowed text-slate-300",
                        !disabled && !selected && "text-slate-700 hover:bg-slate-100",
                        selected && "bg-logo-gradient text-white shadow-glow",
                      )}
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-3 flex items-center gap-2 text-sm font-medium text-navy">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Pick a time
              </p>
              {form.date ? (
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const disabled = isSlotDisabled(slot);
                    const selected = form.time === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={disabled}
                        aria-pressed={selected}
                        onClick={() => update("time", slot)}
                        className={cn(
                          "rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                          disabled && "cursor-not-allowed opacity-40",
                          selected
                            ? "border-transparent bg-logo-gradient text-white shadow-glow"
                            : "border-slate-200 bg-white text-slate-700 hover:border-primary/50 hover:text-navy",
                        )}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  Choose a day first to see available times.
                </p>
              )}
            </div>

            <div className="mt-5">
              <Label htmlFor="timezone">Your timezone</Label>
              <Select
                id="timezone"
                value={form.timezone}
                onChange={(e) => update("timezone", e.target.value)}
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </Select>
            </div>

            <div className="mt-5">
              <Label>How should we meet?</Label>
              <div className="grid grid-cols-3 gap-2">
                {MEETING_PREFERENCES.map(({ key, label, Icon }) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={form.meetingPreference === key}
                    onClick={() => update("meetingPreference", key)}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-xl border px-2 py-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                      form.meetingPreference === key
                        ? "border-transparent bg-logo-gradient text-white shadow-glow"
                        : "border-slate-200 bg-white text-slate-600 hover:border-primary/50 hover:text-navy",
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <Button type="submit" size="lg" disabled={sending} className="w-full">
              {sending ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Booking your consultation…
                </>
              ) : (
                <>
                  Book consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </Button>
            <p className="mt-3 text-center text-xs text-slate-400">
              Your order is sent to {site.email}. We reply within one business day.
            </p>
          </Card>
        </div>
      </form>
    </Container>
  );
}
