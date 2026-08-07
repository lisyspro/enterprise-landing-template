import type { CSSProperties } from "react";

import Header from "@/components/layout/Header";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import type { ClientConfig } from "@/types/client";

type ClientLandingProps = {
  client: ClientConfig;
};

export default function ClientLanding({
  client,
}: ClientLandingProps) {
  const brandStyles = {
    "--brand-primary": client.brand.primary,
    "--brand-secondary": client.brand.secondary,
    "--brand-background": client.brand.background,
    "--brand-foreground": client.brand.foreground,
  } as CSSProperties;

  return (
    <div style={brandStyles}>
      <Header client={client} />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Stats />

        <CTA client={client} />

        <Contact client={client} />
      </main>

      <Footer client={client} />
    </div>
  );
}