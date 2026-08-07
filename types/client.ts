export type ClientBrand = {
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
};

export type ClientContact = {
  email: string;
  phone: string;
  whatsappLabel: string;
  whatsappUrl: string;
  location: string;
};

export type ClientNavigationItem = {
  label: string;
  href: string;
};

export type ClientHero = {
  badge: string;
  title: string;
  description: string;

  primaryButton: string;
  primaryHref: string;

  secondaryButton: string;
  secondaryHref: string;

  image: string;
  imageAlt: string;
};

export type ClientService = {
  title: string;
  description: string;
  icon: string;
};

export type ClientServices = {
  title: string;
  description: string;
  items: ClientService[];
};

export type ClientWhyUsFeature = {
  title: string;
  description: string;
};

export type ClientWhyUs = {
  title: string;
  description: string;
  features: ClientWhyUsFeature[];
};

export type ClientConfig = {
  slug: string;

  name: string;
  shortName: string;

  tagline: string;
  description: string;

  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };

  brand: ClientBrand;

  hero: ClientHero;

  services: ClientServices;

  whyUs: ClientWhyUs;

  contact: ClientContact;

  navigation: ClientNavigationItem[];

  cta: {
    eyebrow: string;
    title: string;
    description: string;

    primaryLabel: string;
    primaryHref: string;

    secondaryLabel: string;
    secondaryHref: string;
  };
};