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
