"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, User, Video, XCircle, Pencil, RotateCw } from "lucide-react";
import { rescheduleMeeting } from "@/app/actions/meetings";
import type { IMeeting } from "@/app/lib/models/Meeting";

export function MeetingContent({ meeting }: { meeting: IMeeting & { _id: string } }) {
  const [showReschedule, setShowReschedule] = useState(false);
  const [currentDate, setCurrentDate] = useState<string>(meeting.scheduledDate as unknown as string);
  const [newDate, setNewDate] = useState("");
  const [rescheduling, setRescheduling] = useState(false);
  const [rescheduleError, setRescheduleError] = useState("");
  const [rescheduleSuccess, setRescheduleSuccess] = useState(false);
  const [cancelled, setCancelled] = useState(meeting.status === "cancelled");

  const isCancelled = cancelled;
  const scheduledDate = new Date(currentDate);
  const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const formattedDate = scheduledDate.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: userTz,
  });
  const formattedTime = scheduledDate.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
    timeZone: userTz,
  });

  const handleReschedule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDate) return;
    setRescheduling(true);
    setRescheduleError("");
    const result = await rescheduleMeeting(meeting.slug, newDate);
    if (result.success) {
      setCurrentDate(newDate);
      setRescheduleSuccess(true);
      setShowReschedule(false);
      setTimeout(() => setRescheduleSuccess(false), 4000);
    } else {
      setRescheduleError(result.error || "Failed to reschedule");
    }
    setRescheduling(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F6EF] px-6 py-20 text-center">
      <div className="w-full max-w-lg">
        {isCancelled ? (
          <div className="rounded-2xl border border-red-200 bg-white p-8 shadow-mid">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-red-100">
              <XCircle className="h-8 w-8 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#11100E]">Meeting Cancelled</h1>
            <p className="mt-3 text-base leading-relaxed text-[#74695B]">
              This meeting has been cancelled. If you have questions, please contact us directly.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-mid text-left">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#004225]/10">
              <Video className="h-8 w-8 text-[#004225]" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-[#11100E]">{meeting.title}</h1>

            {rescheduleSuccess && (
              <div className="mt-4 rounded-xl bg-[#004225]/5 border border-[#004225]/20 px-4 py-2.5 text-sm font-medium text-[#004225]">
                Meeting rescheduled successfully!
              </div>
            )}

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#74695B]">
                <User className="h-4 w-4 shrink-0 text-[#004225]" />
                <span>{meeting.recipientName}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#74695B]">
                <Calendar className="h-4 w-4 shrink-0 text-[#004225]" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#74695B]">
                <Clock className="h-4 w-4 shrink-0 text-[#004225]" />
                <span>{formattedTime}</span>
              </div>
              {meeting.description && (
                <div className="flex items-start gap-3 text-sm text-[#74695B]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#004225] mt-0.5" />
                  <p>{meeting.description}</p>
                </div>
              )}
            </div>

            <div className="mt-6">
              <button
                onClick={() => setShowReschedule(!showReschedule)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#74695B] transition-colors hover:bg-black/[0.03]"
              >
                <Pencil className="h-3.5 w-3.5" />
                Reschedule
              </button>
            </div>

            {showReschedule && (
              <form onSubmit={handleReschedule} className="mt-4 rounded-xl border border-black/10 bg-[#F8F6EF] p-4">
                <p className="text-xs font-bold text-[#11100E] mb-3">Pick a new date & time:</p>
                <div className="flex gap-2">
                  <input
                    type="datetime-local"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="flex-1 rounded-lg border border-black/10 bg-white px-3 py-2 text-xs"
                  />
                  <button
                    type="submit"
                    disabled={rescheduling}
                    className="rounded-lg bg-[#004225] px-4 py-2 text-xs font-bold text-white hover:bg-[#11100E] disabled:opacity-60"
                  >
                    {rescheduling ? "..." : "Save"}
                  </button>
                </div>
                {rescheduleError && <p className="mt-2 text-xs font-medium text-red-500">{rescheduleError}</p>}
              </form>
            )}

            <div className="mt-8">
              <a
                href={meeting.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-4 text-base font-bold text-white transition-colors hover:bg-[#11100E]"
              >
                <Video className="h-5 w-5" />
                Join Meeting
              </a>
              <p className="mt-3 text-center text-xs text-[#74695B]">
                Click the button above when it&apos;s time for your meeting
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Meeting Link</p>
              <code className="mt-1 block text-xs text-[#11100E] break-all">{meeting.meetingLink}</code>
            </div>

            {meeting.history && meeting.history.length > 0 && (
              <div className="mt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B] mb-3">Change Log</p>
                <div className="space-y-2">
                  {meeting.history.map((entry, i) => {
                    const ts = new Date(entry.timestamp);
                    const tsStr = ts.toLocaleString(undefined, {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    });
                    const oldDt = new Date(entry.oldValue);
                    const newDt = new Date(entry.newValue);
                    const fmt = (d: Date) =>
                      d.toLocaleString(undefined, {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                        timeZoneName: "short",
                      });
                    return (
                      <div key={i} className="flex items-start gap-2 rounded-lg border border-black/[0.06] bg-white px-3 py-2 text-xs">
                        <RotateCw className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#004225]" />
                        <div>
                          <p className="text-[#11100E]">
                            <span className="font-bold">Rescheduled</span>{" "}
                            <span className="text-[#74695B]">from {fmt(oldDt)}</span>
                            {" → "}
                            <span className="text-[#004225] font-medium">to {fmt(newDt)}</span>
                          </p>
                          <p className="mt-0.5 text-[#74695B]">{tsStr}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        <p className="mt-6 text-xs text-[#74695B]">
          Powered by <span className="font-bold text-[#004225]">VantLaunch</span>
        </p>
      </div>
    </div>
  );
}
