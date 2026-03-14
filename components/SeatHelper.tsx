"use client";

import { useState } from "react";

interface EntranceRecommendation {
  entrance: string;
  parkingLots: string[];
  walkingDirections: string;
  parkingTip: string;
}

interface SeatHelperProps {
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
    },
    "Grandstand (Sections 1-33)": {
      entrance: "Gate B (Lansdowne Street)",
      parkingLots: ["Lansdowne Street Garages", "Kenmore Square Garages"],
      walkingDirections: "Lansdowne Street entrance, behind Green Monster",
      parkingTip: "Lansdowne garages put you right at Gate B - 2 min walk",
    },
    "Bleachers (Sections 34-43)": {
      entrance: "Gate E (Van Ness Street)",
      parkingLots: ["Fenway Park Official Lot D", "Street parking on Peterborough"],
      walkingDirections: "Center field entrance, Van Ness Street side",
      parkingTip: "Lot D is closest, or street parking on Peterborough/Kilmarnock",
    },
    "Right Field Box (Sections 86-99)": {
      entrance: "Gate C (Ipswich Street)",
      parkingLots: ["Fenway Park Official Lot A", "Yawkey Garage"],
      walkingDirections: "Right field entrance on Ipswich Street",
      parkingTip: "Lot A or Yawkey Garage - short walk to Gate C",
    },
  },
  "Wrigley Field": {
    "Field Box (Sections 1-44)": {
      entrance: "Gate K or N (Clark Street)",
      parkingLots: ["Wrigley Field Official Parking", "Boystown Garages"],
      walkingDirections: "Main gates on Clark Street - home plate side",
      parkingTip: "Official lots on Clark, or park in Boystown and walk 10 min",
    },
    "Terrace Box (Sections 201-244)": {
      entrance: "Gate K or N (Clark Street)",
      parkingLots: ["Wrigley Field Official Parking", "Sheffield Ave lots"],
      walkingDirections: "Main Clark Street gates - upper level access",
      parkingTip: "Same as lower level - Clark Street official lots closest",
    },
    "Bleachers (Sections 301-343)": {
      entrance: "Gate D or F (Sheffield/Waveland)",
      parkingLots: ["Street parking in Lakeview", "Halsted garages"],
      walkingDirections: "Outfield gates - Sheffield or Waveland Ave",
      parkingTip: "Street parking opens up after 9pm - try Halsted or Broadway garages",
    },
  },
  "Citi Field": {
    "Field Level (Sections 1-142)": {
      entrance: "Home Plate Entrance (Seaver Way)",
      parkingLots: ["Citi Field Lot A", "Citi Field Lot B"],
      walkingDirections: "Main entrance facing the subway - Home Plate gate",
      parkingTip: "Lots A or B closest - book online, or just take the 7 train",
    },
    "Excelsior Level (Sections 301-342)": {
      entrance: "Home Plate Entrance (Seaver Way)",
      parkingLots: ["Citi Field Lot A", "Citi Field Lot B"],
      walkingDirections: "Main entrance - escalators to upper level",
      parkingTip: "Same as Field Level - Lots A/B, but honestly take the 7 train",
    },
    "Promenade Level (Sections 501-542)": {
      entrance: "Jackie Robinson Rotunda (Center)",
      parkingLots: ["Citi Field Lot C", "Flushing street parking"],
      walkingDirections: "Rotunda entrance - upper deck access",
      parkingTip: "Lot C works, but seriously, the 7 train is way easier",
    },
  },
  "T-Mobile Park": {
    "Field Level (Sections 113-149)": {
      entrance: "Home Plate Gate (1st Ave S)",
      parkingLots: ["T-Mobile Park Garage", "Pioneer Square garages"],
      walkingDirections: "Main entrance on 1st Avenue South",
      parkingTip: "Official garage or Pioneer Square lots - or take light rail to Stadium Station",
    },
    "Main Level (Sections 213-249)": {
      entrance: "Home Plate Gate (1st Ave S)",
      parkingLots: ["T-Mobile Park Garage", "SODO street parking"],
      walkingDirections: "Main 1st Ave entrance - escalators to upper level",
      parkingTip: "Same as Field Level - official garage best, but light rail easiest",
    },
    "Outfield (Sections 180-191)": {
      entrance: "Center Field Gate (Edgar Martinez Dr)",
      parkingLots: ["T-Mobile Park South Lot", "Street parking on Royal Brougham"],
      walkingDirections: "Outfield entrance - Edgar Martinez Drive side",
      parkingTip: "South lot closest to this gate - or light rail still your best bet",
    },
  },
};

export default function SeatHelper({ venue, city }: SeatHelperProps) {
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [recommendation, setRecommendation] = useState<EntranceRecommendation | null>(null);

  const venueSections = venueEntranceMap[venue];

  if (!venueSections) {
    return null; // No seat data for this venue yet
  }

  const sectionOptions = Object.keys(venueSections);

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    setRecommendation(venueSections[section] || null);
  };

  return (
    <div className="bg-cream-100 rounded-lg p-6 border border-cream-200">
      <h3 className="text-base font-semibold text-brown-900 mb-3">
        Find Your Entrance & Parking
      </h3>
      <p className="text-sm text-brown-700 mb-4">
        Enter your seat section for personalized recommendations.
      </p>

      <div className="mb-4">
        <label htmlFor="seat-section" className="block text-sm font-medium text-brown-800 mb-2">
          Seat Section
        </label>
        <select
          id="seat-section"
          value={selectedSection}
          onChange={(e) => handleSectionChange(e.target.value)}
          className="w-full px-4 py-2 border border-cream-200 rounded-lg bg-cream-50 text-brown-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <option value="">Select your section...</option>
          {sectionOptions.map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>
      </div>

      {recommendation && (
        <div className="mt-6 p-4 bg-cream-50 rounded-lg border border-gold-500">
          <div className="mb-4">
            <h4 className="font-semibold text-brown-900 text-sm mb-1">
              Closest Entrance
            </h4>
            <p className="text-brown-800 font-medium">{recommendation.entrance}</p>
            <p className="text-xs text-olive-600 mt-1">{recommendation.walkingDirections}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-brown-900 text-sm mb-2">
              Recommended Parking
            </h4>
            <ul className="space-y-1">
              {recommendation.parkingLots.map((lot, idx) => (
                <li key={idx} className="text-brown-700 text-sm">
                  • {lot}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 p-3 bg-gold-400 bg-opacity-20 rounded-lg">
            <p className="text-xs text-brown-900">
              <span className="font-semibold">Tip:</span> {recommendation.parkingTip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
