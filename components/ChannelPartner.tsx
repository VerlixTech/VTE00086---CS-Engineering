
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

export function ChannelPartner() {
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
                className="object-contain  hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>

        {/* Bottom Center Logo */}
        <div className="flex justify-center">
          <Image
            src= "/OurChannel/SKF.png"
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



// 'use client';

// import Image from "next/image";

// type LogoItem = {
//   name: string;
//   image: string;
// };

// const row1: LogoItem[] = [
//   { name: "MarqueesImg01", image: "/OurChannel/image 4.svg" },
//   { name: "MarqueesImg02", image: "/OurChannel/image 5.svg" },
//   { name: "MarqueesImg03", image: "/OurChannel/image 6.svg" },
//   { name: "MarqueesImg04", image: "/OurChannel/image 7.svg" },
//   { name: "MarqueesImg04", image: "/OurChannel/image 8.svg" },
//   { name: "MarqueesImg04", image: "/OurChannel/image 9.svg" },
//   { name: "MarqueesImg04", image: "/OurChannel/image 10.svg" },

// ];

// const row2: LogoItem[] = [
//   { name: "CRB", image: "/OurChannel/image 4.svg" },
//   { name: "Nalanda College", image: "/OurChannel/image 5.svg" },
//   { name: "Elastomeric", image: "/OurChannel/image 6.svg" },
//   { name: "McDonalds", image: "/OurChannel/image 7.svg" },
//   { name: "SLV Agro", image: "/OurChannel/image 8.svg" },
//   { name: "Brand 6", image: "/OurChannel/image 9.svg" },
//   { name: "Brand 7", image: "/OurChannel/image 10.svg" },

// ];

// // Combine both rows
// const allLogos: LogoItem[] = [...row1, ...row2];

// export  function ChannelPartner() {
//   return (
//     <section className="w-full bg-background overflow-hidden mt-10">
//       <div className="max-w-7xl mx-auto ">

//         {/* Desktop View - Horizontal Marquees */}
//         <div className="hidden md:block space-y-2">
//           {/* First Bar - Left to Right */}
//           <div className="relative w-full overflow-hidden rounded-lg border-[#9C9C9C] bg-muted/30 py-2">
//             <div className="flex w-max animate-marquee-left will-change-transform">
//               <div className="flex gap-2 pr-2">
//                 {allLogos.map((logo, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center justify-center w-60 h-28 bg-muted border border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-4"
//                   >
//                     <Image 
//                       src={logo.image} 
//                       alt={logo.name}
//                       width={120}
//                       height={60}
//                       className="max-w-full max-h-full w-auto h-auto object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//               {/* Duplicate for seamless loop */}
//               <div className="flex gap-2 pr-2">
//                 {allLogos.map((logo, idx) => (
//                   <div
//                     key={`duplicate-${idx}`}
//                     className="flex items-center justify-center w-60 h-28 bg-muted border border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-4"
//                   >
//                     <Image 
//                       src={logo.image} 
//                       alt={logo.name}
//                       width={120}
//                       height={60}
//                       className="max-w-full max-h-full w-auto h-auto object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Second Bar - Right to Left */}
//           <div className="relative w-full overflow-hidden rounded-lg border-[#9C9C9C] bg-muted/30 py-2">
//             <div className="flex w-max animate-marquee-right will-change-transform">
//               <div className="flex gap-2 pr-2">
//                 {allLogos.map((logo, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center justify-center w-60 h-28 bg-muted border border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-4"
//                   >
//                     <Image 
//                       src={logo.image} 
//                       alt={logo.name}
//                       width={120}
//                       height={60}
//                       className="max-w-full max-h-full w-auto h-auto object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="flex gap-2 pr-2">
//                 {allLogos.map((logo, idx) => (
//                   <div
//                     key={`duplicate-${idx}`}
//                     className="flex items-center justify-center w-60 h-28 bg-muted border border-border border-2 rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-4"
//                   >
//                     <Image 
//                       src={logo.image} 
//                       alt={logo.name}
//                       width={120}
//                       height={60}
//                       className="max-w-full max-h-full w-auto h-auto object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile View - Vertical Marquees */}
//         <div className="md:hidden flex gap-4">
//           {/* First Bar - Top to Bottom */}
//           <div className="flex-1">
//             <div className="relative h-96 w-full overflow-hidden rounded-lg border-[#9C9C9C] bg-muted/30">
//               <div className="flex flex-col h-max animate-marquee-vertical will-change-transform">
//                 <div className="flex flex-col gap-4 pb-4">
//                   {allLogos.map((logo, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center justify-center w-full h-20 bg-muted border border-border rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-2"
//                     >
//                       <Image 
//                         src={logo.image} 
//                         alt={logo.name}
//                         width={100}
//                         height={50}
//                         className="max-w-full max-h-full w-auto h-auto object-contain"
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-col gap-4 pb-4">
//                   {allLogos.map((logo, idx) => (
//                     <div
//                       key={`duplicate-${idx}`}
//                       className="flex items-center justify-center w-full h-20 bg-muted border border-border rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-2"
//                     >
//                       <Image 
//                         src={logo.image} 
//                         alt={logo.name}
//                         width={100}
//                         height={50}
//                         className="max-w-full max-h-full w-auto h-auto object-contain"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Second Bar - Bottom to Top */}
//           <div className="flex-1">
//             <div className="relative h-96 w-full overflow-hidden rounded-lg border-[#9C9C9C] bg-muted/30">
//               <div className="flex flex-col h-max animate-marquee-vertical-reverse will-change-transform">
//                 <div className="flex flex-col gap-4 pb-4">
//                   {allLogos.map((logo, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center justify-center w-full h-20 bg-muted border border-border rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-2"
//                     >
//                       <Image 
//                         src={logo.image} 
//                         alt={logo.name}
//                         width={100}
//                         height={50}
//                         className="max-w-full max-h-full w-auto h-auto object-contain"
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-col gap-4 pb-4">
//                   {allLogos.map((logo, idx) => (
//                     <div
//                       key={`duplicate-${idx}`}
//                       className="flex items-center justify-center w-full h-20 bg-muted border border-border rounded-lg border-[#9C9C9C] hover:border-accent transition-colors duration-300 flex-shrink-0 p-2"
//                     >
//                       <Image 
//                         src={logo.image} 
//                         alt={logo.name}
//                         width={100}
//                         height={50}
//                         className="max-w-full max-h-full w-auto h-auto object-contain"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }