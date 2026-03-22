

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


// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// export function HeroSlider() {
//   return (
//     <section
//       className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh]   bg-center flex items-center justify-center overflow-hidden rounded-b-4xl"
//       style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-20 text-center text-white px-6 max-w-4xl ">
//         <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-satoshi">
//           #About Us
//         </h1>

//         {/* Buttons */}
        
//       </div>

      

    
     

//     </section>
//   );
// }


"use client";

import Image from "next/image";

export function HeroSlider() {
  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden rounded-b-4xl mb-20">

      {/* Background Image */}
      <Image
        src="/Rectangle 1.svg"
        alt="About Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center px-6">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mt-20">
          #ProductSupply
        </h1>
      </div>

    </section>
  );
}