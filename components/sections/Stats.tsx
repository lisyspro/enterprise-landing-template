import Container from "@/components/ui/Container";

import type { ClientConfig } from "@/types/client";

type StatsProps = {
  client: ClientConfig;
};

export default function Stats({
  client,
}: StatsProps) {
  if (!client.stats || client.stats.length === 0) {
    return null;
  }

  return (
    <section className="bg-white pt-4 pb-20">
      <Container>
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">

          {client.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-primary)] hover:shadow-xl"
            >
              <h3
                className="text-5xl font-bold tracking-tight"
                style={{
                  color: client.brand.primary,
                }}
              >
                {stat.value}
              </h3>

              <p className="mt-4 text-base font-medium text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}