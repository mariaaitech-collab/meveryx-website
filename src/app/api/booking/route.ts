import { submitMessage } from "@/lib/submit";
import { site } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TIME_SLOT_RE = /^([01]\d|2[0-3]):[0-5]\d$/;

function clean(value: unknown, max = 5000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const data = (body ?? {}) as Record<string, unknown>;
  const name = clean(data.name, 120);
  const email = clean(data.email, 254).toLowerCase();
  const phone = clean(data.phone, 40);
  const service = clean(data.service, 200);
  const budget = clean(data.budget, 200);
  const details = clean(data.details, 5000);
  const date = clean(data.date, 20);
  const time = clean(data.time, 20);
  const timezone = clean(data.timezone, 100);
  const meetingPreference = clean(data.meetingPreference, 40);

  if (!name || !EMAIL_RE.test(email) || !phone || !service || !budget) {
    return Response.json(
      {
        ok: false,
        error:
          "Please provide your name, a valid email, phone, a service, and a budget.",
      },
      { status: 422 },
    );
  }

  if (time && !TIME_SLOT_RE.test(time)) {
    return Response.json(
      { ok: false, error: "Please pick a valid time slot." },
      { status: 422 },
    );
  }

  const result = await submitMessage(
    `New order request from ${name} — ${service}`,
    {
      name,
      email,
      phone,
      service,
      budget,
      details: details || "—",
      date: date || "Flexible",
      time: time || "Flexible",
      timezone: timezone || "Not specified",
      meeting_preference: meetingPreference || "Not specified",
      company: site.name,
    },
  );

  if (!result.ok) {
    return Response.json(
      {
        ok: false,
        error:
          "We couldn't submit your order right now. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true, provider: result.provider });
}
