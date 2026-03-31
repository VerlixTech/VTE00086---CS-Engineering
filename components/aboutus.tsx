// "use client";

// import Image from "next/image";

// export function AboutUs() {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-10 items-stretch">

//           {/* LEFT IMAGE */}
//           <div className="relative overflow-hidden rounded-xl">
//             <Image
//               src="/aboutus.svg"
//               alt="About CS Engineering"
//               width={800}
//               height={600}
//               className="w-full h-full object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
//               <h3 className="text-2xl font-bold mb-3">About Us</h3>

//               <p className="text-sm leading-relaxed max-w-md">
//                 CS Engineering Services is a Sri Lanka–based engineering
//                 solutions provider specializing in steam engineering, boiler
//                 systems, energy management, and agro-processing solutions.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex flex-col gap-10 justify-center">

//             {/* Vision */}
//            <div  className="bg-white text-black p-8 rounded-xl h-40 mt-30 ">
//               <h3 className="text-2xl font-bold mb-3">
//                 Our Vision
//               </h3>

//               <p className="text-gray-600 leading-relaxed max-w-lg">
//                 To become a trusted engineering solutions provider in Sri Lanka,
//                 delivering reliable, energy-efficient solutions that drive
//                 sustainable industrial growth.
//               </p>
//             </div>

//             {/* Mission Card */}
//             <div className="bg-red-600 text-white p-8 rounded-xl h-60">
//               <h3 className="text-2xl font-bold mb-3">
//                 Our Mission
//               </h3>

//               <p className="text-sm leading-relaxed">
//                 To provide end-to-end engineering services through quality
//                 workmanship, advanced technology, and customer-focused service —
//                 ensuring safety, efficiency, and long-term operational
//                 reliability.
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const features = [
  {
    title: "Field Experience",
    text: "Strong hands-on industry experience in boiler installation, commissioning, and industrial system operations ensures practical and reliable solutions.",
    icon: "/Whychooseus/abstract view of a conveyor belt with liquid tank.svg",
  },
  {
    title: "International Technology",
    text: "We bring advanced, globally proven engineering technologies to Sri Lanka with full local support.",
    icon: "/Whychooseus/Abstract device or engine.svg",
  },
  {
    title: "Customized Solutions",
    text: "Solutions are tailored to specific industry needs, fuel types, and production capacities for maximum efficiency.",
    icon: "/Whychooseus/pipes.svg",
  },
  {
    title: "Quality, Safety & Compliance",
    text: "We ensure high-quality workmanship, safe system design, and compliance with industrial standards.",
    icon: "/Whychooseus/male builder.svg",
  },
  {
    title: "After–Sales Service & Long-Term Partnership",
    text: "Continuous technical support, maintenance services, and long-term customer commitment.",
    icon: "/Whychooseus/Professionals shaking hands at event, Business networking and partnership.svg",
  },
  {
    title: "Multi-Sector Industrial Expertise",
    text: "Extensive experience across rice mills, agro-processing, tea, coconut, textile, and manufacturing industries.",
    icon: "/Whychooseus/Layered Data Architecture, Multi-Layer Information System.svg",
  },
];

export function AboutUs() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= ABOUT SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch mb-20">

          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden rounded-xl"  data-aos="fade-right" data-aos-duration="1000">
            <Image
              src="/aboutus.svg"
              alt="About CS Engineering"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">About Us</h3>

              <p className="text-sm leading-relaxed max-w-md">
                CS Engineering Services is a Sri Lanka–based engineering
                solutions provider specializing in steam engineering, boiler
                systems, energy management, and agro-processing solutions.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-10 justify-center" >

            {/* Vision */}
            <div className="bg-white text-black p-8 rounded-xl shadow md:py-18"  data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>

              <p className="text-gray-600 leading-relaxed max-w-lg">
                To become a trusted engineering solutions provider in Sri Lanka,
                delivering reliable, energy-efficient solutions that drive
                sustainable industrial growth.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-red-600 text-white p-8 rounded-xl shadow-lg md:py-18 "  data-aos="fade-right" data-aos-duration="1000">
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>

              <p className="text-sm leading-relaxed">
                To provide end-to-end engineering services through quality
                workmanship, advanced technology, and customer-focused service —
                ensuring safety, efficiency, and long-term operational
                reliability.
              </p>
            </div>

          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>

          <p className="text-black max-w-3xl mx-auto text-sm">
           At CS Engineering Services, we understand that industrial operations demand reliability, efficiency, and immediate technical support.
            Steam and energy systems are the heart of production — any failure can lead to costly downtime and operational losses. 
            That is why we position ourselves not just as a supplier, but as a long-term engineering partner committed to your success.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
           <div
  key={index}
   data-aos="fade-right" data-aos-duration="1000"
  className="relative bg-gray-100 rounded-xl p-6 pt-32 hover:shadow-lg transition overflow-hidden"
>

  {/* Ellipse Shape */}
  <Image
    src="/Whychooseus/Ellipse 6.svg"
    alt="ellipse"
    width={180}
    height={180}
    className="absolute top-0 left-0 opacity-100"
  />

  {/* Icon */}
  <div className="absolute top-6 right-6">
    <Image
      src={item.icon}
      alt={item.title}
      width={110}
      height={110}
    />
  </div>

  <h3 className="font-semibold text-lg mb-2">
    {item.title}
  </h3>

  <p className="text-sm text-black leading-relaxed">
    {item.text}
  </p>

</div>
          ))}

        </div>

      </div>
    </section>
  );
}