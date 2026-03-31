

// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// export function HeroSlider() {
//   return (
//     <section
//       className="relative w-full h-[calc(120vh)] mt-[130px] bg-cover bg-center flex items-center justify-center overflow-hidden "
//       style={{ backgroundImage: "url('/Rectangle 1.svg')"  }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-20 text-center text-white px-6 max-w-4xl top-[-180]">
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight  font-satoshi">
//           Engineering Excellence in Steam & Energy Solutions
//         </h1>

//         <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <Link
//             href="/consultation"
//             className="group inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 text-md"
//           >
//             Request a Consultation
//             <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </Link>

//           <Link
//             href="/services"
//             className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-full border border-white transition-all duration-300"
//           >
//             View Our Services
//           </Link>
//         </div>
//       </div>

//        {/* White Bottom Section */}
//       <div className="absolute bottom-0 left-0 w-full h-[140px] bg-white z-20"></div>

//       {/* Red Background Shape */}
//      <Image
//           src="/Vector 1.svg"
//           alt="shape"
//           width={1300}
//           height={1300}
//           className="absolute bottom-10 right-0 w-[900px] lg:w-[1200px] xl:w-[1500px] h-auto z-10"
//         />

//       {/* Boiler Image */}
//       <Image
//         src="/Group 1.png"
//         alt="boilers"
//         width={1200}
//         height={700}
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30"
//       />

      
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSlider() {
  return (
    <section
      className="relative w-full h-[90vh] md:h-[90vh] lg:h-[120vh] mt-[10px] md:mt-[30px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
    >
      {/* Dark overlay (FIX: allow clicks through) */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>

      {/* Content (FIX: highest priority layer) */}
      <div className="relative z-40 text-center text-white px-6 max-w-4xl md:-top-[120px]">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-satoshi">
          Engineering Excellence in Steam & Energy Solutions
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center px-5 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 text-sm md:text-md hover:scale-105"
          >
            Request a Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center px-5 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-full border border-white transition-all duration-300 text-sm md:text-md hover:scale-105"
          >
            View Our Services
          </Link>
        </div>
      </div>

      {/* White Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full h-[90px] md:h-[140px] bg-white z-20"></div>

      {/* Red Background Shape */}
      <Image
        src="/Vector 1.svg"
        alt="shape"
        width={1300}
        height={1300}
        className="hidden lg:block absolute bottom-6 right-0 w-[900px] lg:w-[1200px] xl:w-[1500px] h-auto z-10 pointer-events-none"
      />

      {/* Boiler Image (FIX: lower z-index so it won't block buttons) */}
      <Image
        src="/Group 1.png"
        alt="boilers"
        width={1200}
        height={700}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[800px] md:w-[650px] lg:w-[900px] xl:w-[1100px] h-auto z-20 pointer-events-none"
      />
    </section>
  );
}