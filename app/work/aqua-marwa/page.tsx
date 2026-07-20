import type { Metadata } from "next";
import { ProjectStubPage } from "../ProjectStubPage";
import { WORK_STUBS } from "../../components/stub-projects";

const config = WORK_STUBS["aqua-marwa"];

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    images: [{ url: config.imageSrc, alt: config.imageAlt }],
  },
};

export default function AquaMarwaStubPage() {
  return <ProjectStubPage config={config} />;
}
