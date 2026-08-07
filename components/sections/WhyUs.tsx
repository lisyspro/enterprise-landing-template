import Container from "@/components/ui/Container";
import { whyUs } from "@/content/why-us";

export default function WhyUs() {
  return (
    <section className="bg-white pt-20 pb-8">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            {whyUs.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {whyUs.description}
          </p>
        </div>


    <div className="mt-12 grid gap-8 md:grid-cols-2">

      {whyUs.features.map((feature) => (

        <div
          key={feature.title}
          className="rounded-2xl border border-gray-200 p-8 transition hover:border-[#005699] hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-[#005699]">
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