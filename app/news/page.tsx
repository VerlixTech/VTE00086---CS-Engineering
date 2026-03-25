
// import { Header } from "@/components/header"
// import { HeroSlider } from "@/components/News/HeroSlider";
// import { CTASection } from "@/components/CTASection";
// import ReadUs from "@/components/ReadUs";

// export default function Home() {
//   return (
//     <main className="min-h-screen ">
      
//       <HeroSlider />
//         <Header />
//         <ReadUs/>
           
//         <CTASection />
                              
            

//     </main>
//   );
// }


import { Header } from "@/components/header";
import { HeroSlider } from "@/components/News/HeroSlider";
import { CTASection } from "@/components/CTASection";
import ReadUsSection from "@/components/News/ReadUsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <HeroSlider />
        <ReadUsSection />
        <CTASection />
      </main>
    </>
  );
}