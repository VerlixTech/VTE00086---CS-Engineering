import { Header } from "@/components/header";
import { HeroSlider } from "@/components/Experience/HeroSlider";
import { CTASection } from "@/components/CTASection";
import { PartnerLogos } from "@/components/PartnerLogos";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PastProjectSection } from "@/components/Experience/PastProjectSection";
import { ProjectGallery } from "@/components/Experience/ProjectGallrey";



export default function Experience() {
  return (
    <main className="min-h-screen">
   
      <HeroSlider />

      <PartnerLogos />
      <PastProjectSection />   
      <ProjectGallery />
      <CTASection />
      
    </main>
  );
}