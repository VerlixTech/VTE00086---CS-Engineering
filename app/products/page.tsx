import { Header } from "@/components/header";
import { HeroSlider } from "@/components/Product/HeroSlider";
import { CTASection } from "@/components/CTASection";
import { ChannelPartner } from "@/components/ChannelPartner";
import { ProductSection } from "@/components/ProductSection";


export default function Product() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ProductSection />
      
      
     
      <ChannelPartner />
      <CTASection />
      
    </main>
  );
}