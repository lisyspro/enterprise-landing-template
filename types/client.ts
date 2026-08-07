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