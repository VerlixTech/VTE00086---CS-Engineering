import { notFound } from "next/navigation";
import { newsData } from "@/data/newsData";
import NewsDetailPage from "@/components/News/NewsdetailPage";

// Pre-generate all id-based pages at build time
export function generateStaticParams() {
  return newsData.map((item) => ({ id: String(item.id) }));
}

// Generate metadata per article
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = newsData.find((n) => n.id === Number(id));
  if (!item) return {};
  return {
    title: `${item.title} | CS Engineering Services`,
    description: item.excerpt,
  };
}

export default async function NewsDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = newsData.find((n) => n.id === Number(id));

  if (!item) notFound();

  return <NewsDetailPage item={item} />;
}