# Noah Kahan Tour Site - Replit Export

**Date:** March 14, 2026  
**Status:** Complete, ready for design tweaks  
**Live:** https://noah-kahan-tour-site.vercel.app

---

## Setup Instructions for Replit

1. Create a new **Next.js** Replit
2. Copy-paste each file below into the corresponding path
3. Click "Run" - Replit will auto-install dependencies
4. Site should load at your Replit preview URL

---

## File Structure

```
noah-kahan-tour-site/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── vercel.json
├── app/
│   ├── globals.css
│   ├── page.tsx
│   └── show/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── FieldNotesNotebook.tsx
│   ├── ParkingMap.tsx
│   ├── EntrancePhoto.tsx
│   ├── DayTimeline.tsx
│   ├── PennyPawPrint.tsx
│   ├── CoffeeRing.tsx
│   ├── MarginNote.tsx
│   ├── PennyNavigator.tsx
│   ├── TourDates.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
└── data/
    ├── tourDates.ts
    └── venueGuides.ts
```

---

## `package.json`

```json
{
  "name": "noah-kahan-tour-site",
  "version": "1.0.0",
  "description": "**Status:** Ready for SwiftBot build   **Created:** 2026-03-05   **Timeline:** MVP in 2-4 weeks, prototype in 24-48 hours",
  "main": "index.js",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@tailwindcss/postcss": "^4.2.1",
    "@types/node": "^25.3.4",
    "@types/react": "^19.2.14",
    "autoprefixer": "^10.4.27",
    "next": "^16.1.6",
    "postcss": "^8.5.8",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "tailwindcss": "^4.2.1",
    "typescript": "^5.9.3"
  }
}

```


## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```


## `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#b9dccb',
          300: '#8dc4ab',
          400: '#5fa688',
          500: '#3e8a6d',
          600: '#2d6e56',
          700: '#245846',
          800: '#1e4739',
          900: '#1a3b30',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f1ea',
          300: '#ebe4d7',
          400: '#dfd3bf',
          500: '#d1c0a3',
          600: '#b8a382',
          700: '#998463',
          800: '#7d6c52',
          900: '#665846',
        },
      },
    },
  },
  plugins: [],
};
export default config;

```


## `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

```


## `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;

```


## `vercel.json`

```json
{
  "framework": "nextjs"
}

```


## `app/globals.css`

```css
@import "tailwindcss";

/* Google Fonts - Woodblock Display + Typewriter + Handwritten */
@import url('https://fonts.googleapis.com/css2?family=Rye&family=Courier+Prime:wght@400;700&family=DM+Sans:wght@400;500;700&family=Dancing+Script:wght@400;700&display=swap');

@theme {
  /* Warm cream (album packaging, parchment) */
  --color-cream-50: #faf8f5;
  --color-cream-100: #f2ede3;
  --color-cream-200: #e8e0d1;
  
  /* Deep brown (album text, window frame) */
  --color-brown-700: #5d4e3e;
  --color-brown-800: #4a3d30;
  --color-brown-900: #3d3427;
  
  /* Warm golden glow (ink/stamp color) */
  --color-gold-400: #d9b76f;
  --color-gold-500: #d4834f;
  --color-gold-600: #b89350;
  
  /* Soft olive/brown (trees, accents) */
  --color-olive-500: #8b7355;
  --color-olive-600: #75604a;
  
  /* Fall gradient colors (warmer, more golden) */
  --color-fall-light: #f9f4ef;
  --color-fall-mid: #f0e5d8;
  --color-fall-dark: #e8d4c0;
}

/* Penny wag animation - removed (no longer needed) */

/* Penny tail wag animation - constant loop */
@keyframes tail-wag {
  0%, 100% { 
    transform: rotate(0deg) translateX(0); 
  }
  25% { 
    transform: rotate(-8deg) translateX(-2px); 
  }
  75% { 
    transform: rotate(8deg) translateX(2px); 
  }
}

.animate-tail-wag {
  animation: tail-wag 1.2s ease-in-out infinite;
}

/* Page transition animations */
@keyframes slide-in-right {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-left {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.page-transition {
  animation-duration: 250ms;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}

.slide-left {
  animation-name: slide-in-left;
}

.slide-right {
  animation-name: slide-in-right;
}

/* Paper grain texture */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}

body {
  background: linear-gradient(180deg, var(--color-fall-light) 0%, var(--color-fall-mid) 50%, var(--color-fall-dark) 100%);
  background-attachment: fixed;
  color: var(--color-brown-900);
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Typography System - Field Notes Aesthetic */
@layer utilities {
  /* Rye (Woodblock) - Display/Headers */
  .font-woodblock {
    font-family: 'Rye', serif;
    letter-spacing: 0.02em;
  }

  .font-woodblock-display {
    font-family: 'Rye', serif;
    letter-spacing: 0.01em;
    line-height: 1.15;
  }

  @media (max-width: 768px) {
    .font-woodblock-display {
      line-height: 1.2; /* Slightly more breathing room on mobile */
    }
  }

  /* Courier Prime (Typewriter) - Body text */
  .font-typewriter {
    font-family: 'Courier Prime', monospace;
    letter-spacing: 0.01em;
    line-height: 1.7; /* More readable, less cramped */
  }

  .font-typewriter-tight {
    font-family: 'Courier Prime', monospace;
    letter-spacing: 0.005em;
    line-height: 1.6;
  }

  /* Heading Hierarchy */
  .heading-notebook-title {
    font-family: 'Rye', serif;
    letter-spacing: 0.02em;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--color-brown-900);
    color: var(--color-brown-900);
  }

  @media (min-width: 768px) {
    .heading-notebook-title {
      font-size: 1.875rem;
    }
  }

  .heading-notebook-section {
    font-family: 'Courier Prime', monospace;
    font-weight: bold;
    color: var(--color-brown-900);
    margin-bottom: 0.5rem;
    font-size: 1.125rem; /* 18px */
    line-height: 1.4;
  }

  .text-notebook-body {
    font-family: 'Courier Prime', monospace;
    letter-spacing: 0.01em;
    line-height: 1.7;
    color: var(--color-brown-800);
    font-size: 1rem; /* 16px */
  }

  .text-notebook-caption {
    font-family: 'Courier Prime', monospace;
    letter-spacing: 0.005em;
    line-height: 1.6;
    color: var(--color-brown-700);
    font-size: 0.875rem; /* 14px */
  }

  /* Spacing Rhythm */
  .notebook-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem; /* space-y-6 */
  }

  .notebook-card {
    padding: 1rem;
    border-radius: 0.25rem;
  }

  .notebook-list-item {
    display: flex;
    gap: 1rem;
  }

  /* Enhanced Shadows - Warm, not digital */
  .shadow-warm {
    box-shadow: 0 4px 12px rgba(61, 52, 39, 0.15), 0 2px 4px rgba(61, 52, 39, 0.1);
  }

  .shadow-warm-lg {
    box-shadow: 0 10px 40px rgba(61, 52, 39, 0.25), 0 2px 8px rgba(61, 52, 39, 0.15);
  }
}

```


## `app/page.tsx`

```typescript
"use client";

import { useState } from "react";
import TourDates from "@/components/TourDates";
import PennyNavigator from "@/components/PennyNavigator";

export default function Home() {
  const scrollToDates = () => {
    const datesSection = document.getElementById("tour-dates");
    datesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Landing: Tour Poster Aesthetic (Designed, not image) */}
      <section className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#e8d4c0] via-[#d4a574] to-[#b88350]">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          {/* Artist Name - Woodblock Style */}
          <h1 className="font-['Rye'] text-[12vw] md:text-[120px] leading-none text-brown-900 mb-6 drop-shadow-lg" style={{
            textShadow: '3px 3px 0 rgba(61, 52, 39, 0.2)'
          }}>
            NOAH<br/>KAHAN
          </h1>
          
          {/* Tour Name */}
          <div className="mb-8 md:mb-12">
            <p className="font-['Courier_Prime'] text-xl md:text-3xl text-brown-900 uppercase tracking-[0.3em] mb-2">
              2026 Stadium Tour
            </p>
            <div className="w-32 h-1 bg-brown-900 mx-auto"></div>
          </div>
          
          {/* Tagline */}
          <p className="font-['Courier_Prime'] text-base md:text-xl text-brown-800 max-w-lg mx-auto mb-12">
            31 shows • June through August<br/>
            Your guide to every stop
          </p>
        </div>
        
        {/* Scroll CTA */}
        <button
          onClick={scrollToDates}
          className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 group flex flex-col items-center gap-3 text-brown-900 hover:text-brown-700 transition-colors z-10"
        >
          <span className="font-['Rye'] text-lg md:text-xl tracking-wider uppercase">
            Choose Your Show
          </span>
          <svg 
            className="w-8 h-8 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </button>
      </section>

      {/* Tour Dates Section */}
      <section id="tour-dates" className="min-h-screen py-16 px-4 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-['Rye'] text-brown-900 text-center mb-12">
            Tour Dates
          </h2>
          <TourDates />
        </div>
      </section>

      {/* Penny Navigator - Fixed Position */}
      <PennyNavigator onClick={scrollToDates} />
    </div>
  );
}

