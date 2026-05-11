"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type NewsletterState = {
  success?: boolean;
  error?: string;
};

export async function subscribeNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = (formData.get("email") as string | null)?.trim() ?? "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Garaad Systems <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "info@garaadsystems.com",
      subject: "New newsletter subscriber",
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
          <h2 style="color:#0A1628;">New newsletter subscriber</h2>
          <p style="color:#555;">Someone signed up for the Garaad Systems insights newsletter.</p>
          <p style="font-size:18px;font-weight:bold;color:#0A1628;">${email}</p>
        </div>
      `,
    });

    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
