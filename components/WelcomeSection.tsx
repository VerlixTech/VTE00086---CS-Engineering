// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export function WelcomeSection() {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Partner Logos Row */}
//         <div className="flex justify-center flex-wrap gap-8 mb-12 items-center">
//           <Image src="/Partner Companies/Rectangle 2.svg" alt="Araliya" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 3.svg" alt="Cocomate" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 4.svg" alt="Dasa Coco" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 5.svg" alt="Abans" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 6.svg" alt="MAS" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 7.svg" alt="Yokohama" width={120} height={60} />
//           <Image src="/Partner Companies/Rectangle 8.svg" alt="DSI" width={120} height={60} />
//         </div>

//         {/* Content Section */}
//         <div className="grid md:grid-cols-2 gap-10 items-start">

//           {/* Left Text */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
//               Welcome to <br /> CS Engineering Services
//             </h2>

//             <Link
//               href="/about"
//               className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm"
//             >
//               Discover More
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Link>
//           </div>

//           {/* Right Description */}
//           <div className="text-gray-600 text-sm leading-relaxed">
//             <p className="mb-4">
//               CS Engineering Services is a energy services engineering company
//               that provides a strategic, flexible, experienced and innovative
//               approach to delivering engineering and management consultancy
//               services for its clients.
//             </p>

//             <p>
//               We believe our Steam Engineering approach and passion for
//               delivering the highest levels of customer services sets us apart
//               from other consultants and consistently delivers considerable
//               added value to any project.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PartnerLogos } from "@/components/PartnerLogos";

export function WelcomeSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Partner Logos */}
        <PartnerLogos />

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Welcome to <br /> CS Engineering Services
            </h2>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full text-sm"
            >
              Discover More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Right Description */}
          <div className="text-gray-600 text-sm leading-relaxed">
            <p className="mb-4">
              CS Engineering Services is a energy services engineering company
              that provides a strategic, flexible, experienced and innovative
              approach to delivering engineering and management consultancy
              services for its clients.
            </p>

            <p>
              We believe our Steam Engineering approach and passion for
              delivering the highest levels of customer services sets us apart
              from other consultants and consistently delivers considerable
              added value to any project.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}