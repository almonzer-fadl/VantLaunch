"use client";

import { useParams } from "next/navigation";
import { ArticlePage } from "@/app/components/ArticlePage";
import { ARTICLES } from "@/app/lib/articles";

export default function BlogArticle() {
  const params = useParams();
  const slug = params.slug as string;
  const data = ARTICLES[slug];

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F6EF]">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <a href="/blog" className="mt-4 inline-block text-[#004225] font-bold">Back to Blog</a>
        </div>
      </div>
    );
  }

  return <ArticlePage data={data} />;
}
