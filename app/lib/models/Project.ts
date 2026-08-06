import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProject {
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
  status: "new" | "contacted" | "in_progress" | "completed";
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProjectDocument extends IProject, Document {}

const ProjectSchema = new Schema<IProjectDocument>(
  {
    customerId: { type: String, default: "" },
    polarOrderId: { type: String, required: true },
    product: { type: String, required: true },
    amountPaid: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    company: { type: String, default: "" },
    website: { type: String, default: "" },
    industry: { type: String, default: "" },
    projectDescription: { type: String, required: true },
    problem: { type: String, required: true },
    successDefinition: { type: String, required: true },
    selectedIntegrations: { type: [String], default: [] },
    assetsFolder: { type: String, default: "" },
    additionalNotes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["new", "contacted", "in_progress", "completed"],
      default: "new",
    },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Project: Model<IProjectDocument> =
  mongoose.models.Project || mongoose.model<IProjectDocument>("Project", ProjectSchema);
