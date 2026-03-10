// // components/layout/Header.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { Menu, X } from 'lucide-react';

// interface NavItem {
//   name: string;
//   href: string;
// }

// const navigation: NavItem[] = [
//   { name: 'Home', href: '/' },
//   { name: 'About us', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Experience', href: '/experience' },
//   { name: 'Product Supply', href: '/product-supply' },
//   { name: 'News', href: '/news' },
// ];

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   return (
//    <header className="fixed top-0 w-full z-50 bg-white py-2">
//   <div className="container mx-auto px-4">

//     {/* Logo - Top Center */}
//     <div className="flex justify-center">
//       <Link href="/">
//         <div className="relative w-64 h-20">
//           <Image
//             src="/image 1.svg"
//             alt="CS Engineering Services Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </Link>
//     </div>

//     {/* Navigation Row */}
//     <div className="flex items-center  mt-0 justify-between">

//       {/* Left Navigation */}
//       <div className="hidden lg:flex space-x-8 ml-8">
//         {navigation.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`text-sm font-medium hover:text-blue-600 ${
//               pathname === item.href ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>

//       {/* Right Contact Button */}
//       <Link
//         href="/contact"
//         className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 mr-9  "
//       >
//         Contact Us →
//       </Link>

//     </div>
//   </div>
// </header>
//   );
// }


// // components/layout/Header.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { Menu, X } from 'lucide-react';

// interface NavItem {
//   name: string;
//   href: string;
// }

// const navigation: NavItem[] = [
//   { name: 'Home', href: '/' },
//   { name: 'About us', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Experience', href: '/experience' },
//   { name: 'Product Supply', href: '/product-supply' },
//   { name: 'News', href: '/news' },
// ];

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   return (
// <header className="fixed top-0 w-full z-50 bg-white ">
//   <div className="container mx-auto px-4 py-2">

//     {/* Mobile Header */}
//     <div className="flex items-center justify-between lg:hidden">

//       {/* Logo */}
//       <Link href="/">
//         <div className="relative w-40 h-12">
//           <Image
//             src="/image 1.svg"
//             alt="CS Engineering Services Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </Link>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="text-black"
//       >
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//     </div>

//     {/* Desktop Logo */}
//     <div className="hidden lg:flex justify-center">
//       <Link href="/">
//         <div className="relative w-64 h-20">
//           <Image
//             src="/image 1.svg"
//             alt="CS Engineering Services Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </Link>
//     </div>

//     {/* Desktop Navigation */}
//     <div className="hidden lg:flex items-center justify-between mt-0">

//       {/* Left Navigation */}
//       <div className="flex space-x-8 ml-8">
//         {navigation.map((item) => (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`text-sm font-medium hover:text-blue-600 ${
//               pathname === item.href ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>

//       {/* Contact Button */}
//       <Link
//         href="/contact"
//         className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 mr-9"
//       >
//         Contact Us →
//       </Link>

//     </div>

   
  
//   {/* MOBILE MENU (outside container) */}
//   {isOpen && (
//     <div className="lg:hidden relative overflow-hidden bg-white rounded-b-2xl border-t pt-6 pb-8 flex flex-col items-center space-y-6">

//       {/* Ellipse */}
//       <Image
//         src="/navigation ellipse.svg"
//         alt="ellipse"
//         width={500}
//         height={500}
//         className="absolute -bottom-36 -right-36 w-[420px]"
//       />

//       <div className="relative z-10 flex flex-col items-center space-y-6">
//         {navigation.map((item) => (
//           <Link key={item.name} href={item.href} className="text-gray-700 text-base">
//             {item.name}
//           </Link>
//         ))}

//         <Link
//           href="/contact"
//           className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full"
//         >
//           Contact Us →
//         </Link>
//       </div>

//     </div>
//   )}


//   </div>
// </header>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Experience', href: '/experience' },
  { name: 'Product Supply', href: '/product-supply' },
  { name: 'News', href: '/news' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white">

      {/* HEADER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-2 rounded-b-6xl">

        {/* Mobile Header */}
        <div className="flex items-center justify-between lg:hidden round-b-6xl">

          <Link href="/">
            <div className="relative w-40 h-12">
              <Image
                src="/image 1.svg"
                alt="CS Engineering Services Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Desktop Logo */}
        <div className="hidden lg:flex justify-center">
          <Link href="/">
            <div className="relative w-64 h-20">
              <Image
                src="/image 1.svg"
                alt="CS Engineering Services Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">

          <div className="flex space-x-8 ml-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 mr-9"
          >
            Contact Us →
          </Link>

        </div>

      </div>

      {/* MOBILE MENU (FULL WIDTH) */}
      {isOpen && (
        <div className="lg:hidden relative overflow-hidden bg-white rounded-b-6xl border-t pt-6 pb-10 flex flex-col items-center space-y-6">

          {/* Ellipse Background */}
          <Image
            src="/navigation ellipse.svg"
            alt="ellipse"
            width={800}
            height={800}
            className="absolute -bottom-10 -right-10 w-[220px]"
          />

          <div className="relative z-10 flex flex-col items-center space-y-6">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 text-base"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full"
            >
              Contact Us →
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}