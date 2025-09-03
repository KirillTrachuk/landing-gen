import type { LandingData } from "@/types/landing";
import fs from "fs";
import path from "path";

export async function getLandingData(slug: string): Promise<LandingData> {
  try {
    const data = await import(`@/data/landings/${slug}.json`);
    return data.default;
  } catch (error) {
    console.error(`Failed to load landing data for ${slug}:`, error);
    const baseData = await import("@/data/templates/base.json");
    return baseData.default;
  }
}

export function getLandingSlugs(): string[] {
  try {
    const landingsDir = path.join(process.cwd(), "data", "landings");
    const files = fs.readdirSync(landingsDir);
    return files
      .filter((name) => name.endsWith(".json"))
      .map((name) => name.replace(/\.json$/, ""))
      .sort();
  } catch (error) {
    console.error("Failed to read landing slugs:", error);
    return [];
  }
}
