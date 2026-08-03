import { connectDB } from "@/app/lib/db";
import { Meeting } from "@/app/lib/models/Meeting";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, User, Video, XCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function MeetingPage(props: Props) {
  const { slug } = await props.params;

  await connectDB();
  const meeting = await Meeting.findOne({ slug }).lean();

  if (!meeting) {
    notFound();
  }

  const isCancelled = meeting.status === "cancelled";
  const scheduledDate = new Date(meeting.scheduledDate);
  const formattedDate = scheduledDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = scheduledDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

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
          </div>
        )}

        <p className="mt-6 text-xs text-[#74695B]">
          Powered by <span className="font-bold text-[#004225]">VantLaunch</span>
        </p>
      </div>
    </div>
  );
}
