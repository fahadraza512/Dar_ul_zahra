export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export interface NavItem {
  name: string;
  href: string;
}

export interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
