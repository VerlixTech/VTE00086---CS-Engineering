import { Header } from "@/components/header";
import { HeroSlider } from "@/components/Product/HeroSlider";
import { CTASection } from "@/components/CTASection";
import { ChannelPartners } from "@/components/ChannelPartners";
import { ProductSection } from "@/components/ProductSection";


export default function Product() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ProductSection />
      
      
     
      <ChannelPartners />
      <CTASection />
      
    </main>
  );
}