// "use client";

// import { ArrowRight } from "lucide-react";

// const projects = [
//   "Lakbima Rice Mill (Araliya rice producers), Polonnaruwa — Boiler tube replacement, overhaul and accessories installation of 2 nos. 3 ton steam boilers",
//   "Nishudha rice products, Polpithigama — Yearly overhauling of steam boiler",
//   "Ferentino tyres, Horana — Yearly overhauling of 6 nos Forbesvyncke steam boilers",
//   "Ocean food manufacturing, Puttalam — Yearly overhauling of 3 ton FO fired steam boiler",
//   "Sanmik Foods, Anuradhapura — Yearly overhauling of 4 ton thermax steam boiler",
//   "Sanmik foods, Divulapitiya — Yearly overhauling of 6 ton thermax steam boiler",
//   "Ebony holdings, Warriyapola — Yearly overhauling of 500 kg thermax steam boiler",
//   "MAS fabrics, Thulhiriya — Overhauling of maxtherm 3 Mn thermic fluid heater",
//   "Hansana rice mill, Dimbulagala — Yearly overhauling of 4 ton maxtherm steam boiler",
//   "Luckyland packaging, Kandy — Yearly overhauling of 1.5 ton Maxtherm steam boiler",
//   "NDC Exports, Kuliyapitiya — Yearly overhauling of 4 ton maxtherm steam boiler",
//   "Lakbima rice mill, Polonnaruwa — Replacing of water tube sections in 22 ton husk fired steam boiler",
//   "Prabhath rice mill, Galnewa — Yearly overhauling of 3 ton husk fired steam boiler",
//   "Naratha Agro Industries, Kandana — Overhauling and refractory work for thermax 8 ton steam boiler",
//   "Naracocland, Dankotuwa — Overhauling and refractory work for thermax 8 ton steam boiler",
//   "Naratha Agro Industries, Kurunegala — Yearly overhauling of 5 ton steam boiler",
//   "Nakiyadeniya Oil Mills, Galle — Chimney cup brushing and painting work",
//   "Elastomeric, Horana — Refractory overhauling, APH tube replacement job",
// ];

// export function PastProjectsSection() {
//   return (
//     <section className="bg-white py-2">
//       <div className="max-w-full mx-auto px-6">

//         {/* Card Container */}
//         <div className="bg-white rounded-2xl shadow-md p-8">

//           {/* Title */}
//           <h2 className="text-2xl md:text-3xl font-bold mb-6">
//             Past Projects
//           </h2>

//           {/* List */}
//           <ul className="space-y-1 max-h-[900px]  pr-2  px-3">
//             {projects.map((item, index) => (
//               <li
//                 key={index}
//                 className="text-black text-md leading-relaxed flex gap-1"
//               >
//                 <span className="text-black mt-1">•</span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* Button */}
//           <div className="flex justify-center mt-8">
//             <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
//               More
//               <ArrowRight size={16} />
//             </button>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/Experience/Araliya Rice.jpg",
    tag: "OVERHAUL",
    location: "POLONNARUWA",
    title: "Lakbima Rice Mill (Araliya)",
    desc: "Complete boiler tube replacement and systematic overhaul to enhance steam production efficiency.",
  },
  {
    id: 2,
    image: "/Experience/nisudha.jpg",
    tag: "YEARLY",
    location: "POLONNARUWA",
    title: "Nishudha Rice Products",
    desc: "Scheduled yearly overhauling services to maintain safety standards and operational uptime.",
  },
  {
    id: 3,
    image: "/Experience/Tyre.jpg ",
    tag: "MULTI-UNIT",
    location: "HORANA",
    title: "Ferentino Tyres",
    desc: "Large-scale overhauling of 6 nos FBC boilers within a critical manufacturing timeline.",
  },
  {
    id: 4,
    image: "/Experience/Ocean-S.png",
    tag: "3 TON",
    location: "PUTTLAM",
    title: "Ocean Food Manufacturing",
    desc: "Overhaul of a 3 ton furnace oil (FO) fired boiler, optimizing combustion and thermal efficiency.",
  },
  {
    id: 5,
    image: "/Experience/sanmic.jpg",
    tag: "DUAL SITE",
    location: "ANURADHAPURA & DIVULAPITIYA",
    title: "Sanmic Foods",
    desc: "Comprehensive overhauling of 4 ton and 6 ton Thermax boilers across two major processing facilities.",
  },
  {
    id: 6,
    image: "/Experience/download.jpg",
    tag: "HEATER",
    location: "THULHIRIYA",
    title: "MAS Fabrics",
    desc: "Maxtherm 3 Mn heater overhaul and specialized refractory work for high-temperature textile processing.",
  },
  {
    id: 7,
    image: "/Experience/nakiyadeniya.jpg",
    tag: "HEATER",
    location: "GALLE",
    title: "Nakiyadeniya Oil Mills",
    desc: "Specialized chimney cup brushing and protective heat-resistant painting for corrosion control.",
  },
  {
    id: 8,
    image: "/Experience/Elasto.jpg",
    tag: "HEATER",
    location: "HORANA",
    title: "Elastomeric",
    desc: "Refractory overhauling and APH tube replacement to restore peak heat exchange performance.",
  },
];

export  function PastProjectSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-10">
          Past Projects
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">

              {/* Image */}
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Tag */}
                <span className="absolute top-3 right-3 bg-[#D60000] text-white text-xs px-2 py-1 rounded">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="mt-4">

                {/* Location */}
                <p className="text-xs text-gray-400 flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-[#D60000] rounded-full"></span>
                  {project.location}
                </p>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">
                  {project.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}