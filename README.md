# Landing Generator

Проект для створення та управління маркетинговими лендінгами з можливістю генерувати сотні сторінок у межах одного проєкту.

## 🏗️ Архітектура

- **Next.js 15** з App Router та TypeScript
- **Tailwind CSS 4** для стилізації
- **GSAP** для анімацій (fade-in, scroll reveal)
- **Статичний експорт** для окремих HTML-файлів
- **JSON-шаблони** для контенту лендінгів

## 📁 Структура проекту

```
landing-gen/
├── app/
│   ├── components/          # Перевикористовувані компоненти
│   │   ├── Hero.tsx        # Головний банер
│   │   ├── Benefits.tsx    # Блок переваг
│   │   ├── Testimonials.tsx # Секція відгуків
│   │   └── SiteFooter.tsx  # Футер
│   ├── landing-a/          # Лендінг A
│   ├── landing-b/          # Лендінг B
│   └── page.tsx            # Головна сторінка
├── data/
│   ├── templates/          # Шаблони контенту
│   │   └── base.json       # Базовий шаблон
│   └── landings/           # Контент конкретних лендінгів
│       ├── landing-a.json  # Дані для лендінгу A
│       └── landing-b.json  # Дані для лендінгу B
├── lib/
│   ├── data.ts             # Утиліти для завантаження даних
│   ├── gsap.ts             # Налаштування GSAP
│   └── pixel.ts            # Facebook Pixel інтеграція
└── types/
    └── landing.ts          # TypeScript типи
```

## 🚀 Швидкий старт

### Встановлення залежностей

```bash
npm install
```

### Запуск в режимі розробки

```bash
npm run dev
```

### Збірка та експорт

```bash
npm run build
```

## ✨ Створення нового лендінгу

### 1. Створіть JSON файл з контентом

Скопіюйте `data/templates/base.json` та створіть новий файл `data/landings/your-landing.json`:

```json
{
  "hero": {
    "title": "Ваш заголовок",
    "subtitle": "Ваш підзаголовок",
    "ctaLabel": "Ваша кнопка"
  },
  "benefits": [
    {
      "title": "Перевага 1",
      "description": "Опис переваги",
      "icon": null
    }
  ],
  "testimonials": [
    {
      "quote": "Відгук клієнта",
      "author": "Ім'я",
      "role": "Посада"
    }
  ],
  "footer": {
    "email": "email@example.com",
    "phone": "+3800000000",
    "address": "Адреса",
    "socials": [
      {
        "label": "Facebook",
        "href": "https://facebook.com"
      }
    ]
  },
  "seo": {
    "title": "SEO заголовок",
    "description": "Meta опис",
    "keywords": "ключові, слова"
  }
}
```

### 2. Створіть сторінку лендінгу

Створіть `app/your-landing/page.tsx`:

```tsx
import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import Testimonials from "@/app/components/Testimonials";
import SiteFooter from "@/app/components/SiteFooter";
import { getLandingData } from "@/lib/data";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLandingData("your-landing");
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  };
}

export default async function YourLanding() {
  const data = await getLandingData("your-landing");

  return (
    <div className="max-w-5xl mx-auto px-4">
      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        ctaLabel={data.hero.ctaLabel}
      />
      <Benefits items={data.benefits} />
      <Testimonials items={data.testimonials} />
      <SiteFooter
        email={data.footer.email}
        phone={data.footer.phone}
        address={data.footer.address}
        socials={data.footer.socials}
      />
    </div>
  );
}
```

### 3. Додайте лендінг до списку

Оновіть `lib/data.ts`:

```ts
export function getLandingSlugs(): string[] {
  return ["landing-a", "landing-b", "your-landing"];
}
```

### 4. Збудуйте та експортуйте

```bash
npm run build
```

Результат: `out/your-landing.html`

## 🎨 Анімації

- **Hero**: fade-in + yPercent при вході в в'юпорт
- **Benefits/Testimonials**: scroll reveal з stagger ефектом
- **CTA**: hover scale + custom box-shadow
- **ScrollTrigger**: запуск анімацій при скролі

## 📱 Адаптивність

- **Мобільні**: 1 колонка, менші розміри
- **Планшети**: 2 колонки, середні розміри
- **Десктопи**: 3-4 колонки, повні розміри

## 🔧 Facebook Pixel

Умовна інтеграція через `lib/pixel.ts`:

- Трекінг події Lead при кліку на CTA
- Fallback для dev-режиму
- Легке вмикання через env змінні

## 📊 SEO

- Динамічні meta теги з JSON
- Структуровані дані
- Оптимізовані заголовки та описи

## 🚀 Деплой

Статичні файли з `out/` можна задеплоїти на:

- Vercel Static
- Netlify
- AWS S3 + CloudFront
- Будь-який статичний хостинг
