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
