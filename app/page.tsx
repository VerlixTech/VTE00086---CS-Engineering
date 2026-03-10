import Image from "next/image";
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider";
import { AboutUs } from "@/components/aboutus";
import { WelcomeSection } from "@/components/WelcomeSection"; 
import { ServiceSection } from "@/components/ServiceSection";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <HeroSlider />
        <WelcomeSection />
            <AboutUs />
               <ServiceSection/>
            

    </main>
  );
}
