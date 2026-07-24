import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { hero } from "@/content/hero";

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#005699]">
  {hero.badge}
</span>

            <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-900">
  {hero.title}
</h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
  {hero.description}
</p>

            <div className="mt-10 flex gap-4">
              <Button variant="primary">
  {hero.primaryButton}
</Button>

<Button variant="secondary">
  {hero.secondaryButton}
</Button>
            </div>

          </div>

          <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-16">

            <p className="text-center text-gray-500">
              Aquí irá una ilustración
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}