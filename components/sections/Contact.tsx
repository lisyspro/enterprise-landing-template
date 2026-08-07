import Container from "@/components/ui/Container";
import { site } from "@/content/site";

export default function Contact() {
  const contactItems = [
    {
      title: "WhatsApp",
      value: site.contact.whatsappLabel,
      href: site.contact.whatsappUrl,
    },
    {
      title: "Correo",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      title: "Atención",
      value: site.location,
      href: "#contacto",
    },
  ];

  return (
    <section id="contacto" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#005699]">
            Contacto
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            Estamos listos para ayudarte
          </h2>

          <p className="mt-4 text-slate-600">
            Escríbenos y conversemos sobre las necesidades de tu empresa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}