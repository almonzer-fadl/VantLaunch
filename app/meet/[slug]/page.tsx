import { connectDB } from "@/app/lib/db";
import { Meeting, IMeeting } from "@/app/lib/models/Meeting";
import { notFound } from "next/navigation";
import { MeetingContent } from "./meeting-content";

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

  const plain = JSON.parse(JSON.stringify(meeting)) as IMeeting & { _id: string };

  return <MeetingContent meeting={plain} />;
}
