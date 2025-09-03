"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

type TestimonialsProps = {
  items: Testimonial[];
};

export default function Testimonials({ items }: TestimonialsProps) {
  const listRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (!listRef.current) return;
    const quotes = Array.from(listRef.current.querySelectorAll("[data-quote]"));
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: listRef.current,
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
        quotes,
        { opacity: 0, yPercent: 16 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: "power3.out",
        },
        "-=0.2"
      );
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-12 md:py-16">
      <div className="flex flex-col items-center gap-6" ref={listRef}>
        <h2
          ref={headingRef}
          className="opacity-0 motion-reduce:opacity-100 text-2xl md:text-3xl font-semibold"
        >
          Відгуки
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center">
          {items.map((t, idx) => (
            <figure
              key={idx}
              data-quote
              className="opacity-0 motion-reduce:opacity-100 flex-1 min-w-[260px] md:max-w-[360px] border border-foreground/10 rounded-xl p-5 bg-background/60 shadow-sm"
            >
              <blockquote className="text-sm md:text-base leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-3 text-xs md:text-sm text-foreground/70">
                — {t.author}
                {t.role ? `, ${t.role}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
