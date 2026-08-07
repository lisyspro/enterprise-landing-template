import Container from "@/components/ui/Container";
import { stats } from "@/content/stats";

export default function Stats() {
  return (
   <section className="bg-white pt-4 pb-20">
      <Container>
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
             className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#005699] hover:shadow-xl"
            >
              <h3 className="text-5xl font-bold tracking-tight text-[#005699]">
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