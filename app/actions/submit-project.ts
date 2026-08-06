"use server";

import { Resend } from "resend";
import { connectDB } from "@/app/lib/db";
import { Project } from "@/app/lib/models/Project";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SubmitProjectInput {
  customerId: string;
  polarOrderId: string;
  product: string;
  amountPaid: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string;
  projectDescription: string;
  problem: string;
  successDefinition: string;
  selectedIntegrations: string[];
  assetsFolder: string;
  additionalNotes: string;
}

export async function submitProjectBrief(input: SubmitProjectInput) {
  try {
    await connectDB();

    const project = await Project.create({
      ...input,
      status: "new",
    });

    const firstName = input.fullName.split(" ")[0];

    await resend.emails.send({
      from: "VantLaunch <noreply@vantlaunch.com>",
      to: input.email,
      subject: "Welcome to VantLaunch",
      html: welcomeEmailHtml(firstName),
    });

    await resend.emails.send({
      from: "VantLaunch <noreply@vantlaunch.com>",
      to: "vantlaunch@gmail.com",
      subject: `New Project: ${input.product} — ${input.fullName}`,
      html: adminNotificationHtml(input),
    });

    return {
      success: true,
      projectId: project._id.toString(),
    };
  } catch (error) {
    console.error("Failed to submit project brief:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}

function welcomeEmailHtml(firstName: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Inter, system-ui, sans-serif; background:#F8F6EF; padding:40px 20px; margin:0">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; margin:0 auto; background:#fff; border-radius:16px; border:1px solid #e5e0d8">
    <tr><td style="padding:40px 32px 24px">
      <h1 style="font-size:24px; font-weight:700; color:#004225; margin:0">Welcome to VantLaunch</h1>
    </td></tr>
    <tr><td style="padding:0 32px 32px; color:#74695B; font-size:15px; line-height:1.6">
      <p>Hi ${firstName},</p>
      <p>Thank you for choosing VantLaunch. We have received both your payment and your project brief.</p>
      <p>Our team will personally review everything and contact you within 12 hours. If we need additional information we will reach out directly.</p>
      <p>We are excited to build your project.</p>
      <p style="margin-top:24px; color:#11100E">— Almonzer<br><span style="font-size:13px; color:#74695B">Founder, VantLaunch</span></p>
    </td></tr>
    <tr><td style="padding:20px 32px; border-top:1px solid #e5e0d8; font-size:12px; color:#74695B">
      VantLaunch — Custom Dashboards & Business Systems
    </td></tr>
  </table>
</body>
</html>`;
}

function adminNotificationHtml(input: SubmitProjectInput): string {
  const integrations = input.selectedIntegrations.length
    ? input.selectedIntegrations.join(", ")
    : "None selected";
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Inter, system-ui, sans-serif; background:#F8F6EF; padding:40px 20px; margin:0">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; margin:0 auto; background:#fff; border-radius:16px; border:1px solid #e5e0d8">
    <tr><td style="padding:32px; border-bottom:1px solid #e5e0d8">
      <h2 style="font-size:20px; font-weight:700; color:#004225; margin:0">New Project Submission</h2>
    </td></tr>
    <tr><td style="padding:32px; color:#11100E; font-size:14px; line-height:1.8">
      <p><strong>Product:</strong> ${input.product}</p>
      <p><strong>Amount:</strong> ${input.amountPaid}</p>
      <p><strong>Customer:</strong> ${input.fullName}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Phone:</strong> ${input.phone || "—"}</p>
      <p><strong>Company:</strong> ${input.company || "—"}</p>
      <p><strong>Website:</strong> ${input.website || "—"}</p>
      <p><strong>Industry:</strong> ${input.industry || "—"}</p>
      <p><strong>Integrations:</strong> ${integrations}</p>
      <p><strong>Assets:</strong> ${input.assetsFolder || "—"}</p>
      <hr style="border:none; border-top:1px solid #e5e0d8; margin:16px 0">
      <p><strong>Project Description:</strong></p>
      <p style="color:#74695B">${input.projectDescription}</p>
      <p><strong>Problem:</strong></p>
      <p style="color:#74695B">${input.problem}</p>
      <p><strong>Success Definition:</strong></p>
      <p style="color:#74695B">${input.successDefinition}</p>
      ${input.additionalNotes ? `<p><strong>Additional Notes:</strong></p><p style="color:#74695B">${input.additionalNotes}</p>` : ""}
    </td></tr>
  </table>
</body>
</html>`;
}
