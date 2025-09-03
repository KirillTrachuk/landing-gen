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

    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      heading.style.color = theme.secondaryColor;
    });

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.color = theme.accentColor;
    });

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.style.color = theme.textColor;
      paragraph.style.fontWeight = "500"; // Робимо текст трохи жирнішим
    });

    const benefitDescriptions = document.querySelectorAll(
      "[data-benefit-description]"
    );
    benefitDescriptions.forEach((desc) => {
      desc.style.color = theme.textColor;
      desc.style.opacity = "0.9";
    });

    const testimonialQuotes = document.querySelectorAll("blockquote");
    testimonialQuotes.forEach((quote) => {
      quote.style.color = theme.textColor;
      quote.style.fontWeight = "500";
    });

    const testimonialAuthors = document.querySelectorAll("figcaption");
    testimonialAuthors.forEach((author) => {
      author.style.color = theme.secondaryColor;
      author.style.fontWeight = "600";
    });
  }, [theme]);

  return null;
}
