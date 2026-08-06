"use server";

import { Resend } from "resend";
import { connectDB } from "@/app/lib/db";
import { Contact } from "@/app/lib/models/Contact";

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

  if (!name || !email || !company || !message) {
    return { success: false, error: "All required fields must be filled." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    // Save to MongoDB for admin dashboard
    await connectDB();
    await Contact.create({
      name,
      email,
      company,
      role,
      productInterest,
      timeline,
      message,
      status: "new",
    });
  } catch (dbError) {
    console.error("Failed to save contact to DB:", dbError);
    // Don't block — still try to send emails
  }

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeRole = escapeHtml(role);
    const safeProductInterest = escapeHtml(productInterest);
    const safeTimeline = escapeHtml(timeline);
    const safeMessage = escapeHtml(message);

    // 1. Confirmation to the person who submitted
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

    // 2. Notification to admin
    await resend.emails.send({
      from: "VantLaunch System <noreply@vantlaunch.com>",
      to: internalContactEmail,
      subject: `New Inquiry: ${name} from ${company}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nProduct: ${productInterest}\nTimeline: ${timeline}\n\nMessage:\n${message}`,
      replyTo: email,
      html: `
        <div style="background:#F8F6EF;padding:28px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
          <div style="max-width:560px;margin:0 auto;background:#F8F6EF;border:1px solid rgba(17,16,14,0.1);border-radius:14px;padding:24px;">
            <h2 style="margin:0 0 14px 0;color:#11100E;font-size:20px;">New Contact Inquiry</h2>
            <p style="margin:0 0 8px 0;color:#11100E;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin:0 0 8px 0;color:#11100E;"><strong>Email:</strong> ${safeEmail}</p>
            <p style="margin:0 0 8px 0;color:#74695B;"><strong style="color:#11100E;">Company:</strong> ${safeCompany}</p>
            <p style="margin:0 0 8px 0;color:#74695B;"><strong style="color:#11100E;">Role:</strong> ${safeRole}</p>
            <p style="margin:0 0 8px 0;color:#74695B;"><strong style="color:#11100E;">Product:</strong> ${safeProductInterest}</p>
            <p style="margin:0 0 8px 0;color:#74695B;"><strong style="color:#11100E;">Timeline:</strong> ${safeTimeline}</p>
            <div style="margin-top:14px;padding:12px 14px;border-left:3px solid #004225;background:#f3ead3;border-radius:8px;">
              <p style="margin:0;color:#11100E;">${safeMessage}</p>
            </div>
            <p style="margin-top:16px;color:#74695B;font-size:12px;">Reply directly to this email to respond to ${safeName}.</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
