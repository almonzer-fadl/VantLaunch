import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMeetingHistory {
  action: string;
  oldValue: string;
  newValue: string;
  timestamp: Date;
}

export interface IMeeting {
  slug: string;
  title: string;
  description: string;
  meetingLink: string;
  scheduledDate: Date;
  recipientName: string;
  recipientEmail: string;
  status: "scheduled" | "cancelled";
  deleted: boolean;
  history: IMeetingHistory[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IMeetingDocument extends IMeeting, Document {}

const HistorySchema = new Schema<IMeetingHistory>(
  {
    action: { type: String, required: true },
    oldValue: { type: String, required: true },
    newValue: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { _id: false }
);

const MeetingSchema = new Schema<IMeetingDocument>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    meetingLink: { type: String, required: true },
    scheduledDate: { type: Date, required: true },
    recipientName: { type: String, required: true },
    recipientEmail: { type: String, required: true },
    status: {
      type: String,
      enum: ["scheduled", "cancelled"],
      default: "scheduled",
    },
    deleted: { type: Boolean, default: false },
    history: { type: [HistorySchema], default: [] },
  },
  { timestamps: true }
);

export const Meeting: Model<IMeetingDocument> =
  mongoose.models.Meeting || mongoose.model<IMeetingDocument>("Meeting", MeetingSchema);
