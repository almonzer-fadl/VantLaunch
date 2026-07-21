"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const internalContactEmail = process.env.INTERNAL_CONTACT_EMAIL ?? "build@vantlaunch.com";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const safeName = name.replace(/[<>&"]/g, (char) => {
      if (char === "<") return "&lt;";
      if (char === ">") return "&gt;";
      if (char === "&") return "&amp;";
      return "&quot;";
    });
    const safeMessage = message.replace(/[<>&"]/g, (char) => {
      if (char === "<") return "&lt;";
      if (char === ">") return "&gt;";
      if (char === "&") return "&amp;";
      return "&quot;";
    });

    // 1. Send confirmation to the user
    await resend.emails.send({
      from: "VantLaunch <noreply@vantlaunch.com>",
      to: email,
      subject: "We've received your inquiry — VantLaunch",
      text: [
        `Hey ${name},`,
        "",
        "Thanks for reaching out to VantLaunch. We've received your inquiry and we'll review it shortly.",
        "",
        `Your message: "${message}"`,
        "",
        "We usually reply within one business day.",
        "",
        "VantLaunch",
        "https://vantlaunch.com",
      ].join("\n"),
      html: `
        <div style="background:#080808;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
          <div style="max-width:560px;margin:0 auto;background:#121212;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:28px;">
            <h1 style="margin:0 0 20px 0;color:#fff;font-size:24px;letter-spacing:-0.02em;">VantLaunch</h1>
            <p style="color:#d4d4d8;font-size:15px;line-height:1.7;margin:0 0 14px 0;">Hey ${safeName},</p>
            <p style="color:#a1a1aa;font-size:15px;line-height:1.7;margin:0 0 14px 0;">
              Thanks for reaching out to VantLaunch. We've received your inquiry and our team is reviewing it.
            </p>
            <div style="margin:18px 0;padding:14px 16px;border-radius:10px;background:rgba(255,255,255,0.04);border-left:3px solid #fff;">
              <p style="margin:0;color:#fff;font-size:14px;line-height:1.7;">${safeMessage}</p>
            </div>
            <p style="color:#a1a1aa;font-size:15px;line-height:1.7;margin:0 0 20px 0;">We usually reply within one business day.</p>
            <p style="margin:0;color:#71717a;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">
              VantLaunch · <a href="https://vantlaunch.com" style="color:#fff;">vantlaunch.com</a>
            </p>
          </div>
        </div>
      `,
    });

    // 2. Send notification to the VantLaunch team
    await resend.emails.send({
      from: "VantLaunch System <noreply@vantlaunch.com>",
      to: internalContactEmail,
      subject: `New Project Inquiry: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
