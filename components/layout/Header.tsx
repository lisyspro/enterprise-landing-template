import { company } from "@/config/company";

import Button from "@/components/ui/Button";

import { navigation } from "@/content/navigation";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h2 className="text-2xl font-bold text-[#005699]">
          {company.name}
        </h2>

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
    </header>
);
}