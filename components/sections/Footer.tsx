import Container from "@/components/ui/Container";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-bold">{site.name}</p>

            <p className="mt-2 max-w-md text-sm text-slate-400">
              {site.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm text-slate-300">
            {site.navigation.map((item) => (
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
          © {new Date().getFullYear()} {site.name}. Todos los derechos
          reservados.
        </div>
      </Container>
    </footer>
  );
}