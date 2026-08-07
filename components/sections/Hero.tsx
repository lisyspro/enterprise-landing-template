import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { hero } from "@/content/hero";

export default function Hero() {
  return (
    <Section background="white" className="pt-20 pb-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2">

          {/* Texto */}
          <div>

            <div className="inline-block">
              <span className="text-base font-semibold uppercase tracking-[0.15em] text-[#005699]">
                {hero.badge}
              </span>

              <div className="mt-2 h-0.5 w-full rounded-full bg-[#2D92C8]"></div>
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
              {hero.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary">
                {hero.primaryButton}
              </Button>

              <Button variant="secondary">
                {hero.secondaryButton}
              </Button>
            </div>

          </div>

          {/* Ilustración */}
          <div className="relative flex items-center justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-[#2D92C8]/10 blur-3xl"></div>

            <Image
              src={hero.image}
              alt="Ilustración tecnológica de Lisyspro"
              width={800}
              height={800}
              priority
              className="relative h-auto w-full max-w-3xl"
            />

          </div>

        </div>
      </Container>
    </Section>
  );
}