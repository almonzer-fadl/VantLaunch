"use server";

import { connectDB } from "@/app/lib/db";
import { Project } from "@/app/lib/models/Project";
import { Contact } from "@/app/lib/models/Contact";

export async function getProjects() {
  try {
    await connectDB();
    const projects = await Project.find({ deleted: { $ne: true } }).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(projects));
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export async function updateProjectStatus(projectId: string, status: "new" | "contacted" | "in_progress" | "completed") {
  try {
    await connectDB();
    await Project.findByIdAndUpdate(projectId, { status });
    return { success: true };
  } catch (error) {
    console.error("Failed to update project status:", error);
    return { success: false, error: "Failed to update" };
  }
}

export async function deleteProject(projectId: string) {
  try {
    await connectDB();
    await Project.findByIdAndUpdate(projectId, { deleted: true });
    return { success: true };
  } catch (error) {
    console.error("Failed to delete project:", error);
    return { success: false, error: "Failed to delete" };
  }
}

export async function getContacts() {
  try {
    await connectDB();
    const contacts = await Contact.find({ deleted: { $ne: true } }).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(contacts));
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    return [];
  }
}

export async function updateContactStatus(contactId: string, status: "new" | "contacted" | "in_progress" | "completed") {
  try {
    await connectDB();
    await Contact.findByIdAndUpdate(contactId, { status });
    return { success: true };
  } catch (error) {
    console.error("Failed to update contact status:", error);
    return { success: false, error: "Failed to update" };
  }
}

export async function deleteContact(contactId: string) {
  try {
    await connectDB();
    await Contact.findByIdAndUpdate(contactId, { deleted: true });
    return { success: true };
  } catch (error) {
    console.error("Failed to delete contact:", error);
    return { success: false, error: "Failed to delete" };
  }
}
