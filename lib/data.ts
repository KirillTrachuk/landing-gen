import type { LandingData } from "@/types/landing";

export async function getLandingData(slug: string): Promise<LandingData> {
  try {
    const data = await import(`@/data/landings/${slug}.json`);
    return data.default;
  } catch (error) {
    console.error(`Failed to load landing data for ${slug}:`, error);
    // Fallback to base template
    const baseData = await import("@/data/templates/base.json");
    return baseData.default;
  }
}

export function getLandingSlugs(): string[] {
  // This would be dynamic in a real app, for now return static list
  return ["landing-a", "landing-b"];
}
