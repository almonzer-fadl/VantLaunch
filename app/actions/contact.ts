"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const internalContactEmail = process.env.INTERNAL_CONTACT_EMAIL ?? "vantlaunch@gmail.com";

function escapeHtml(value: string) {
  return value.replace(/[<>&"]/g, (char) => {
    if (char === "<") return "&lt;";
    if (char === ">") return "&gt;";
    if (char === "&") return "&amp;";
    return "&quot;";
  });
}

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const role = (formData.get("role") as string) || "Not provided";
  const message = formData.get("message") as string;
  const productInterest = (formData.get("product_interest") as string) || "General VantLaunch inquiry";
  const timeline = (formData.get("timeline") as string) || "Not provided";
  const website = formData.get("website") as string;

  if (website) {
    return { success: true };
  }

  if (!name || !email || !company || !message || !productInterest || !timeline) {
    return { success: false, error: "All fields are required." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeRole = escapeHtml(role);
    const safeProductInterest = escapeHtml(productInterest);
    const safeTimeline = escapeHtml(timeline);
    const safeMessage = escapeHtml(message);

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
        `Company: ${company}`,
        `Role: ${role}`,
        `Product interest: ${productInterest}`,
        `Use case: "${message}"`,
        "",
        `Expected timeline: ${timeline}`,
        "",
        "We usually reply within one business day.",
        "",
        "VantLaunch",
        "https://vantlaunch.com",
      ].join("\n"),
      html: `
        <div style="background:#F8F6EF;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
          <div style="max-width:560px;margin:0 auto;background:#F8F6EF;border:1px solid rgba(17,16,14,0.1);border-radius:16px;padding:28px;">
            <h1 style="margin:0 0 20px 0;color:#11100E;font-size:24px;letter-spacing:-0.02em;">VantLaunch</h1>
            <p style="color:#11100E;font-size:15px;line-height:1.7;margin:0 0 14px 0;">Hey ${safeName},</p>
            <p style="color:#74695B;font-size:15px;line-height:1.7;margin:0 0 14px 0;">
              Thanks for reaching out to VantLaunch. We've received your inquiry and our team is reviewing it.
            </p>
            <p style="color:#74695B;font-size:14px;line-height:1.7;margin:0 0 6px 0;"><strong style="color:#11100E;">Company:</strong> ${safeCompany}</p>
            <p style="color:#74695B;font-size:14px;line-height:1.7;margin:0 0 6px 0;"><strong style="color:#11100E;">Role:</strong> ${safeRole}</p>
            <p style="color:#74695B;font-size:14px;line-height:1.7;margin:0 0 14px 0;"><strong style="color:#11100E;">Product:</strong> ${safeProductInterest}</p>
            <div style="margin:18px 0;padding:14px 16px;border-radius:10px;background:#f3ead3;border-left:3px solid #004225;">
              <p style="margin:0;color:#11100E;font-size:14px;line-height:1.7;">${safeMessage}</p>
            </div>
            <p style="color:#74695B;font-size:15px;line-height:1.7;margin:0 0 20px 0;">We usually reply within one business day.</p>
            <p style="margin:0;color:#74695B;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">
              VantLaunch · <a href="https://vantlaunch.com" style="color:#004225;">vantlaunch.com</a>
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
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nProduct: ${productInterest}\nTimeline: ${timeline}\nUse case: ${message}`,
      replyTo: email,
    });

    // 3. Send a copy of the customer confirmation to the internal inbox
    await resend.emails.send({
      from: "VantLaunch <noreply@vantlaunch.com>",
      to: internalContactEmail,
      subject: `Customer Confirmation Copy: ${name}`,
      text: [
        "Customer-facing confirmation was sent.",
        "",
        `Lead: ${name} <${email}>`,
        `Company: ${company}`,
        `Role: ${role}`,
        `Product: ${productInterest}`,
        `Timeline: ${timeline}`,
        "",
        `Use case: "${message}"`,
      ].join("\n"),
      html: `
        <div style="background:#F8F6EF;padding:28px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
          <div style="max-width:560px;margin:0 auto;background:#F8F6EF;border:1px solid rgba(17,16,14,0.1);border-radius:14px;padding:24px;">
            <h2 style="margin:0 0 14px 0;color:#11100E;font-size:20px;">Customer Confirmation Copy</h2>
            <p style="margin:0 0 8px 0;color:#11100E;"><strong>Lead:</strong> ${safeName} (${safeEmail})</p>
            <p style="margin:0 0 8px 0;color:#74695B;"><strong style="color:#11100E;">Company:</strong> ${safeCompany}</p>
            <p style="margin:0 0 8px 0;color:#74695B;"><strong style="color:#11100E;">Role:</strong> ${safeRole}</p>
            <p style="margin:0 0 8px 0;color:#74695B;"><strong style="color:#11100E;">Product:</strong> ${safeProductInterest}</p>
            <p style="margin:0 0 8px 0;color:#74695B;"><strong style="color:#11100E;">Timeline:</strong> ${safeTimeline}</p>
            <div style="margin-top:14px;padding:12px 14px;border-left:3px solid #004225;background:#f3ead3;border-radius:8px;">
              <p style="margin:0;color:#11100E;">${safeMessage}</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
