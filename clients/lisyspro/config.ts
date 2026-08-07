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

    title: "¿Listo para transformar la tecnología de tu empresa?",

    description:
      "Cuéntanos qué necesitas y te ayudaremos a encontrar una solución tecnológica práctica, confiable y adaptada a tu negocio.",

    primaryLabel: "Solicitar asesoría",
    primaryHref: "#contacto",

    secondaryLabel: "Ver servicios",
    secondaryHref: "#servicios",
  },
};