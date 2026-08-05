import { site } from "@/lib/site";

/**
 * Server-side form delivery.
 *
 * Provider is chosen from environment variables, highest priority first:
 *   1. RESEND_API_KEY        → Resend transactional email
 *   2. WEB3FORMS_ACCESS_KEY  → Web3Forms endpoint
 *   3. FORMSPREE_ID          → Formspree form ID
 *   4. (none set)            → demo mode: logs the payload, returns success
 *
 * To enable live delivery on Vercel, set the relevant env vars in the
 * project settings (or copy .env.local.example → .env.local for local runs).
 */

export type SubmitFields = Record<string, string>;

type ProviderResult = {
  ok: boolean;
  provider: "resend" | "web3forms" | "formspree" | "demo";
  error?: string;
};

function buildRows(fields: SubmitFields): string {
  return Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

async function sendViaResend(
  subject: string,
  fields: SubmitFields,
): Promise<ProviderResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, provider: "resend", error: "Missing RESEND_API_KEY" };

  const text = buildRows(fields);
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#0F172A">
      <h2 style="color:#0F172A">${subject}</h2>
      <table style="border-collapse:collapse;width:100%">${Object.entries(fields)
        .map(
          ([k, v]) =>
            `<tr>
              <td style="padding:6px 10px 6px 0;font-weight:600;vertical-align:top;color:#64748B">${k}</td>
              <td style="padding:6px 0;vertical-align:top">${escapeHtml(v)}</td>
            </tr>`,
        )
        .join("")}</table>
      <p style="color:#64748B">Sent from the Meveryx website (${site.name}).</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? `Meveryx Website <onboarding@resend.dev>`,
      to: process.env.RESEND_TO ?? site.email,
      reply_to: fields.email ?? site.email,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    return {
      ok: false,
      provider: "resend",
      error: `Resend returned ${res.status}: ${(await res.text()).slice(0, 300)}`,
    };
  }
  return { ok: true, provider: "resend" };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaWeb3Forms(
  subject: string,
  fields: SubmitFields,
): Promise<ProviderResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return { ok: false, provider: "web3forms", error: "Missing WEB3FORMS_ACCESS_KEY" };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: fields.name ?? site.name,
      ...fields,
    }),
  });

  if (!res.ok) {
    return {
      ok: false,
      provider: "web3forms",
      error: `Web3Forms returned ${res.status}`,
    };
  }
  return { ok: true, provider: "web3forms" };
}

/**
 * Route a submission to the best available provider. Never throws for
 * delivery failures — returns a structured result so the UI can show a
 * graceful error state.
 */
export async function submitMessage(
  subject: string,
  fields: SubmitFields,
): Promise<ProviderResult> {
  try {
    if (process.env.RESEND_API_KEY) {
      return await sendViaResend(subject, fields);
    }
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      return await sendViaWeb3Forms(subject, fields);
    }
    if (process.env.FORMSPREE_ID) {
      return await sendViaFormspree(subject, fields);
    }
    // Demo mode: no provider configured — log so the payload isn't lost
    // during local development, and report success to the visitor.
    console.log(`[submit:demo] ${subject}\n${buildRows(fields)}`);
    return { ok: true, provider: "demo" };
  } catch (err) {
    return {
      ok: false,
      provider: process.env.RESEND_API_KEY
        ? "resend"
        : process.env.WEB3FORMS_ACCESS_KEY
          ? "web3forms"
          : process.env.FORMSPREE_ID
            ? "formspree"
            : "demo",
      error: err instanceof Error ? err.message : "Unknown delivery error",
    };
  }
}

async function sendViaFormspree(
  subject: string,
  fields: SubmitFields,
): Promise<ProviderResult> {
  const formId = process.env.FORMSPREE_ID;
  if (!formId) return { ok: false, provider: "formspree", error: "Missing FORMSPREE_ID" };

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: subject,
      ...fields,
    }),
  });

  if (!res.ok) {
    let detail = `Formspree returned ${res.status}`;
    try {
      const data = (await res.json()) as { errors?: Array<{ message?: string }> };
      const message = data.errors?.[0]?.message;
      if (message) detail = message;
    } catch {
      /* keep the status fallback message */
    }
    return { ok: false, provider: "formspree", error: detail };
  }
  return { ok: true, provider: "formspree" };
}
