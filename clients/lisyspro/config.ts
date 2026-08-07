import type { ClientConfig } from "@/types/client";

export const lisysproConfig: ClientConfig = {
  slug: "lisyspro",

  name: "Lisyspro",

  shortName: "Lisyspro",

  tagline:
    "Servicios y soluciones profesionales en tecnología para empresas.",

  description:
    "Soluciones tecnológicas confiables para pequeñas y medianas empresas.",

  logo: {
    src: "/logos/lisyspro-logo.png",
    alt: "Lisyspro",
    width: 220,
    height: 60,
  },

  brand: {
    primary: "#005699",
    secondary: "#2d92c8",
    background: "#ffffff",
    foreground: "#171717",
  },

  hero: {
    badge: "SOLUCIONES TECNOLÓGICAS",

    title:
      "Transformamos la tecnología en una ventaja competitiva para tu empresa.",

    description:
      "Ayudamos a pequeñas y medianas empresas a modernizar su infraestructura TI, Microsoft 365, Azure, desarrollo web y automatización mediante soluciones confiables y profesionales.",

    primaryButton: "Solicitar asesoría",
    primaryHref: "#contacto",

    secondaryButton: "Nuestros servicios",
    secondaryHref: "#servicios",

    image: "/images/hero/hero-illustration.png",

    imageAlt:
      "Ilustración de soluciones tecnológicas empresariales de Lisyspro",
  },

  contact: {
    email: "contacto@lisyspro.com",
    phone: "",

    whatsappLabel: "Escríbenos directamente",
    whatsappUrl: "#",

    location: "Ibagué, Colombia",
  },

  navigation: [
    {
      label: "Inicio",
      href: "#inicio",
    },
    {
      label: "Servicios",
      href: "#servicios",
    },
    {
      label: "Nosotros",
      href: "#nosotros",
    },
    {
      label: "Contacto",
      href: "#contacto",
    },
  ],

  cta: {
    eyebrow: "Hablemos de tu proyecto",

    title:
      "¿Listo para transformar la tecnología de tu empresa?",

    description:
      "Cuéntanos qué necesitas y te ayudaremos a encontrar una solución tecnológica práctica, confiable y adaptada a tu negocio.",

    primaryLabel: "Solicitar asesoría",
    primaryHref: "#contacto",

    secondaryLabel: "Ver servicios",
    secondaryHref: "#servicios",
  },
};