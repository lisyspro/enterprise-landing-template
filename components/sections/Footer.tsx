import Container from "@/components/ui/Container";
import type { ClientConfig } from "@/types/client";

type FooterProps = {
  client: ClientConfig;
};

export default function Footer({ client }: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold">
              {client.shortName}
            </p>

            <p className="mt-2 max-w-md text-sm text-slate-400">
              {client.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm text-slate-300">
            {client.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {client.name}. Todos los derechos
          reservados.
        </div>
      </Container>
    </footer>
  );
}