```


## `app/show/[slug]/page.tsx`

```typescript
import { tourDates } from "@/data/tourDates";
import { getVenueGuide } from "@/data/venueGuides";
import { notFound } from "next/navigation";
import FieldNotesNotebook from "@/components/FieldNotesNotebook";

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return tourDates.map((show) => ({
    slug: show.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = tourDates.find((s) => s.slug === slug);
  if (!show) return {};
  
  return {
    title: `${show.city}, ${show.state} - Noah Kahan Show Guide`,
    description: `Plan your day for Noah Kahan at ${show.venue} in ${show.city}, ${show.state}. Food, parking, transit, and venue tips.`,
  };
}

export default async function ShowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const show = tourDates.find((s) => s.slug === slug);
  
  if (!show) {
    notFound();
  }

  const guide = getVenueGuide(slug);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Convert guide data to notebook pages format
  const notebookPages = guide ? {
    planYourDay: `Morning: Arrive in ${show.city}\nAfternoon: Explore + grab food\nEvening: Head to venue by 6pm\nShow: Doors at 7pm, Noah at 8:30pm\nAfter: Celebrate!`,
    
    hotels: [
      { name: "Check Airbnb", distance: "Near venue", description: "Book early for best prices" },
      { name: "Check Hotels.com", distance: "Downtown area", description: "Compare rates online" },
    ],
    
    noahsPicks: guide.food.slice(0, 2).map(spot => ({
      name: spot.name,
      description: spot.cuisine,
      neighborhood: spot.location,
      distance: spot.distance,
      price: spot.price,
    })),
    
    generalEats: guide.food.slice(2).map(spot => ({
      name: spot.name,
      description: spot.cuisine,
      neighborhood: spot.location,
    })),
    
    parking: guide.parking.options.map(opt => ({
      name: opt.name,
      price: opt.price,
      walkTime: opt.distance,
      notes: opt.tips,
    })),
    
    gettingThere: {
      transit: guide.gettingThere.publicTransit.join('\n\n'),
      rideshare: guide.gettingThere.rideshare.join('\n\n'),
      walkability: guide.gettingThere.walkability,
    },
    
    venueEntrance: {
      directions: `${show.venue} main entrance`,
      gate: "Check your ticket",
      ada: "ADA entrance on ground level",
      notes: guide.parking.tips.join(' '),
    },
    
    venueTips: guide.venueTips,
  } : {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      <FieldNotesNotebook
        city={`${show.city}, ${show.state}`}
        venue={show.venue}
        date={formatDate(show.date)}
        pages={notebookPages}
      />
    </div>
  );
}

```


## `components/FieldNotesNotebook.tsx`

```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ParkingMap from "./ParkingMap";
import EntrancePhoto from "./EntrancePhoto";
import DayTimeline from "./DayTimeline";
import PennyPawPrint from "./PennyPawPrint";
import CoffeeRing from "./CoffeeRing";
import MarginNote from "./MarginNote";

interface NotebookProps {
  city: string;
  venue: string;
  date: string;
  pages: {
    planYourDay?: string;
    hotels?: Array<{ name: string; distance: string; description: string }>;
    noahsPicks?: Array<{ name: string; description: string; neighborhood: string; distance: string; price: string }>;
    generalEats?: Array<{ name: string; description: string; neighborhood: string }>;
    parking?: Array<{ name: string; price: string; walkTime: string; notes?: string }>;
    gettingThere?: { transit?: string; rideshare?: string; walkability?: string };
    venueEntrance?: { directions?: string; gate?: string; ada?: string; notes?: string };
    venueTips?: Array<string>;
  };
}

export default function FieldNotesNotebook({ city, venue, date, pages }: NotebookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Determine slide direction
  const slideDirection = currentPage > previousPage ? 'slide-left' : 'slide-right';

  const totalPages = 9;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevPage();
      } else if (e.key === "ArrowRight") {
        nextPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next page
      nextPage();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right - previous page
      prevPage();
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setPreviousPage(currentPage);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setPreviousPage(currentPage);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      {/* Back to Shows Button */}
      <Link 
        href="/"
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 flex items-center gap-2 px-4 py-2 bg-cream-50/90 backdrop-blur-sm text-brown-900 rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-200 font-typewriter text-sm md:text-base"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden md:inline">All Shows</span>
        <span className="md:hidden">Back</span>
      </Link>

      <div className="relative w-full max-w-2xl">
        {/* Notebook Container */}
        <div 
          className="relative bg-[#faf8f5] rounded-sm shadow-2xl overflow-hidden"
          style={{
            aspectRatio: "8.5 / 11",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)"
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Paper texture */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}></div>

          {/* Page Content */}
          <div className={`relative h-full p-10 md:p-12 overflow-y-auto font-typewriter max-w-[90%] md:max-w-full mx-auto page-transition ${slideDirection}`}>
            {/* Page 0: Cover */}
            {currentPage === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                {/* Dog-eared corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-[#e8e0d1] opacity-40" style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)"
                }}></div>
                
                <h1 className="font-woodblock-display text-4xl md:text-6xl text-brown-900 mb-6">{city}</h1>
                <p className="text-xl md:text-2xl text-brown-800 mb-3 font-typewriter">{venue}</p>
                <p className="text-lg text-brown-700 mb-12 font-typewriter-tight">{date}</p>
                
                {/* Penny stamp */}
                <div className="mt-auto opacity-40">
                  <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="#3d3427" strokeWidth="2" />
                    <text x="50" y="60" textAnchor="middle" fill="#3d3427" fontSize="12" fontFamily="Courier Prime">
                      PENNY
                    </text>
                  </svg>
                </div>
              </div>
            )}

            {/* Page 1: Plan Your Day */}
            {currentPage === 1 && (
              <div>
                <h2 className="heading-notebook-title">
                  Plan Your Day
                </h2>
                {/* Visual timeline */}
                <DayTimeline />
              </div>
            )}

            {/* Page 2: Hotels */}
            {currentPage === 2 && (
              <div className="relative">
                {/* Penny's paw print - subtle discovery */}
                <PennyPawPrint position="bottom-right" rotation={-12} />
                
                <h2 className="heading-notebook-title">
                  Hotels
                </h2>
                <div className="notebook-section">
                  {pages.hotels && pages.hotels.length > 0 ? (
                    pages.hotels.map((hotel, i) => (
                      <div key={i} className="border-l-4 border-gold-500 pl-4">
                        <h3 className="font-bold text-brown-900 mb-1">{hotel.name}</h3>
                        <p className="text-sm text-brown-700 mb-1">{hotel.distance}</p>
                        <p className="text-brown-800">{hotel.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-brown-700">No hotel recommendations available.</p>
                  )}
                </div>
              </div>
            )}

            {/* Page 3: Noah's Picks */}
            {currentPage === 3 && (
              <div className="relative">
                {/* Handwritten margin note */}
                <MarginNote text="Don't miss this!" position="top-right" rotation={-8} />
                
                <h2 className="heading-notebook-title">
                  Noah's Picks ⭐
                </h2>
                <div className="notebook-section">
                  {pages.noahsPicks && pages.noahsPicks.length > 0 ? (
                    pages.noahsPicks.map((pick, i) => (
                      <div key={i} className="bg-gold-500/10 border-2 border-gold-500 rounded p-4">
                        <h3 className="font-bold text-brown-900 mb-1">{pick.name}</h3>
                        <p className="text-sm text-brown-700 mb-1">
                          {pick.neighborhood} • {pick.distance} • {pick.price}
                        </p>
                        <p className="text-brown-800">{pick.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-brown-700">No personal picks for this city yet.</p>
                  )}
                </div>
              </div>
            )}

            {/* Page 4: General Eats & Meetups */}
            {currentPage === 4 && (
              <div>
                <h2 className="heading-notebook-title">
                  More Eats & Fan Spots
                </h2>
                <div className="space-y-4">
                  {pages.generalEats && pages.generalEats.length > 0 ? (
                    pages.generalEats.map((spot, i) => (
                      <div key={i} className="border-l-2 border-brown-900/30 pl-3">
                        <h3 className="font-bold text-brown-900">{spot.name}</h3>
                        <p className="text-sm text-brown-700">{spot.neighborhood}</p>
                        <p className="text-brown-800 text-sm">{spot.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-brown-700">Check local spots near the venue!</p>
                  )}
                </div>
              </div>
            )}

            {/* Page 5: Parking */}
            {currentPage === 5 && (
              <div className="relative">
                {/* Penny's paw print */}
                <PennyPawPrint position="top-left" rotation={8} size={40} />
                {/* Handwritten margin note */}
                <MarginNote text="Get here early!" position="bottom-right" rotation={4} />
                
                <h2 className="heading-notebook-title">
                  Parking
                </h2>
                
                {/* Hand-drawn parking map */}
                <ParkingMap 
                  venueName={venue}
                  parkingOptions={pages.parking || []}
                />
                
                <div className="space-y-4">
                  {pages.parking && pages.parking.length > 0 ? (
                    pages.parking.map((lot, i) => (
                      <div key={i} className="bg-cream-100 p-4 rounded">
                        <h3 className="font-bold text-brown-900 mb-1">{lot.name}</h3>
                        <div className="flex gap-4 text-sm text-brown-700 mb-2">
                          <span>{lot.price}</span>
                          <span>•</span>
                          <span>{lot.walkTime} walk</span>
                        </div>
                        {lot.notes && <p className="text-sm text-brown-800 italic">{lot.notes}</p>}
                      </div>
                    ))
                  ) : (
                    <p className="text-brown-700">Check venue website for parking info.</p>
                  )}
                </div>
              </div>
            )}

            {/* Page 6: Getting There */}
            {currentPage === 6 && (
              <div>
                <h2 className="heading-notebook-title">
                  Getting There
                </h2>
                <div className="notebook-section">
                  {pages.gettingThere?.transit && (
                    <div>
                      <h3 className="font-bold text-brown-900 mb-2">Public Transit</h3>
                      <p className="text-brown-800 whitespace-pre-line">{pages.gettingThere.transit}</p>
                    </div>
                  )}
                  {pages.gettingThere?.rideshare && (
                    <div>
                      <h3 className="font-bold text-brown-900 mb-2">Rideshare</h3>
                      <p className="text-brown-800 whitespace-pre-line">{pages.gettingThere.rideshare}</p>
                    </div>
                  )}
                  {pages.gettingThere?.walkability && (
                    <div>
                      <h3 className="font-bold text-brown-900 mb-2">Walkability</h3>
                      <p className="text-brown-800 whitespace-pre-line">{pages.gettingThere.walkability}</p>
                    </div>
                  )}
                  {!pages.gettingThere && (
                    <p className="text-brown-700">Transit info coming soon.</p>
                  )}
                </div>
              </div>
            )}

            {/* Page 7: Venue Entrance - WITH COFFEE RING! */}
            {currentPage === 7 && (
              <div className="relative">
                {/* Enhanced coffee ring stain */}
                <CoffeeRing />
                
                <h2 className="heading-notebook-title">
                  Venue Entrance
                </h2>
                
                {/* Polaroid-style entrance photo with arrow */}
                <EntrancePhoto 
                  venueName={venue}
                  gateInfo={pages.venueEntrance?.gate}
                />
                
                <div className="space-y-4">
                  {pages.venueEntrance?.directions && (
                    <div>
                      <h3 className="font-bold text-brown-900 mb-2">How to Find It</h3>
                      <p className="text-brown-800 whitespace-pre-line">{pages.venueEntrance.directions}</p>
                    </div>
                  )}
                  {pages.venueEntrance?.gate && (
                    <div>
                      <h3 className="font-bold text-brown-900 mb-2">Gate Number</h3>
                      <p className="text-brown-800">{pages.venueEntrance.gate}</p>
                    </div>
                  )}
                  {pages.venueEntrance?.ada && (
                    <div>
                      <h3 className="font-bold text-brown-900 mb-2">ADA Entrance</h3>
                      <p className="text-brown-800">{pages.venueEntrance.ada}</p>
                    </div>
                  )}
                  {pages.venueEntrance?.notes && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mt-4">
                      <p className="text-sm text-brown-800 italic">{pages.venueEntrance.notes}</p>
                    </div>
                  )}
                  {!pages.venueEntrance && (
                    <p className="text-brown-700">Check your ticket for gate information.</p>
                  )}
                </div>
              </div>
            )}

            {/* Page 8: Venue Tips (Final Page) */}
            {currentPage === 8 && (
              <div className="relative">
                {/* Penny's paw print */}
                <PennyPawPrint position="bottom-left" rotation={-18} size={50} />
                {/* Handwritten margin note */}
                <MarginNote text="You'll love it ♡" position="top-right" rotation={-6} />
                
                <h2 className="heading-notebook-title">
                  Venue Tips
                </h2>
                <div className="space-y-3">
                  {pages.venueTips && pages.venueTips.length > 0 ? (
                    pages.venueTips.map((tip, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-gold-500 font-bold">•</span>
                        <p className="text-brown-800 flex-1">{tip}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-brown-700">Enjoy the show!</p>
                  )}
                </div>
                
                {/* Closing note */}
                <div className="mt-12 pt-6 border-t border-brown-900/20 text-center">
                  <p className="text-sm text-brown-700 italic">Have an amazing time!</p>
                </div>
              </div>
            )}
          </div>

          {/* Page Navigation - Desktop Click Zones */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="hidden md:block absolute left-0 top-0 bottom-0 w-20 hover:bg-black/5 transition-colors disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Previous page"
          />
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="hidden md:block absolute right-0 top-0 bottom-0 w-20 hover:bg-black/5 transition-colors disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Next page"
          />

          {/* Page Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentPage ? 'bg-brown-900' : 'bg-brown-900/30'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Page Counter */}
        <div className="text-center mt-4 font-['Courier_Prime'] text-brown-700">
          {currentPage + 1} of {totalPages}
        </div>
      </div>
    </div>
  );
}

```


## `components/ParkingMap.tsx`

```typescript
interface ParkingMapProps {
  venueName: string;
  parkingOptions: Array<{
    name: string;
    price: string;
    walkTime: string;
    notes?: string;
  }>;
}

export default function ParkingMap({ venueName, parkingOptions }: ParkingMapProps) {
  // Only show map if we have parking data
  if (!parkingOptions || parkingOptions.length === 0) {
    return null;
  }

  // Take up to 3 parking lots for the map
  const lotsToShow = parkingOptions.slice(0, 3);

  return (
    <div className="mb-6 bg-cream-100 rounded-lg p-4 border-2 border-brown-900/20">
      <h3 className="heading-notebook-section mb-4 text-center">Parking Map</h3>
      
      <svg
        viewBox="0 0 300 300"
        className="w-full max-w-xs mx-auto"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      >
        {/* Paper background */}
        <rect x="0" y="0" width="300" height="300" fill="#faf8f5" />
        
        {/* Hand-drawn border */}
        <path
          d="M 10,10 L 290,12 L 288,290 L 12,288 Z"
          fill="none"
          stroke="#3d3427"
          strokeWidth="1.5"
          strokeDasharray="5,3"
          opacity="0.3"
        />

        {/* North arrow (top right) */}
        <g transform="translate(260, 30)">
          <path
            d="M 0,-15 L 3,5 L 0,0 L -3,5 Z"
            fill="#3d3427"
            opacity="0.6"
          />
          <text
            x="0"
            y="18"
            textAnchor="middle"
            fontSize="10"
            fontFamily="Courier Prime"
            fill="#3d3427"
            opacity="0.6"
          >
            N
          </text>
        </g>

        {/* Venue (center star) */}
        <g transform="translate(150, 120)">
          {/* Star icon */}
          <path
            d="M 0,-12 L 3,-3 L 12,-3 L 5,3 L 8,12 L 0,6 L -8,12 L -5,3 L -12,-3 L -3,-3 Z"
            fill="#d4834f"
            stroke="#3d3427"
            strokeWidth="1.5"
          />
          {/* Venue label */}
          <text
            x="0"
            y="25"
            textAnchor="middle"
            fontSize="11"
            fontFamily="Courier Prime"
            fontWeight="bold"
            fill="#3d3427"
          >
            VENUE
          </text>
        </g>

        {/* Parking Lot 1 (top left) */}
        {lotsToShow[0] && (
          <g transform="translate(60, 60)">
            {/* P icon in circle */}
            <circle cx="0" cy="0" r="18" fill="#8b7355" stroke="#3d3427" strokeWidth="2" />
            <text
              x="0"
              y="6"
              textAnchor="middle"
              fontSize="16"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#faf8f5"
            >
              P
            </text>
            {/* Label */}
            <text
              x="0"
              y="35"
              textAnchor="middle"
              fontSize="9"
              fontFamily="Courier Prime"
              fill="#3d3427"
              transform="rotate(-2, 0, 35)"
            >
              {lotsToShow[0].name.length > 15 
                ? lotsToShow[0].name.substring(0, 15) + '...' 
                : lotsToShow[0].name}
            </text>
            {lotsToShow[0].walkTime && (
              <text
                x="0"
                y="47"
                textAnchor="middle"
                fontSize="8"
                fontFamily="Courier Prime"
                fill="#5d4e3e"
                fontStyle="italic"
              >
                {lotsToShow[0].walkTime}
              </text>
            )}
            {/* Dotted path to venue */}
            <path
              d="M 18,8 Q 60,40 88,60"
              fill="none"
              stroke="#3d3427"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              opacity="0.4"
            />
          </g>
        )}

        {/* Parking Lot 2 (top right) */}
        {lotsToShow[1] && (
          <g transform="translate(240, 60)">
            <circle cx="0" cy="0" r="18" fill="#8b7355" stroke="#3d3427" strokeWidth="2" />
            <text
              x="0"
              y="6"
              textAnchor="middle"
              fontSize="16"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#faf8f5"
            >
              P
            </text>
            <text
              x="0"
              y="35"
              textAnchor="middle"
              fontSize="9"
              fontFamily="Courier Prime"
              fill="#3d3427"
              transform="rotate(2, 0, 35)"
            >
              {lotsToShow[1].name.length > 15 
                ? lotsToShow[1].name.substring(0, 15) + '...' 
                : lotsToShow[1].name}
            </text>
            {lotsToShow[1].walkTime && (
              <text
                x="0"
                y="47"
                textAnchor="middle"
                fontSize="8"
                fontFamily="Courier Prime"
                fill="#5d4e3e"
                fontStyle="italic"
              >
                {lotsToShow[1].walkTime}
              </text>
            )}
            <path
              d="M -18,8 Q -60,40 -88,60"
              fill="none"
              stroke="#3d3427"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              opacity="0.4"
            />
          </g>
        )}

        {/* Parking Lot 3 (bottom) */}
        {lotsToShow[2] && (
          <g transform="translate(150, 220)">
            <circle cx="0" cy="0" r="18" fill="#8b7355" stroke="#3d3427" strokeWidth="2" />
            <text
              x="0"
              y="6"
              textAnchor="middle"
              fontSize="16"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#faf8f5"
            >
              P
            </text>
            <text
              x="0"
              y="35"
              textAnchor="middle"
              fontSize="9"
              fontFamily="Courier Prime"
              fill="#3d3427"
              transform="rotate(-1, 0, 35)"
            >
              {lotsToShow[2].name.length > 15 
                ? lotsToShow[2].name.substring(0, 15) + '...' 
                : lotsToShow[2].name}
            </text>
            {lotsToShow[2].walkTime && (
              <text
                x="0"
                y="47"
                textAnchor="middle"
                fontSize="8"
                fontFamily="Courier Prime"
                fill="#5d4e3e"
                fontStyle="italic"
              >
                {lotsToShow[2].walkTime}
              </text>
            )}
            <path
              d="M 0,-18 L 0,-100"
              fill="none"
              stroke="#3d3427"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              opacity="0.4"
            />
          </g>
        )}

        {/* Hand-drawn "roads" - curved lines */}
        <path
          d="M 30,140 Q 80,145 150,140"
          fill="none"
          stroke="#75604a"
          strokeWidth="3"
          opacity="0.3"
        />
        <path
          d="M 150,140 Q 220,135 270,140"
          fill="none"
          stroke="#75604a"
          strokeWidth="3"
          opacity="0.3"
        />
      </svg>

      <p className="text-center text-xs text-brown-700 mt-3 font-typewriter-tight italic">
        Hand-drawn map • Not to scale
      </p>
    </div>
  );
}

```


## `components/EntrancePhoto.tsx`

```typescript
interface EntrancePhotoProps {
  venueName: string;
  gateInfo?: string;
}

export default function EntrancePhoto({ venueName, gateInfo }: EntrancePhotoProps) {
  return (
    <div className="mb-6 flex justify-center">
      {/* Polaroid-style photo frame */}
      <div 
        className="bg-white p-3 pb-8 shadow-warm-lg relative"
        style={{ 
          maxWidth: '280px',
          transform: 'rotate(-1deg)'
        }}
      >
        {/* Photo placeholder */}
        <div className="relative bg-cream-200 aspect-[4/3] flex items-center justify-center overflow-hidden">
          {/* Venue silhouette icon */}
          <svg 
            className="w-24 h-24 opacity-20" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={1}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
            />
          </svg>

          {/* Arrow overlay pointing to entrance */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 200 150"
          >
            {/* Curved arrow */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon 
                  points="0 0, 10 3, 0 6" 
                  fill="#d4834f"
                />
              </marker>
            </defs>
            
            {/* Arrow path - curves from top right to center bottom */}
            <path
              d="M 160,30 Q 140,60 110,90"
              fill="none"
              stroke="#d4834f"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
              opacity="0.9"
            />

            {/* "Main entrance" text */}
            <text
              x="165"
              y="20"
              fontSize="11"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#d4834f"
              transform="rotate(-5, 165, 20)"
            >
              Main
            </text>
            <text
              x="160"
              y="32"
              fontSize="11"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#d4834f"
              transform="rotate(-5, 160, 32)"
            >
              entrance
            </text>
          </svg>

          {/* "Photo coming soon" badge */}
          <div className="absolute bottom-2 right-2 bg-brown-900/80 text-cream-50 text-xs px-2 py-1 rounded font-typewriter-tight">
            Photo soon
          </div>
        </div>

        {/* Polaroid caption */}
        <div className="mt-3 text-center">
          <p 
            className="font-typewriter text-sm text-brown-900"
            style={{ 
              transform: 'rotate(1deg)',
              letterSpacing: '0.02em'
            }}
          >
            {gateInfo || `${venueName} entrance`}
          </p>
        </div>

        {/* Tape detail (top) */}
        <div 
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-cream-100 opacity-60"
          style={{ 
            transform: 'translateX(-50%) rotate(2deg)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </div>
  );
}

```


## `components/DayTimeline.tsx`

```typescript
interface TimelineEvent {
  time: string;
  label: string;
  icon: 'sun' | 'fork' | 'ticket' | 'music' | 'star';
}

interface DayTimelineProps {
  events?: TimelineEvent[];
}

export default function DayTimeline({ events }: DayTimelineProps) {
  // Default timeline if no events provided
  const defaultEvents: TimelineEvent[] = [
    { time: 'Morning', label: 'Arrive in city', icon: 'sun' },
    { time: 'Afternoon', label: 'Explore + grab food', icon: 'fork' },
    { time: '6:00 PM', label: 'Head to venue', icon: 'ticket' },
    { time: '7:00 PM', label: 'Doors open', icon: 'ticket' },
    { time: '8:30 PM', label: 'Noah Kahan performs', icon: 'music' },
    { time: 'After', label: 'Celebrate!', icon: 'star' },
  ];

  const timelineEvents = events || defaultEvents;

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'sun':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'fork':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        );
      case 'ticket':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        );
      case 'music':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      case 'star':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative py-4">
      {/* Vertical timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brown-900/20" 
           style={{ borderLeft: '2px dashed #3d3427', opacity: 0.3 }}
      />

      {/* Timeline events */}
      <div className="space-y-6">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative flex items-start gap-4">
            {/* Icon node */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-600 flex items-center justify-center text-brown-900">
                {getIcon(event.icon)}
              </div>
            </div>

            {/* Event content */}
            <div className="flex-1 pt-2">
              <div className="bg-cream-100 rounded-lg p-3 border-l-4 border-gold-500">
                <div className="font-bold text-brown-900 text-sm mb-1 font-typewriter">
                  {event.time}
                </div>
                <div className="text-brown-800 font-typewriter-tight text-sm">
                  {event.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-brown-700 italic font-typewriter-tight">
          Times are approximate • Plan ahead for traffic
        </p>
      </div>
    </div>
  );
}

```


## `components/PennyPawPrint.tsx`

```typescript
interface PennyPawPrintProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  rotation?: number;
  size?: number;
}

export default function PennyPawPrint({ 
  position = 'top-right', 
  rotation = -15,
  size = 45 
}: PennyPawPrintProps) {
  
  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none`}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity: 0.12,
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 120" 
        fill="none"
      >
        {/* Paw pad (bottom) */}
        <ellipse 
          cx="50" 
          cy="85" 
          rx="22" 
          ry="18" 
          fill="#3d3427"
        />
        
        {/* Toe 1 (leftmost) */}
        <ellipse 
          cx="25" 
          cy="45" 
          rx="10" 
          ry="14" 
          fill="#3d3427"
          transform="rotate(-15, 25, 45)"
        />
        
        {/* Toe 2 (left-center) */}
        <ellipse 
          cx="38" 
          cy="30" 
          rx="10" 
          ry="15" 
          fill="#3d3427"
          transform="rotate(-5, 38, 30)"
        />
        
        {/* Toe 3 (right-center) */}
        <ellipse 
          cx="62" 
          cy="30" 
          rx="10" 
          ry="15" 
          fill="#3d3427"
          transform="rotate(5, 62, 30)"
        />
        
        {/* Toe 4 (rightmost) */}
        <ellipse 
          cx="75" 
          cy="45" 
          rx="10" 
          ry="14" 
          fill="#3d3427"
          transform="rotate(15, 75, 45)"
        />
      </svg>
    </div>
  );
}

```


## `components/CoffeeRing.tsx`

```typescript
export default function CoffeeRing() {
  return (
    <div 
      className="absolute top-4 right-4 pointer-events-none"
      style={{
        width: '100px',
        height: '100px',
        transform: 'rotate(15deg)',
        opacity: 0.12,
      }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        {/* Main ring - darker outer edge */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="#6b4423"
          strokeWidth="3"
          opacity="0.8"
        />
        
        {/* Inner ring - lighter */}
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#8b6333"
          strokeWidth="2"
          opacity="0.5"
        />
        
        {/* Overlapping second ring (from cup moving slightly) */}
        <circle
          cx="48"
          cy="52"
          r="36"
          fill="none"
          stroke="#6b4423"
          strokeWidth="2.5"
          opacity="0.4"
        />
        
        {/* Drip mark 1 - top right */}
        <path
          d="M 68 42 Q 70 45 69 48"
          stroke="#6b4423"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Drip mark 2 - bottom left */}
        <path
          d="M 32 60 Q 30 63 31 66"
          stroke="#6b4423"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        
        {/* Small splatter marks */}
        <circle cx="72" cy="38" r="1.5" fill="#6b4423" opacity="0.4" />
        <circle cx="28" cy="65" r="1" fill="#6b4423" opacity="0.3" />
        <circle cx="55" cy="25" r="1" fill="#6b4423" opacity="0.35" />
        
        {/* Inner stain (coffee that seeped) */}
        <ellipse
          cx="50"
          cy="50"
          rx="28"
          ry="26"
          fill="#6b4423"
          opacity="0.08"
          style={{ filter: 'blur(3px)' }}
        />
        
        {/* Bottom lip of cup left slight impression */}
        <path
          d="M 20 50 Q 50 48 80 50"
          stroke="#6b4423"
          strokeWidth="1"
          opacity="0.25"
          fill="none"
        />
      </svg>
    </div>
  );
}

```


## `components/MarginNote.tsx`

```typescript
interface MarginNoteProps {
  text: string;
  position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  rotation?: number;
}

export default function MarginNote({ 
  text, 
  position = 'top-right',
  rotation = -5 
}: MarginNoteProps) {
  
  const positionClasses = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2',
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none select-none`}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity: 0.6,
      }}
    >
      <p 
        className="text-sm text-brown-900"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '15px',
          letterSpacing: '0.02em',
        }}
      >
        {text}
      </p>
    </div>
  );
}

```


## `components/PennyNavigator.tsx`

```typescript
"use client";

interface PennyNavigatorProps {
  onClick: () => void;
}

export default function PennyNavigator({ onClick }: PennyNavigatorProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 
                 hover:scale-105 transition-transform duration-300 
                 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded-full"
      aria-label="Navigate to tour dates"
    >
      {/* Penny - German Shepherd Line Art (based on photo reference) */}
      <svg
        width="128"
        height="128"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[160px] md:h-[160px]"
      >
        {/* Alert Left Ear - Standing Tall */}
        <path
          d="M 42 22 L 38 10 L 45 18 Z"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Alert Right Ear - Standing Tall */}
        <path
          d="M 58 22 L 62 10 L 55 18 Z"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Head - Classic GSD Shape */}
        <path
          d="M 42 22 Q 40 25 40 30 L 40 35 Q 42 38 50 40 Q 58 38 60 35 L 60 30 Q 60 25 58 22 Z"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Snout/Muzzle */}
        <path
          d="M 45 35 Q 47 40 50 41 Q 53 40 55 35"
          stroke="#3d3427"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Nose */}
        <circle cx="50" cy="41" r="2" fill="#3d3427" />
        
        {/* Eyes - Alert and Happy */}
        <circle cx="45" cy="28" r="2" fill="#3d3427" />
        <circle cx="55" cy="28" r="2" fill="#3d3427" />
        
        {/* Neck to Body */}
        <path
          d="M 44 40 L 42 48"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 56 40 L 58 48"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Body - Strong GSD Build */}
        <path
          d="M 42 48 L 38 58 L 38 70 L 42 75 L 58 75 L 62 70 L 62 58 L 58 48 Z"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Front Left Leg */}
        <path
          d="M 44 70 L 43 85 L 45 87"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Front Right Leg */}
        <path
          d="M 56 70 L 57 85 L 55 87"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Back Left Leg */}
        <path
          d="M 40 65 L 36 80 L 38 82"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Back Right Leg */}
        <path
          d="M 60 65 L 64 80 L 62 82"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Tail - Constant Wag Animation */}
        <path
          d="M 38 58 Q 28 54 24 58"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-tail-wag"
          style={{
            transformOrigin: "38px 58px"
          }}
        />
        
        {/* Tongue Out (Happy!) - Optional Detail */}
        <path
          d="M 50 41 L 50 45"
          stroke="#d4834f"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

