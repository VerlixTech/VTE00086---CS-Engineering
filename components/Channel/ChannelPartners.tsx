

// "use client";

// import Image from "next/image";

// const partners = [
//   {
//     name: "MAXTHERM INDIA PVT LTD",
//     logo: "/ChannelPartners/maxtherm image 4.svg",
//     description:
//       "Maxtherm India is a Chennai based reputed manufacturer of steam boilers, thermic fluid heaters, hot water generators & hot air generators.",
//     images: [
//       "/ChannelPartners/maxtherm image 5.svg",
//       "/ChannelPartners/maxtherm image 6.svg",
//       "/ChannelPartners/maxtherm image 7.svg",
//     ],
//   },
//   {
//     name: "ARMSTRONG INTERNATIONAL",
//     logo: "/ChannelPartners/amstrong  image 4.svg",
//     description:
//       "Armstrong provides intelligent system solutions for industrial applications with energy efficiency.",
//     images: [
//       "/ChannelPartners/amstrong  image 6.svg",
//       "/ChannelPartners/amstrong  image 5.svg",
//       "/ChannelPartners/amstrong  image 7.svg",
//     ],
//   },
//    {
//     name: "ARMSTRONG INTERNATIONAL",
//     logo: "/ChannelPartners/mysilo image 6.svg",
//     description:
//       "Armstrong provides intelligent system solutions for industrial applications with energy efficiency.",
//     images: [
//       "/ChannelPartners/mysilo image 7.svg",
//       "/ChannelPartners/mysilo image 5.svg",
//       "/ChannelPartners/mysilo image 4.svg",
//     ],
//   },
//   {
//     name: "ARMSTRONG INTERNATIONAL",
//     logo: "/ChannelPartners/suri 2.svg",
//     description:
//       "Armstrong provides intelligent system solutions for industrial applications with energy efficiency.",
//     images: [
//       "/ChannelPartners/suri 3.svg",
//       "/ChannelPartners/suri 4.svg",
//       "/ChannelPartners/suri 1.svg",
//     ],
//   },
//   {
//     name: "ARMSTRONG INTERNATIONAL",
//     logo: "/ChannelPartners/tes 1.svg",
//     description:
//       "Armstrong provides intelligent system solutions for industrial applications with energy efficiency.",
//     images: [
//       "/ChannelPartners/tes 2.svg",
//       "/ChannelPartners/tes 3.svg",
//       "/ChannelPartners/tes 4.svg",
//     ],
//   },
//   {
//     name: "ARMSTRONG INTERNATIONAL",
//     logo: "/ChannelPartners/slv agro 2.svg",
//     description:
//       "Armstrong provides intelligent system solutions for industrial applications with energy efficiency.",
//     images: [
//       "/ChannelPartners/slv agro 3.svg",
//       "/ChannelPartners/slv agro 1.svg",
//       "/ChannelPartners/slv agro 4.svg",
//     ],
//   },
//   {
//     name: "ARMSTRONG INTERNATIONAL",
//     logo: "/ChannelPartners/nalco 4.svg",
//     description:
//       "Armstrong provides intelligent system solutions for industrial applications with energy efficiency.",
//     images: [
//       "/ChannelPartners/nalco 3.svg",
//       "/ChannelPartners/nalco 2.svg",
//       "/ChannelPartners/nalco 1.svg",
//     ],
//   },
  
// ];

// export function ChannelPartners() {
//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-0 md:px-6">

//         {/* Title */}
//         <h2 className="text-center text-2xl font-semibold mb-12">
//           More about Our Channel Partners
//         </h2>

//         {/* LOOP */}
//         <div className="space-y-16">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="relative grid md:grid-cols-[1fr_1.2fr] gap-0 md:gap-4 items-center"
//             >

//               {/* LEFT LOGO */}
//               <div className="flex items-center justify-center">
//                 <div className="p-2 flex items-center justify-center">
//                   <Image
//                     src={partner.logo}
//                     alt={partner.name}
//                     width={360}
//                     height={290}
//                     className="object-contain"
//                   />
//                 </div>
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="relative md:-ml-8 p-6 md:p-8">

//                 {/* Curved Background */}
//                 <div className="absolute inset-0 bg-white rounded-[40px] -z-10 clip-curve"></div>

//                 {/* Title */}
//                 <h3 className="text-xl md:text-2xl font-bold mb-3">
//                   {partner.name}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm text-gray-700 leading-relaxed mb-6">
//                   {partner.description}
//                 </p>

