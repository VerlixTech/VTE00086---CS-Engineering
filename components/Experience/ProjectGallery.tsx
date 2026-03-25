// "use client";

// export function ProjectGallery() {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
//           Araliya Rice Mills
//         </h2>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-12 gap-6 auto-rows-[120px]">

//           {/* Top Left (Big) */}
//           <div className="col-span-8 row-span-2 bg-gray-300 rounded-2xl"></div>

//           {/* Top Right */}
//           <div className="col-span-4 row-span-2 bg-gray-300 rounded-2xl"></div>

//           {/* Bottom Left */}
//           <div className="col-span-3 row-span-3 bg-gray-300 rounded-2xl"></div>

//           {/* Bottom Center (Big) */}
//           <div className="col-span-6 row-span-3 bg-gray-300 rounded-2xl"></div>

//           {/* Bottom Right */}
//           <div className="col-span-3 row-span-3 bg-gray-300 rounded-2xl"></div>

//         </div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";

// export function ProjectGallery() {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
//           Araliya Rice Mills
//         </h2>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-12 gap-6 auto-rows-[120px]">

//           {/* Top Left (Big) */}
//           <GalleryItem src="/ServiceSection/image 4.svg" className="col-span-8 row-span-2" />

//           {/* Top Right */}
//           <GalleryItem src="/ServiceSection/image 2.svg" className="col-span-4 row-span-2" />

//           {/* Bottom Left */}
//           <GalleryItem src="/ServiceSection/image 3.svg" className="col-span-3 row-span-3" />

//           {/* Bottom Center (Big) */}
//           <GalleryItem src="/ServiceSection/image 5.svg" className="col-span-6 row-span-3" />

//           {/* Bottom Right */}
//           <GalleryItem src="/ServiceSection/image 4.svg" className="col-span-3 row-span-3" />

//         </div>

//       </div>
//     </section>
//   );
// }

// /* 🔥 REUSABLE IMAGE BOX */
// function GalleryItem({ src, className }: any) {
//   return (
//     <div className={`relative rounded-2xl overflow-hidden ${className}`}>
//       <Image
//         src={src}
//         alt="project"
//         fill
//         className="object-cover transition-transform duration-500 hover:scale-105"
//       />
//     </div>
//   );
// }


// "use client";

// import Image from "next/image";
// import { projects } from "@/data/pastprojectdata";

// export function ProjectGallery() {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="max-w-6xl mx-auto px-6 space-y-20">

//         {projects.map((project, index) => (
//           <div key={index}>

//             {/* Title */}
//             <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
//               {project.title}
//             </h2>

//             {/* Grid */}
//             <div className="grid grid-cols-12 gap-6 auto-rows-[120px]">
//               {project.items.map((item, i) => (
//                 <GalleryItem
//                   key={i}
//                   src={item.src}
//                   className={item.className}
//                 />
//               ))}
//             </div>

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }

// function GalleryItem({ src, className }: any) {
//   return (
//     <div className={`relative rounded-2xl overflow-hidden ${className}`}>
//       <Image
//         src={src}
//         alt="project"
//         fill
//         className="object-cover transition-transform duration-500 hover:scale-105"
//       />
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { projects } from "@/data/pastprojectdata";

export function ProjectGallery() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {projects.map((project, index) => (
          <div key={index}>
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
              {project.title}
            </h2>

            {/* Grid – same 12‑column layout on all screens */}
            <div className="grid grid-cols-12 gap-4 auto-rows-[80px] md:gap-6 md:auto-rows-[120px]">
              {project.items.map((item, i) => (
                <GalleryItem
                  key={i}
                  src={item.src}
                  className={item.className}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryItem({ src, className }: any) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <Image
        src={src}
        alt="project"
        fill
        className="object-cover transition-transform duration-500 hover:rotate-2 hover:scale-105"
      />
    </div>
  );
}