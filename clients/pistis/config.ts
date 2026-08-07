import type { ClientConfig } from "@/types/client";

export const pistisConfig: ClientConfig = {
  slug: "pistis",

  name: "PISTIS Soluciones Integrales S.A.S.",

  shortName: "PISTIS",

  tagline:
    "Gestionamos tu seguridad, promovemos tu salud.",

  description:
    "Servicios integrales en Seguridad y Salud en el Trabajo, medio ambiente y calidad.",

  logo: {
    src: "",
    alt: "PISTIS Soluciones Integrales S.A.S.",
    width: 220,
    height: 80,
  },

  brand: {
    primary: "#00A81C",
    secondary: "#F5B51B",
    background: "#ffffff",
    foreground: "#171717",
  },

  hero: {
    badge: "SEGURIDAD Y SALUD EN EL TRABAJO",

    title:
      "Especialistas en Seguridad y Salud en el Trabajo para tu organización",

    description:
      "Brindamos servicios integrales en Seguridad y Salud en el Trabajo, medio ambiente y calidad, con soluciones adaptadas a las necesidades de organizaciones de diferentes sectores económicos.",

    primaryButton: "Solicitar asesoría",
    primaryHref: "#contacto",

    secondaryButton: "Conocer servicios",
    secondaryHref: "#servicios",

    image: "",

    imageAlt:
      "Seguridad y Salud en el Trabajo - PISTIS Soluciones Integrales",
  },

  contact: {
    email: "gerencia@pistis.com.co",

    phone: "3203191810",

    whatsappLabel: "320 319 1810",

    whatsappUrl:
      "https://wa.me/573203191810",

    location: "Ibagué, Tolima",
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
    eyebrow: "Tu aliado estratégico",

    title:
      "¿Necesitas apoyo en Seguridad y Salud en el Trabajo?",

    description:
      "Diseñamos soluciones prácticas adaptadas a las necesidades de tu organización y bajo el marco legal vigente.",

    primaryLabel: "Solicitar asesoría",
    primaryHref: "#contacto",

    secondaryLabel: "Conocer servicios",
    secondaryHref: "#servicios",
  },
};