"use client";

import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/data/newsData";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">

        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
            {item.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs text-gray-400 mb-2">{item.date}</p>

          <h3 className="font-semibold text-gray-900 mb-2 leading-snug text-sm group-hover:text-red-500 transition-colors">
            {item.title}
          </h3>

          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
            {item.excerpt}
          </p>

          <span className="inline-block mt-3 text-xs text-red-500 font-medium group-hover:underline">
            Read more →
          </span>
        </div>

      </div>
    </Link>
  );
}