//                 {/* Images */}
//                 <div className="flex gap-4 flex-wrap mb-6">
//                   {partner.images.map((img, i) => (
//                     <Image
//                       key={i}
//                       src={img}
//                       alt=""
//                       width={130}
//                       height={90}
//                       className="object-contain"
//                     />
//                   ))}
//                 </div>

//                 {/* Button */}
//                 <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
//                   Visit Website →
//                 </button>

//               </div>

//             </div>
//           ))}
//         </div>

//       </div>

      
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";

// const partners = [
//   {
//     name: "MAXTHERM INDIA PVT LTD",
//     logo: "/ChannelPartners/maxtherm image 4.svg",
//     description:
//       "Maxtherm India is a Chennai based reputed manufacturer of steam boilers, thermic fluid heaters, hot water generators & hot air generators.",
//     images: [
//       "/ChannelPartners/maxtherm image 5.svg",
//       "/ChannelPartners/maxtherm image 6.svg",
//       "/ChannelPartners/maxtherm image 7.svg",
//     ],
//   },
//   {
//     name: "ARMSTRONG INTERNATIONAL",
//     logo: "/ChannelPartners/amstrong  image 4.svg",
//     description:
//       "Armstrong provides intelligent system solutions for industrial applications with energy efficiency.",
//     images: [
//       "/ChannelPartners/amstrong  image 6.svg",
//       "/ChannelPartners/amstrong  image 5.svg",
//       "/ChannelPartners/amstrong  image 7.svg",
//     ],
//   },
//   {
//     name: "MYSILO",
//     logo: "/ChannelPartners/mysilo image 6.svg",
//     description:
//       "Mysilo provides advanced grain storage and silo systems for modern agriculture.",
//     images: [
//       "/ChannelPartners/mysilo image 7.svg",
//       "/ChannelPartners/mysilo image 5.svg",
//       "/ChannelPartners/mysilo image 4.svg",
//     ],
//   },
//   {
//     name: "SURI ENGINEERS",
//     logo: "/ChannelPartners/suri 2.svg",
//     description:
//       "Suri Engineers provide industrial boiler and engineering solutions.",
//     images: [
//       "/ChannelPartners/suri 3.svg",
//       "/ChannelPartners/suri 4.svg",
//       "/ChannelPartners/suri 1.svg",
//     ],
//   },
//   {
//     name: "TES",
//     logo: "/ChannelPartners/tes 1.svg",
//     description:
//       "TES offers energy-efficient thermal engineering solutions.",
//     images: [
//       "/ChannelPartners/tes 2.svg",
//       "/ChannelPartners/tes 3.svg",
//       "/ChannelPartners/tes 4.svg",
//     ],
//   },
//   {
//     name: "SLV AGRO",
//     logo: "/ChannelPartners/slv agro 2.svg",
//     description:
//       "SLV Agro specializes in agricultural processing and storage systems.",
//     images: [
//       "/ChannelPartners/slv agro 3.svg",
//       "/ChannelPartners/slv agro 1.svg",
//       "/ChannelPartners/slv agro 4.svg",
//     ],
//   },
//   {
//     name: "NALCO WATER",
//     logo: "/ChannelPartners/nalco 4.svg",
//     description:
//       "Nalco Water provides water treatment and process improvement solutions.",
//     images: [
//       "/ChannelPartners/nalco 3.svg",
//       "/ChannelPartners/nalco 2.svg",
//       "/ChannelPartners/nalco 1.svg",
//     ],
//   },
// ];

// export function ChannelPartners() {
//   return (
//     <section className="relative py-20 overflow-hidden">

//       {/* 🔴 RED VECTOR BACKGROUND */}
//       <div className="absolute right-0 top-0 h-full w-[45%] md:w-[30%] z-16 opacity-90 pointer-events-none">
//         <Image
//           src="/ChannelPartners/Vector 2.png" // 👈 YOUR VECTOR IMAGE
//           alt="background shape"
//           fill
//           className="object-cover object-right"
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-0 md:px-6">

//         {/* Title */}
//         <h2 className="text-center text-2xl font-semibold mb-12">
//           More about Our Channel Partners
//         </h2>

//         {/* LOOP */}
//         <div className="space-y-16">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="relative grid md:grid-cols-[1fr_1.2fr] gap-0 md:gap-4 items-center"
//             >

