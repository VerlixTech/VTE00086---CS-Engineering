
"use client";

import Image from "next/image";

const partners = [
  "/OurChannel/image 4.svg",
  "/OurChannel/image 5.svg",
  "/OurChannel/image 6.svg",
  "/OurChannel/image 7.svg",
  "/OurChannel/image 9.svg",
  "/OurChannel/image 10.svg",
 
];

export function ChannelPartners() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Channel Partners
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            We collaborate with globally recognized manufacturers to deliver
            reliable and compliant industrial solutions.
          </p>
        </div>

        {/* Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">

          {partners.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Partner logo"
                width={140}
                height={80}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>

        {/* Bottom Center Logo */}
        <div className="flex justify-center">
          <Image
            src= "/OurChannel/image 8.svg"
            alt="SLV Agro"
            width={260}
            height={120}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}