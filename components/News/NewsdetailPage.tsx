"use client";

import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/data/newsData";

export default function NewsDetailPage({ item }: { item: NewsItem }) {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/news" className="hover:text-[#D60000] transition-colors">
            News
          </Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-xs">{item.title}</span>
        </div>

        {/* Category + Date */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-red-50 text-[#D60000] border border-red-200 px-3 py-1 rounded-full font-medium">
            {item.category}
          </span>
          <span className="text-xs text-gray-400">{item.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
          {item.title}
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8 bg-gray-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
          {item.imageCaption && (
            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded">
              {item.imageCaption}
            </div>
          )}
        </div>

        {/* Excerpt */}
        <p className="text-base text-gray-600 leading-relaxed mb-6 font-medium border-l-4 border-red-500 pl-4">
          {item.excerpt}
        </p>

        {/* Full Content */}
        <div className="text-sm text-gray-600 leading-relaxed space-y-4">
          {item.fullContent.split("\n").map((para, i) =>
            para.trim() ? <p key={i}>{para.trim()}</p> : null
          )}
        </div>

        {/* Back Button */}
        <Link
          href="/news"
          className="mt-10 inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50 transition"
        >
          ← Back to News
        </Link>

      </div>
    </section>
  );
}