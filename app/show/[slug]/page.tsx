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
