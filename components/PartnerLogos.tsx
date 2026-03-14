// "use client";

// import Image from "next/image";

// export function PartnerLogos() {
//   return (
//     <div className="flex justify-center flex-wrap gap-8 mb-12 items-center">

//       <Image src="/Partner Companies/Rectangle 2.svg" alt="Araliya" width={120} height={60} />
//       <Image src="/Partner Companies/Rectangle 3.svg" alt="Cocomate" width={120} height={60} />
//       <Image src="/Partner Companies/Rectangle 4.svg" alt="Dasa Coco" width={120} height={60} />
//       <Image src="/Partner Companies/Rectangle 5.svg" alt="Abans" width={120} height={60} />
//       <Image src="/Partner Companies/Rectangle 6.svg" alt="MAS" width={120} height={60} />
//       <Image src="/Partner Companies/Rectangle 7.svg" alt="Yokohama" width={120} height={60} />
//       <Image src="/Partner Companies/Rectangle 8.svg" alt="DSI" width={120} height={60} />

//     </div>
//   );
// }

"use client";

import Image from "next/image";

const logos = [
  "/Partner Companies/Rectangle 2.svg",
  "/Partner Companies/Rectangle 3.svg",
  "/Partner Companies/Rectangle 4.svg",
  "/Partner Companies/Rectangle 5.svg",
  "/Partner Companies/Rectangle 6.svg",
  "/Partner Companies/Rectangle 7.svg",
  "/Partner Companies/Rectangle 8.svg",
];

export function PartnerLogos() {
  return (
    <div className="w-full overflow-hidden mb-12 mt-10">

      {/* Desktop */}
      <div className="hidden md:flex justify-center flex-wrap gap-8 items-center">
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt="partner" width={120} height={60} />
        ))}
      </div>

      {/* Mobile auto scrolling right */}
      <div className="md:hidden flex gap-8 items-center w-max animate-scroll-right">
        {[...logos, ...logos].map((logo, index) => (
          <Image key={index} src={logo} alt="partner" width={120} height={60} />
        ))}
      </div>

    </div>
  );
}
