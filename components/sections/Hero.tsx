import Image from "next/image";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import type { ClientConfig } from "@/types/client";

type HeroProps = {
  client: ClientConfig;
};

export default function Hero({ client }: HeroProps) {
  return (
    <Section
      background="white"
      className="pt-20 pb-16"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Texto */}
          <div>
            <div className="inline-block">
              <span
                className="text-base font-semibold uppercase tracking-[0.15em]"
                style={{
                  color: client.brand.primary,
                }}
              >
                {client.hero.badge}
              </span>

              <div
                className="mt-2 h-0.5 w-full rounded-full"
                style={{
                  backgroundColor: client.brand.secondary,
                }}
              />
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              {client.hero.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {client.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              {/* Botón principal */}
              <a
                href={client.hero.primaryHref}
                className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                style={{
                  backgroundColor: client.brand.primary,
                }}
              >
                {client.hero.primaryButton}
              </a>

              {/* Botón secundario */}
              <a
                href={client.hero.secondaryHref}
                className="rounded-lg border px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
                style={{
                  borderColor: client.brand.primary,
                  color: client.brand.primary,
                }}
              >
                {client.hero.secondaryButton}
              </a>

            </div>
          </div>

          {/* Área visual */}
          <div className="relative flex min-h-[360px] items-center justify-center">

            <div
              className="absolute h-80 w-80 rounded-full opacity-10 blur-3xl"
              style={{
                backgroundColor: client.brand.secondary,
              }}
            />

            {client.hero.image ? (
              <Image
                src={client.hero.image}
                alt={client.hero.imageAlt}
                width={800}
                height={800}
                priority
                className="relative h-auto w-full max-w-3xl"
              />
            ) : (
              <div
                className="relative flex min-h-[300px] w-full max-w-lg flex-col items-center justify-center rounded-3xl border bg-white p-10 text-center shadow-sm"
                style={{
                  borderColor: `${client.brand.primary}30`,
                }}
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold text-white"
                  style={{
                    backgroundColor: client.brand.primary,
                  }}
                >
                  {client.shortName.charAt(0)}
                </div>

                <p
                  className="mt-6 text-2xl font-bold"
                  style={{
                    color: client.brand.primary,
                  }}
                >
                  {client.shortName}
                </p>

                <p className="mt-3 max-w-sm text-base leading-7 text-gray-600">
                  {client.tagline}
                </p>

                <div
                  className="mt-6 h-1 w-20 rounded-full"
                  style={{
                    backgroundColor: client.brand.secondary,
                  }}
                />
              </div>
            )}

          </div>

        </div>
      </Container>
    </Section>
  );
}