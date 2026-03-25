import { notFound } from "next/navigation";
import { newsData } from "@/data/newsData";
import NewsDetailPage from "@/components/News/NewsdetailPage";

// Pre-generate all id-based pages at build time
export function generateStaticParams() {
  return newsData.map((item) => ({ id: String(item.id) }));
}

// Generate metadata per article
export function generateMetadata({ params }: { params: { id: string } }) {
  const item = newsData.find((n) => n.id === Number(params.id));
  if (!item) return {};
  return {
    title: `${item.title} | CS Engineering Services`,
    description: item.excerpt,
  };
}

export default function NewsDetailRoute({
  params,
}: {
  params: { id: string };
}) {
  const item = newsData.find((n) => n.id === Number(params.id));

  if (!item) notFound();

  return <NewsDetailPage item={item} />;
}