"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export type NewsletterState = {
  success?: boolean;
  error?: string;
  message?: string;
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
    const { data: existing, error: checkError } = await supabase
      .from("subscribers")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      return { message: "You're already subscribed to our newsletter!" };
    }

    await supabase.from("subscribers").insert({
      email,
      confirmed: true,
      source: "website",
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Garaad Systems <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Garaad Systems Insights",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111827">
          <div style="background:#0A1628;padding:32px;border-radius:12px 12px 0 0">
            <h1 style="color:#8CC220;font-size:20px;font-weight:800;margin:0">
              Welcome to Our Insights Newsletter
            </h1>
            <p style="color:rgba(255,255,255,0.5);font-size:13px;margin:8px 0 0">
              From Garaad Systems
            </p>
          </div>
          <div style="background:#F7F8FA;padding:32px;border:1px solid #e5e7eb;border-top:none">
            <p style="color:#374151;font-size:14px;line-height:1.6;margin:0 0 16px">
              Thank you for subscribing! You'll now receive our latest articles on e-government, digital transformation, and technical architecture.
            </p>
            <p style="color:#374151;font-size:14px;line-height:1.6;margin:0">
              We publish thoughtful, substantive content — no noise, just insights from our work.
            </p>
            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e5e7eb">
              <p style="color:#6b7280;font-size:12px;margin:0">
                Garaad Systems — Technology & Digital Consultancy<br>
                <a href="https://garaadsystems.com" style="color:#8CC220;text-decoration:none">garaadsystems.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

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
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return { error: "Something went wrong. Please try again." };
  }
}
