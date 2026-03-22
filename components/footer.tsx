// "use client";

// import { Phone, Mail, MapPin } from "lucide-react";
// import Image from 'next/image';

// export  function Footer() {
//   return (
//     <footer className="bg-gray-100 text-gray-600 pt-16 pb-6">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Top Section */}
//         <div className="text-center mb-12">
//           {/* Logo */}
//           <div className="flex justify-center items-center gap-2 mb-3">
           
//               <Image
//               src="/image 1.svg"   // place your logo in public folder
//               alt="CS Engineering Services"
//               width={280}
//               height={280}
//               className="object-contain"
//             />
//           </div>

//           <p className="text-sm max-w-2xl mx-auto">
//             We are a lorem ipsum dolor sit amet, consectetur adipiscing elit,
//             sed do eiusmod tempor incididunt ut labore exercitation ullamco
//             laboris nisi ut aliquip ex ea commodo consequat
//           </p>

//           {/* Contact Info */}
//           <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
            
//             <div className="flex items-center justify-center gap-2">
//               <Phone size={18} />
//               <div>
//                 <p className="font-medium text-gray-700">Tel</p>
//                 <p className="text-blue-500">310-437-2766</p>
//               </div>
//             </div>

//             <div className="flex items-center justify-center gap-2">
//               <Mail size={18} />
//               <div>
//                 <p className="font-medium text-gray-700">Mail</p>
//                 <p className="text-blue-500">unreal@outlook.com</p>
//               </div>
//             </div>

//             <div className="flex items-center justify-center gap-2">
//               <MapPin size={18} />
//               <div>
//                 <p className="font-medium text-gray-700">Address</p>
//                 <p className="text-blue-500">
//                   706 Campfire Ave. Meriden, CT 06450
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>

       
//         {/* Navigation Sections */}
//         <div className="grid md:grid-cols-3 gap-10 text-center md:text-left mb-10 max-w-4xl mx-auto">

//           {/* Company */}
//           <div>
//             <h3 className="font-semibold text-gray-800 mb-4">
//               Company
//             </h3>
//             <ul className="space-y-2">
//               <li className="hover:text-black cursor-pointer"> Home</li>
//               <li className="hover:text-black cursor-pointer">About Us</li>
//               <li className="hover:text-black cursor-pointer">Service</li>
//               <li className="hover:text-black cursor-pointer">Experience</li>
//               <li className="hover:text-black cursor-pointer">Product Supply</li>
//             </ul>
//           </div>

//           {/* Capabilities */}
//           <div>
//             <h3 className="font-semibold text-gray-800 mb-4">
//               Capabilities
//             </h3>
//             <ul className="space-y-2">
//               <li className="hover:text-black cursor-pointer">Steam Engineering & Consultation</li>
//               <li className="hover:text-black cursor-pointer">Boiler Installation</li>
//               <li className="hover:text-black cursor-pointer">Energy & Sustainability  Solutions</li>
//               <li className="hover:text-black cursor-pointer">Boiler Sales</li>
//               <li className="hover:text-black cursor-pointer">Other Services</li>
//             </ul>
//           </div>

//           {/* Products */}
//           <div>
//             <h3 className="font-semibold text-gray-800 mb-4">
//               Products
//             </h3>
//             <ul className="space-y-2">
//               <li className="hover:text-black cursor-pointer">Steam Boilers</li>
//               <li className="hover:text-black cursor-pointer">Thermic Fluid  Heaters</li>
//               <li className="hover:text-black cursor-pointer">HotWater Generators</li>
//               <li className="hover:text-black cursor-pointer">Water Treatment Solutions</li>
//               <li className="hover:text-black cursor-pointer">Environmental Solutions</li>
//               <li className="hover:text-black cursor-pointer">Steam Radiators</li>
//               <li className="hover:text-black cursor-pointer">Bowlers</li>
//               <li className="hover:text-black cursor-pointer">Steam Accessories</li>
//             </ul>
//           </div>

//         </div>
//         {/* Divider */}
//         <div className="border-t border-gray-300 mb-4"></div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          
//           <div className="flex gap-6">
//             <span className="hover:text-black cursor-pointer">Contact</span>
//             <span className="hover:text-black cursor-pointer">
//               Privacy policy
//             </span>
//             <span className="hover:text-black cursor-pointer">
//               Terms of Use
//             </span>
//           </div>

//           <p>© 2026, All Rights Reserved</p>
//         </div>

//       </div>
//     </footer>
//   );
// }

// "use client";

// import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
// import Image from 'next/image';
// import Link from 'next/link';

