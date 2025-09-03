"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Benefit = {
  icon?: string | null;
  title: string;
  description: string;
};

type BenefitsProps = {
  items: Benefit[];
};

export default function Benefits({ items }: BenefitsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const cards = Array.from(
      containerRef.current.querySelectorAll("[data-card]")
    );
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        } as any,
      });
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, yPercent: 20 },
          { opacity: 1, yPercent: 0, duration: 0.6, ease: "power3.out" }
        );
      }
      tl.fromTo(
        cards,
        { opacity: 0, yPercent: 16 },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-12 md:py-16">
      <div ref={containerRef} className="flex flex-col gap-4">
        <h2
          ref={headingRef}
          className="opacity-0 motion-reduce:opacity-100 text-2xl md:text-3xl font-semibold text-center"
        >
          Переваги
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center">
          {items.map((b, idx) => (
            <div
              key={idx}
              data-card
              className="opacity-0 motion-reduce:opacity-100 flex-1 min-w-[260px] md:max-w-[320px] border border-foreground/10 rounded-xl p-5 md:p-6 bg-background/60 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-start gap-3">
                {b.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={b.icon} alt="" className="w-8 h-8" />
                ) : null}
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{b.title}</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    {b.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
