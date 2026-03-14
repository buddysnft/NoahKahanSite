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
