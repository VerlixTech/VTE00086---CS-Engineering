


// "use client";
// import { Star } from "lucide-react";
// import { useEffect, useRef } from "react";

// const testimonials = [
//   {
//     text: "CS Engineering Services delivered our boiler installation on time with exceptional technical precision. Their team ensured smooth commissioning and improved our overall steam efficiency significantly.",
//     company: "company",
//   },
//   {
//     text: "CS Engineering Services delivered our boiler installation on time with exceptional technical precision. Their team ensured smooth commissioning and improved our overall steam efficiency significantly.",
//     company: "company",
//   },
//   {
//     text: "CS Engineering Services delivered our boiler installation on time with exceptional technical precision. Their team ensured smooth commissioning and improved our overall steam efficiency significantly.",
//     company: "company",
//   },
// ];

// // Each column's animation delay (staggered left to right)
// const columns = [
//   { delay: "0ms" },
//   { delay: "80ms" },
//   { delay: "160ms" },
//   { delay: "240ms" },
//   { delay: "320ms" },
//   { delay: "400ms" },
//   { delay: "480ms" },
//   { delay: "560ms" },
// ];

// export function TestimonialsSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const colRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-in");
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     colRefs.current.forEach((el) => el && observer.observe(el));
//     cardRefs.current.forEach((el) => el && observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         .col-block {
//           opacity: 0;
//           transform: translateY(60px);
//           transition: opacity 0.7s ease, transform 0.7s ease;
//         }
//         .col-block.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .card-block {
//           opacity: 0;
//           transform: translateY(40px);
//           transition: opacity 0.6s ease, transform 0.6s ease;
//         }
//         .card-block.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .card-block:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 12px 32px rgba(0,0,0,0.10);
//           transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease;
//         }
//         /* Hide scrollbar for all browsers */
//         .scrollbar-hide {
//           -ms-overflow-style: none;  /* IE and Edge */
//           scrollbar-width: none;     /* Firefox */
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none; /* Chrome, Safari, Opera */
//         }
//       `}</style>

//       <section className="bg-white py-0" ref={sectionRef}>
//         <div className="max-w-7xl mx-auto px-6">

//           {/* Scroll wrapper with hidden scrollbar */}
//           <div className="overflow-x-auto scrollbar-hide -mx-6 md:mx-0">
//             <div className="flex gap-3 opacity-40 items-end h-150 w-max px-6 md:w-full md:justify-center md:px-0">

//               {/* Column 1 */}
//               <div
//                 ref={(el) => { colRefs.current[0] = el; }}
//                 className="col-block flex flex-col gap-3 justify-end mb-3"
//                 style={{ transitionDelay: columns[0].delay }}
//               >
//                 <div className="w-36 h-50 bg-gray-400 rounded-xl"></div>
//                 <div className="w-36 h-52 bg-gray-400 rounded-xl"></div>
//               </div>

//               {/* Column 2 */}
//               <div
//                 ref={(el) => { colRefs.current[1] = el; }}
//                 className="col-block flex flex-col gap-3 justify-end"
//                 style={{ transitionDelay: columns[1].delay }}
//               >
//                 <div className="w-36 h-70 bg-gray-400 rounded-xl"></div>
//                 <div className="w-36 h-48 bg-gray-400 rounded-xl"></div>
//               </div>

//               {/* Column 3 */}
//               <div
//                 ref={(el) => { colRefs.current[2] = el; }}
//                 className="col-block w-36 h-90 bg-gray-400 rounded-xl self-end mb-17"
//                 style={{ transitionDelay: columns[2].delay }}
//               ></div>

//               {/* Column 4 */}
//               <div
//                 ref={(el) => { colRefs.current[3] = el; }}
//                 className="col-block w-36 h-90 bg-gray-400 rounded-xl self-end mb-46"
//                 style={{ transitionDelay: columns[3].delay }}
//               ></div>

//               {/* Column 5 */}
//               <div
//                 ref={(el) => { colRefs.current[4] = el; }}
//                 className="col-block w-36 h-90 bg-gray-400 rounded-xl self-end mb-46"
//                 style={{ transitionDelay: columns[4].delay }}
//               ></div>

//               {/* Column 6 */}
//               <div
//                 ref={(el) => { colRefs.current[5] = el; }}
//                 className="col-block w-36 h-90 bg-gray-400 rounded-xl self-end mb-17"
//                 style={{ transitionDelay: columns[5].delay }}
//               ></div>

//               {/* Column 7 */}
//               <div
//                 ref={(el) => { colRefs.current[6] = el; }}
//                 className="col-block flex flex-col gap-3 justify-end"
//                 style={{ transitionDelay: columns[6].delay }}
//               >
//                 <div className="w-36 h-36 bg-gray-400 rounded-xl">
                
//                 </div>
//                 <div className="w-36 h-36 bg-gray-400 rounded-xl"></div>
//                 <div className="w-36 h-36 bg-gray-400 rounded-xl"></div>
//               </div>

//               {/* Column 8 */}
//               <div
//                 ref={(el) => { colRefs.current[7] = el; }}
//                 className="col-block flex flex-col gap-3 justify-end mb-3"
//                 style={{ transitionDelay: columns[7].delay }}
//               >
//                 <div className="w-36 h-46 bg-gray-400 rounded-xl"></div>
//                 <div className="w-36 h-46 bg-gray-400 rounded-xl"></div>
//               </div>

//             </div>
//           </div>

//           {/* Title */}
//           <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 md:mb-16 max-md:mt-6 ">
//             What Our Clients Say
//           </h2>