// export function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-gray-800 to-black text-gray-300 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
//           {/* Company Info - Logo & Description */}
//           <div className="lg:col-span-4 space-y-4">
//             <div className="flex items-center gap-2 ">
//               <Image
//                 src="/image 1.svg"
//                 alt="CS Engineering Services"
//                 width={220}
//                 height={60}
//                 className="object-contain " // Makes logo white if needed, adjust based on your logo
//               />
//             </div>
//             <p className="text-sm text-gray-400 leading-relaxed">
//               We are a lorem ipsum dolor sit amet, consectetur adipiscing elit,
//               sed do eiusmod tempor incididunt ut labore exercitation ullamco
//               laboris nisi ut aliquip ex ea commodo consequat.
//             </p>
//             {/* Social Icons */}
//             <div className="flex gap-4 pt-2">
//               <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Facebook size={20} />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Twitter size={20} />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Linkedin size={20} />
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <Instagram size={20} />
//               </Link>
//             </div>
//           </div>

//           {/* Quick Links - Company */}
//           <div className="lg:col-span-2">
//             <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
//             <ul className="space-y-3">
//               {['Home', 'About Us', 'Service', 'Experience', 'Product Supply'].map((item) => (
//                 <li key={item}>
//                   <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Capabilities */}
//           <div className="lg:col-span-3">
//             <h3 className="text-white font-semibold text-lg mb-4">Capabilities</h3>
//             <ul className="space-y-3">
//               {[
//                 'Steam Engineering & Consultation',
//                 'Boiler Installation',
//                 'Energy & Sustainability Solutions',
//                 'Boiler Sales',
//                 'Other Services'
//               ].map((item) => (
//                 <li key={item}>
//                   <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div className="lg:col-span-3">
//             <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
//             <ul className="space-y-3">
//               {[
//                 'Steam Boilers',
//                 'Thermic Fluid Heaters',
//                 'Hot Water Generators',
//                 'Water Treatment Solutions',
//                 'Environmental Solutions',
//                 'Steam Radiators',
//                 'Bowlers',
//                 'Steam Accessories'
//               ].map((item) => (
//                 <li key={item}>
//                   <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors text-sm">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Contact Info Bar */}
//         <div className="border-t border-gray-700 pt-8 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
//             <div className="flex items-center gap-3">
//               <div className="bg-blue-500/10 p-3 rounded-full">
//                 <Phone className="text-red-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us</p>
//                 <p className="text-white font-medium">310-437-2766</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="bg-blue-500/10 p-3 rounded-full">
//                 <Mail className="text-red-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
//                 <p className="text-white font-medium">unreal@outlook.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="bg-blue-500/10 p-3 rounded-full">
//                 <MapPin className="text-red-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-xs text-gray-400 uppercase tracking-wider">Visit Us</p>
//                 <p className="text-white font-medium">706 Campfire Ave. Meriden, CT 06450</p>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          
//           <div className="flex gap-6">
//             <Link href="#" className="hover:text-red-500 transition-colors">Contact</Link>
//             <Link href="#" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
//             <Link href="#" className="hover:text-red-500 transition-colors">Terms of Use</Link>
//           </div>

//           <p>© 2026 CS Engineering Services. All rights reserved.</p>
//         </div>

//       </div>
//     </footer>
//   );
// }


"use client";

import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/image 1.svg"
                alt="CS Engineering Services"
                width={220}
                height={60}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              We are a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-black font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Service', 'Experience', 'Product Supply'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3">
            <h3 className="text-black font-semibold text-lg mb-4">Capabilities</h3>
            <ul className="space-y-3">
              {[
                'Steam Engineering & Consultation',
                'Boiler Installation',
                'Energy & Sustainability Solutions',
                'Boiler Sales',
                'Other Services'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="text-black font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {[
                'Steam Boilers',
                'Thermic Fluid Heaters',
                'Hot Water Generators',
                'Water Treatment Solutions',
                'Environmental Solutions',
                'Steam Radiators',
                'Bowlers',
                'Steam Accessories'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-red-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-3 rounded-full">
                <Phone className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Call Us</p>
                <p className="text-black font-medium">310-437-2766</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-3 rounded-full">
                <Mail className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Email</p>
                <p className="text-black font-medium">unreal@outlook.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-3 rounded-full">
                <MapPin className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Visit Us</p>
                <p className="text-black font-medium">
                  706 Campfire Ave. Meriden, CT 06450
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-red-500 transition-colors">Contact</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Terms of Use</Link>
          </div>

          <p>© 2026 CS Engineering Services. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}