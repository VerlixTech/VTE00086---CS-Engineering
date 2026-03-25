// "use client";

// import { MapPin, Phone, Mail } from "lucide-react";

// export function ContactSection() {
//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* TOP: FORM + MAP */}
//         <div className="grid md:grid-cols-2 gap-10 mb-16">

//           {/* FORM */}
//           <div className="space-y-5">

//             {/* Name */}
//             <div>
//               <label className="text-sm font-medium flex items-center gap-1 mb-1">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Type your or company name here"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm font-medium flex items-center gap-1 mb-1">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Type your or company Email here"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="text-sm font-medium flex items-center gap-1 mb-1">
//                 Message <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 rows={5}
//                 placeholder="Type Here"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
//               ></textarea>
//             </div>

//             {/* Button */}
//             <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
//               Send →
//             </button>

//           </div>

//           {/* MAP - Fixed height and proper embed URL */}
//          <div className="w-full h-[320px] md:h-full rounded-xl overflow-hidden shadow">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.410527892599!2d79.9184661747574!3d6.960803893039649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2574915c7501f%3A0x1a057a01e674f7b0!2sC%20S%20Engineering!5e0!3m2!1sen!2slk!4v1774243225890!5m2!1sen!2slk"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
// </div>

//         </div>

//         <div className="grid md:grid-cols-3 gap-10 mt-10">

//   {/* Visit Us */}
//   <div className="relative text-center">
    
//     {/* Icon */}
//     <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-md z-10">
//       <MapPin size={28} className="text-black" />
//     </div>

//     {/* Card */}
//     <div className="bg-red-600 text-white pt-12 pb-6 px-6 rounded-t-[90px] rounded-b-2xl shadow-md">
//       <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
//       <p className="text-sm leading-relaxed">
//         58/173, Thammannakulama,<br />
//         Anuradhapura
//       </p>
//     </div>
//   </div>

//   {/* Call Us */}
//   <div className="relative text-center">
    
//     <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-md z-10">
//       <Phone size={28} className="text-black" />
//     </div>

//     <div className="bg-red-600 text-white pt-12 pb-6 px-6 rounded-t-[60px] rounded-b-2xl shadow-md">
//       <h3 className="font-semibold text-lg mb-2">Call Us</h3>
//       <p className="text-sm leading-relaxed">
//         +94 (0) 71 143 6850 <br />
//         +94 (0) 74 243 6850
//       </p>
//     </div>
//   </div>

//   {/* Email */}
//   <div className="relative text-center">
    
//     <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-md z-10">
//       <Mail size={28} className="text-black" />
//     </div>

//     <div className="bg-red-600 text-white pt-12 pb-6 px-6 rounded-t-[60px] rounded-b-2xl shadow-md">
//       <h3 className="font-semibold text-lg mb-2">E-mail</h3>
//       <p className="text-sm leading-relaxed break-words">
//         cs.engserv@gmail.com <br />
//         chamara.csengserv@gmail.com
//       </p>
//     </div>
//   </div>

// </div>
        

//       </div>
//     </section>
//   );
// }


"use client";
 
import { MapPin, Phone, Mail, User, AtSign } from "lucide-react";
 
export function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
 
        {/* TOP: FORM + MAP */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
 
          {/* FORM */}
          <div className="space-y-5">
 
            {/* Name */}
            <div>
              <label className="text-sm font-medium flex items-center gap-1 mb-1">
                Name <span className="text-red-500">*</span>
                <span className="ml-1 text-gray-400 text-xs border border-gray-300 rounded-full w-4 h-4 inline-flex items-center justify-center">i</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your or company name here"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                />
                <User size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
 
            {/* Email */}
            <div>
              <label className="text-sm font-medium flex items-center gap-1 mb-1">
                Email <span className="text-red-500">*</span>
                <span className="ml-1 text-gray-400 text-xs border border-gray-300 rounded-full w-4 h-4 inline-flex items-center justify-center">i</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Type your or company Email here"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                />
                <AtSign size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
 
            {/* Message */}
            <div>
              <label className="text-sm font-medium flex items-center gap-1 mb-1">
                Message <span className="text-red-500">*</span>
                <span className="ml-1 text-gray-400 text-xs border border-gray-300 rounded-full w-4 h-4 inline-flex items-center justify-center">i</span>
              </label>
              <textarea
                rows={6}
                placeholder="Type Here"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white resize-none"
              ></textarea>
            </div>
 
            {/* Button */}
            <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition">
              Send →
            </button>
          </div>
 
          {/* MAP */}
          <div className="w-full h-[380px] md:h-full rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.410527892599!2d79.9184661747574!3d6.960803893039649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2574915c7501f%3A0x1a057a01e674f7b0!2sC%20S%20Engineering!5e0!3m2!1sen!2slk!4v1774243225890!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
 
        {/* BOTTOM: CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-4">
 
          {/* Visit Us */}
          <div className="relative flex flex-col items-center">
            {/* Floating Icon */}
            <div className="absolute -top-8 z-10 bg-white rounded-full p-4 shadow-md">
              <MapPin size={38} className="text-black" />
            </div>
            {/* Card — badge shape: large top radius, smaller bottom radius */}
            <div className="w-full bg-red-600 text-white pt-14 pb-8 px-6 text-center shadow-md"
              style={{ borderRadius: "120px 120px 16px 16px" }}>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-sm leading-relaxed">
                58/173, Thammannakulama,<br />
                Anuradhapura
              </p>
            </div>
          </div>
 
          {/* Call Us */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-16 z-10 bg-white rounded-full p-4 shadow-md">
              <Phone size={38} className="text-black" />
            </div>
            <div className="w-full bg-red-600 text-white pt-14 pb-8 px-6 text-center shadow-md"
              style={{ borderRadius: "120px 120px 16px 16px" }}>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-sm leading-relaxed">
                +94 (0) 71 143 6850<br />
                +94 (0) 74 243 6850
              </p>
            </div>
          </div>
 
          {/* Email */}
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-8 z-10 bg-white rounded-full p-4 shadow-md">
              <Mail size={38} className="text-black" />
            </div>
            <div className="w-full bg-red-600 text-white pt-14 pb-8 px-6 text-center shadow-md"
              style={{ borderRadius: "120px 120px 16px 16px" }}>
              <h3 className="font-semibold text-lg mb-2">E-mail</h3>
              <p className="text-sm leading-relaxed break-words">
                cs.engserv@gmail.com<br />
                chamara.csengserv@gmail.com
              </p>
            </div>
          </div>
 
        </div>
 
      </div>
    </section>
  );
}
 


