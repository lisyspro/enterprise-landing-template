import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Stats />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}