"use client";

import { useState } from "react";
import NewsCard from "@/components/News/NewsCard";
import { newsData } from "@/data/newsData";

const ITEMS_PER_PAGE = 3;

export default function ReadUsSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const paginated = newsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Read Us
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {paginated.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-12 text-sm text-gray-500">

          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`transition ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:text-[#D60000] cursor-pointer"
            }`}
          >
            ← Previous
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`px-3 py-1 rounded transition text-sm ${
                  p === currentPage
                    ? "bg-[#D60000] text-white"
                    : "text-gray-500 hover:text-[#D60000]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`transition ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed"
                : "text-[#D60000] hover:underline cursor-pointer"
            }`}
          >
            Next →
          </button>

        </div>
      </div>
    </section>
  );
}