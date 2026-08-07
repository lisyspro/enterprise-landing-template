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

  services: {
    title: "Nuestros Servicios",

    description:
      "Soluciones integrales para proteger a tus trabajadores y fortalecer la gestión de tu organización.",

    items: [
      {
        title: "Diseño e implementación del SG-SST",
        description:
          "Diseño e implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo bajo el ciclo PHVA y la normatividad aplicable.",
        icon: "shield",
      },

      {
        title: "Capacitación y Formación",
        description:
          "Capacitación, formación y entrenamiento orientados a fortalecer la prevención y la seguridad en tu organización.",
        icon: "training",
      },

      {
        title: "Planes de Emergencia",
        description:
          "Diseño y acompañamiento en planes de emergencia para preparar a tu organización ante situaciones críticas.",
        icon: "emergency",
      },

      {
        title: "Evaluación de Riesgos",
        description:
          "Identificación y evaluación de riesgos para promover ambientes de trabajo más seguros y saludables.",
        icon: "risk",
      },

      {
        title: "Sistemas de Gestión",
        description:
          "Diseño e implementación de sistemas de gestión de seguridad y salud, calidad, ambiente y sistemas integrados.",
        icon: "management",
      },

      {
        title: "Promoción y Prevención",
        description:
          "Programas de bienestar, vigilancia epidemiológica, riesgo psicosocial, pausas activas y manejo del estrés.",
        icon: "health",
      },
    ],
  },

  whyUs: {
    title: "¿Por qué elegir PISTIS?",

    description:
      "Diseñamos soluciones adaptadas a las necesidades de cada organización para fortalecer la seguridad, la salud y el bienestar de sus trabajadores.",

    features: [
      {
        title: "Cumplimiento normativo",
        description:
          "Desarrollamos soluciones alineadas con la legislación colombiana vigente, incluyendo el Decreto 1072 de 2015 y la Resolución 0312 de 2019.",
      },

      {
        title: "Equipo multidisciplinario",
        description:
          "Contamos con profesionales altamente calificados y con experiencia en Seguridad y Salud en el Trabajo.",
      },

      {
        title: "Soluciones adaptadas",
        description:
          "Adaptamos nuestros servicios al tamaño, las necesidades y la actividad económica de cada empresa.",
      },

      {
        title: "Documentación técnica",
        description:
          "Desarrollamos documentación técnica alineada con los requisitos legales aplicables a cada organización.",
      },

      {
        title: "Acompañamiento integral",
        description:
          "Acompañamos a nuestros clientes durante los procesos de diseño, implementación y fortalecimiento de sus sistemas de gestión.",
      },

      {
        title: "Prevención y mejora continua",
        description:
          "Trabajamos con un enfoque preventivo, práctico y orientado a la mejora continua de la organización.",
      },
    ],
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