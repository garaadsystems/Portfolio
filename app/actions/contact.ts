"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success?: boolean;
  error?: string;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      // Use your verified Resend domain; falls back to the shared test address
      from: process.env.RESEND_FROM_EMAIL ?? "Garaad Systems <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "info@garaadsystems.tech"],
      replyTo: email,
      subject: `Project Inquiry — ${name}${organization ? ` (${organization})` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111827">
          <div style="background:#0A1628;padding:32px;border-radius:12px 12px 0 0">
            <h1 style="color:#8CC220;font-size:20px;font-weight:800;margin:0">
              New Project Inquiry
            </h1>
            <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:8px 0 0">
              Submitted via garaadsystems.com
            </p>
          </div>
          <div style="background:#F7F8FA;padding:32px;border:1px solid #e5e7eb;border-top:none">
            <table style="width:100%;font-size:14px;line-height:1.7;border-collapse:collapse">
              <tr>
                <td style="font-weight:700;color:#6b7280;width:130px;padding:6px 0;vertical-align:top">Name</td>
                <td style="color:#111827;padding:6px 0">${name}</td>
              </tr>
              <tr>
                <td style="font-weight:700;color:#6b7280;padding:6px 0;vertical-align:top">Email</td>
                <td style="color:#111827;padding:6px 0">
                  <a href="mailto:${email}" style="color:#0A1628">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="font-weight:700;color:#6b7280;padding:6px 0;vertical-align:top">Organization</td>
                <td style="color:#111827;padding:6px 0">${organization || "—"}</td>
              </tr>
              <tr>
                <td style="font-weight:700;color:#6b7280;padding:6px 0;vertical-align:top">Service</td>
                <td style="color:#111827;padding:6px 0">${service || "—"}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e5e7eb">
              <p style="font-weight:700;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px">
                Message
              </p>
              <p style="color:#374151;font-size:14px;line-height:1.75;white-space:pre-wrap;margin:0">${message}</p>
            </div>
          </div>
          <div style="background:#e5e7eb;padding:16px 32px;border-radius:0 0 12px 12px;text-align:center">
            <p style="color:#9ca3af;font-size:12px;margin:0">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      error:
        "Could not send your message. Please email us directly at info@garaadsystems.tech.",
    };
  }
}
