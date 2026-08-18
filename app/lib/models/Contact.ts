import mongoose, { Document, Model, Schema } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  company: string;
  role: string;
  productInterest: string;
  timeline: string;
  message: string;
  status: "new" | "contacted" | "in_progress" | "completed";
  createdAt: Date;
  updatedAt: Date;
}

export interface IContactDocument extends IContact, Document {}

const ContactSchema = new Schema<IContactDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    role: { type: String, default: "" },
    productInterest: { type: String, default: "" },
    timeline: { type: String, default: "" },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "contacted", "in_progress", "completed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export const Contact: Model<IContactDocument> =
  mongoose.models.Contact || mongoose.model<IContactDocument>("Contact", ContactSchema);
