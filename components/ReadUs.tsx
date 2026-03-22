"use client";

import Image from "next/image";

const blogs = [
  {
    id: 1,
    image: "/News/bruce-mars-8YG31Xn4dSw-unsplash 1 (1).svg",
    title: "How to Improve Steam Boiler Efficiency in Industrial Operations",
    date: "01/03/226",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d...",
  },
  {
    id: 2,
    image: "/News/bruce-mars-8YG31Xn4dSw-unsplash 1 (2).svg",
    title: "How to Improve Steam Boiler Efficiency in Industrial Operations",
    date: "01/03/226",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d...",
  },
  {
    id: 3,
    image: "/News/bruce-mars-8YG31Xn4dSw-unsplash 1.svg",
    title: "How to Improve Steam Boiler Efficiency in Industrial Operations",
    date: "01/03/226",
    desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d...",
  },
];

export default function ReadUsSection() {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Read Us
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={blog.image}
                  alt="blog"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />

                
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{blog.date}</p>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-12 text-sm text-gray-500">

          <span className="opacity-50 cursor-not-allowed">← Previous</span>

          <div className="flex items-center gap-3">
            <span className="bg-red-500 text-white px-3 py-1 rounded">1</span>
            <span className="cursor-pointer">2</span>
            <span className="cursor-pointer">3</span>
            <span>...</span>
            <span className="cursor-pointer">10</span>
          </div>

          <span className="text-red-500 cursor-pointer">Next →</span>
        </div>

      </div>
    </section>
  );
}