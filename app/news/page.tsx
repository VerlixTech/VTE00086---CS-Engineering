
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/News/HeroSlider";
import { CTASection } from "@/components/CTASection";
import ReadUs from "@/components/ReadUs";

export default function Home() {
  return (
    <main className="min-h-screen ">
      
      <HeroSlider />
        <Header />
        <ReadUs/>
           
        <CTASection />
                              
            

    </main>
  );
}
