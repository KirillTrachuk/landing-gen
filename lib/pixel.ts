"use client";

let initializedPixelId: string | null = null;
let ReactPixel: any = null;

async function loadReactPixel() {
  if (typeof window === "undefined") return null;
  if (ReactPixel) return ReactPixel;

  try {
    const module = await import("react-facebook-pixel");
    ReactPixel = module.default;
    return ReactPixel;
  } catch (error) {
    console.warn("Failed to load react-facebook-pixel:", error);
    return null;
  }
}

export async function initPixel(pixelId: string) {
  if (typeof window === "undefined") return;
  if (initializedPixelId === pixelId) return;

  const pixel = await loadReactPixel();
  if (!pixel) return;

  try {
    pixel.init(pixelId, undefined, { autoConfig: true, debug: false });
    initializedPixelId = pixelId;
  } catch (error) {
    console.warn("Failed to initialize Facebook Pixel:", error);
  }
}

export async function trackLead() {
  if (typeof window === "undefined") return;

  const pixel = await loadReactPixel();
  if (!pixel) return;

  try {
    pixel.track("Lead", { content_name: "Hero CTA" });
  } catch (error) {
    console.warn("Failed to track lead:", error);
  }
}
