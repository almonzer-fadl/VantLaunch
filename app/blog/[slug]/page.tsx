import type { Metadata } from "next";
import { ARTICLES } from "@/app/lib/articles";
import { ArticlePage } from "@/app/components/ArticlePage";

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = ARTICLES[slug];
  if (!data) return {};
  return {
    title: `${data.title} — VantLaunch Blog`,
    description: data.description,
    openGraph: { title: data.title, description: data.description, type: "article" },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = ARTICLES[slug];
  if (!data) return <div className="flex min-h-screen items-center justify-center bg-[#F8F6EF]"><div className="text-center"><h1 className="text-2xl font-bold">Article not found</h1><a href="/blog" className="mt-4 inline-block text-[#004225] font-bold">Back to Blog</a></div></div>;
  return <ArticlePage data={data} slug={slug} />;
}
