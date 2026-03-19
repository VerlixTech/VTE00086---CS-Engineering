"use client";

export function ProjectGallery() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Araliya Rice Mills
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[120px]">

          {/* Top Left (Big) */}
          <div className="col-span-8 row-span-2 bg-gray-300 rounded-2xl"></div>

          {/* Top Right */}
          <div className="col-span-4 row-span-2 bg-gray-300 rounded-2xl"></div>

          {/* Bottom Left */}
          <div className="col-span-3 row-span-3 bg-gray-300 rounded-2xl"></div>

          {/* Bottom Center (Big) */}
          <div className="col-span-6 row-span-3 bg-gray-300 rounded-2xl"></div>

          {/* Bottom Right */}
          <div className="col-span-3 row-span-3 bg-gray-300 rounded-2xl"></div>

        </div>

      </div>
    </section>
  );
}