//               {/* LEFT LOGO */}
//               <div className="flex items-center justify-center">
//                 <Image
//                   src={partner.logo}
//                   alt={partner.name}
//                   width={360}
//                   height={290}
//                   className="object-contain"
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="relative md:-ml-8 p-6 md:p-8">

//                 {/* White Card */}
                

//                 {/* Title */}
//                 <h3 className="text-xl md:text-2xl font-bold mb-3">
//                   {partner.name}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm text-gray-700 leading-relaxed mb-6">
//                   {partner.description}
//                 </p>

//                 {/* Images */}
//                 <div className="flex gap-4 flex-wrap mb-6">
//                   {partner.images.map((img, i) => (
//                     <Image
//                       key={i}
//                       src={img}
//                       alt=""
//                       width={130}
//                       height={90}
//                       className="object-contain"
//                     />
//                   ))}
//                 </div>

//                 {/* Button */}
//                 <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
//                   Visit Website →
//                 </button>

//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";

// const partners = [
//   {
//     name: "MAXTHERM INDIA PVT LTD",
//     logo: "/ChannelPartners/maxtherm image 4.svg",
//     description:
//       "Maxtherm India is a Chennai based reputed manufacturer of steam boilers, thermic fluid heaters, hot water generators & hot air generators.",
//     images: [
//       "/ChannelPartners/maxtherm image 5.svg",
//       "/ChannelPartners/maxtherm image 6.svg",
//       "/ChannelPartners/maxtherm image 7.svg",
//     ],
//   },
//   {
//     name: "ARMSTRONG INTERNATIONAL",
//     logo: "/ChannelPartners/amstrong  image 4.svg",
//     description:
//       "Armstrong provides intelligent system solutions for industrial applications with energy efficiency.",
//     images: [
//       "/ChannelPartners/amstrong  image 6.svg",
//       "/ChannelPartners/amstrong  image 5.svg",
//       "/ChannelPartners/amstrong  image 7.svg",
//     ],
//   },
//   {
//     name: "MYSILO",
//     logo: "/ChannelPartners/mysilo image 6.svg",
//     description:
//       "Mysilo provides advanced grain storage and silo systems for modern agriculture.",
//     images: [
//       "/ChannelPartners/mysilo image 7.svg",
//       "/ChannelPartners/mysilo image 5.svg",
//       "/ChannelPartners/mysilo image 4.svg",
//     ],
//   },
//   {
//     name: "SURI ENGINEERS",
//     logo: "/ChannelPartners/suri 2.svg",
//     description:
//       "Suri Engineers provide industrial boiler and engineering solutions.",
//     images: [
//       "/ChannelPartners/suri 3.svg",
//       "/ChannelPartners/suri 4.svg",
//       "/ChannelPartners/suri 1.svg",
//     ],
//   },
//   {
//     name: "TES",
//     logo: "/ChannelPartners/tes 1.svg",
//     description:
//       "TES offers energy-efficient thermal engineering solutions.",
//     images: [
//       "/ChannelPartners/tes 2.svg",
//       "/ChannelPartners/tes 3.svg",
//       "/ChannelPartners/tes 4.svg",
//     ],
//   },
//   {
//     name: "SLV AGRO",
//     logo: "/ChannelPartners/slv agro 2.svg",
//     description:
//       "SLV Agro specializes in agricultural processing and storage systems.",
//     images: [
//       "/ChannelPartners/slv agro 3.svg",
//       "/ChannelPartners/slv agro 1.svg",
//       "/ChannelPartners/slv agro 4.svg",
//     ],
//   },
//   {
//     name: "NALCO WATER",
//     logo: "/ChannelPartners/nalco 4.svg",
//     description:
//       "Nalco Water provides water treatment and process improvement solutions.",
//     images: [
//       "/ChannelPartners/nalco 3.svg",
//       "/ChannelPartners/nalco 2.svg",
//       "/ChannelPartners/nalco 1.svg",
//     ],
//   },
// ];

// export function ChannelPartners() {
//   return (
//     <section className="relative py-20 overflow-hidden">
        

//       {/* 🔴 RED VECTOR BACKGROUND – now behind content */}
//       <div className="absolute right-0 top-0 h-full w-[45%] md:w-[30%] z-50 opacity-90 pointer-events-none">
//         <Image
//           src="/ChannelPartners/Vector 2.png"
//           alt="background shape"
//           fill
//           className="object-cover object-right"
//         />
//       </div>

//       {/* CONTENT – now on top */}
//       <div className="relative z-10 max-w-7xl mx-auto px-0 md:px-6">

