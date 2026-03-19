// "use client";

// import Image from "next/image";

// const services = [
//   {
//     title: "Steam Engineering & Consultation",
//     description:
//       "Engineering | Technical Consultation | Site Audits | System Design",
//     image: "/ServiceSection/image 2.svg",
//   },
//   {
//     title: "Boiler Sales & Equipment",
//     description:
//       "Steam Boilers | Thermal Heaters | Water Treatment | Rice Machinery",
//     image: "ServiceSection/image 3.svg",
//   },
//   {
//     title: "Operation & Maintenance",
//     description:
//       "Maintenance Contracts | Troubleshooting | Spare Parts | System Upgrades",
//     image: "/aboutus.svg",
//   },
//   {
//     title: "Energy & Water Solutions",
//     description:
//       "Energy Audits | Emission Control | Boiler Chemicals | RO & DM Plants",
//     image: "ServiceSection/image 4.svg",
//   },
// ];

// export function ServiceSection() {
//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Services We offer
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//           {/* Service Cards */}
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative rounded-xl overflow-hidden group"
//             >
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 width={600}
//                 height={500}
//                 className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-500"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40"></div>

//               {/* Text */}
//               <div className="absolute bottom-6 left-6 right-6 text-white">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {service.title}
//                 </h3>

//                 <p className="text-sm opacity-90">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {/* Tall Card */}
//           <div className="relative rounded-xl overflow-hidden row-span-2">
//             <Image
//               src="/ServiceSection/image 5.svg"
//               alt="Boiler Installation"
//               width={600}
//               height={900}
//               className="w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/40"></div>

//             <div className="absolute bottom-6 left-6 right-6 text-white">
//               <h3 className="text-2xl font-semibold mb-2">
//                 Boiler Installation & Commissioning
//               </h3>

//               <p className="text-sm">
//                 Installation | Fabrication | Piping | Commissioning
//               </p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const services = [
  {
    title: "Steam Engineering & Consultation",
    description:
      "Engineering | Technical Consultation | Site Audits | System Design",
    image: "/ServiceSection/image 2.svg",
  },
  {
    title: "Boiler Sales & Equipment",
    description:
      "Steam Boilers | Thermal Heaters | Water Treatment | Rice Machinery",
    image: "/ServiceSection/image 3.svg",
  },
  {
    title: "Operation & Maintenance",
    description:
      "Maintenance Contracts | Troubleshooting | Spare Parts | System Upgrades",
    image: "/aboutus.svg",
  },
  {
    title: "Energy & Water Solutions",
    description:
      "Energy Audits | Emission Control | Boiler Chemicals | RO & DM Plants",
    image: "/ServiceSection/image 4.svg",
  },
];

function ServiceCard({ service }: any) {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <Image
        src={service.image}
        alt={service.title}
        width={600}
        height={500}
        className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-xl font-semibold mb-2">
          {service.title}
        </h3>

        <p className="text-sm opacity-90">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export function ServiceSection() {
  return (
    <section className="bg-white py-0">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Services We offer
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Top Row */}
          <ServiceCard service={services[0]} />
          <ServiceCard service={services[1]} />

          {/* Tall Card */}
          <div className="lg:row-span-2 relative rounded-xl overflow-hidden group">
            <Image
              src="/ServiceSection/image 5.svg"
              alt="Boiler Installation"
              width={600}
              height={900}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">
                Boiler Installation & Commissioning
              </h3>

              <p className="text-sm">
                Installation | Fabrication | Piping | Commissioning
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <ServiceCard service={services[2]} />
          <ServiceCard service={services[3]} />

        </div>

      </div>
    </section>
  );
}