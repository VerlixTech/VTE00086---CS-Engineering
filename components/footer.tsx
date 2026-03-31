
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
              CS Engineering Services is a energy services engineering company that provides a 
              strategic, flexible, experienced and innovative approach to delivering engineering 
              and management consultancy services for its clients.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <Link href="https://www.facebook.com/share/1CKnxRdnNh/" className="text-gray-500 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </Link>
  
              <Link href="https://www.linkedin.com/company/csengserv/" className="text-gray-500 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-black font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
                {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: 'Our Partners', href: '/partners' },
                { label: "Services", href: "/services" },
                { label: "Experience", href: "/experience" },
                { label: "Products Supply", href: "/products" },
                { label: 'News', href: '/news' },
                ].map((item) => (
                <li key={item.label}>
                    <Link
                    href={item.href}
                    className="text-gray-600 hover:text-red-500 transition-colors text-sm"
                    >
                    {item.label}
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
                  <Link href="/services" className="text-gray-600 hover:text-red-500 transition-colors text-sm">
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
                  <Link href="/products" className="text-gray-600 hover:text-red-500 transition-colors text-sm">
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
                <p className="text-black font-medium">+94 71 143 6850</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-3 rounded-full">
                <Mail className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Email</p>
                <p className="text-black font-medium">info@csengservices.com</p>
              </div>
            </div>

            {/* <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-3 rounded-full">
                <MapPin className="text-red-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase">Visit Us</p>
                <p className="text-black font-medium">
                  581/73,Thammennakulama ,Anuradhapura,Sri lanka
                </p>
                <br></br>
                <p className="text-black font-medium">
                  21/17 , Atalahagoda road , Wattegama , Kandy
                </p>
              </div>
            </div> */}

            <div className="flex items-start gap-3">
  <div className="bg-gray-200 p-3 rounded-full">
    <MapPin className="text-red-500" size={20} />
  </div>

  <div>
    <p className="text-xs text-gray-500 uppercase">Visit Us</p>

    {/* Changed here */}
    <div className="flex gap-8">
      <div>
        <p className="text-black font-medium">Anuradhapura</p>
        <p className="text-gray-600 text-sm">
          581/73, Thammennakulama
        </p>
      </div>

      <div>
        <p className="text-black font-medium">Kandy</p>
        <p className="text-gray-600 text-sm">
          21/17, Atalahagoda Road, Wattegama
        </p>
      </div>
    </div>
  </div>
</div>

           
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Terms of Use</Link>
          </div>

          {/* <p>© 2026 CS Engineering Services. All rights reserved.</p> */}
          <p>© 2026 VERLIXTECH (PVT) LTD.ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>


  );
}