//         {/* Title */}
//         <h2 className="text-center text-2xl font-semibold mb-12">
//           More about Our Channel Partners
//         </h2>

//         {/* LOOP */}
//         <div className="space-y-16">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="relative grid md:grid-cols-[1fr_1.2fr] gap-0 md:gap-4 items-center"
//             >

//               {/* LEFT LOGO */}
//               <div className="flex items-center justify-center">
//                 <Image
//                   src={partner.logo}
//                   alt={partner.name}
//                   width={360}
//                   height={290}
//                   className="object-contain"
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="relative md:-ml-8 p-6 md:p-8">

//                 {/* Title */}
//                 <h3 className="text-xl md:text-2xl font-bold mb-3">
//                   {partner.name}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-sm text-gray-700 leading-relaxed mb-6">
//                   {partner.description}
//                 </p>

//                 {/* Images */}
//                 <div className="flex gap-4 flex-wrap mb-6">
//                   {partner.images.map((img, i) => (
//                     <Image
//                       key={i}
//                       src={img}
//                       alt=""
//                       width={130}
//                       height={90}
//                       className="object-contain"
//                     />
//                   ))}
//                 </div>

//                 {/* Button */}
//                 <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
//                   Visit Website →
//                 </button>

//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";

// Data for the top logo grid
const logoPartners = [
  "/OurChannel/image 4.svg",
  "/OurChannel/image 5.svg",
  "/OurChannel/image 6.svg",
  "/OurChannel/image 7.svg",
  "/OurChannel/image 9.svg",
  "/OurChannel/image 10.svg",
];

// Data for the detailed partner sections
const detailedPartners = [
  {
    name: "MAXTHERM INDIA PVT LTD",
    logo: "/ChannelPartners/maxtherm image 4.svg",
    description:
      "Maxtherm India is a Chennai based reputed manufacturer of steam boilers, thermic fluid heaters, Hot  water generators & Hot air generators. Maxtherm india is providing industries with reliable, energy ef icient steam systems suitable for biomass, oil, gas and other solid fuels. Maxtherm's proven designs,  combined with local installation, commissioning, and after-sales service, ensure compliance with Sri  Lankan industrial and safety standards across food processing, rice milling, tea, textile, coconut and  other manufacturing sectors.",
    images: [
      "/ChannelPartners/maxtherm image 5.svg",
      "/ChannelPartners/maxtherm image 6.svg",
      "/ChannelPartners/maxtherm image 7.svg",
    ],
    website: "https://www.maxthermindia.in/",
  },
  {
    name: "ARMSTRONG INTERNATIONAL",
    logo: "/ChannelPartners/amstrong  image 4.svg",
    description:
      "Armstrong International is a USA based 100-year-old globally recognized provider of steam,  condensate, and thermal energy management solutions for industrial and commercial applications. Its  products including steam traps, low meters, bellow seal valves, control systems, condensate recovery  systems and heat transfer equipment are widely used to improve energy ef iciency, system reliability,  and operational safety. Armstrong solutions are supplied and supported for Sri Lankan industries such  as rice milling, food processing, tea, textiles, and manufacturing",
    images: [
      "/ChannelPartners/amstrong  image 6.svg",
      "/ChannelPartners/amstrong  image 5.svg",
      "/ChannelPartners/amstrong  image 7.svg",
    ],
    website: "https://armstronginternational.com/",
  },
  {
    name: "MYSILO",
    logo: "/ChannelPartners/mysilo image 6.svg",
    description:
      "Mysilo is an Turkey based internationally recognized manufacturer of grain storage silos  and handling  equipment, offering complete solutions from paddy intake to inished rice storage. Mysilo systems are  designed for high ef iciency, durability, and automation, supporting modern rice mills and agro processing facilities. Mysilo storage solutions are supplied and supported for Sri Lankan industries  such as rice milling , feed mills and other grain storages.",
    images: [
      "/ChannelPartners/mysilo image 7.svg",
      "/ChannelPartners/mysilo image 5.svg",
      "/ChannelPartners/mysilo image 4.svg",
    ],
    website: "https://mysilo.com/en/",
  },
  {
    name: "SURI ENGINEERS",
    logo: "/ChannelPartners/suri 2.svg",
    description:
      "Suri Engineers is an experienced manufacturer based in Hyderabad specializing in modern rice mill  machinery and agro-processing equipment. Their product range supports ef icient paddy processing,  high recovery, and reliable operation in modern rice mills. Suri Engineers' equipment is supplied,  installed, and supported in Sri Lanka as part of complete A–Z rice mill solutions.",
    images: [
      "/ChannelPartners/suri 3.svg",
      "/ChannelPartners/suri 4.svg",
      "/ChannelPartners/suri 1.svg",
    ],
    website: "https://www.suriengineers.co.in/",
  },
  {
    name: "THERMAL ENERGY SOLUTIONS",
    logo: "/ChannelPartners/tes 1.svg",
    description:
      "Thermal Energy Solutions is a specialist provider of industrial radiators, heat exchangers, and thermal  management systems. Their equipment is supplied, installed, and supported in Sri Lanka, delivering  ef icient heat transfer, energy savings, and reliable operation across boilers and other industrial  processes. Mainly TES has the presence in Rice mills , Coconut & Tea in sri lanka",
    images: [
      "/ChannelPartners/tes 2.svg",
      "/ChannelPartners/tes 3.svg",
      "/ChannelPartners/tes 4.svg",
    ],
    website: "https://www.finnedtubeindia.com/",
  },
  {
    name: "SKF Elixer India PVT LTD",
    logo: "/OurChannel/SKF.png",
    description:
      "SKF Elixer India Pvt Ltd is a leading engineering solutions provider specializing in rice processing systems, mineral water purification, and wastewater treatment technologies. With over 30 years of industry experience, the company delivers innovative, sustainable, and fully integrated solutions designed to enhance operational efficiency, product quality, and environmental compliance. Trusted by top agro-industries and manufacturers, SKF Elixer combines advanced technology with proven expertise to support businesses in scaling efficiently and achieving long-term success.",
    images: [
      "/ChannelPartners/SKF (1).jpeg",
      "/ChannelPartners/SKF (2).jpeg",
      "/ChannelPartners/SKF (3).jpeg",
    ],
    website: "https://skfelixer.com/",
  },
  {
    name: "NALCO WATER",
    logo: "/ChannelPartners/nalco 4.svg",
    description:
      "NALCO is a Singapore based global leader in water treatment and boiler chemical solutions, providing  products that ensure optimal boiler performance, corrosion prevention, and scale control. NALCO's  chemicals are supplied and supported in Sri Lanka, helping industries maintain ef icient, safe, and long lasting boiler operations We also join hands with NALCO on water treatment plants design and installation works for softner  plants, DM plants and RO plants specifical",
    images: [
      "/ChannelPartners/nalco 3.svg",
      "/ChannelPartners/nalco 2.svg",
      "/ChannelPartners/nalco 1.svg",
    ],
    website: "https://www.ecolab.com/nalco-water",
  },
];

