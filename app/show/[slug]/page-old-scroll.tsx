import { tourDates } from "@/data/tourDates";
import { getVenueGuide } from "@/data/venueGuides";
import { notFound } from "next/navigation";
import Link from "next/link";
import TicketHelper from "@/components/TicketHelper";
import { MothSilhouette, KidSilhouette, GrassSilhouette } from "@/components/AlbumImagery";

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

  return (
    <div className="min-h-screen pt-16 md:pt-24 relative">
      {/* Decorative moths */}
      <div className="fixed top-24 left-10 w-12 h-8 opacity-20 animate-pulse hidden md:block pointer-events-none">
        <MothSilhouette />
      </div>
      <div className="fixed top-48 right-16 w-10 h-7 opacity-15 animate-pulse hidden lg:block pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <MothSilhouette />
      </div>

      {/* Show Info Header */}
      <div className="border-b-2 md:border-b-4 border-gold-600 bg-gradient-to-r from-gold-500/60 via-olive-500/50 to-gold-400/60 shadow-xl relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
          <Link
            href="/"
            className="text-sm md:text-xl font-bold text-white hover:text-cream-100 mb-4 md:mb-8 inline-block drop-shadow-lg"
          >
            ← All Shows
          </Link>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl">
            {show.city}, {show.state}
          </h1>
          <p className="text-lg md:text-3xl text-cream-100 mb-3 md:mb-6 font-semibold drop-shadow-lg">{show.venue}</p>
          <p className="text-base md:text-2xl text-cream-100 drop-shadow-md">{formatDate(show.date)}</p>
          {show.soldOut && (
            <p className="text-sm md:text-xl text-cream-100 mt-2 md:mt-4 drop-shadow-md">
              Sold Out • with {show.supportingActs.join(", ")}
            </p>
          )}
        </div>
      </div>

      {guide ? (
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-16 bg-gradient-to-b from-gold-400/30 to-olive-500/20 relative">
          {/* Kid silhouettes */}
          <div className="absolute top-8 right-8 w-12 h-18 opacity-10 hidden lg:block">
            <KidSilhouette />
          </div>
          <div className="absolute bottom-16 left-8 w-10 h-15 opacity-8 hidden md:block">
            <KidSilhouette />
          </div>
          
          <div className="space-y-10 md:space-y-20 bg-gradient-to-br from-white/80 to-cream-100/70 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-12 shadow-2xl border-2 md:border-4 border-gold-500/40 relative z-10">
            
            {/* Food */}
            <section>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brown-900 mb-2 md:mb-3 drop-shadow-md">Where to Eat</h2>
              <p className="text-sm md:text-xl text-olive-600 mb-4 md:mb-8 font-medium">Meetup spots for fans near the venue</p>
              <div className="space-y-4">
                {guide.food.map((spot, idx) => (
                  <div key={idx} className="border-b border-cream-200 pb-4 last:border-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-lg md:text-2xl font-bold text-brown-900">{spot.name}</h3>
                      <span className="text-sm md:text-lg text-olive-600">{spot.price}</span>
                    </div>
                    <p className="text-sm md:text-lg text-brown-700 font-medium mb-1">{spot.cuisine}</p>
                    <p className="text-sm md:text-lg text-olive-600">
                      {spot.location} • {spot.distance} • {spot.time}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Parking */}
            <section>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brown-900 mb-4 md:mb-8 drop-shadow-md">Parking & Your Route</h2>
              
              {/* Ticket Helper */}
              <div className="mb-8">
                <TicketHelper venue={show.venue} city={show.city} />
              </div>

              <div className="space-y-4 mb-6">
                {guide.parking.options.map((option, idx) => (
                  <div key={idx} className="border-b border-cream-200 pb-4 last:border-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-lg md:text-2xl font-bold text-brown-900">{option.name}</h3>
                      <span className="text-sm md:text-lg text-brown-700 font-medium">{option.price}</span>
                    </div>
                    <p className="text-sm md:text-lg text-brown-700 font-medium mb-1">{option.location}</p>
                    <p className="text-sm md:text-lg text-olive-600">{option.distance}</p>
                    {option.tips && (
                      <p className="text-sm md:text-lg text-olive-600 italic mt-2">{option.tips}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-cream-100 p-4 rounded-lg border border-cream-200">
                <h4 className="text-sm font-semibold text-brown-900 mb-2">Tips</h4>
                <ul className="space-y-1 text-sm md:text-lg text-brown-700 font-medium">
                  {guide.parking.tips.map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Getting There */}
            <section>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brown-900 mb-4 md:mb-8 drop-shadow-md">Getting There</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-brown-900 mb-3">Public Transit</h3>
                  <ul className="space-y-2 text-sm md:text-lg text-brown-700 font-medium">
                    {guide.gettingThere.publicTransit.map((option, idx) => (
                      <li key={idx}>• {option}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-brown-900 mb-3">Rideshare</h3>
                  <ul className="space-y-2 text-sm md:text-lg text-brown-700 font-medium">
                    {guide.gettingThere.rideshare.map((option, idx) => (
                      <li key={idx}>• {option}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cream-100 p-4 rounded-lg border border-cream-200">
                  <p className="text-sm text-brown-800">
                    <span className="font-semibold">Walkability:</span> {guide.gettingThere.walkability}
                  </p>
                </div>
              </div>
            </section>

            {/* Venue Tips */}
            <section>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brown-900 mb-4 md:mb-8 drop-shadow-md">Venue Tips</h2>
              <ul className="space-y-3 text-sm md:text-lg text-brown-700 font-medium">
                {guide.venueTips.map((tip, idx) => (
                  <li key={idx} className="flex">
                    <span className="text-olive-500 mr-3">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold text-brown-900 mb-4">Guide Coming Soon</h2>
          <p className="text-brown-700 mb-8">
            We're working on the guide for this show. Check back soon!
          </p>
          <Link
            href="/"
            className="inline-block bg-gold-600 hover:bg-gold-500 text-cream-50 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View All Shows
          </Link>
        </div>
      )}

      {/* Grass silhouette at bottom */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-16 opacity-15 pointer-events-none">
        <GrassSilhouette className="w-full h-full" />
      </div>
    </div>
  );
}
