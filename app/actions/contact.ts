"use server";

import { Resend } from "resend";
import { ContactEmail } from "../components/emails/ContactEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    // 1. Send confirmation to the user
    await resend.emails.send({
      from: "VantLaunch <noreply@vantlaunch.com>",
      to: email,
      subject: "We've received your inquiry — VantLaunch",
      react: React.createElement(ContactEmail, { name, message }),
    });

    // 2. Send notification to the VantLaunch team
    await resend.emails.send({
      from: "VantLaunch System <noreply@vantlaunch.com>",
      to: "build@vantlaunch.com",
      subject: `New Project Inquiry: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
