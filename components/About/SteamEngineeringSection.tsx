// "use client";

// import Image from "next/image";

// export function SteamEngineeringSection() {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Top Section */}
//         <div className="grid md:grid-cols-2 gap-10 mb-14">

//           {/* Left Title */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold leading-tight">
//               Pioneers in <br /> Steam Engineering
//             </h2>
//           </div>

//           {/* Right Text */}
//           <div className="text-gray-600 text-sm leading-relaxed space-y-4">
//             <p>
//               CS Engineering Services is a energy services engineering company
//               that provides a strategic, flexible, experienced and innovative
//               approach to delivering engineering and management consultancy
//               services for its clients.
//             </p>

//             <p>
//               We have a proven track record in delivering client projects to
//               the most demanding timescales, within budget and with the lowest
//               possible client risk.
//             </p>
//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {/* Left Image Card */}
//          <div className="relative rounded-xl overflow-hidden">

//   <Image
//     src="/About/Rectangle 9.svg"
//     alt="Chamara Sandaruwan"
//     width={640}
//     height={762}
//     className="w-full h-full object-cover"
//   />

//   {/* Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">

//     {/* Name */}
//     <h3 className="text-3xl md:text-4xl font-bold mb-2">
//       Chamara Sandaruwan
//     </h3>

//     {/* Role + Qualification */}
//     <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-sm opacity-90 mb-3">
//       <p>Managing Director</p>
//       <p className="font-thin">
//         NDT (Mechanical), BEng(Hons) in Mechatronics, <br/>
//         Masters in Energy Management (OUSL)
    
//       </p>
//     </div>

//     {/* Email */}
//     <p className="text-sm font-medium mb-4">
//       chamara.csengserv@gmail.com
//     </p>

//     {/* Experience */}
//     <div className="text-sm leading-relaxed space-y-3">

//       <p>
//         <span className="font-semibold">
//           Service engineer for Lalan Engineering;
//         </span>
//         <br />
//         Erection & supervision, commissioning of more than 100 Thermax
//         boilers, water treatment plants, chillers & rice mill machineries.
//       </p>

//       <p>
//         <span className="font-semibold">
//           O & M Engineer for SA Silva & Sons
//         </span>
//         <br />
//         10 TPH Forbes Vyncke reciprocating grate boiler.
//       </p>

//       <p>
//         As professionals who have been on the boiler field for the last
//         few years, we were able to provide solutions for clients on
//         various energy issues. We bring our professional experience
//         to your doorstep with the ideal solution.
//       </p>

//     </div>

//   </div>
// </div>

//           {/* Right Text Card */}
//           <div className="bg-gray-100 rounded-xl p-8  pt-40">

//             <h3 className="text-4xl font-semibold mb-4">
//               Expert Engineering Team
//             </h3>

//             <p className="text-black text-sm leading-relaxed mb-4 ">
//                All our projects are led by a highly experienced Director and a team with a passion 
//                for delivering high quality commercial engineering solutions alongside an excellent 
//                level of service. As part of this approach, we focus on designing out systems rather 
//                than designing in complex and expensive kit and in seeking to balance the up-front 
//                capital cost of equipment and services against the associated life cycle costs of
//                 operating the factory machinery and provide options based on specific commercial 
//                 requirements. Based on the expertise of the CS Engineering Services Team, we mainly
//                  focus on applying the past experiences to drive in for new goals 
//             </p>

//             <p className="text-black text-sm leading-relaxed">
//               In summary, we believe our Steam Engineering approach and passion for delivering
//                the highest levels of customer service sets us apart from other consultants
//                 and consistently delivers considerable added value to any project
//             </p>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

export function SteamEngineeringSection() {
  return (
    <section className="bg-white pt-4">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">

          {/* Left Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Pioneers in <br /> Steam Engineering
            </h2>
          </div>

          {/* Right Text */}
          <div className="text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              CS Engineering Services is a energy services engineering company
              that provides a strategic, flexible, experienced and innovative
              approach to delivering engineering and management consultancy
              services for its clients.
            </p>

            <p>
              We have a proven track record in delivering client projects to
              the most demanding timescales, within budget and with the lowest
              possible client risk.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Image Card */}
          <div className="relative rounded-xl overflow-hidden min-h-[550px] md:min-h-[600px]">

            <Image
              src="/About/Rectangle 9.svg"
              alt="Chamara Sandaruwan"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">

              {/* Name */}
              <h3 className="text-2xl md:text-4xl font-bold mb-2">
                Chamara Sandaruwan
              </h3>

              {/* Role + Qualification */}
              <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-xs md:text-sm opacity-90 mb-3">
                <p>Managing Director</p>
                <p className="font-thin">
                  NDT (Mechanical), BEng(Hons) in Mechatronics,<br/>
                  Masters in Energy Management (OUSL)
                </p>
              </div>

              {/* Email */}
              <p className="text-xs md:text-sm font-medium mb-4">
                chamara.csengserv@gmail.com
              </p>

              {/* Experience */}
              <div className="text-xs md:text-sm leading-relaxed space-y-3">

                <p>
                  <span className="font-semibold">
                    Service engineer for Lalan Engineering;
                  </span><br />
                  Erection & supervision, commissioning of more than 100 Thermax
                  boilers, water treatment plants, chillers & rice mill machineries.
                </p>

                <p>
                  <span className="font-semibold">
                    O & M Engineer for SA Silva & Sons
                  </span><br />
                  10 TPH Forbes Vyncke reciprocating grate boiler.
                </p>

                <p>
                  As professionals who have been on the boiler field for the last
                  few years, we were able to provide solutions for clients on
                  various energy issues. We bring our professional experience
                  to your doorstep with the ideal solution.
                </p>

              </div>

            </div>
          </div>

          {/* Right Text Card */}
          <div className="bg-gray-100 rounded-xl p-6 md:p-8">

            <h3 className="text-2xl md:text-4xl font-semibold mb-4">
              Expert Engineering Team
            </h3>

            <p className="text-black text-sm leading-relaxed mb-4">
              All our projects are led by a highly experienced Director and a team with a passion 
              for delivering high quality commercial engineering solutions alongside an excellent 
              level of service. As part of this approach, we focus on designing out systems rather 
              than designing in complex and expensive kit and in seeking to balance the up-front 
              capital cost of equipment and services against the associated life cycle costs of
              operating the factory machinery and provide options based on specific commercial 
              requirements. Based on the expertise of the CS Engineering Services Team, we mainly
              focus on applying the past experiences to drive in for new goals.
            </p>

            <p className="text-black text-sm leading-relaxed">
              In summary, we believe our Steam Engineering approach and passion for delivering
              the highest levels of customer service sets us apart from other consultants
              and consistently delivers considerable added value to any project.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}