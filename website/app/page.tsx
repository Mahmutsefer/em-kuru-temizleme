
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import MartyrFamiliesNote from "@/components/MartyrFamiliesNote";



export default function Home() {
  return (
    <>
    
      <main>
       
        <Hero />
<HowItWorks />
<Services />
<Branches />
<WhyUs />
<MartyrFamiliesNote />
<FAQ />
<Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
