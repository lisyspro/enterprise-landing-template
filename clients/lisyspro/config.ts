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

  services: {
    title: "Nuestros Servicios",

    description:
      "Soluciones tecnológicas para impulsar el crecimiento de tu empresa.",

    items: [
      {
        title: "Microsoft 365",
        description:
          "Implementación, migración y administración de Microsoft 365 para empresas.",
        icon: "cloud",
      },

      {
        title: "Infraestructura TI",
        description:
          "Diseño, implementación y soporte de infraestructura tecnológica empresarial.",
        icon: "server",
      },

      {
        title: "Desarrollo Web",
        description:
          "Creación de sitios web corporativos modernos, rápidos y responsivos.",
        icon: "monitor",
      },

      {
        title: "Automatización",
        description:
          "Optimización de procesos utilizando Power Automate y Power Platform.",
        icon: "zap",
      },

      {
        title: "Azure",
        description:
          "Servicios en la nube, máquinas virtuales, respaldos y soluciones híbridas.",
        icon: "database",
      },

      {
        title: "Soporte Empresarial",
        description:
          "Soporte preventivo y correctivo para usuarios, servidores y redes.",
        icon: "headset",
      },
    ],
  },

  whyUs: {
    title: "¿Por qué elegir Lisyspro?",

    description:
      "Nos enfocamos en ofrecer soluciones tecnológicas confiables, escalables y adaptadas a las necesidades de cada cliente.",

    features: [
      {
        title: "Experiencia",
        description:
          "Más de 15 años implementando soluciones de TI.",
      },

      {
        title: "Atención personalizada",
        description:
          "Acompañamos a cada cliente durante todo el proyecto.",
      },

      {
        title: "Tecnología moderna",
        description:
          "Trabajamos con herramientas líderes como Microsoft 365, Azure y Power Platform.",
      },

      {
        title: "Soporte continuo",
        description:
          "Estamos disponibles para ayudarte antes, durante y después de la implementación.",
      },
    ],
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