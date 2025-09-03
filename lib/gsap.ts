"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register on the client only once
if (typeof window !== "undefined") {
  // @ts-expect-error gsap stores plugins internally; guard double registration
  if (!gsap.core?.globals()?.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}

export { gsap, ScrollTrigger };
