"use server";

import { connectDB } from "@/app/lib/db";
import { Project } from "@/app/lib/models/Project";

export async function getProjects() {
  try {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 }).lean();
    return projects.map((p) => ({
      ...p,
      _id: p._id.toString(),
      createdAt: p.createdAt?.toISOString(),
      updatedAt: p.updatedAt?.toISOString(),
    }));
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
