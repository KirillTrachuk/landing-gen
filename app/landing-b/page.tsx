import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import Testimonials from "@/app/components/Testimonials";
import SiteFooter from "@/app/components/SiteFooter";
import { getLandingData } from "@/lib/data";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLandingData("landing-b");
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  };
}

export default async function LandingB() {
  const data = await getLandingData("landing-b");

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        ctaLabel={data.hero.ctaLabel}
      />

      <Benefits items={data.benefits} />

      <Testimonials items={data.testimonials} />

      <SiteFooter
        email={data.footer.email}
        phone={data.footer.phone}
        address={data.footer.address}
        socials={data.footer.socials}
      />
    </div>
  );
}
