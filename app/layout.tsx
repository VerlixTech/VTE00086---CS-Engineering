import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Marck_Script } from 'next/font/google';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AOSProvider from '@/./app/AOSProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const markScript = Marck_Script({
  variable: "--font-markScript",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "CS Engineering Services",
  other: {
    site_name: "CS Engineering Services",
  },
  description:
    "CS Engineering Services is a leading steam and energy engineering consultancy in Sri Lanka, providing industrial solutions, boiler services, energy management, and storage systems.",
  keywords:
    "steam engineering, energy solutions, boiler services, water treatment, industrial solutions, Sri Lanka, CS Engineering Services, rice mill equipment, storage systems, racking solutions, energy auditing",
  authors: [{ name: "CS Engineering Services" }],
  creator: "CS Engineering Services",
  publisher: "CS Engineering Services",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.csengservices.com/",
    title: "CS Engineering Services",
    description:
      "Leading steam and energy engineering consultancy in Sri Lanka, delivering industrial solutions, boiler services, and energy management.",
    siteName: "CS Engineering Services",
    images: [
      {
        url: "https://www.csengservices.com/Logo.svg",
        width: 600,
        height: 600,
        alt: "CS Engineering Services Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CS Engineering Services",
    description:
      "Leading steam and energy engineering consultancy in Sri Lanka, delivering industrial solutions, boiler services, and energy management.",
    images: ["https://www.csengservices.com/Logo.svg"],
  },
  alternates: {
    canonical: "https://www.csengservices.com/",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   function addOrganizationJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CS Engineering Services",
      "alternateName": "CS Engineering Services",
      "description": "Energy and steam engineering consultancy delivering efficient industrial solutions in Sri Lanka.",
      "url": "https://www.csengservices.com/",
      "logo": "https://www.csengservices.com/Logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94 71 143 6850",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "581/73, Thammennakulama, Anuradhapura",
        "addressLocality": "Anuradhapura",
        "addressCountry": "LK",
        "postalCode": "50000"
      }
    }`,
  };
}

 function addWebsiteJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CS Engineering Services",
      "alternateName": "CS Engineering Services",
      "url": "https://www.csengservices.com/",
      "description": "CS Engineering Services provides specialized steam and energy engineering solutions, boiler services, and industrial energy management in Sri Lanka.",
      "publisher": {
        "@type": "Organization",
        "name": "CS Engineering Services",
        "logo": "https://www.csengservices.com/Logo.svg"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.csengservices.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }`,
  };
}
  return (
    <html lang="en">
         <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:site_name" content="CS Engineering Services" />
        <meta property="og:url" content="https://www.csengservices.com/" />
        <meta property="og:title" content="CS Engineering Services | Steam & Energy Engineering Experts" />
        <meta property="og:description" content="Energy and steam engineering consultancy delivering industrial solutions in Sri Lanka." />
        <meta property="og:image" content="https://www.csengservices.com/Logo.svg" />
        <link rel="canonical" href="https://www.csengservices.com/" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" />
        <link rel="alternate" hrefLang="en" href="https://www.csengservices.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.csengservices.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addOrganizationJsonLd()}
          key="organization-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addWebsiteJsonLd()}
          key="website-jsonld"
        />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CS Engineering Services",
      alternateName: "CS Engineering Services",
      description:
        "Energy and steam engineering consultancy delivering efficient industrial solutions in Sri Lanka, including boilers, energy management, and storage solutions.",
      url: "https://www.csengservices.com/",
      logo: "https://www.csengservices.com/Logo.svg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94 71 143 6850",
        contactType: "customer service",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "581/73, Thammennakulama",
        addressLocality: "Anuradhapura",
        addressCountry: "LK",
        postalCode: "50000",
      },
      // Optional social links
      sameAs: [
        "https://www.facebook.com/csengservices",
        "https://www.linkedin.com/company/cs-engineering-services"
      ],
    }),
  }}
/>

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CS Engineering Services",
      alternateName: "CS Engineering Services",
      url: "https://www.csengservices.com/",
      description: "CS Engineering Services provides specialized steam and energy engineering solutions, boiler services, energy management, and industrial consultancy in Sri Lanka.",
      publisher: {
        "@type": "Organization",
        name: "CS Engineering Services",
        logo: "https://www.csengservices.com/Logo.svg"
      },

      // Search functionality
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.csengservices.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },

      // Main pages for sitelinks
      mainEntity: [
        {
          "@type": "WebPage",
          "@id": "https://www.csengservices.com/contact",
          name: "Contact Us",
          description: "CS Engineering Services Contact Information: Anuradhapura office, Email: cs.engserv@gmail.com, Phone: +94 71 143 6850",
          url: "https://www.csengservices.com/contact"
        },
        {
          "@type": "WebPage",
          "@id": "https://www.csengservices.com/aboutus",
          name: "Company Profile",
          description: "CS Engineering Services specializes in steam, energy, and industrial solutions with expert engineering consultancy for Sri Lankan industries.",
          url: "https://www.csengservices.com/aboutus"
        },
        {
          "@type": "WebPage",
          "@id": "https://www.csengservices.com/services",
          name: "Our Services",
          description: "CS Engineering Services offers specialized steam engineering, energy management, boiler solutions, and industrial consultancy services across multiple sectors in Sri Lanka.",
          url: "https://www.csengservices.com/services"
        }
      ]
    }),
  }}
/>
        
    {/* Breadcrumb Schema for navigation structure */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.csengservices.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: "https://www.csengservices.com/about"
        },
                {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://www.csengservices.com/products"
        },
        
        {
          "@type": "ListItem",
          position: 3,
          name: "Contact Us",
          item: "https://www.csengservices.com/contact"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Engineering Services",
          item: "https://www.csengservices.com/services"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Projects",
          item: "https://www.csengservices.com/experience"
        }
      ]
    }),
  }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${markScript.variable} antialiased`}
      >
        <Header />
        <AOSProvider>{children}</AOSProvider>  
        <Footer />
      </body>
    </html>
  );
}
