"use server";

import { Resend } from "resend";
import { connectDB } from "@/app/lib/db";
import { Contact } from "@/app/lib/models/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vantlaunch.com";

const RESOURCE_LINKS: Record<string, string> = {
  "operations-checklist": `${SITE_URL}/downloads/operations-checklist`,
  "agency-checklist": `${SITE_URL}/downloads/agency-checklist`,
  "dashboard-planning": `${SITE_URL}/downloads/dashboard-planning`,
  "crm-planning": `${SITE_URL}/downloads/crm-planning`,
  "automation-readiness": `${SITE_URL}/downloads/automation-readiness`,
  "buyers-guide": `${SITE_URL}/downloads/buyers-guide`,
};

export async function submitLeadMagnet(formData: FormData) {
  const email = formData.get("email") as string;
  const resource = formData.get("resource") as string;
  const website = formData.get("website") as string;

  if (website) return { success: true };
  if (!email || !resource) return { success: false, error: "Email is required." };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return { success: false, error: "Valid email required." };

  try {
    await connectDB();
    await Contact.create({ name: email.split("@")[0], email, company: "", role: "Lead Magnet", productInterest: resource, timeline: "", message: `Downloaded: ${resource}`, status: "new" });
  } catch (e) { console.error("DB save failed:", e); }

  const resourceName = resource.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const downloadLink = RESOURCE_LINKS[resource] || `${SITE_URL}/resources`;

  try {
    await resend.emails.send({
      from: "VantLaunch <noreply@vantlaunch.com>",
      to: email,
      subject: `Your ${resourceName} — VantLaunch`,
      html: `<div style="background:#F8F6EF;padding:32px 16px;font-family:-apple-system,sans-serif;"><div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid rgba(0,0,0,0.06);border-radius:16px;padding:28px;"><h1 style="color:#004225;font-size:22px;margin:0 0 16px 0;">Your ${resourceName}</h1><p style="color:#74695B;font-size:15px;line-height:1.7;">Thanks for downloading. Click below to access your resource:</p><a href="${downloadLink}" style="display:inline-block;margin:16px 0;padding:12px 24px;background:#004225;color:#fff;text-decoration:none;border-radius:10px;font-weight:bold;font-size:14px;">Download ${resourceName}</a><p style="color:#74695B;font-size:12px;margin-top:24px;">If you have questions, reply to this email or book a <a href="${SITE_URL}/book" style="color:#004225;">discovery call</a>.</p><p style="color:#74695B;font-size:12px;">— VantLaunch</p></div></div>`,
    });

    await resend.emails.send({
      from: "VantLaunch System <noreply@vantlaunch.com>",
      to: "vantlaunch@gmail.com",
      subject: `New lead magnet download: ${resourceName}`,
      text: `${email} downloaded ${resourceName}\nLink: ${downloadLink}`,
    });

    return { success: true };
  } catch (e) {
    console.error("Email failed:", e);
    return { success: false, error: "Failed to send. Try again." };
  }
}
