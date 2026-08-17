"use server";

import { connectDB } from "@/app/lib/db";
import { Meeting } from "@/app/lib/models/Meeting";
import crypto from "crypto";

function generateSlug(): string {
  return crypto.randomBytes(6).toString("hex");
}

export async function createMeeting(input: {
  title: string;
  description: string;
  meetingLink: string;
  scheduledDate: string;
  recipientName: string;
  recipientEmail: string;
}) {
  try {
    await connectDB();
    const slug = generateSlug();
    await Meeting.create({ ...input, scheduledDate: new Date(input.scheduledDate), slug });
    return { success: true, slug };
  } catch (error) {
    console.error("Failed to create meeting:", error);
    return { success: false, error: "Failed to create meeting" };
  }
}

export async function getMeetings() {
  try {
    await connectDB();
    const meetings = await Meeting.find().sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(meetings));
  } catch (error) {
    console.error("Failed to fetch meetings:", error);
    return [];
  }
}

export async function getMeetingBySlug(slug: string) {
  try {
    await connectDB();
    const meeting = await Meeting.findOne({ slug }).lean();
    if (!meeting) return null;
    return JSON.parse(JSON.stringify(meeting));
  } catch (error) {
    console.error("Failed to fetch meeting:", error);
    return null;
  }
}

export async function cancelMeeting(slug: string) {
  try {
    await connectDB();
    await Meeting.findOneAndUpdate({ slug }, { status: "cancelled" });
    return { success: true };
  } catch (error) {
    console.error("Failed to cancel meeting:", error);
    return { success: false, error: "Failed to cancel meeting" };
  }
}

export async function rescheduleMeeting(slug: string, newDate: string) {
  try {
    await connectDB();
    const meeting = await Meeting.findOne({ slug });
    if (!meeting) return { success: false, error: "Meeting not found" };
    const oldDate = meeting.scheduledDate.toISOString();
    const newDateObj = new Date(newDate);
    meeting.scheduledDate = newDateObj;
    meeting.history.push({
      action: "rescheduled",
      oldValue: oldDate,
      newValue: newDateObj.toISOString(),
      timestamp: new Date(),
    });
    await meeting.save();
    return { success: true };
  } catch (error) {
    console.error("Failed to reschedule meeting:", error);
    return { success: false, error: "Failed to reschedule meeting" };
  }
}
