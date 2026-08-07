import Image from "next/image";

import Container from "@/components/ui/Container";

import type { ClientConfig } from "@/types/client";

type HeaderProps = {
  client: ClientConfig;
};

export default function Header({ client }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center">
            {client.logo.src ? (
              <Image
                src={client.logo.src}
                alt={client.logo.alt}
                width={client.logo.width}
                height={client.logo.height}
                priority
                className="h-auto max-h-14 w-auto"
              />
            ) : (
              <span
                className="text-2xl font-bold"
                style={{
                  color: client.brand.primary,
                }}
              >
                {client.shortName}
              </span>
            )}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {client.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-gray-700 transition-colors hover:text-[var(--brand-primary)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            style={{
              backgroundColor: client.brand.primary,
            }}
          >
            Contáctanos
          </a>
        </div>
      </Container>
    </header>
  );
}