export const SITE_CONFIG = {
  name: 'Dar ul Zahra',
  description: 'Educational Institution',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://darulzahra.com',
  email: 'info@darulzahra.com',
  phone: '+1234567890',
  address: {
    street: '123 Education Street',
    city: 'City Name',
    state: 'State',
    country: 'Country',
    postalCode: '12345',
  },
  social: {
    facebook: 'https://facebook.com/darulzahra',
    twitter: 'https://twitter.com/darulzahra',
    instagram: 'https://instagram.com/darulzahra',
    linkedin: 'https://linkedin.com/company/darulzahra',
  },
};

export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};
