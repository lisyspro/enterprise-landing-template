import Container from "@/components/ui/Container";
import ServiceIcon from "@/components/ui/ServiceIcon";

import type { ClientConfig } from "@/types/client";

type ServicesProps = {
  client: ClientConfig;
};

export default function Services({
  client,
}: ServicesProps) {
  return (
    <section
      id="servicios"
      className="bg-gray-50 py-20"
    >
      <Container>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            {client.services.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            {client.services.description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {client.services.items.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-2xl text-white"
                style={{
                  backgroundColor: client.brand.primary,
                }}
              >
                <ServiceIcon name={service.icon} />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}