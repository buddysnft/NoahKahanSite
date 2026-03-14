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
