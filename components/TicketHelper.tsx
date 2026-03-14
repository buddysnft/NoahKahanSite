"use client";

import { useState } from "react";

interface EntranceRecommendation {
  entrance: string;
  parkingLots: string[];
  walkingDirections: string;
  parkingTip: string;
  entranceColor: string; // Color to highlight on stadium diagram
}

interface TicketHelperProps {
  venue: string;
  city: string;
}

// Venue-specific entrance mappings
const venueEntranceMap: Record<string, Record<string, EntranceRecommendation>> = {
  "Fenway Park": {
    "Field Box (Sections 1-58)": {
      entrance: "Gate A (Jersey Street)",
      parkingLots: ["Fenway Park Official Lot C", "Lansdowne Street Garages"],
      walkingDirections: "Main entrance on Jersey Street, closest to home plate",
      parkingTip: "Park in Lot C or Lansdowne garages for shortest walk to Gate A",
      entranceColor: "#c9a55f", // sunset orange
    },
    "Grandstand (Sections 1-33)": {
      entrance: "Gate B (Lansdowne Street)",
      parkingLots: ["Lansdowne Street Garages", "Kenmore Square Garages"],
      walkingDirections: "Lansdowne Street entrance, behind Green Monster",
      parkingTip: "Lansdowne garages put you right at Gate B - 2 min walk",
      entranceColor: "#c9a55f",
    },
    "Bleachers (Sections 34-43)": {
      entrance: "Gate E (Van Ness Street)",
      parkingLots: ["Fenway Park Official Lot D", "Street parking on Peterborough"],
      walkingDirections: "Center field entrance, Van Ness Street side",
      parkingTip: "Lot D is closest, or street parking on Peterborough/Kilmarnock",
      entranceColor: "#c9a55f",
    },
    "Right Field Box (Sections 86-99)": {
      entrance: "Gate C (Ipswich Street)",
      parkingLots: ["Fenway Park Official Lot A", "Yawkey Garage"],
      walkingDirections: "Right field entrance on Ipswich Street",
      parkingTip: "Lot A or Yawkey Garage - short walk to Gate C",
      entranceColor: "#c9a55f",
    },
  },
  "Wrigley Field": {
    "Field Box (Sections 1-44)": {
      entrance: "Gate K or N (Clark Street)",
      parkingLots: ["Wrigley Field Official Parking", "Boystown Garages"],
      walkingDirections: "Main gates on Clark Street - home plate side",
      parkingTip: "Official lots on Clark, or park in Boystown and walk 10 min",
      entranceColor: "#c9a55f",
    },
    "Terrace Box (Sections 201-244)": {
      entrance: "Gate K or N (Clark Street)",
      parkingLots: ["Wrigley Field Official Parking", "Sheffield Ave lots"],
      walkingDirections: "Main Clark Street gates - upper level access",
      parkingTip: "Same as lower level - Clark Street official lots closest",
      entranceColor: "#c9a55f",
    },
    "Bleachers (Sections 301-343)": {
      entrance: "Gate D or F (Sheffield/Waveland)",
      parkingLots: ["Street parking in Lakeview", "Halsted garages"],
      walkingDirections: "Outfield gates - Sheffield or Waveland Ave",
      parkingTip: "Street parking opens up after 9pm - try Halsted or Broadway garages",
      entranceColor: "#c9a55f",
    },
  },
  "Citi Field": {
    "Field Level (Sections 1-142)": {
      entrance: "Home Plate Entrance (Seaver Way)",
      parkingLots: ["Citi Field Lot A", "Citi Field Lot B"],
      walkingDirections: "Main entrance facing the subway - Home Plate gate",
      parkingTip: "Lots A or B closest - book online, or just take the 7 train",
      entranceColor: "#c9a55f",
    },
    "Excelsior Level (Sections 301-342)": {
      entrance: "Home Plate Entrance (Seaver Way)",
      parkingLots: ["Citi Field Lot A", "Citi Field Lot B"],
      walkingDirections: "Main entrance - escalators to upper level",
      parkingTip: "Same as Field Level - Lots A/B, but honestly take the 7 train",
      entranceColor: "#c9a55f",
    },
    "Promenade Level (Sections 501-542)": {
      entrance: "Jackie Robinson Rotunda (Center)",
      parkingLots: ["Citi Field Lot C", "Flushing street parking"],
      walkingDirections: "Rotunda entrance - upper deck access",
      parkingTip: "Lot C works, but seriously, the 7 train is way easier",
      entranceColor: "#c9a55f",
    },
  },
  "T-Mobile Park": {
    "Field Level (Sections 113-149)": {
      entrance: "Home Plate Gate (1st Ave S)",
      parkingLots: ["T-Mobile Park Garage", "Pioneer Square garages"],
      walkingDirections: "Main entrance on 1st Avenue South",
      parkingTip: "Official garage or Pioneer Square lots - or take light rail to Stadium Station",
      entranceColor: "#c9a55f",
    },
    "Main Level (Sections 213-249)": {
      entrance: "Home Plate Gate (1st Ave S)",
      parkingLots: ["T-Mobile Park Garage", "SODO street parking"],
      walkingDirections: "Main 1st Ave entrance - escalators to upper level",
      parkingTip: "Same as Field Level - official garage best, but light rail easiest",
      entranceColor: "#c9a55f",
    },
    "Outfield (Sections 180-191)": {
      entrance: "Center Field Gate (Edgar Martinez Dr)",
      parkingLots: ["T-Mobile Park South Lot", "Street parking on Royal Brougham"],
      walkingDirections: "Outfield entrance - Edgar Martinez Drive side",
      parkingTip: "South lot closest to this gate - or light rail still your best bet",
      entranceColor: "#c9a55f",
    },
  },
};

