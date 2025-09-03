"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { trackLead } from "@/lib/pixel";

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  onCtaClick?: () => void;
};

export default function Hero({
  title,
  subtitle,
  ctaLabel,
  onCtaClick,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current!,
        start: "top 80%",
        once: true,
      } as any,
    });
    if (titleRef.current) {
      timeline.fromTo(
        titleRef.current,
        { opacity: 0, yPercent: 70 },
        { opacity: 1, yPercent: 0, duration: 0.9, ease: "power3.out" }
      );
    }
    if (subtitleRef.current) {
      timeline.fromTo(
        subtitleRef.current,
        { opacity: 0, yPercent: 66 },
        { opacity: 1, yPercent: 0, duration: 0.8, ease: "power3.out" },
        "<0.2"
      );
    }
    if (ctaRef.current) {
      timeline.fromTo(
        ctaRef.current,
        { opacity: 0, yPercent: 62 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.7,
          ease: "power3.out",
          onComplete: () => {
            const el = ctaRef.current;
            if (!el) return;
            gsap.set(el, { clearProps: "transform" });
            el.classList.add("transition", "duration-400");
          },
        },
        "<0.1"
      );
    }
    return () => {
      timeline.kill();
    };
  }, []);

  const handleClick = () => {
    trackLead();
    onCtaClick?.();
  };

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex flex-col items-center justify-center text-center gap-4 py-16 md:py-24"
    >
      <h1
        ref={titleRef}
        className="opacity-0 motion-reduce:opacity-100 text-3xl md:text-5xl font-bold max-w-3xl"
      >
        {title}
      </h1>
      {subtitle ? (
        <p
          ref={subtitleRef}
          className="opacity-0 motion-reduce:opacity-100 text-base md:text-lg text-foreground/80 max-w-2xl"
        >
          {subtitle}
        </p>
      ) : null}
      <div className="flex items-center gap-3">
        <button
          ref={ctaRef}
          onClick={handleClick}
          className="opacity-0 motion-reduce:opacity-100 px-6 py-3 rounded-full bg-foreground text-background shadow-none hover:shadow-[1px_1px_10px_2px_rgba(255,255,255,0.75)] hover:scale-105 active:scale-95 cursor-pointer"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