```


## `components/TourDates.tsx`

```typescript
import Link from "next/link";
import { tourDates } from "@/data/tourDates";

export default function TourDates() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <section className="pb-16 md:pb-32 px-4 md:px-6 bg-gradient-to-b from-gold-400/40 via-olive-500/30 to-gold-500/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brown-900 mb-8 md:mb-16 text-center drop-shadow-lg">
          Shows
        </h2>

        <div className="space-y-0 border-t-2 md:border-t-4 border-gold-600 bg-gradient-to-br from-cream-50/80 to-white/70 backdrop-blur-md rounded-xl md:rounded-2xl shadow-2xl p-2 md:p-4">
          {tourDates.map((show) => (
            <div
              key={show.id}
              className="flex items-center justify-between py-3 md:py-6 px-2 md:px-4 border-b border-md:border-b-2 border-gold-500/30 hover:bg-gradient-to-r hover:from-gold-400/20 hover:to-olive-500/20 transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 md:gap-8">
                  <span className="text-sm md:text-lg font-bold text-gold-600 w-16 md:w-24 flex-shrink-0">
                    {formatDate(show.date)}
                  </span>
                  <span className="text-base md:text-2xl font-bold text-brown-900">
                    {show.city}, {show.state}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 md:gap-8 mt-1 md:mt-2">
                  <span className="w-16 md:w-24 flex-shrink-0"></span>
                  <span className="text-sm md:text-lg text-olive-600 font-medium truncate">{show.venue}</span>
                </div>
              </div>
              <Link
                href={`/show/${show.slug}`}
                className="text-sm md:text-xl font-bold text-gold-600 hover:text-gold-500 transition-colors bg-gold-400/20 px-3 md:px-6 py-2 md:py-3 rounded-md md:rounded-lg hover:bg-gold-400/30 flex-shrink-0 ml-2"
              >
                Guide →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

```


## `components/Footer.tsx`

```typescript
export default function Footer() {
  return (
    <footer className="border-t border-gold-500/30 bg-gradient-to-r from-olive-500/30 to-gold-500/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          <p className="text-sm text-olive-600 mb-4">
            Unofficial show guide for fans.
          </p>
          <p className="text-sm text-olive-500">
            Made with care for Noah Kahan fans.
          </p>
        </div>
      </div>
    </footer>
  );
}

```


## `components/Navbar.tsx`

```typescript
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gold-600 via-gold-500 to-olive-600 border-b-2 md:border-b-4 border-brown-900 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-3xl font-bold text-white drop-shadow-2xl tracking-tight">
            Noah Kahan
          </Link>
        </div>
      </div>
    </nav>
  );
}

```


## `data/tourDates.ts`

```typescript
export interface TourDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  state: string;
  ticketUrl: string;
  soldOut: boolean;
  supportingActs: string[];
  slug: string;
}

