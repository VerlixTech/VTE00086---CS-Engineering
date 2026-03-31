"use client";

import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* CTA Card */}
        <div className="relative bg-[#D60000] rounded-2xl overflow-hidden py-20 px-10 text-center" >

          {/* Top Left Ellipse */}
          <Image
            src="/CTASection/Ellipse 5.svg"
            alt="ellipse"
            width={150}
            height={150}
            className="absolute top-0 left-0 w-[80px] md:w-[150px]"
            />

          {/* Bottom Right Ellipse */}
         <Image
            src="/CTASection/Ellipse 4.svg"
            alt="ellipse"
            width={350}
            height={350}
            className="hidden md:block absolute bottom-0 right-0"
            />

          {/* Generator Image */}
          <Image
            src="/CTASection/GenaratorCTA.svg"
            alt="generator"
            width={420}
            height={300}
            className="absolute bottom-0 left-0"
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Power Your Industrial Growth
              <br />
              with Reliable Engineering Solutions
            </h2>

            <Link
              href="/contact"
              className="inline-block px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-red-600 transition"
            >
              Contact Us →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}