export function ChannelPartners() {
  return (
    <section className="relative pt-12 md:py-20 overflow-hidden">
      {/* Red vector background – behind all content */}
     <div className="absolute left-0 top-0 w-[100%] h-full z-30 pointer-events-none overflow-hidden hidden md:block">
  <Image
    src="/ChannelPartners/Vector 2.png"
    alt="background shape"
    fill
    sizes="100vw"
    className="object-container object-left-top"
  />
</div>

      {/* Main content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        
        {/* === TOP SECTION: LOGO GRID === */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Channel Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            We collaborate with globally recognized manufacturers to deliver
            reliable and compliant industrial solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
          {logoPartners.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Partner logo"
                width={140}
                height={80}
                className="object-contain hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-16">
          <Image
            src="/OurChannel/SKF.png"
            alt="SLV Agro"
            width={260}
            height={120}
            className="object-contain"
          />
        </div>

        {/* === BOTTOM SECTION: DETAILED PARTNERS === */}
        <h2 className="text-center text-3xl font-semibold mb-4">
          More About Our Channel Partners
        </h2>
        <div className="border-b border-1 border-black  mb-10"></div>

        <div className="space-y-16">
          {detailedPartners.map((partner, index) => (
            <div
              key={index}
              className="relative grid md:grid-cols-[1fr_1.2fr] gap-0 md:gap-4 items-center"
               data-aos="fade-right" data-aos-duration="1000"
            >
              {/* Left: Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={360}
                  height={290}
                  className="object-contain"
                />
              </div>

              {/* Right: Details */}
              <div className="relative md:-ml-8 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {partner.description}
                </p>
                <div className="flex gap-4 flex-wrap mb-6">
                  {partner.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt=""
                      width={130}
                      height={90}
                      className="object-contain"
                    />
                  ))}
                </div>
                {/* <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                  Visit Website →
                </button> */}
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}