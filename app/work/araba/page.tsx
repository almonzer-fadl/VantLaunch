import type { Metadata } from "next";
import { ProjectStubPage } from "../ProjectStubPage";
import { WORK_STUBS } from "../stub-projects";

const config = WORK_STUBS.araba;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    images: [{ url: config.imageSrc, alt: config.imageAlt }],
  },
};

export default function ArabaStubPage() {
  return <ProjectStubPage config={config} />;
}
