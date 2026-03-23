import { Header } from "@/components/header";
import { HeroSlider } from "@/components/Service/HeroSlider";
import { WelcomeSection } from "@/components/WelcomeSection";
import { CTASection } from "@/components/CTASection";
import { PartnerLogos } from "@/components/PartnerLogos";
import { SteamEngineeringSection } from "@/components/About/SteamEngineeringSection";
import { ChannelPartner } from "@/components/ChannelPartner";
import { ServicesOfferSection } from "@/components/Service/ServicesOfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";



export default function Service() {
  return (
    <main className="min-h-screen">
     
      <HeroSlider />
      <ServicesOfferSection />
      <ChannelPartner />
      <TestimonialsSection />


      
   
    
    
      <CTASection />
      
    </main>
  );
}