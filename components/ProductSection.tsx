// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// const products = [
//   {
//     name: "Steam Boilers",
//     image: "/ProductSection/genarator.svg",
//   },
//   {
//     name: "Thermic Fluid Heaters",
//     image: "/ProductSection/Fluid Heater.svg",
//   },
//   {
//     name: "Hot water Generators",
//      image: "/ProductSection/Fluid Heater.svg",
//   },
//   {
//     name: "Water Treatment Solutions",
//      image: "/ProductSection/Fluid Heater.svg",
//   },
//   {
//     name: "Environmental solutions",
//     image: "/ProductSection/genarator.svg",
//   },
//   {
//     name: "Steam radiators",
//     image: "/ProductSection/Fluid Heater.svg",
//   },
//   {
//     name: "Blowers",
//      image: "/ProductSection/Fluid Heater.svg",
//   },
//   {
//     name: "Steam accessories",
//     image: "/ProductSection/Fluid Heater.svg",
//   },
// ];

// export function ProductSection() {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Products We offer
//           </h2>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition  text-center"
//             >
//               <div className="relative w-full h-80 mb-4 top-0">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               <p className="text-sm font-medium text-gray-700">
//                 {product.name}
//               </p>
//             </div>
//           ))}

//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-12">
//           <Link
//             href="/products"
//             className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800"
//           >
//             Product Supply History
//             <ArrowRight size={16} />
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Steam Boilers", image: "/ProductSection/genarator.svg" },
  { name: "Thermic Fluid Heaters", image: "/ProductSection/Fluid Heater.svg" },
  { name: "Hot water Generators", image: "/ProductSection/Hot-water-generator-1.webp" },
  { name: "Water Treatment Solutions", image: "/ProductSection/water treatment.jpg" },
  { name: "Environmental solutions", image: "/ProductSection/environmental.webp" },
  { name: "Steam radiators", image: "/ProductSection/Steam Radiator.jpeg" },
  { name: "Blowers", image: "/ProductSection/Blowers.jpg" },
  { name: "Steam accessories", image: "/ProductSection/steam accessories.jpg" },
];

export function ProductSection() {
  return (
    <section className="bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Products We Offer
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
               data-aos="fade-right" data-aos-duration="1000"
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition text-center"
            >
              {/* Image (NO GAP + ROUNDED TOP) */}
              <div className="relative w-full h-80 rounded-t-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-4">
                <p className="text-sm font-medium text-gray-700">
                  {product.name}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/experience"
            className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800"
          >
            Product Supply History
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}