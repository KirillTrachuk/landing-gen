"use client";

import { useEffect } from "react";

interface ThemeProviderProps {
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

export default function ThemeProvider({ theme }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--secondary-color", theme.secondaryColor);
    root.style.setProperty("--accent-color", theme.accentColor);
    root.style.setProperty("--background-color", theme.backgroundColor);
    root.style.setProperty("--text-color", theme.textColor);

    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.textColor;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.style.backgroundColor = theme.primaryColor;
      button.style.color = theme.backgroundColor;
    });

    // Застосовуємо secondary color до заголовків
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      if (heading instanceof HTMLElement) {
        heading.style.color = theme.secondaryColor;
      }
    });

    // Застосовуємо accent color до посилань
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (link instanceof HTMLElement) {
        link.style.color = theme.accentColor;
      }
    });

    // Застосовуємо темніші кольори для параграфів
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      if (paragraph instanceof HTMLElement) {
        paragraph.style.color = theme.textColor;
        paragraph.style.fontWeight = "500";
      }
    });

    // Застосовуємо темніші кольори для описів у benefits
    const benefitDescriptions = document.querySelectorAll(
      "[data-benefit-description]"
    );
    benefitDescriptions.forEach((desc) => {
      if (desc instanceof HTMLElement) {
        desc.style.color = theme.textColor;
        desc.style.opacity = "0.9";
      }
    });

    // Застосовуємо темніші кольори для відгуків
    const testimonialQuotes = document.querySelectorAll("blockquote");
    testimonialQuotes.forEach((quote) => {
      if (quote instanceof HTMLElement) {
        quote.style.color = theme.textColor;
        quote.style.fontWeight = "500";
      }
    });

    // Застосовуємо темніші кольори для авторів відгуків
    const testimonialAuthors = document.querySelectorAll("figcaption");
    testimonialAuthors.forEach((author) => {
      if (author instanceof HTMLElement) {
        author.style.color = theme.secondaryColor;
        author.style.fontWeight = "600";
      }
    });
  }, [theme]);

  return null;
}
