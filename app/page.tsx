import Image from "next/image";
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider";
import { AboutUs } from "@/components/aboutus";
import { WelcomeSection } from "@/components/WelcomeSection"; 
import { ServiceSection } from "@/components/ServiceSection";
import { ChannelPartner } from "@/components/ChannelPartner";
import { ProductSection } from "@/components/ProductSection";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnerLogos } from "@/components/PartnerLogos";

export default function Home() {
  return (
    <main className="min-h-screen ">
      
      <HeroSlider />
        <WelcomeSection />
            <AboutUs />
               <ServiceSection/>
                  <PartnerLogos />
                 
                        <ProductSection/>
                        <TestimonialsSection  />
                           <CTASection />
                              
            

    </main>
  );
}
