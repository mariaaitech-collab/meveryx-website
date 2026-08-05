import { submitMessage } from "@/lib/submit";
import { site } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const message = clean(data.message, 5000);

  if (!name || !EMAIL_RE.test(email) || !message) {
    return Response.json(
      { ok: false, error: "Please provide your name, a valid email, and a message." },
      { status: 422 },
    );
  }

  const result = await submitMessage(`New contact message from ${name}`, {
    name,
    email,
    phone: phone || "—",
    message,
    company: site.name,
  });

  if (!result.ok) {
    return Response.json(
      { ok: false, error: "We couldn't deliver your message right now. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true, provider: result.provider });
}
