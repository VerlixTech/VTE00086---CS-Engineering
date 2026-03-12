import { Header } from "@/components/header";
import { HeroSlider } from "@/components/About/HeroSlider";
import { WelcomeSection } from "@/components/WelcomeSection";
import { CTASection } from "@/components/CTASection";
import { PartnerLogos } from "@/components/PartnerLogos";
import { SteamEngineeringSection } from "@/components/About/SteamEngineeringSection";
import { ChannelPartners } from "@/components/ChannelPartners";


export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      
      <PartnerLogos />
      <SteamEngineeringSection />
      <ChannelPartners />
      <CTASection />
      
    </main>
  );
}