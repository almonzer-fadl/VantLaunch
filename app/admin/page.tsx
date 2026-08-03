"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Copy, ExternalLink, Eye, Loader2, Lock, CalendarPlus, Video, Trash2 } from "lucide-react";
import { getProjects, updateProjectStatus } from "@/app/actions/admin";
import { createMeeting, getMeetings, cancelMeeting } from "@/app/actions/meetings";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vantlaunch.com";

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

type MeetingData = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  meetingLink: string;
  scheduledDate: string;
  recipientName: string;
  recipientEmail: string;
  status: string;
  createdAt: string;
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

function MeetingStatusBadge({ status }: { status: string }) {
  const isCancelled = status === "cancelled";
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${isCancelled ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
      {status}
    </span>
  );
}

const TABS = ["Projects", "Meetings"] as const;

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState<typeof TABS[number]>("Projects");

  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const [meetings, setMeetings] = useState<MeetingData[]>([]);
  const [loadingMeetings, setLoadingMeetings] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [meetingForm, setMeetingForm] = useState({
    title: "",
    description: "",
    meetingLink: "",
    scheduledDate: "",
    recipientName: "",
    recipientEmail: "",
  });
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState("");
  const [createdSlug, setCreatedSlug] = useState("");

  const fetchProjects = useCallback(async () => {
    const data = await getProjects();
    setProjects(data as ProjectData[]);
    setLoadingProjects(false);
  }, []);

  const fetchMeetings = useCallback(async () => {
    const data = await getMeetings();
    setMeetings(data as MeetingData[]);
    setLoadingMeetings(false);
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchProjects();
      fetchMeetings();
    }
  }, [authenticated, fetchProjects, fetchMeetings]);

  const handleStatusChange = async (projectId: string, status: string) => {
    setUpdatingId(projectId);
    await updateProjectStatus(projectId, status as "new" | "contacted" | "in_progress" | "completed");
    await fetchProjects();
    setUpdatingId(null);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleCreateMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);
    setCreateError("");
    const result = await createMeeting(meetingForm);
    if (result.success && result.slug) {
      setCreatedSlug(result.slug);
      setMeetingForm({ title: "", description: "", meetingLink: "", scheduledDate: "", recipientName: "", recipientEmail: "" });
      setShowCreateForm(false);
      await fetchMeetings();
    } else {
      setCreateError(result.error || "Failed to create meeting");
    }
    setCreating(false);
  };

  const handleCancelMeeting = async (slug: string) => {
    await cancelMeeting(slug);
    await fetchMeetings();
  };

  if (!authenticated) {
    return <AdminGate onUnlock={() => setAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F6EF] px-4 py-8 text-[#11100E] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Admin Panel</h1>
          <div className="flex gap-1 rounded-xl bg-black/[0.04] p-1">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                  tab === t ? "bg-white text-[#004225] shadow-sm" : "text-[#74695B] hover:text-[#11100E]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === "Projects" && (
          <>
            {loadingProjects ? (
              <div className="flex min-h-[200px] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#004225]" />
              </div>
            ) : projects.length === 0 ? (
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
                        <button onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]">
                          <Eye className="h-3.5 w-3.5" /> Details
                        </button>
                        <button onClick={() => copyToClipboard(project.email)} className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]">
                          <Copy className="h-3.5 w-3.5" /> Email
                        </button>
                        {project.assetsFolder && (
                          <a href={project.assetsFolder} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]">
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
                            project.status === opt.value ? "bg-[#004225] text-white" : "bg-black/[0.04] text-[#74695B] hover:bg-black/[0.08]"
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
          </>
        )}

        {tab === "Meetings" && (
          <div className="space-y-6">
            {createdSlug && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-[#004225]/20 bg-[#004225]/5 p-5 shadow-mid">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#004225]">Meeting created!</p>
                    <p className="mt-1 text-xs text-[#74695B]">Share this link with the recipient:</p>
                    <code className="mt-1 block text-sm font-mono text-[#11100E] break-all">{SITE_URL}/meet/{createdSlug}</code>
                  </div>
                  <button onClick={() => copyToClipboard(`${SITE_URL}/meet/${createdSlug}`)} className="shrink-0 rounded-lg bg-[#004225] px-3 py-2 text-xs font-bold text-white hover:bg-[#11100E]">
                    <Copy className="inline h-3.5 w-3.5 mr-1" /> Copy
                  </button>
                </div>
              </motion.div>
            )}

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold tracking-tight">Scheduled Meetings</h2>
                <p className="mt-1 text-sm text-[#74695B]">{meetings.length} meeting{meetings.length !== 1 ? "s" : ""}</p>
              </div>
              <button
                onClick={() => { setShowCreateForm(!showCreateForm); setCreateError(""); setCreatedSlug(""); }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#004225] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#11100E]"
              >
                <CalendarPlus className="h-4 w-4" />
                New Meeting
              </button>
            </div>

            {showCreateForm && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onSubmit={handleCreateMeeting}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid space-y-4"
              >
                <h3 className="text-base font-bold">Schedule a Meeting</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#74695B]">Meeting Title</label>
                    <input type="text" required value={meetingForm.title} onChange={(e) => setMeetingForm((f) => ({ ...f, title: e.target.value }))} placeholder="Project Kickoff" className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-3 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#74695B]">Date & Time</label>
                    <input type="datetime-local" required value={meetingForm.scheduledDate} onChange={(e) => setMeetingForm((f) => ({ ...f, scheduledDate: e.target.value }))} className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-3 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#74695B]">Meeting Link (Google Meet / Zoom)</label>
                    <input type="url" required value={meetingForm.meetingLink} onChange={(e) => setMeetingForm((f) => ({ ...f, meetingLink: e.target.value }))} placeholder="https://meet.google.com/..." className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-3 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#74695B]">Recipient Name</label>
                    <input type="text" required value={meetingForm.recipientName} onChange={(e) => setMeetingForm((f) => ({ ...f, recipientName: e.target.value }))} placeholder="John Smith" className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-3 py-2.5 text-sm" />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#74695B]">Recipient Email</label>
                    <input type="email" required value={meetingForm.recipientEmail} onChange={(e) => setMeetingForm((f) => ({ ...f, recipientEmail: e.target.value }))} placeholder="john@company.com" className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-3 py-2.5 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-[#74695B]">Description / Agenda (optional)</label>
                  <textarea value={meetingForm.description} onChange={(e) => setMeetingForm((f) => ({ ...f, description: e.target.value }))} rows={3} placeholder="What to discuss..." className="w-full rounded-xl border border-black/10 bg-[#F8F6EF] px-3 py-2.5 text-sm" />
                </div>
                {createError && <p className="text-xs font-medium text-red-500">{createError}</p>}
                <div className="flex gap-2">
                  <button type="submit" disabled={creating} className="rounded-xl bg-[#004225] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#11100E] disabled:opacity-60">
                    {creating ? "Creating..." : "Create Meeting"}
                  </button>
                  <button type="button" onClick={() => setShowCreateForm(false)} className="rounded-xl border border-black/10 bg-white px-5 py-2.5 text-sm font-bold text-[#74695B] transition-colors hover:bg-black/[0.03]">
                    Cancel
                  </button>
                </div>
              </motion.form>
            )}

            {loadingMeetings ? (
              <div className="flex min-h-[200px] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#004225]" />
              </div>
            ) : meetings.length === 0 ? (
              <div className="rounded-2xl border border-black/10 bg-white p-12 text-center shadow-mid">
                <p className="text-[#74695B]">No meetings scheduled yet.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {meetings.map((meeting) => (
                  <motion.div
                    key={meeting._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-black/10 bg-white p-5 shadow-mid sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <h3 className="text-lg font-bold">{meeting.title}</h3>
                          <MeetingStatusBadge status={meeting.status} />
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#74695B]">
                          <span>{meeting.recipientName}</span>
                          <span className="hidden sm:inline">|</span>
                          <span>{meeting.recipientEmail}</span>
                          <span className="hidden sm:inline">|</span>
                          <span>{new Date(meeting.scheduledDate).toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <button onClick={() => copyToClipboard(`${SITE_URL}/meet/${meeting.slug}`)} className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]">
                          <Copy className="h-3.5 w-3.5" /> Copy Link
                        </button>
                        <a href={`${SITE_URL}/meet/${meeting.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]">
                          <ExternalLink className="h-3.5 w-3.5" /> Preview
                        </a>
                        <a href={meeting.meetingLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#004225] transition-colors hover:bg-black/[0.03]">
                          <Video className="h-3.5 w-3.5" /> Join
                        </a>
                        {meeting.status === "scheduled" && (
                          <button onClick={() => handleCancelMeeting(meeting.slug)} className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-50">
                            <Trash2 className="h-3.5 w-3.5" /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    {meeting.description && (
                      <div className="mt-3 border-t border-black/[0.06] pt-3">
                        <p className="text-xs text-[#74695B]">{meeting.description}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#11100E]/35" onClick={() => setSelectedProject(null)} />
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-black/10 bg-white p-6 shadow-high sm:p-8">
            <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 text-sm font-bold text-[#74695B] hover:text-[#11100E]">
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
