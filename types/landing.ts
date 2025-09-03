export interface HeroData {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  pixelId?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon?: string | null;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface FooterData {
  email?: string;
  phone?: string;
  address?: string;
  socials?: SocialLink[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export interface ThemeData {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

export interface LandingData {
  hero: HeroData;
  benefits: Benefit[];
  testimonials: Testimonial[];
  footer: FooterData;
  seo: SEOData;
  theme: ThemeData;
}