export default function TicketHelper({ venue, city }: TicketHelperProps) {
  const [ticketSection, setTicketSection] = useState<string>("");
  const [ticketRow, setTicketRow] = useState<string>("");
  const [recommendation, setRecommendation] = useState<EntranceRecommendation | null>(null);

  const venueSections = venueEntranceMap[venue];

  if (!venueSections) {
    return null; // No ticket data for this venue yet
  }

  const sectionOptions = Object.keys(venueSections);

  const handleSectionChange = (section: string) => {
    setTicketSection(section);
    setRecommendation(venueSections[section] || null);
  };

  return (
    <div className="bg-gradient-to-br from-cream-100 to-cream-50 rounded-lg p-8 border-2 border-gold-500 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-brown-900 mb-2">
          🎟️ Got Your Ticket?
        </h3>
        <p className="text-sm text-brown-700">
          Enter your seat info and we'll show you the best entrance and parking
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="ticket-section" className="block text-sm font-semibold text-brown-900 mb-2">
            Section
          </label>
          <select
            id="ticket-section"
            value={ticketSection}
            onChange={(e) => handleSectionChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-cream-200 rounded-lg bg-white text-brown-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400 transition-all"
          >
            <option value="">Select your section...</option>
            {sectionOptions.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="ticket-row" className="block text-sm font-semibold text-brown-900 mb-2">
            Row (optional)
          </label>
          <input
            id="ticket-row"
            type="text"
            value={ticketRow}
            onChange={(e) => setTicketRow(e.target.value.toUpperCase())}
            placeholder="e.g. A, 12, etc."
            className="w-full px-4 py-3 border-2 border-cream-200 rounded-lg bg-white text-brown-900 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400 transition-all"
          />
        </div>
      </div>

      {recommendation && (
        <div className="mt-8">
          {/* Stadium Visual Indicator */}
          <div className="mb-8 p-6 bg-white rounded-lg border-2 border-gold-500 text-center">
            <div className="inline-block relative">
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl animate-pulse"
                style={{ backgroundColor: recommendation.entranceColor }}
              >
                YOUR<br/>ENTRANCE
              </div>
              <div className="absolute -top-2 -right-2 bg-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Best Route
              </div>
            </div>
            <p className="mt-4 text-brown-900 font-semibold text-lg">
              {recommendation.entrance}
            </p>
            <p className="text-xs text-olive-600 mt-1">{recommendation.walkingDirections}</p>
          </div>

          {/* Parking Recommendations */}
          <div className="bg-cream-50 rounded-lg p-6 mb-6 border border-cream-200">
            <h4 className="font-bold text-brown-900 text-base mb-4 flex items-center">
              <span className="text-2xl mr-2">🚗</span>
              Best Parking for Your Entrance
            </h4>
            <ul className="space-y-3">
              {recommendation.parkingLots.map((lot, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gold-600 mr-3 font-bold">→</span>
                  <span className="text-brown-800 text-sm font-medium">{lot}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tip */}
          <div className="bg-gradient-to-r from-gold-400 to-gold-500 rounded-lg p-6 text-white shadow-lg">
            <p className="text-sm font-semibold flex items-center">
              <span className="text-2xl mr-3">💡</span>
              <span>{recommendation.parkingTip}</span>
            </p>
          </div>
        </div>
      )}

      {!recommendation && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎫</div>
          <p className="text-brown-700 text-sm">
            Select your section above to see your personalized route
          </p>
        </div>
      )}
    </div>
  );
}