export const tourDates: TourDate[] = [
  {
    id: "1",
    date: "2026-06-11",
    venue: "Kia Center",
    city: "Orlando",
    state: "FL",
    ticketUrl: "https://link.seated.com/7eadfc59-76ad-49c2-b957-a4cd9b4838f8",
    soldOut: true,
    supportingActs: ["Gigi Perez"],
    slug: "orlando-fl-jun-11",
  },
  {
    id: "2",
    date: "2026-06-12",
    venue: "Kia Center",
    city: "Orlando",
    state: "FL",
    ticketUrl: "https://link.seated.com/83abbeca-4e8d-4fab-95d8-9be88ce7d027",
    soldOut: true,
    supportingActs: ["Gigi Perez"],
    slug: "orlando-fl-jun-12",
  },
  {
    id: "3",
    date: "2026-06-14",
    venue: "Bonnaroo Music & Arts Festival",
    city: "Manchester",
    state: "TN",
    ticketUrl: "https://link.seated.com/964b40b9-036f-4de7-955d-9c7d7de6ef5c",
    soldOut: false,
    supportingActs: [],
    slug: "manchester-tn-jun-14",
  },
  {
    id: "4",
    date: "2026-06-26",
    venue: "Citizens Bank Park",
    city: "Philadelphia",
    state: "PA",
    ticketUrl: "https://link.seated.com/f9c463fb-8eca-4996-a29e-268c2dc44cb3",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "philadelphia-pa-jun-26",
  },
  {
    id: "5",
    date: "2026-06-28",
    venue: "Rogers Stadium",
    city: "Toronto",
    state: "ON",
    ticketUrl: "https://link.seated.com/a5dc2b8b-a1d1-431f-b7bd-fce74beed4e0",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "toronto-on-jun-28",
  },
  {
    id: "6",
    date: "2026-07-01",
    venue: "Great American Ballpark",
    city: "Cincinnati",
    state: "OH",
    ticketUrl: "https://link.seated.com/cdc6c723-409f-42d3-b546-f22897a863ac",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "cincinnati-oh-jul-01",
  },
  {
    id: "7",
    date: "2026-07-03",
    venue: "PNC Park",
    city: "Pittsburgh",
    state: "PA",
    ticketUrl: "https://link.seated.com/51e4d1f1-8915-46e2-9da5-7366c0e2482c",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "pittsburgh-pa-jul-03",
  },
  {
    id: "8",
    date: "2026-07-07",
    venue: "Fenway Park",
    city: "Boston",
    state: "MA",
    ticketUrl: "https://link.seated.com/c12d0e55-91b3-49ef-9f05-848fd6bf7566",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "boston-ma-jul-07",
  },
  {
    id: "9",
    date: "2026-07-08",
    venue: "Fenway Park",
    city: "Boston",
    state: "MA",
    ticketUrl: "https://link.seated.com/f6ce16b7-ee5f-4af4-a226-85973237798b",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "boston-ma-jul-08",
  },
  {
    id: "10",
    date: "2026-07-10",
    venue: "Fenway Park",
    city: "Boston",
    state: "MA",
    ticketUrl: "https://link.seated.com/eef1df7f-2006-40c4-82df-2a5adb852c89",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "boston-ma-jul-10",
  },
  {
    id: "11",
    date: "2026-07-11",
    venue: "Fenway Park",
    city: "Boston",
    state: "MA",
    ticketUrl: "https://link.seated.com/96ec4fdc-cb80-46a8-8b4c-101c72819c27",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "boston-ma-jul-11",
  },
  {
    id: "12",
    date: "2026-07-14",
    venue: "Wrigley Field",
    city: "Chicago",
    state: "IL",
    ticketUrl: "https://link.seated.com/8bf8a239-eff2-4696-8106-dde262a56408",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "chicago-il-jul-14",
  },
  {
    id: "13",
    date: "2026-07-15",
    venue: "Wrigley Field",
    city: "Chicago",
    state: "IL",
    ticketUrl: "https://link.seated.com/b0451655-f085-45b5-a194-650919017412",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "chicago-il-jul-15",
  },
  {
    id: "14",
    date: "2026-07-18",
    venue: "Citi Field",
    city: "Queens",
    state: "NY",
    ticketUrl: "https://link.seated.com/e2f7ac0b-52e3-4061-937d-5dc56e4579ff",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "queens-ny-jul-18",
  },
  {
    id: "15",
    date: "2026-07-19",
    venue: "Citi Field",
    city: "Queens",
    state: "NY",
    ticketUrl: "https://link.seated.com/c0a787ce-51cc-45ea-9894-eb4bf1ccc72a",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "queens-ny-jul-19",
  },
  {
    id: "16",
    date: "2026-07-22",
    venue: "Nationals Park",
    city: "Washington",
    state: "DC",
    ticketUrl: "https://link.seated.com/4d5f61d6-3bd6-40e4-af39-3dcfea48e8a0",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "washington-dc-jul-22",
  },
  {
    id: "17",
    date: "2026-07-25",
    venue: "Carter-Finley Stadium",
    city: "Raleigh",
    state: "NC",
    ticketUrl: "https://link.seated.com/f4528a84-92be-403f-b56e-535f08a61b89",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "raleigh-nc-jul-25",
  },
  {
    id: "18",
    date: "2026-07-27",
    venue: "Truist Park",
    city: "Atlanta",
    state: "GA",
    ticketUrl: "https://link.seated.com/c7ff4be8-ddd1-4cba-8ffe-691461be79ad",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "atlanta-ga-jul-27",
  },
  {
    id: "19",
    date: "2026-07-30",
    venue: "Globe Life Field",
    city: "Arlington",
    state: "TX",
    ticketUrl: "https://link.seated.com/3b79aef6-d8eb-4020-b92b-d45568dc2073",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "arlington-tx-jul-30",
  },
  {
    id: "20",
    date: "2026-08-02",
    venue: "Busch Stadium",
    city: "St. Louis",
    state: "MO",
    ticketUrl: "https://link.seated.com/e43d2c53-5914-45db-93bb-5424ed25dcb2",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "st-louis-mo-aug-02",
  },
  {
    id: "21",
    date: "2026-08-05",
    venue: "Target Field",
    city: "Minneapolis",
    state: "MN",
    ticketUrl: "https://link.seated.com/072b5954-c003-44bb-ab84-f3f7809cb1ac",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "minneapolis-mn-aug-05",
  },
  {
    id: "22",
    date: "2026-08-08",
    venue: "Coors Field",
    city: "Denver",
    state: "CO",
    ticketUrl: "https://link.seated.com/07123afd-1e08-4f30-94a3-71c5d130316e",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "denver-co-aug-08",
  },
  {
    id: "23",
    date: "2026-08-09",
    venue: "Coors Field",
    city: "Denver",
    state: "CO",
    ticketUrl: "https://link.seated.com/d276c620-746a-4cf6-818e-fc007baa0b8b",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "denver-co-aug-09",
  },
  {
    id: "24",
    date: "2026-08-15",
    venue: "Rose Bowl Stadium",
    city: "Pasadena",
    state: "CA",
    ticketUrl: "https://link.seated.com/867d60a6-9532-43eb-9635-50733a79ff6c",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "pasadena-ca-aug-15",
  },
  {
    id: "25",
    date: "2026-08-17",
    venue: "Petco Park",
    city: "San Diego",
    state: "CA",
    ticketUrl: "https://link.seated.com/99027849-36b5-44ff-bedf-8a30e4b5ba99",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "san-diego-ca-aug-17",
  },
  {
    id: "26",
    date: "2026-08-19",
    venue: "Chase Field",
    city: "Phoenix",
    state: "AZ",
    ticketUrl: "https://link.seated.com/5793a3e2-1f55-4928-ba75-1abe1a81e5d7",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "phoenix-az-aug-19",
  },
  {
    id: "27",
    date: "2026-08-21",
    venue: "Oracle Park",
    city: "San Francisco",
    state: "CA",
    ticketUrl: "https://link.seated.com/4ad7400e-6b97-4632-912d-a9110d51e9da",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "san-francisco-ca-aug-21",
  },
  {
    id: "28",
    date: "2026-08-25",
    venue: "America First Field",
    city: "Sandy",
    state: "UT",
    ticketUrl: "https://link.seated.com/b71d75b6-c5c6-4dfe-91ed-be3d7f5a58a4",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "sandy-ut-aug-25",
  },
  {
    id: "29",
    date: "2026-08-28",
    venue: "BC Place",
    city: "Vancouver",
    state: "BC",
    ticketUrl: "https://link.seated.com/5a573317-03f2-48c8-82de-c653e9d00fe0",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "vancouver-bc-aug-28",
  },
  {
    id: "30",
    date: "2026-08-30",
    venue: "T-Mobile Park",
    city: "Seattle",
    state: "WA",
    ticketUrl: "https://link.seated.com/3122c573-0955-4eee-96e5-60206a8b6691",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "seattle-wa-aug-30",
  },
  {
    id: "31",
    date: "2026-08-31",
    venue: "T-Mobile Park",
    city: "Seattle",
    state: "WA",
    ticketUrl: "https://link.seated.com/0afdb7e7-376d-4e82-8fb7-8db8244aa8b5",
    soldOut: true,
    supportingActs: ["Gigi Perez", "Annabelle Dinda"],
    slug: "seattle-wa-aug-31",
  },
];

