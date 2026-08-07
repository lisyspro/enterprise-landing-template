import Container from "@/components/ui/Container";
import { site } from "@/content/site";

export default function CTA() {
  return (
    <section className="bg-[#005699] py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            {site.cta.eyebrow}
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            {site.cta.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100">
            {site.cta.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.cta.primaryHref}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#005699] transition hover:bg-blue-50"
            >
              {site.cta.primaryLabel}
            </a>

            <a
              href={site.cta.secondaryHref}
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {site.cta.secondaryLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}