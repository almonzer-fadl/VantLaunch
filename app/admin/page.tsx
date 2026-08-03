"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, ExternalLink, Eye, Loader2, Lock } from "lucide-react";
import { getProjects, updateProjectStatus } from "@/app/actions/admin";

const ADMIN_PASSWORD = typeof window !== "undefined" ? "" : "";

function AdminGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "vantlaunch2026") {
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F6EF] px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl border border-black/10 bg-white p-8 shadow-mid">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#004225]/10">
          <Lock className="h-6 w-6 text-[#004225]" />
        </div>
        <h1 className="text-center text-lg font-bold text-[#11100E]">Admin Access</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false); }}
          placeholder="Enter password"
          className="mt-4 w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-4 py-3 text-sm font-medium text-[#11100E] placeholder:text-[#a89472] focus:border-[#004225]/40 focus:outline-none focus:ring-1 focus:ring-[#004225]/20"
        />
        {error && <p className="mt-2 text-xs font-medium text-red-500">Incorrect password</p>}
        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-[#004225] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#11100E]"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

type ProjectData = {
  _id: string;
  fullName: string;
  email: string;
  company: string;
  product: string;
  status: string;
  createdAt: string;
  phone: string;
  website: string;
  industry: string;
  projectDescription: string;
  problem: string;
  successDefinition: string;
  selectedIntegrations: string[];
  assetsFolder: string;
  additionalNotes: string;
  amountPaid: string;
  polarOrderId: string;
};

const STATUS_OPTIONS = [
  { value: "new", label: "New", color: "bg-blue-100 text-blue-800" },
  { value: "contacted", label: "Contacted", color: "bg-yellow-100 text-yellow-800" },
  { value: "in_progress", label: "In Progress", color: "bg-purple-100 text-purple-800" },
  { value: "completed", label: "Completed", color: "bg-green-100 text-green-800" },
] as const;

function StatusBadge({ status }: { status: string }) {
  const opt = STATUS_OPTIONS.find((o) => o.value === status) || STATUS_OPTIONS[0];
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${opt.color}`}>
      {opt.label}
    </span>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    const data = await getProjects();
    setProjects(data as ProjectData[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchProjects();
    }
  }, [authenticated, fetchProjects]);

  const handleStatusChange = async (projectId: string, status: string) => {
    setUpdatingId(projectId);
    await updateProjectStatus(projectId, status as "new" | "contacted" | "in_progress" | "completed");
    await fetchProjects();
    setUpdatingId(null);
  };

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
  };

  if (!authenticated) {
    return <AdminGate onUnlock={() => setAuthenticated(true)} />;
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F6EF]">
        <Loader2 className="h-8 w-8 animate-spin text-[#004225]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6EF] px-4 py-8 text-[#11100E] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h1>
            <p className="mt-1 text-sm text-[#74695B]">{projects.length} submission{projects.length !== 1 ? "s" : ""}</p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white p-12 text-center shadow-mid">
            <p className="text-[#74695B]">No project submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-black/10 bg-white p-5 shadow-mid sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-lg font-bold">{project.fullName}</h3>
                      <StatusBadge status={project.status} />
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#74695B]">
                      <span>{project.company || "No company"}</span>
                      <span className="hidden sm:inline">|</span>
                      <span className="font-medium text-[#004225]">{project.product}</span>
                      <span className="hidden sm:inline">|</span>
                      <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]"
                    >
                      <Eye className="h-3.5 w-3.5" /> Details
                    </button>
                    <button
                      onClick={() => copyEmail(project.email)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]"
                    >
                      <Copy className="h-3.5 w-3.5" /> Email
                    </button>
                    {project.assetsFolder && (
                      <a
                        href={project.assetsFolder}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Assets
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-black/[0.06] pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Status:</span>
                  {STATUS_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleStatusChange(project._id, opt.value)}
                      disabled={updatingId === project._id}
                      className={`rounded-lg px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.06em] transition-colors ${
                        project.status === opt.value
                          ? "bg-[#004225] text-white"
                          : "bg-black/[0.04] text-[#74695B] hover:bg-black/[0.08]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#11100E]/35" onClick={() => setSelectedProject(null)} />
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-black/10 bg-white p-6 shadow-high sm:p-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 text-sm font-bold text-[#74695B] hover:text-[#11100E]"
            >
              Close
            </button>
            <h2 className="text-xl font-bold">{selectedProject.fullName}</h2>
            <p className="mt-1 text-sm text-[#74695B]">{selectedProject.email} | {selectedProject.phone || "No phone"}</p>
            <p className="text-sm text-[#74695B]">{selectedProject.company}{selectedProject.website ? ` | ${selectedProject.website}` : ""}{selectedProject.industry ? ` | ${selectedProject.industry}` : ""}</p>
            <div className="mt-4 rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Order</p>
              <p className="mt-1 text-sm text-[#11100E]">Product: <span className="font-bold">{selectedProject.product}</span> — Amount: <span className="font-bold">{selectedProject.amountPaid}</span> — Order: <span className="font-mono text-xs">{selectedProject.polarOrderId || "—"}</span></p>
            </div>
            <div className="mt-4 space-y-3">
              <DetailBlock label="Project Description" text={selectedProject.projectDescription} />
              <DetailBlock label="Problem" text={selectedProject.problem} />
              <DetailBlock label="Success Definition" text={selectedProject.successDefinition} />
              <DetailBlock label="Integrations" text={selectedProject.selectedIntegrations.join(", ") || "None"} />
              <DetailBlock label="Assets Folder" text={selectedProject.assetsFolder || "None"} />
              <DetailBlock label="Additional Notes" text={selectedProject.additionalNotes || "None"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-[#11100E]">{text}</p>
    </div>
  );
}