```


## `data/venueGuides.ts`

```typescript
export interface VenueGuide {
  slug: string;
  city: string;
  state: string;
  venue: string;
  
  // Food (2-3 spots near venue)
  food: Array<{
    name: string;
    cuisine: string;
    location: string;
    distance: string;
    time: string;
    price: string;
  }>;
  
  // Parking
  parking: {
    options: Array<{
      name: string;
      location: string;
      price: string;
      distance: string;
      tips?: string;
    }>;
    tips: string[];
  };
  
  // Getting There
  gettingThere: {
    publicTransit: string[];
    rideshare: string[];
    walkability: string;
  };
  
  // Venue Tips
  venueTips: string[];
}

export const venueGuides: Record<string, VenueGuide> = {
  "boston-ma-jul-07": {
    slug: "boston-ma-jul-07",
    city: "Boston",
    state: "MA",
    venue: "Fenway Park",
    
    food: [
      {
        name: "Eastern Standard",
        cuisine: "French Brasserie",
        location: "Kenmore Square",
        distance: "0.2 mi",
        time: "4 min walk",
        price: "$$$",
      },
      {
        name: "Island Creek Oyster Bar",
        cuisine: "Seafood",
        location: "Kenmore Square",
        distance: "0.2 mi",
        time: "4 min walk",
        price: "$$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Fenway Park Official Lots",
          location: "Adjacent to stadium",
          price: "$50-70",
          distance: "Adjacent",
          tips: "Book online in advance - sells out fast",
        },
        {
          name: "Kenmore Square Garages",
          location: "Kenmore Square",
          price: "$30-40",
          distance: "0.3 mi",
          tips: "10 min walk, cheaper alternative",
        },
      ],
      tips: [
        "Green Line (T) to Kenmore is easiest - skip the parking stress",
        "Arrive 2-3 hours early if driving",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "Green Line (B, C, D) to Kenmore Station - 5 min walk to Fenway",
        "Commuter Rail to Yawkey/Lansdowne - right at the park",
      ],
      rideshare: [
        "Drop-off on Lansdowne Street or Brookline Avenue",
        "After show: walk 10 min toward Kenmore to avoid surge pricing",
      ],
      walkability: "Very walkable from Back Bay, Fenway, and Kenmore neighborhoods",
    },
    
    venueTips: [
      "Doors open 90 minutes before showtime",
      "Clear bag policy enforced - small bags only",
      "Fenway seats are tight and historic - not the most comfortable",
      "Weather can change - bring a light jacket even in summer",
      "No re-entry once you leave",
      "Bathrooms get crowded - go before the show starts",
    ],
  },

  "chicago-il-jul-14": {
    slug: "chicago-il-jul-14",
    city: "Chicago",
    state: "IL",
    venue: "Wrigley Field",
    
    food: [
      {
        name: "The Cubby Bear",
        cuisine: "American, Sports Bar",
        location: "Across from Wrigley",
        distance: "0 mi",
        time: "1 min walk",
        price: "$$",
      },
      {
        name: "Murphy's Bleachers",
        cuisine: "American, Bar Food",
        location: "Wrigleyville",
        distance: "0.1 mi",
        time: "2 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Wrigley Field Official Parking",
          location: "Adjacent lots",
          price: "$50-70",
          distance: "Adjacent",
          tips: "Book in advance, sells out quickly",
        },
        {
          name: "Boystown Parking Garages",
          location: "Halsted & Broadway",
          price: "$30-40",
          distance: "0.8 mi",
          tips: "15 min walk, cheaper alternative",
        },
      ],
      tips: [
        "CTA Red Line to Addison is easiest (no parking stress)",
        "Arrive 2-3 hours early if driving",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "CTA Red Line to Addison - right at Wrigley",
        "CTA Brown Line to Southport - 10 min walk",
      ],
      rideshare: [
        "Drop-off on Clark Street or Sheffield Avenue",
        "Avoid Addison Street (closed on event days)",
        "After show: walk a few blocks before ordering to avoid surge",
      ],
      walkability: "Very walkable from Lakeview, Lincoln Park, and Wicker Park",
    },
    
    venueTips: [
      "Wrigley is iconic but old - tight seats, narrow concourses",
      "Weather can change fast - bring layers (Chicago summers are unpredictable)",
      "Gates open 90 minutes before showtime",
      "Clear bag policy in effect",
      "The L (Red Line) is the easiest way - skip the parking hassle",
      "Explore the neighborhood before the show - it's part of the experience",
    ],
  },

  "queens-ny-jul-18": {
    slug: "queens-ny-jul-18",
    city: "Queens",
    state: "NY",
    venue: "Citi Field",
    
    food: [
      {
        name: "Flushing Chinatown",
        cuisine: "Chinese, Asian",
        location: "Downtown Flushing",
        distance: "0.5 mi",
        time: "10 min walk / 5 min subway",
        price: "$",
      },
      {
        name: "Mu Ramen",
        cuisine: "Ramen",
        location: "Long Island City",
        distance: "3 mi",
        time: "15 min subway",
        price: "$$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Citi Field Official Parking",
          location: "Adjacent lots",
          price: "$35-50",
          distance: "Adjacent",
          tips: "Book online in advance",
        },
        {
          name: "Flushing Parking Garages",
          location: "Downtown Flushing",
          price: "$20-30",
          distance: "0.5 mi",
          tips: "15 min walk, cheaper alternative",
        },
      ],
      tips: [
        "Honestly, just take the 7 train - parking in NYC is a nightmare",
        "If you must drive, book official parking in advance",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "7 train to Mets-Willets Point (direct to Citi Field)",
        "LIRR to Mets-Willets Point from Penn Station",
        "Best option by far - driving is a headache",
      ],
      rideshare: [
        "Drop-off at Citi Field main entrance",
        "Expect surge pricing",
        "After show: walk toward Roosevelt Ave for better rates",
      ],
      walkability: "Not walkable from Manhattan - take the train",
    },
    
    venueTips: [
      "Citi Field is modern and spacious - much better than old Shea",
      "The 7 train is PACKED after the show - wait 15-20 min or walk to next stop",
      "Explore Flushing for incredible food before or after",
      "Clear bag policy in effect",
      "NYC in July is HOT - hydrate and dress light",
      "This is Queens - embrace the diversity and incredible food scene",
    ],
  },

  "seattle-wa-aug-30": {
    slug: "seattle-wa-aug-30",
    city: "Seattle",
    state: "WA",
    venue: "T-Mobile Park",
    
    food: [
      {
        name: "Pyramid Alehouse",
        cuisine: "American, Beer",
        location: "SODO (near T-Mobile Park)",
        distance: "0.2 mi",
        time: "4 min walk",
        price: "$$",
      },
      {
        name: "Uwajimaya Food Court",
        cuisine: "Asian",
        location: "Chinatown-International District",
        distance: "0.5 mi",
        time: "10 min walk",
        price: "$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "T-Mobile Park Official Parking",
          location: "Adjacent garages",
          price: "$40-60",
          distance: "Adjacent",
          tips: "Book in advance online",
        },
        {
          name: "Pioneer Square Garages",
          location: "Pioneer Square",
          price: "$25-35",
          distance: "0.5 mi",
          tips: "10 min walk, cheaper alternative",
        },
      ],
      tips: [
        "Light rail to Stadium Station is easiest",
        "Seattle traffic is bad - avoid driving if possible",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "Link Light Rail to Stadium Station (easiest option)",
        "Sound Transit from suburbs",
        "Multiple bus routes along 1st Avenue",
      ],
      rideshare: [
        "Drop-off on 1st Avenue S or Royal Brougham Way",
        "Expect surge pricing after show",
        "Walk a few blocks north toward Pioneer Square for better rates",
      ],
      walkability: "Walkable from Pioneer Square and downtown",
    },
    
    venueTips: [
      "T-Mobile Park has a retractable roof - August in Seattle can be rainy OR perfect",
      "The light rail is BY FAR the easiest way to get there",
      "Explore Pioneer Square before the show - cool neighborhood",
      "Clear bag policy in effect",
      "Seattle in late August is peak summer - usually beautiful weather",
      "Bring a light jacket anyway - Seattle weather is unpredictable",
    ],
  },

  // ORLANDO - Kia Center (Night 1)
  "orlando-fl-jun-11": {
    slug: "orlando-fl-jun-11",
    city: "Orlando",
    state: "FL",
    venue: "Kia Center",
    
    food: [
      {
        name: "Se7en Bites",
        cuisine: "Southern Comfort Food",
        location: "Milk District",
        distance: "3 mi",
        time: "10 min drive",
        price: "$$",
      },
      {
        name: "The Stubborn Mule",
        cuisine: "American, Craft Beer",
        location: "Downtown Orlando",
        distance: "0.3 mi",
        time: "6 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Kia Center Official Garages",
          location: "Adjacent to arena",
          price: "$30-40",
          distance: "Adjacent",
          tips: "Book online in advance",
        },
        {
          name: "Church Street Garages",
          location: "Downtown Orlando",
          price: "$15-25",
          distance: "0.4 mi",
          tips: "10 min walk, cheaper option",
        },
      ],
      tips: [
        "SunRail to Church Street Station is easy",
        "Arrive 2 hours early for downtown parking",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "SunRail to Church Street Station - 5 min walk",
        "Lynx bus routes to downtown Orlando",
      ],
      rideshare: [
        "Drop-off on Church Street or Hughey Avenue",
        "After show: walk toward Lake Eola to avoid surge",
      ],
      walkability: "Walkable from downtown Orlando",
    },
    
    venueTips: [
      "Kia Center is modern and comfortable",
      "Orlando in June is HOT and humid - dress light",
      "Clear bag policy enforced",
      "Arrive early to explore downtown",
      "AC is strong inside - bring a light layer",
    ],
  },

  // Manchester TN -Bonnaroo
  "manchester-tn-jun-14": {
    slug: "manchester-tn-jun-14",
    city: "Manchester",
    state: "TN",
    venue: "Bonnaroo Music & Arts Festival",
    
    food: [
      {
        name: "Food Vendors at Bonnaroo",
        cuisine: "Festival Food",
        location: "On festival grounds",
        distance: "On-site",
        time: "On festival grounds",
        price: "$$",
      },
      {
        name: "Arts Center of Cannon County Cafe",
        cuisine: "Southern, Cafe",
        location: "Woodbury (nearby town)",
        distance: "10 mi",
        time: "15 min drive",
        price: "$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Bonnaroo Festival Parking",
          location: "Great Stage Park",
          price: "Included with ticket",
          distance: "Adjacent",
          tips: "Follow festival parking directions",
        },
        {
          name: "Overflow Parking",
          location: "Designated festival lots",
          price: "Included",
          distance: "Varies",
          tips: "Shuttle buses run to festival entrance",
        },
      ],
      tips: [
        "Parking is included with festival admission",
        "Arrive early to avoid long entry lines",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "No public transit - festival is in rural Tennessee",
        "Organized shuttle services from Nashville available",
      ],
      rideshare: [
        "Limited rideshare availability in rural area",
        "Festival offers official rideshare lots",
      ],
      walkability: "Not walkable - festival is on farmland",
    },
    
    venueTips: [
      "This is a full music festival - Noah is one of many acts",
      "June in Tennessee is hot - bring sunscreen and water",
      "Festival camping available",
      "Check Bonnaroo app for set times",
      "Wear comfortable shoes - lots of walking",
    ],
  },

  // Philadelphia - Citizens Bank Park
  "philadelphia-pa-jun-26": {
    slug: "philadelphia-pa-jun-26",
    city: "Philadelphia",
    state: "PA",
    venue: "Citizens Bank Park",
    
    food: [
      {
        name: "Xfinity Live!",
        cuisine: "American, Sports Bar",
        location: "Sports Complex",
        distance: "0.2 mi",
        time: "4 min walk",
        price: "$$",
      },
      {
        name: "Tony Luke's",
        cuisine: "Cheesesteaks",
        location: "South Philly",
        distance: "1.5 mi",
        time: "8 min drive",
        price: "$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Citizens Bank Park Lots",
          location: "South Philadelphia Sports Complex",
          price: "$30-50",
          distance: "Adjacent",
          tips: "Book online - lots fill up fast",
        },
        {
          name: "Jetro Parking",
          location: "Pattison Avenue",
          price: "$20-30",
          distance: "0.3 mi",
          tips: "10 min walk, independent lot",
        },
      ],
      tips: [
        "Broad Street Line subway to AT&T Station is easiest",
        "Arrive 2-3 hours early if driving",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "SEPTA Broad Street Line to AT&T Station - right at the stadium",
        "Multiple bus routes to the Sports Complex",
      ],
      rideshare: [
        "Drop-off on Pattison Avenue",
        "After show: walk toward 11th Street for better rates",
      ],
      walkability: "Not walkable from Center City - take the subway",
    },
    
    venueTips: [
      "Citizens Bank Park is modern and spacious",
      "Get a Philly cheesesteak before the show",
      "Clear bag policy in effect",
      "June in Philly can be hot - dress accordingly",
      "The subway is BY FAR the easiest way",
    ],
  },

  // Toronto - Rogers Centre
  "toronto-on-jun-28": {
    slug: "toronto-on-jun-28",
    city: "Toronto",
    state: "ON",
    venue: "Rogers Stadium",
    
    food: [
      {
        name: "Real Sports Bar & Grill",
        cuisine: "American, Sports Bar",
        location: "Maple Leaf Square",
        distance: "0.3 mi",
        time: "6 min walk",
        price: "$$$",
      },
      {
        name: "Pai Northern Thai Kitchen",
        cuisine: "Thai",
        location: "Entertainment District",
        distance: "0.8 mi",
        time: "15 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Rogers Centre Parking",
          location: "Under the stadium",
          price: "CAD $35-50",
          distance: "Adjacent",
          tips: "Book online in advance",
        },
        {
          name: "Green P Parking",
          location: "Entertainment District",
          price: "CAD $20-30",
          distance: "0.5 mi",
          tips: "10 min walk, city-run garages",
        },
      ],
      tips: [
        "TTC Union Station is right at Rogers Centre",
        "Toronto traffic is heavy - take transit",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "TTC Union Station - directly connected to Rogers Centre",
        "GO Transit from suburbs terminates at Union",
      ],
      rideshare: [
        "Drop-off on Bremner Boulevard or Front Street",
        "After show: walk to King Street for better availability",
      ],
      walkability: "Very walkable from downtown Toronto",
    },
    
    venueTips: [
      "Rogers Centre has a retractable roof",
      "June in Toronto is beautiful - usually mild weather",
      "Arrive early to explore the Harbourfront",
      "Clear bag policy in effect",
      "TTC is the easiest option by far",
    ],
  },

  // Cincinnati - Great American Ballpark
  "cincinnati-oh-jul-01": {
    slug: "cincinnati-oh-jul-01",
    city: "Cincinnati",
    state: "OH",
    venue: "Great American Ballpark",
    
    food: [
      {
        name: "Moerlein Lager House",
        cuisine: "American, Beer",
        location: "The Banks (riverfront)",
        distance: "0.1 mi",
        time: "2 min walk",
        price: "$$",
      },
      {
        name: "Skyline Chili",
        cuisine: "Cincinnati Chili",
        location: "Downtown (multiple locations)",
        distance: "0.3 mi",
        time: "6 min walk",
        price: "$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Great American Ballpark Lots",
          location: "The Banks area",
          price: "$20-30",
          distance: "Adjacent",
          tips: "Book online for guaranteed spot",
        },
        {
          name: "Fountain Square Garages",
          location: "Downtown Cincinnati",
          price: "$10-20",
          distance: "0.6 mi",
          tips: "15 min walk, cheaper option",
        },
      ],
      tips: [
        "Metro bus to Government Square is convenient",
        "The Banks area is very walkable",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "Metro bus routes to Government Square - 5 min walk to stadium",
        "Cincinnati Bell Connector streetcar to The Banks",
      ],
      rideshare: [
        "Drop-off on Joe Nuxhall Way",
        "After show: walk toward Fountain Square for better rates",
      ],
      walkability: "Walkable from downtown Cincinnati",
    },
    
    venueTips: [
      "Great American Ballpark sits right on the Ohio River",
      "Try Cincinnati-style chili before the show",
      "July in Cincinnati is hot and humid",
      "Clear bag policy enforced",
      "Beautiful riverfront views from the stadium",
    ],
  },

  // Pittsburgh - PNC Park
  "pittsburgh-pa-jul-03": {
    slug: "pittsburgh-pa-jul-03",
    city: "Pittsburgh",
    state: "PA",
    venue: "PNC Park",
    
    food: [
      {
        name: "Primanti Bros.",
        cuisine: "Pittsburgh Sandwiches",
        location: "Strip District",
        distance: "1.2 mi",
        time: "8 min drive / 25 min walk",
        price: "$",
      },
      {
        name: "McFadden's Restaurant & Saloon",
        cuisine: "American, Sports Bar",
        location: "North Shore",
        distance: "0.2 mi",
        time: "4 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "PNC Park North Shore Lots",
          location: "North Shore",
          price: "$25-40",
          distance: "Adjacent",
          tips: "Book online in advance",
        },
        {
          name: "Golden Triangle Garages",
          location: "Downtown Pittsburgh",
          price: "$15-25",
          distance: "0.8 mi",
          tips: "15 min walk across bridge",
        },
      ],
      tips: [
        "T Light Rail to North Side Station is easiest",
        "Walk across Roberto Clemente Bridge (pedestrian-only on event days)",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "T Light Rail to North Side Station or Allegheny Station",
        "Multiple bus routes to North Shore",
      ],
      rideshare: [
        "Drop-off on General Robinson Street",
        "After show: walk across bridge to downtown for better rates",
      ],
      walkability: "Walkable from downtown via Roberto Clemente Bridge",
    },
    
    venueTips: [
      "PNC Park has the best views in baseball - stunning Pittsburgh skyline",
      "Roberto Clemente Bridge closes to cars on game days - walk across!",
      "July 4th weekend - expect fireworks after the show",
      "Clear bag policy in effect",
      "North Shore is a great pre-show area",
    ],
  },

  // Washington DC - Nationals Park
  "washington-dc-jul-22": {
    slug: "washington-dc-jul-22",
    city: "Washington",
    state: "DC",
    venue: "Nationals Park",
    
    food: [
      {
        name: "Bluejacket Brewery",
        cuisine: "American, Craft Beer",
        location: "Navy Yard",
        distance: "0.3 mi",
        time: "6 min walk",
        price: "$$",
      },
      {
        name: "Osteria Morini",
        cuisine: "Italian",
        location: "Navy Yard",
        distance: "0.2 mi",
        time: "4 min walk",
        price: "$$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Nationals Park Parking Lots",
          location: "Navy Yard area",
          price: "$30-45",
          distance: "Adjacent",
          tips: "Book online for guaranteed spot",
        },
        {
          name: "L'Enfant Plaza Garages",
          location: "Southwest DC",
          price: "$15-25",
          distance: "1 mi",
          tips: "15 min walk or short Metro ride",
        },
      ],
      tips: [
        "Metro Green Line to Navy Yard station is easiest",
        "DC traffic is terrible - take Metro",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "Metro Green Line to Navy Yard-Ballpark station - right at the stadium",
        "Multiple bus routes to Navy Yard",
      ],
      rideshare: [
        "Drop-off on Half Street SE",
        "After show: walk toward Capitol Hill for better rates",
      ],
      walkability: "Walkable from Capitol Hill",
    },
    
    venueTips: [
      "Nationals Park is modern and well-designed",
      "Navy Yard has lots of restaurants and bars",
      "July in DC is HOT and humid - dress light",
      "Clear bag policy enforced",
      "Metro is by far the easiest option",
    ],
  },

  // Raleigh - Carter-Finley Stadium
  "raleigh-nc-jul-25": {
    slug: "raleigh-nc-jul-25",
    city: "Raleigh",
    state: "NC",
    venue: "Carter-Finley Stadium",
    
    food: [
      {
        name: "The Pit",
        cuisine: "BBQ",
        location: "Downtown Raleigh",
        distance: "4 mi",
        time: "12 min drive",
        price: "$$",
      },
      {
        name: "Backyard Bistro",
        cuisine: "American",
        location: "Near NC State",
        distance: "1 mi",
        time: "5 min drive",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Carter-Finley Stadium Lots",
          location: "NC State campus",
          price: "$20-30",
          distance: "Adjacent",
          tips: "Free parking in some NC State lots",
        },
        {
          name: "Centennial Campus Parking",
          location: "NC State Centennial Campus",
          price: "Free-$10",
          distance: "1 mi",
          tips: "Shuttle or walk to stadium",
        },
      ],
      tips: [
        "No direct public transit to stadium",
        "Rideshare is popular for Carter-Finley events",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "GoRaleigh bus Route 7 stops near campus",
        "Limited service - driving or rideshare recommended",
      ],
      rideshare: [
        "Drop-off on Trinity Road",
        "After show: walk toward Hillsborough Street for easier pickup",
      ],
      walkability: "Not walkable from downtown Raleigh",
    },
    
    venueTips: [
      "Carter-Finley is NC State's football stadium - big outdoor venue",
      "July in North Carolina is HOT - bring sunscreen and water",
      "Gates usually open 2 hours before showtime",
      "No bag size restrictions for concerts (check event page)",
      "Tailgating culture - fans gather early",
    ],
  },

  // Atlanta - Truist Park
  "atlanta-ga-jul-27": {
    slug: "atlanta-ga-jul-27",
    city: "Atlanta",
    state: "GA",
    venue: "Truist Park",
    
    food: [
      {
        name: "The Battery Atlanta",
        cuisine: "Mixed (entertainment district)",
        location: "Adjacent to stadium",
        distance: "0 mi",
        time: "Connected to stadium",
        price: "$$-$$$",
      },
      {
        name: "Terrapin Taproom",
        cuisine: "American, Craft Beer",
        location: "The Battery",
        distance: "0.1 mi",
        time: "2 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Truist Park Official Parking",
          location: "The Battery / stadium lots",
          price: "$30-50",
          distance: "Adjacent",
          tips: "Book online - very limited availability",
        },
        {
          name: "SunTrust Park Deck",
          location: "The Battery",
          price: "$40-60",
          distance: "Adjacent",
          tips: "Covered parking, convenient",
        },
      ],
      tips: [
        "Uber/Lyft is extremely popular for Truist Park",
        "No MARTA station nearby - driving or rideshare only",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "No direct MARTA access",
        "Shuttle buses from Arts Center and H.E. Holmes stations",
      ],
      rideshare: [
        "Drop-off at The Battery Atlanta",
        "After show: expect surge pricing - walk to side streets",
      ],
      walkability: "Not walkable from Atlanta proper - it's in Cobb County",
    },
    
    venueTips: [
      "Truist Park is modern and beautiful",
      "The Battery Atlanta has tons of restaurants and bars",
      "July in Atlanta is HOT and humid",
      "Arrive early to explore The Battery",
      "Clear bag policy enforced",
    ],
  },

  // Arlington TX - Globe Life Field
  "arlington-tx-jul-30": {
    slug: "arlington-tx-jul-30",
    city: "Arlington",
    state: "TX",
    venue: "Globe Life Field",
    
    food: [
      {
        name: "Texas Live!",
        cuisine: "Mixed (entertainment district)",
        location: "Adjacent to stadium",
        distance: "0 mi",
        time: "Connected to stadium",
        price: "$$",
      },
      {
        name: "The Live! Lounge",
        cuisine: "American, Bar",
        location: "Texas Live!",
        distance: "0.1 mi",
        time: "2 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Globe Life Field Official Parking",
          location: "Arlington Entertainment District",
          price: "$30-50",
          distance: "Adjacent",
          tips: "Book online in advance",
        },
        {
          name: "Lot J (Six Flags)",
          location: "Near Six Flags",
          price: "$20-30",
          distance: "0.5 mi",
          tips: "Shuttle to stadium available",
        },
      ],
      tips: [
        "No public transit in Arlington - must drive or rideshare",
        "Texas Live! is the pre-show destination",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "No public transit to Arlington",
        "TEXRail from Fort Worth stops in nearby Grapevine",
      ],
      rideshare: [
        "Drop-off at Texas Live! plaza",
        "After show: expect heavy surge pricing",
      ],
      walkability: "Not walkable - car-dependent area",
    },
    
    venueTips: [
      "Globe Life Field has a retractable roof and AC!",
      "July in Texas is BRUTALLY hot - but stadium is climate-controlled",
      "Texas Live! entertainment district is great for pre-show",
      "Clear bag policy in effect",
      "Newest MLB stadium - very modern",
    ],
  },

  // St. Louis - Busch Stadium
  "st-louis-mo-aug-02": {
    slug: "st-louis-mo-aug-02",
    city: "St. Louis",
    state: "MO",
    venue: "Busch Stadium",
    
    food: [
      {
        name: "Ballpark Village",
        cuisine: "Mixed (sports entertainment)",
        location: "Adjacent to stadium",
        distance: "0 mi",
        time: "Connected to stadium",
        price: "$$",
      },
      {
        name: "Pappy's Smokehouse",
        cuisine: "BBQ",
        location: "Midtown",
        distance: "1.5 mi",
        time: "10 min drive",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Busch Stadium Garages",
          location: "Downtown St. Louis",
          price: "$25-40",
          distance: "Adjacent",
          tips: "Book online for best rates",
        },
        {
          name: "Laclede's Landing Lots",
          location: "North of stadium",
          price: "$15-25",
          distance: "0.5 mi",
          tips: "10 min walk, cheaper option",
        },
      ],
      tips: [
        "MetroLink to Stadium or Civic Center stations",
        "Downtown St. Louis is very walkable",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "MetroLink Red/Blue Lines to Stadium station - right at Busch",
        "Multiple MetroBus routes to downtown",
      ],
      rideshare: [
        "Drop-off on Clark Avenue or 8th Street",
        "After show: walk toward Ballpark Village for easier pickup",
      ],
      walkability: "Very walkable from downtown St. Louis",
    },
    
    venueTips: [
      "Busch Stadium is iconic - beautiful downtown location",
      "Ballpark Village is the pre-show meetup spot",
      "August in St. Louis is hot and humid",
      "Gateway Arch is visible from the stadium",
      "Clear bag policy in effect",
    ],
  },

  // Minneapolis - Target Field
  "minneapolis-mn-aug-05": {
    slug: "minneapolis-mn-aug-05",
    city: "Minneapolis",
    state: "MN",
    venue: "Target Field",
    
    food: [
      {
        name: "Fulton Brewery",
        cuisine: "Craft Beer, Taproom",
        location: "North Loop",
        distance: "0.8 mi",
        time: "15 min walk",
        price: "$$",
      },
      {
        name: "The Local",
        cuisine: "Irish Pub",
        location: "Downtown Minneapolis",
        distance: "0.4 mi",
        time: "8 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Target Field Ramps",
          location: "Adjacent to stadium",
          price: "$25-40",
          distance: "Adjacent",
          tips: "Book online in advance",
        },
        {
          name: "North Loop Parking",
          location: "North Loop neighborhood",
          price: "$15-25",
          distance: "0.6 mi",
          tips: "15 min walk, explore cool neighborhood",
        },
      ],
      tips: [
        "Metro Light Rail to Target Field station is easiest",
        "North Loop area is great for pre-show exploring",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "Metro Green Line or Blue Line to Target Field Station",
        "Multiple bus routes to downtown Minneapolis",
      ],
      rideshare: [
        "Drop-off on 5th Street N",
        "After show: walk toward North Loop for better rates",
      ],
      walkability: "Very walkable from downtown and North Loop",
    },
    
    venueTips: [
      "Target Field is one of the most beautiful ballparks",
      "North Loop neighborhood has great bars and restaurants",
      "August in Minneapolis is usually perfect weather",
      "Clear bag policy in effect",
      "Light rail is the easiest option",
    ],
  },

  // Denver - Coors Field
  "denver-co-aug-08": {
    slug: "denver-co-aug-08",
    city: "Denver",
    state: "CO",
    venue: "Coors Field",
    
    food: [
      {
        name: "Falling Rock Tap House",
        cuisine: "Craft Beer, Pub Food",
        location: "LoDo (Lower Downtown)",
        distance: "0.2 mi",
        time: "4 min walk",
        price: "$$",
      },
      {
        name: "Jaxon's",
        cuisine: "American",
        location: "Ballpark neighborhood",
        distance: "0.1 mi",
        time: "2 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Coors Field Official Lots",
          location: "Ballpark neighborhood",
          price: "$30-45",
          distance: "Adjacent",
          tips: "Book online for best price",
        },
        {
          name: "Union Station Parking",
          location: "Union Station",
          price: "$15-25",
          distance: "0.8 mi",
          tips: "15 min walk through LoDo",
        },
      ],
      tips: [
        "RTD Light Rail to Union Station is popular",
        "LoDo is very walkable and fun to explore",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "RTD Light Rail to Union Station - 10 min walk to Coors Field",
        "RTD bus routes serve downtown Denver",
      ],
      rideshare: [
        "Drop-off on Blake Street or 20th Street",
        "After show: walk toward Larimer Square for easier pickup",
      ],
      walkability: "Very walkable from downtown and LoDo",
    },
    
    venueTips: [
      "Coors Field sits a mile high - altitude affects some people",
      "LoDo (Lower Downtown) is the place to be before the show",
      "August in Denver is beautiful - mild and sunny",
      "Bring sunscreen - Colorado sun is intense at altitude",
      "Clear bag policy in effect",
    ],
  },

  // Pasadena - Rose Bowl
  "pasadena-ca-aug-15": {
    slug: "pasadena-ca-aug-15",
    city: "Pasadena",
    state: "CA",
    venue: "Rose Bowl Stadium",
    
    food: [
      {
        name: "Pie 'n Burger",
        cuisine: "Classic American Diner",
        location: "Old Pasadena",
        distance: "2 mi",
        time: "8 min drive",
        price: "$",
      },
      {
        name: "The Tripel",
        cuisine: "Belgian, Beer",
        location: "Plummer Park",
        distance: "3 mi",
        time: "10 min drive",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Rose Bowl General Parking",
          location: "Rose Bowl parking lots",
          price: "$40-60",
          distance: "Adjacent",
          tips: "Arrive very early - limited parking",
        },
        {
          name: "Parsons Parking Structure",
          location: "Parsons Corporation (nearby)",
          price: "$30-40",
          distance: "0.5 mi",
          tips: "Shuttle to Rose Bowl on event days",
        },
      ],
      tips: [
        "No nearby public transit - driving or rideshare required",
        "Traffic is HEAVY - arrive 3+ hours early",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "Metro Gold Line to Memorial Park - then rideshare to Rose Bowl",
        "Limited bus service to stadium area",
      ],
      rideshare: [
        "Drop-off at designated Rose Bowl rideshare zone",
        "After show: expect long waits and surge pricing",
      ],
      walkability: "Not walkable - Rose Bowl is in Arroyo Seco area",
    },
    
    venueTips: [
      "Rose Bowl is HUGE - iconic 90,000+ seat stadium",
      "August in LA is hot - bring water and sunscreen",
      "This will be a massive show - plan for big crowds",
      "Parking/traffic is the biggest challenge",
      "Clear bag policy enforced",
    ],
  },

  // San Diego - Petco Park
  "san-diego-ca-aug-17": {
    slug: "san-diego-ca-aug-17",
    city: "San Diego",
    state: "CA",
    venue: "Petco Park",
    
    food: [
      {
        name: "The Field Irish Pub",
        cuisine: "Irish Pub",
        location: "Gaslamp Quarter",
        distance: "0.3 mi",
        time: "6 min walk",
        price: "$$",
      },
      {
        name: "Searsucker",
        cuisine: "American",
        location: "Gaslamp Quarter",
        distance: "0.4 mi",
        time: "8 min walk",
        price: "$$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Petco Park Official Parking",
          location: "East Village / downtown",
          price: "$30-50",
          distance: "Adjacent",
          tips: "Book online in advance",
        },
        {
          name: "Horton Plaza Parking",
          location: "Gaslamp Quarter",
          price: "$15-25",
          distance: "0.5 mi",
          tips: "10 min walk, cheaper option",
        },
      ],
      tips: [
        "San Diego Trolley to Gaslamp Quarter or 12th & Imperial",
        "Gaslamp Quarter is perfect for pre-show exploring",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "San Diego Trolley Green/Blue/Orange Lines to Gaslamp or 12th & Imperial",
        "MTS bus routes serve downtown",
      ],
      rideshare: [
        "Drop-off on Park Boulevard or 10th Avenue",
        "After show: walk toward Gaslamp for easier pickup",
      ],
      walkability: "Very walkable from downtown and Gaslamp Quarter",
    },
    
    venueTips: [
      "Petco Park is beautiful - downtown location with great views",
      "Gaslamp Quarter is the place to be before the show",
      "August in San Diego is perfect weather - mild and sunny",
      "Bring a light layer - ocean breeze at night",
      "Clear bag policy in effect",
    ],
  },

  // Phoenix - Chase Field
  "phoenix-az-aug-19": {
    slug: "phoenix-az-aug-19",
    city: "Phoenix",
    state: "AZ",
    venue: "Chase Field",
    
    food: [
      {
        name: "The Arrogant Butcher",
        cuisine: "American",
        location: "Downtown Phoenix",
        distance: "0.2 mi",
        time: "4 min walk",
        price: "$$",
      },
      {
        name: "Pizzeria Bianco",
        cuisine: "Pizza",
        location: "Heritage Square",
        distance: "0.4 mi",
        time: "8 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Chase Field Official Parking",
          location: "Downtown Phoenix",
          price: "$25-40",
          distance: "Adjacent",
          tips: "Book online for guaranteed spot",
        },
        {
          name: "CityScape Parking",
          location: "CityScape complex",
          price: "$15-25",
          distance: "0.3 mi",
          tips: "6 min walk, validation available at restaurants",
        },
      ],
      tips: [
        "Valley Metro Light Rail to 3rd St/Washington or Jefferson",
        "Downtown Phoenix is walkable despite the heat",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "Valley Metro Light Rail to 3rd Street/Washington - 5 min walk",
        "Multiple bus routes to downtown",
      ],
      rideshare: [
        "Drop-off on Jefferson Street or 7th Street",
        "After show: walk toward Roosevelt Row for easier pickup",
      ],
      walkability: "Walkable from downtown Phoenix (but it's HOT)",
    },
    
    venueTips: [
      "Chase Field has a retractable roof and AC - thank goodness!",
      "August in Phoenix is EXTREMELY hot (110°F+) but stadium is air-conditioned",
      "Downtown Phoenix has great restaurants",
      "Clear bag policy in effect",
      "Light rail is convenient and air-conditioned",
    ],
  },

  // San Francisco - Oracle Park
  "san-francisco-ca-aug-21": {
    slug: "san-francisco-ca-aug-21",
    city: "San Francisco",
    state: "CA",
    venue: "Oracle Park",
    
    food: [
      {
        name: "Public House",
        cuisine: "American, Sports Bar",
        location: "SoMa",
        distance: "0.3 mi",
        time: "6 min walk",
        price: "$$",
      },
      {
        name: "MoMo's",
        cuisine: "American",
        location: "Near ballpark",
        distance: "0.1 mi",
        time: "2 min walk",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "Oracle Park Lot A",
          location: "Lot A (Pier 48)",
          price: "$40-60",
          distance: "Adjacent",
          tips: "Book online - very limited",
        },
        {
          name: "Embarcadero Center Garages",
          location: "Financial District",
          price: "$25-35",
          distance: "1.2 mi",
          tips: "20 min walk along the water",
        },
      ],
      tips: [
        "Muni Metro or BART to Embarcadero, then walk or Muni T-line",
        "Parking is extremely limited - take transit",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "Muni Metro T Third-Calzone Line to 2nd & King",
        "BART to Embarcadero, transfer to Muni T or walk (20 min)",
        "Caltrain to San Francisco Station - 10 min walk",
      ],
      rideshare: [
        "Drop-off on King Street or 3rd Street",
        "After show: walk toward Ferry Building for easier pickup",
      ],
      walkability: "Walkable from SoMa and Financial District",
    },
    
    venueTips: [
      "Oracle Park is one of the most beautiful ballparks in America",
      "Views of the Bay from the stadium are stunning",
      "August in SF is cool and foggy - BRING LAYERS",
      "The waterfront is perfect for pre-show walks",
      "Clear bag policy in effect",
    ],
  },

  // Sandy UT (Salt Lake City area) - America First Field
  "sandy-ut-aug-25": {
    slug: "sandy-ut-aug-25",
    city: "Sandy",
    state: "UT",
    venue: "America First Field",
    
    food: [
      {
        name: "The Dodo Restaurant",
        cuisine: "American, Burgers",
        location: "Sandy",
        distance: "2 mi",
        time: "7 min drive",
        price: "$$",
      },
      {
        name: "Bruges Waffles & Frites",
        cuisine: "Belgian",
        location: "Sugarhouse (Salt Lake City)",
        distance: "8 mi",
        time: "15 min drive",
        price: "$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "America First Field Parking",
          location: "Stadium lots",
          price: "$15-25",
          distance: "Adjacent",
          tips: "Plenty of parking available",
        },
        {
          name: "Jordan Commons Parking",
          location: "Nearby shopping center",
          price: "$10-15",
          distance: "0.3 mi",
          tips: "Short walk to stadium",
        },
      ],
      tips: [
        "TRAX Light Rail to Sandy Civic Center or Historic Sandy",
        "Parking is relatively easy compared to other venues",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "TRAX Blue Line or Red Line to Sandy Civic Center - 10 min walk",
        "UTA bus routes serve Sandy area",
      ],
      rideshare: [
        "Drop-off at America First Field main entrance",
        "After show: rideshare pickup area designated",
      ],
      walkability: "Not walkable from Salt Lake City - it's in Sandy suburbs",
    },
    
    venueTips: [
      "America First Field is primarily a soccer stadium",
      "August in Utah is hot and dry - bring water",
      "Sandy is south of Salt Lake City - plan extra travel time",
      "TRAX light rail is convenient from downtown SLC",
      "Clear bag policy likely enforced",
    ],
  },

  // Vancouver - BC Place
  "vancouver-bc-aug-28": {
    slug: "vancouver-bc-aug-28",
    city: "Vancouver",
    state: "BC",
    venue: "BC Place",
    
    food: [
      {
        name: "Tap & Barrel",
        cuisine: "Canadian, Craft Beer",
        location: "Olympic Village",
        distance: "0.6 mi",
        time: "12 min walk",
        price: "$$",
      },
      {
        name: "The Flying Pig",
        cuisine: "Canadian",
        location: "Yaletown",
        distance: "0.4 mi",
        time: "8 min walk",
        price: "$$$",
      },
    ],
    
    parking: {
      options: [
        {
          name: "BC Place Official Parking",
          location: "Under the stadium",
          price: "CAD $25-40",
          distance: "Adjacent",
          tips: "Book online in advance",
        },
        {
          name: "Yaletown Parking",
          location: "Yaletown neighborhood",
          price: "CAD $15-25",
          distance: "0.5 mi",
          tips: "10 min walk, explore Yaletown before the show",
        },
      ],
      tips: [
        "SkyTrain to Stadium-Chinatown is easiest",
        "Vancouver traffic is heavy - take transit",
      ],
    },
    
    gettingThere: {
      publicTransit: [
        "SkyTrain Expo Line to Stadium-Chinatown station - right at BC Place",
        "Canada Line to Yaletown-Roundhouse - 10 min walk",
        "Multiple bus routes to downtown Vancouver",
      ],
      rideshare: [
        "Drop-off on Beatty Street or Pacific Boulevard",
        "After show: walk toward Yaletown for easier pickup",
      ],
      walkability: "Very walkable from downtown Vancouver and Yaletown",
    },
    
    venueTips: [
      "BC Place has a retractable roof - August is usually nice",
      "August in Vancouver is perfect weather - mild and pleasant",
      "Yaletown and Gastown are great for pre-show exploring",
      "Clear bag policy likely enforced",
      "SkyTrain is the easiest option",
    ],
  },
};

