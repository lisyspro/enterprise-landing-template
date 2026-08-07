import Container from "@/components/ui/Container";

import type { ClientConfig } from "@/types/client";

type WhyUsProps = {
  client: ClientConfig;
};

export default function WhyUs({
  client,
}: WhyUsProps) {
  return (
    <section
      id="nosotros"
      className="bg-white pt-20 pb-8"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            {client.whyUs.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {client.whyUs.description}
          </p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">

          {client.whyUs.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 p-8 transition hover:border-[var(--brand-primary)] hover:shadow-lg"
            >
              <h3
                className="text-xl font-semibold"
                style={{
                  color: client.brand.primary,
                }}
              >
                ✓ {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}