//           {/* Cards */}
//           <div className="grid md:grid-cols-3 gap-8 ">
//             {testimonials.map((item, index) => (
//               <div
//                 key={index}
//                 ref={(el) => { cardRefs.current[index] = el; }}
//                 className="card-block bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-default"
//                 style={{ transitionDelay: `${index * 120}ms` }}
//               >
//                 <div className="flex gap-1 text-yellow-400 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={16} fill="currentColor" />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                   {item.text}
//                 </p>
//                 <p className="text-right text-sm text-gray-500">
//                   – {item.company}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Slider dots */}
//           <div className="flex justify-center mt-10 gap-2">
//             <span className="w-2 h-2 bg-red-500 rounded-full"></span>
//             <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//             <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


"use client";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "CS Engineering Services delivered our boiler installation on time with exceptional technical precision. Their team ensured smooth commissioning and improved our overall steam efficiency significantly.",
    company: "company",
  },
  {
    text: "CS Engineering Services delivered our boiler installation on time with exceptional technical precision. Their team ensured smooth commissioning and improved our overall steam efficiency significantly.",
    company: "company",
  },
  {
    text: "CS Engineering Services delivered our boiler installation on time with exceptional technical precision. Their team ensured smooth commissioning and improved our overall steam efficiency significantly.",
    company: "company",
  },
];

// Each column's animation delay (staggered left to right)
const columns = [
  { delay: "0ms" },
  { delay: "80ms" },
  { delay: "160ms" },
  { delay: "240ms" },
  { delay: "320ms" },
  { delay: "400ms" },
  { delay: "480ms" },
  { delay: "560ms" },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    colRefs.current.forEach((el) => el && observer.observe(el));
    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .col-block {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .col-block.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .card-block {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .card-block.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .card-block:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.10);
          transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease;
        }
        /* Hide scrollbar for all browsers */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section className="bg-white py-0" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Scroll wrapper with hidden scrollbar */}
          <div className="overflow-x-auto scrollbar-hide -mx-6 md:mx-0">
            <div className="flex gap-3  items-end h-150 w-max px-6 md:w-full md:justify-center md:px-0">

              {/* Column 1 */}
              <div
                ref={(el) => { colRefs.current[0] = el; }}
                className="col-block flex flex-col gap-3 justify-end mb-3"
                style={{ transitionDelay: columns[0].delay }}
              >
                <div className="relative w-36 h-50 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/ServiceSection/Dasa Cocos (pvt) Ltd (5).jpeg" 
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-36 h-52 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/ChannelPartners/nalco 3.svg"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div
                ref={(el) => { colRefs.current[1] = el; }}
                className="col-block flex flex-col gap-3 justify-end"
                style={{ transitionDelay: columns[1].delay }}
              >
                <div className="relative w-36 h-70 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/Servicess/image 4.svg"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-36 h-48 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/ServiceSection/Wichy plantations/Wichy plantations (10).jpeg"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Column 3 */}
              <div
                ref={(el) => { colRefs.current[2] = el; }}
                className="col-block relative w-36 h-90 bg-gray-400 rounded-xl overflow-hidden self-end mb-17"
                style={{ transitionDelay: columns[2].delay }}
              >
                <Image
                  src="/ServiceSection/Dasa Cocos (pvt) Ltd (4).jpeg"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Column 4 */}
              <div
                ref={(el) => { colRefs.current[3] = el; }}
                className="col-block relative w-36 h-90 bg-gray-400 rounded-xl overflow-hidden self-end mb-46"
                style={{ transitionDelay: columns[3].delay }}
              >
                <Image
                  src="/ServiceSection/image 3.svg"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Column 5 */}
              <div
                ref={(el) => { colRefs.current[4] = el; }}
                className="col-block relative w-36 h-90 bg-gray-400 rounded-xl overflow-hidden self-end mb-46"
                style={{ transitionDelay: columns[4].delay }}
              >
                <Image
                  src="/ProductSection/water treatment.jpg"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Column 6 */}
              <div
                ref={(el) => { colRefs.current[5] = el; }}
                className="col-block relative w-36 h-90 bg-gray-400 rounded-xl overflow-hidden self-end mb-17"
                style={{ transitionDelay: columns[5].delay }}
              >
                <Image
                  src="/ServiceSection/Wichy plantations/Wichy plantations (6).jpeg"
                  alt="Building"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Column 7 */}
              <div
                ref={(el) => { colRefs.current[6] = el; }}
                className="col-block flex flex-col gap-3 justify-end"
                style={{ transitionDelay: columns[6].delay }}
              >
                <div className="relative w-36 h-36 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/ServiceSection/Tobaco/Celone Tobaco (5).jpeg"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-36 h-36 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/ServiceSection/Tobaco/Celone Tobaco (7).jpeg"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-36 h-36 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/Experience/Elasto.jpg"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Column 8 */}
              <div
                ref={(el) => { colRefs.current[7] = el; }}
                className="col-block flex flex-col gap-3 justify-end mb-3"
                style={{ transitionDelay: columns[7].delay }}
              >
                <div className="relative w-36 h-46 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/ServiceSection/Dasa Cocos (pvt) Ltd (8).jpeg"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-36 h-46 bg-gray-400 rounded-xl overflow-hidden">
                  <Image
                    src="/Experience/Ocean-S.png"
                    alt="Building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Title */}
          {/* <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 md:mb-16 max-md:mt-6 ">
            What Our Clients Say
          </h2> */}

          {/* Cards */}
          {/* <div className="grid md:grid-cols-3 gap-8 ">
            {testimonials.map((item, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="card-block bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-default"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.text}
                </p>
                <p className="text-right text-sm text-gray-500">
                  – {item.company}
                </p>
              </div>
            ))}
          </div> */}

          {/* Slider dots */}
          {/* <div className="flex justify-center mt-10 gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div> */}
        </div>
      </section>
    </>
  );
}