// Duplicate show dates reference the same venue data
venueGuides["orlando-fl-jun-12"] = { ...venueGuides["orlando-fl-jun-11"], slug: "orlando-fl-jun-12" };
venueGuides["boston-ma-jul-08"] = { ...venueGuides["boston-ma-jul-07"], slug: "boston-ma-jul-08" };
venueGuides["boston-ma-jul-10"] = { ...venueGuides["boston-ma-jul-07"], slug: "boston-ma-jul-10" };
venueGuides["boston-ma-jul-11"] = { ...venueGuides["boston-ma-jul-07"], slug: "boston-ma-jul-11" };
venueGuides["chicago-il-jul-15"] = { ...venueGuides["chicago-il-jul-14"], slug: "chicago-il-jul-15" };
venueGuides["queens-ny-jul-19"] = { ...venueGuides["queens-ny-jul-18"], slug: "queens-ny-jul-19" };
venueGuides["denver-co-aug-09"] = { ...venueGuides["denver-co-aug-08"], slug: "denver-co-aug-09" };
venueGuides["seattle-wa-aug-31"] = { ...venueGuides["seattle-wa-aug-30"], slug: "seattle-wa-aug-31" };

export function getVenueGuide(slug: string): VenueGuide | null {
  return venueGuides[slug] || null;
}

