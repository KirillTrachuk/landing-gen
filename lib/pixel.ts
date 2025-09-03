declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function initPixel(pixelId?: string) {
  if (!pixelId || typeof window === "undefined") return;
  if (window.fbq) return;
  // Minimal stub for conditional usage; in real world we would inject the script tag
  // but for this assignment we simulate availability
  window.fbq = (...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("[Pixel]", ...args);
    }
  };
}

export function track(event: string, payload?: Record<string, any>) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq === "function") {
    window.fbq("track", event, payload ?? {});
  } else if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log(`[Pixel noop] ${event}`, payload ?? {});
  }
}

export function trackLead(payload?: Record<string, any>) {
  track("Lead", payload);
}
