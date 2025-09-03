import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import Testimonials from "@/app/components/Testimonials";
import SiteFooter from "@/app/components/SiteFooter";
import ThemeProvider from "@/app/components/ThemeProvider";
import { getLandingData, getLandingSlugs } from "@/lib/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  const pages = getLandingSlugs();
  console.log("======", pages);
  return pages.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getLandingData(params.slug);
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  };
}

export default async function LandingPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getLandingData(params.slug);

  return (
    <>
      <ThemeProvider theme={data.theme} />
      <div className="max-w-5xl mx-auto px-4">
        {data.hero && (
          <Hero
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            ctaLabel={data.hero.ctaLabel}
            pixelId={data.hero.pixelId}
          />
        )}
        {data.benefits && <Benefits items={data.benefits} />}
        {data.testimonials && <Testimonials items={data.testimonials} />}
        {data.footer && (
          <SiteFooter
            email={data.footer.email}
            phone={data.footer.phone}
            address={data.footer.address}
            socials={data.footer.socials}
          />
        )}
      </div>
    </>
  );
}
