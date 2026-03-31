"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Steam Engineering & Consultation",
    description:
      "We offer innovative steam engineering solutions to achieve the highest efficiency.",
    features:
      "Steam Engineering | Steam Consultation | Site Visits | Steam System Design",
    image: "/Servicess/image 2.svg",
  },
  {
    title: "Boiler Installations",
    description:
      "We have earned an enviable reputation with our customers for accuracy and managing the boiler installation on time.",
    features:
      "Boiler Piping | Boiler Installations | Master Planning | Fabrications | Utility Support",
    image: "/Servicess/image 3.svg",
  },
  {
    title: "Energy & Sustainability Solutions",
    description:
      "We provide energy and sustainability solutions to help industries reduce emissions.",
    features:
      "Low Carbon Emission | Operation & Maintenance",
    image: "/Servicess/image 4.svg",
  },
  {
    title: "Boiler Sales",
    description:
      "Being the authorized sales agent for Maxtherm India Pvt Ltd, we provide our customers the chance to buy and operate high quality boilers.",
    features:
      "Steam Boilers | Hot Water Generators | Thermic Heaters",
    image: "/Servicess/image 5.svg",
  },
  {
    title: "Other Services",
    description:
      "We also provide maintenance contracts and technical support services.",
    features:
      "Boiler Service | Maintenance Contracts | Spare Parts",
    image: "/Servicess/image 6.svg",
  },
];

export function ServicesOfferSection() {
  return (
    <section className="bg-white mt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
          Services We offer
        </h2>

        <div className="space-y-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center"
               data-aos="fade-right" data-aos-duration="1000"
            >
              {/* Image – always first on mobile */}
              <div
                className={`rounded-xl overflow-hidden ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text – always second on mobile */}
              <div
                className={`${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>

                <p className="text-gray-500 text-sm mb-5">
                  {service.features}
                </p>

                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-5 py-2 rounded-full text-xs"
                >
                  Contact for More →
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}