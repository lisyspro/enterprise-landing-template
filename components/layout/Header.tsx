import { company } from "@/config/company";

import Button from "@/components/ui/Button";

import { navigation } from "@/content/navigation";

import Container from "@/components/ui/Container";

import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
  <div className="flex h-20 items-center justify-between">
        <a href="/" className="flex items-center">
  <Image
    src="/logos/lisyspro-logo.png"
    alt="Lisyspro"
    width={220}
    height={60}
    priority
  />
</a>

      <nav className="hidden items-center gap-8 md:flex">
  {navigation.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className="font-medium text-gray-700 transition-colors hover:text-[#005699]"
    >
      {item.label}
    </a>
  ))}
</nav>

        <Button>Contáctanos</Button>
       </div>
</Container>
    </header>
);
}