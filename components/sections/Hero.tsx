import Button from "@/components/ui/Button";
import { hero } from "@/content/hero";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[#005699]">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex gap-4">
          <Button>
            {hero.primaryButton}
          </Button>

          <a
            href="#services"
            className="rounded-lg border border-[#005699] px-5 py-2.5 text-[#005699] transition hover:bg-blue-50"
          >
            {hero.secondaryButton}
          </a>
        </div>

      </div>
    </section>
  );
}