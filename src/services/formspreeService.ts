/**
 * Formspree HTTP client — posts form submissions directly to the Meveryx
 * Formspree form. Used by the Contact and Booking modules.
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgqqedb";

export async function sendFormspreeData(data: Record<string, string>) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let errorText = "Failed to send message.";
    try {
      const errorData = (await response.json()) as { error?: string };
      errorText = errorData?.error || errorText;
    } catch {
      // ignore — keep the default error message
    }
    throw new Error(errorText);
  }

  return response.json();
}
