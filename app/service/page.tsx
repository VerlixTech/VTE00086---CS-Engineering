import { Header } from "@/components/header";
import { HeroSlider } from "@/components/Service/HeroSlider";
import { WelcomeSection } from "@/components/WelcomeSection";
import { CTASection } from "@/components/CTASection";
import { PartnerLogos } from "@/components/PartnerLogos";
import { SteamEngineeringSection } from "@/components/About/SteamEngineeringSection";
import { ChannelPartners } from "@/components/ChannelPartners";
import { ServicesOfferSection } from "@/components/Service/ServicesOfferSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";



export default function Service() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ServicesOfferSection />
      <ChannelPartners />
      <TestimonialsSection />


      
   
    
    
      <CTASection />
      
    </main>
  );
}