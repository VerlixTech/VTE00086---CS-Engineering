import Image from "next/image";
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider";
import { AboutUs } from "@/components/aboutus";
import { WelcomeSection } from "@/components/WelcomeSection"; 
import { ServiceSection } from "@/components/ServiceSection";
import { ChannelPartners } from "@/components/ChannelPartners";
import { ProductSection } from "@/components/ProductSection";
import { CTASection } from "@/components/CTASection";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen ">
      
      <HeroSlider />
        <WelcomeSection />
            <AboutUs />
               <ServiceSection/>
                    <ChannelPartners />
                        <ProductSection/>
                        <TestimonialsSection  />
                           <CTASection />
                              
            

    </main>
  );
}
