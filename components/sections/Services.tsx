import Container from "@/components/ui/Container";
import { services } from "@/content/services";
import ServiceIcon from "@/components/ui/ServiceIcon";

export default function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Nuestros Servicios
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Soluciones tecnológicas para impulsar el crecimiento de tu empresa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#005699] text-2xl text-white">
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