import Container from "@/components/ui/Container";
import type { ClientConfig } from "@/types/client";

type CTAProps = {
  client: ClientConfig;
};

export default function CTA({ client }: CTAProps) {
  return (
    <section
      className="py-20 text-white"
      style={{
        backgroundColor: client.brand.primary,
      }}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            {client.cta.eyebrow}
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            {client.cta.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
            {client.cta.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={client.cta.primaryHref}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold transition hover:opacity-90"
              style={{
                color: client.brand.primary,
              }}
            >
              {client.cta.primaryLabel}
            </a>

            <a
              href={client.cta.secondaryHref}
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {client.cta.secondaryLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}