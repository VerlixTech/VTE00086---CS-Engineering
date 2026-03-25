

// "use client";

// import Image from "next/image";

// const logos = [
//   "/Partner Companies/Rectangle 2.svg",
//   "/Partner Companies/Rectangle 3.svg",
//   "/Partner Companies/Rectangle 4.svg",
//   "/Partner Companies/Rectangle 5.svg",
//   "/Partner Companies/Rectangle 6.svg",
//   "/Partner Companies/Rectangle 7.svg",
//   "/Partner Companies/Rectangle 8.svg",
// ];

// export function PartnerLogos() {
//   return (
//     <div className="w-full overflow-hidden mb-20 ">

//       {/* Desktop */}
//       <div className="hidden md:flex justify-center flex-wrap gap-8 items-center">
//         {logos.map((logo, index) => (
//           <Image key={index} src={logo} alt="partner" width={120} height={60} />
//         ))}
//       </div>

//       {/* Mobile auto scrolling right */}
//       <div className="md:hidden flex gap-8 items-center w-max animate-scroll-right">
//         {[...logos, ...logos].map((logo, index) => (
//           <Image key={index} src={logo} alt="partner" width={150} height={90} />
//         ))}
//       </div>

//     </div>
//   );
// }


// 'use client';

// import Image from "next/image";

// type LogoItem = {
//   name: string;
//   image: string;
// };

// const row1: LogoItem[] = [
//   { name: "MarqueesImg01", image: "/Partner Companies/Rectangle 2.svg" },
//   { name: "MarqueesImg02", image: "/Partner Companies/Rectangle 3.svg" },
//   { name: "MarqueesImg03", image: "/Partner Companies/Rectangle 4.svg" },
//   { name: "MarqueesImg04", image: "/Partner Companies/Rectangle 5.svg" },
// ];

// const row2: LogoItem[] = [
//   { name: "CRB", image: "/Partner Companies/Rectangle 6.svg" },
//   { name: "Nalanda College", image: "/Partner Companies/Rectangle 7.svg" },
//   { name: "Elastomeric", image: "/Partner Companies/Rectangle 8.svg" },
//   { name: "McDonalds", image: "/Partner Companies/Rectangle 9.svg" },
// ];

// // Combine both rows
// const allLogos: LogoItem[] = [...row1, ...row2];

// export  function PartnerLogos() {
//   return (
//     <section className="w-full bg-background overflow-hidden">
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

'use client';

import Image from "next/image";

type LogoItem = {
  name: string;
  image: string;
};

const row1: LogoItem[] = [
  { name: "MarqueesImg01", image: "/Partner Companies/Rectangle 2.svg" },
  { name: "MarqueesImg02", image: "/Partner Companies/Rectangle 3.svg" },
  { name: "MarqueesImg03", image: "/Partner Companies/Rectangle 4.svg" },
  { name: "MarqueesImg04", image: "/Partner Companies/Rectangle 5.svg" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 1.png" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 2.png" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 3.png" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 4.png" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 5.png" },
  

];

const row2: LogoItem[] = [
  { name: "CRB", image: "/Partner Companies/Rectangle 6.svg" },
  { name: "Nalanda College", image: "/Partner Companies/Rectangle 7.svg" },
  { name: "Elastomeric", image: "/Partner Companies/Rectangle 8.svg" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 6.png" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 7.png" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 8.png" },
  { name: "MarqueesImg04", image: "/Partner Companies/logo 9.png" },
];

const allLogos: LogoItem[] = [...row1, ...row2];

export function PartnerLogos() {
  return (
    <section className="w-full bg-white py-12">

      {/* 🔥 HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        
        {/* Top dotted line */}
        <div className="border-t border-dashed border-black mb-6"></div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Our Trusted Customers
        </h2>

        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          We collaborate with globally recognized manufacturers to deliver reliable and compliant industrial solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Desktop */}
        <div className="hidden md:block space-y-2 ">
          
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-50 py-2 gap-2">
            <div className="flex w-max animate-marquee-left gap-4">
              {[...allLogos, ...allLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center w-60 h-28 bg-white border rounded-lg flex-shrink-0 p-4 "
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-lg bg-gray-50 py-2">
            <div className="flex w-max animate-marquee-right gap-4">
              {[...allLogos, ...allLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center w-60 h-28 bg-white border rounded-lg flex-shrink-0 p-4"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile */}
        <div className="md:hidden flex gap-4 mt-6">
          
          <div className="flex-1 ">
            <div className="relative h-96 overflow-hidden bg-gray-50 rounded-lg">
              <div className="flex flex-col animate-marquee-vertical">
                {[...allLogos, ...allLogos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center h-20 bg-white border rounded-lg m-2 p-2"
                  >
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative h-96 overflow-hidden bg-gray-50 rounded-lg">
              <div className="flex flex-col animate-marquee-vertical-reverse">
                {[...allLogos, ...allLogos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center h-20 bg-white border rounded-lg m-2 p-2"
                  >
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}