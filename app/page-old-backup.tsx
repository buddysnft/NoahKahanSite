import TourDates from "@/components/TourDates";
import { FireflyGlow, GrassSilhouette, TreeSilhouette } from "@/components/AlbumImagery";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Decorative fireflies - floating */}
      <div className="fixed top-20 right-10 w-8 h-8 animate-pulse opacity-60 pointer-events-none hidden md:block">
        <FireflyGlow />
      </div>
      <div className="fixed top-40 right-32 w-6 h-6 animate-pulse opacity-40 pointer-events-none hidden lg:block" style={{ animationDelay: '1s' }}>
        <FireflyGlow />
      </div>
      <div className="fixed top-60 right-20 w-7 h-7 animate-pulse opacity-50 pointer-events-none hidden md:block" style={{ animationDelay: '2s' }}>
        <FireflyGlow />
      </div>

      {/* Hero with album-inspired overlay */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-24 px-4 md:px-6 bg-gradient-to-b from-gold-500/60 via-olive-500/40 to-gold-400/20 relative">
        {/* Trees silhouette */}
        <div className="absolute bottom-0 left-0 w-16 h-24 opacity-30 hidden md:block">
          <TreeSilhouette />
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-28 opacity-25 hidden md:block">
          <TreeSilhouette />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold text-gold-600 mb-4 md:mb-8 tracking-tight drop-shadow-2xl">
            Noah Kahan
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-brown-900 mb-6 md:mb-12 font-bold">
            2026 Stadium Tour
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-brown-900 max-w-3xl mx-auto font-medium">
            Plan your show day. Find food, parking, and transit info for every stop.
          </p>
        </div>
      </section>

      {/* Tour Dates */}
      <TourDates />

      {/* Grass silhouette at bottom */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-16 opacity-20 pointer-events-none">
        <GrassSilhouette className="w-full h-full" />
      </div>
    </div>
  );
}