```

---

## Quick Start in Replit

1. **Create Replit:** Go to https://replit.com → "Create Repl" → Template: "Next.js"
2. **Copy files:** Use the file tree on the left to create each file, paste content
3. **Auto-install:** Replit will detect `package.json` and install dependencies automatically
4. **Run:** Click the green "Run" button at the top
5. **Preview:** Your site opens in the preview pane on the right

---

## Design Tweaks You Might Want

### Colors
- **Primary gold:** `#c9a961` (line 27 in `tailwind.config.ts`)
- **Notebook tan:** `#f4f1e8` (line 31 in `app/globals.css`)
- **Ink black:** `#2d2d2d` (line 7 in `app/globals.css`)

### Typography
- **Headings:** Special Elite font (app/globals.css line 3)
- **Body:** Space Mono font (app/globals.css line 4)
- **Handwriting:** Dancing Script font (app/globals.css line 5)
- **Font sizes:** Search for `text-` classes in components

### Spacing
- **Page padding:** `p-10` in FieldNotesNotebook.tsx (line ~35)
- **Component gaps:** `gap-` classes throughout
- **Line height:** `leading-` classes for readability

### Field Notes Details
- **Paw prints opacity:** `opacity-12` in PennyPawPrint.tsx
- **Coffee ring:** CoffeeRing.tsx (multiple overlapping circles)
- **Margin notes:** MarginNote.tsx (rotation, opacity)

---

## Tips for Replit

- **Live reload:** Changes auto-refresh in preview
- **Mobile preview:** Click phone icon in preview toolbar
- **Console:** Click "Console" tab to see build errors
- **Port forwarding:** Replit handles this automatically

---

## What's Already Built

✅ 35 personalized city guides  
✅ Hand-drawn parking maps (SVG)  
✅ Polaroid entrance photos  
✅ Visual timeline  
✅ Penny's paw prints (4 different rotations)  
✅ Enhanced coffee ring  
✅ Handwritten margin notes  
✅ Smooth page transitions  
✅ Keyboard navigation (← →)  
✅ Back button  
✅ Mobile optimized (390px tested)  

---

**Ready to design!** 🎨

All code is copy-paste ready. No build errors. Just style tweaks from here.

