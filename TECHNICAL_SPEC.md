# Noah Kahan Tour Site - Technical Specification

**For:** SwiftBot overnight build  
**Stack:** Next.js 14 + TypeScript + Tailwind + Supabase + Claude API  
**Deployment:** Vercel  
**Timeline:** Prototype in 24-48 hours

---

## Project Setup

### 1. Initialize Next.js Project

```bash
npx create-next-app@latest noah-kahan-tour --typescript --tailwind --app --no-src-dir
cd noah-kahan-tour
```

**Configuration:**
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- App Router: Yes (not Pages Router)
- Import alias: Yes (`@/`)

### 2. Install Dependencies

```bash
npm install @supabase/supabase-js
npm install @anthropic-ai/sdk
npm install axios
npm install date-fns
npm install lucide-react  # Icons
```

### 3. Environment Variables

Create `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key

# Claude AI
ANTHROPIC_API_KEY=sk-ant-...

# Google Maps (get free API key)
GOOGLE_MAPS_API_KEY=AIza...

# Weather API (free tier)
OPENWEATHER_API_KEY=your_key
```

---

## Database Schema (Supabase)

### SQL Setup

```sql
-- Shows table
CREATE TABLE shows (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artist TEXT NOT NULL DEFAULT 'Noah Kahan',
  venue_name TEXT NOT NULL,
  venue_address TEXT NOT NULL,
  venue_city TEXT NOT NULL,
  venue_state TEXT NOT NULL,
  show_date TIMESTAMP WITH TIME ZONE NOT NULL,
  doors_open TIME NOT NULL,
  show_start TIME NOT NULL,
  capacity INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Venue data
CREATE TABLE venue_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  show_id UUID REFERENCES shows(id) ON DELETE CASCADE,
  seating_map JSONB NOT NULL,  -- {"Section 101": {"entrance": "West", "parking": "Lot C"}}
  parking_lots JSONB NOT NULL,  -- [{"name": "Lot C", "cost": 40, "location": {...}}]
  entrances JSONB NOT NULL,     -- [{"name": "West", "location": {...}, "ada": true}]
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Generated guides (for analytics/caching)
CREATE TABLE generated_guides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  show_id UUID REFERENCES shows(id) ON DELETE CASCADE,
  user_section TEXT NOT NULL,
  user_location TEXT NOT NULL,
  party_size INTEGER NOT NULL,
  special_needs JSONB,
  guide_data JSONB NOT NULL,    -- Cached AI-generated recommendations
  share_token TEXT UNIQUE NOT NULL,  -- Short URL token
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  views INTEGER DEFAULT 0
);

-- Indexes
CREATE INDEX idx_shows_date ON shows(show_date);
CREATE INDEX idx_guides_token ON generated_guides(share_token);
CREATE INDEX idx_guides_show ON generated_guides(show_id);
```

---

## File Structure

```
noah-kahan-tour/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page (show selector)
│   ├── guide/
│   │   └── [id]/
│   │       └── page.tsx        # Dynamic guide page
│   ├── api/
│   │   ├── generate-guide/
│   │   │   └── route.ts        # POST /api/generate-guide
│   │   └── shows/
│   │       └── route.ts        # GET /api/shows
├── components/
│   ├── ShowSelector.tsx        # Dropdown to pick show
│   ├── InputForm.tsx           # User input form
│   ├── GuideCard.tsx           # Guide section card
│   ├── LoadingSpinner.tsx      # Loading state
│   └── ShareButton.tsx         # Share guide button
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── claude.ts               # Claude API wrapper
│   ├── google-maps.ts          # Google Maps API
│   ├── weather.ts              # Weather API
│   └── types.ts                # TypeScript types
├── public/
│   └── images/                 # Hero images, logos
└── styles/
    └── globals.css             # Tailwind base styles
```

---

## TypeScript Types

**File:** `lib/types.ts`

```typescript
export interface Show {
  id: string;
  artist: string;
  venue_name: string;
  venue_address: string;
  venue_city: string;
  venue_state: string;
  show_date: string;
  doors_open: string;
  show_start: string;
  capacity: number;
}

export interface VenueData {
  id: string;
  show_id: string;
  seating_map: Record<string, {
    entrance: string;
    parking: string;
    section_level: number;
  }>;
  parking_lots: ParkingLot[];
  entrances: Entrance[];
}

export interface ParkingLot {
  name: string;
  cost: number;
  location: { lat: number; lng: number };
  capacity: number;
  distance_from_venue: number;
}

export interface Entrance {
  name: string;
  location: { lat: number; lng: number };
  ada_accessible: boolean;
  sections_served: string[];
}

export interface GuideInput {
  show_id: string;
  section: string;
  row?: string;
  from_location: string;  // City or zip
  party_size: number;
  special_needs: {
    ada: boolean;
    strobe_warning: boolean;
    first_timer: boolean;
  };
}

export interface GeneratedGuide {
  id: string;
  show: Show;
  user_input: GuideInput;
  recommendations: {
    parking: ParkingRecommendation;
    timing: TimingRecommendation;
    hotels: Hotel[];
    entrance: EntranceRecommendation;
    food: Restaurant[];
    pro_tips: string[];
  };
  share_token: string;
}

export interface ParkingRecommendation {
  lot: ParkingLot;
  alternatives: ParkingLot[];
  reasoning: string;
}

export interface TimingRecommendation {
  leave_by: string;
  arrive_by: string;
  drive_time_minutes: number;
  traffic_level: 'light' | 'moderate' | 'heavy';
}

export interface Hotel {
  name: string;
  address: string;
  distance_miles: number;
  price_tier: 'budget' | 'mid' | 'luxury';
  rating: number;
  google_maps_url: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  distance_miles: number;
  rating: number;
  price_level: number;  // 1-4 ($-$$$$)
  google_maps_url: string;
}

export interface EntranceRecommendation {
  entrance: Entrance;
  walk_time_minutes: number;
  crowd_level: 'low' | 'medium' | 'high';
  reasoning: string;
}
```

---

## API Routes

### 1. GET /api/shows

**Purpose:** List upcoming shows

```typescript
// app/api/shows/route.ts
import { createClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const supabase = createClient();
  
  const { data: shows, error } = await supabase
    .from('shows')
    .select('*')
    .gte('show_date', new Date().toISOString())
    .order('show_date', { ascending: true });
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json({ shows });
}
```

### 2. POST /api/generate-guide

**Purpose:** Generate personalized tour guide

```typescript
// app/api/generate-guide/route.ts
import { createClient } from '@/lib/supabase';
import { generateGuide } from '@/lib/claude';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  const input = await request.json();
  const supabase = createClient();
  
  // 1. Fetch show + venue data
  const { data: show } = await supabase
    .from('shows')
    .select('*')
    .eq('id', input.show_id)
    .single();
  
  const { data: venueData } = await supabase
    .from('venue_data')
    .select('*')
    .eq('show_id', input.show_id)
    .single();
  
  // 2. Generate guide with Claude
  const guide = await generateGuide(show, venueData, input);
  
  // 3. Save to database
  const shareToken = nanoid(10);
  const { data: saved } = await supabase
    .from('generated_guides')
    .insert({
      show_id: input.show_id,
      user_section: input.section,
      user_location: input.from_location,
      party_size: input.party_size,
      special_needs: input.special_needs,
      guide_data: guide,
      share_token: shareToken
    })
    .select()
    .single();
  
  return NextResponse.json({ 
    guide,
    share_url: `/guide/${shareToken}`
  });
}
```

---

## Claude AI Integration

**File:** `lib/claude.ts`

```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function generateGuide(
  show: Show,
  venueData: VenueData,
  input: GuideInput
): Promise<GeneratedGuide> {
  const prompt = `You are a helpful tour guide assistant for Noah Kahan concert attendees.

SHOW INFO:
- Venue: ${show.venue_name}
- Date: ${show.show_date}
- Doors: ${show.doors_open}
- Show starts: ${show.show_start}

USER INFO:
- Seats: Section ${input.section}${input.row ? `, Row ${input.row}` : ''}
- Coming from: ${input.from_location}
- Party size: ${input.party_size}
- Special needs: ${JSON.stringify(input.special_needs)}

VENUE DATA:
${JSON.stringify(venueData, null, 2)}

Generate a comprehensive, personalized tour guide with:
1. Best parking lot for their seats (with reasoning)
2. Recommended arrival time (factor in traffic, distance)
3. Which entrance to use
4. 3 hotel recommendations (if coming from far)
5. 3 restaurant recommendations nearby
6. Pro tips (merch lines, bathrooms, exits)

Format as JSON matching this structure:
{
  "parking": { "lot": {...}, "alternatives": [...], "reasoning": "..." },
  "timing": { "leave_by": "...", "arrive_by": "...", ... },
  "hotels": [...],
  "entrance": { "entrance": {...}, "reasoning": "..." },
  "food": [...],
  "pro_tips": [...]
}

Be specific, practical, and personalized to their seats and location.`;

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });

  const responseText = message.content[0].type === 'text' 
    ? message.content[0].text 
    : '';
  
  // Parse JSON response
  const recommendations = JSON.parse(responseText);
  
  return {
    id: '', // Will be set by database
    show,
    user_input: input,
    recommendations,
    share_token: '' // Will be set by API route
  };
}
```

---

## Landing Page

**File:** `app/page.tsx`

```typescript
import ShowSelector from '@/components/ShowSelector';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Noah Kahan Tour Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personalized stadium companion. Get custom recommendations for parking, 
            hotels, food, and more based on your seats and location.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Select Your Show</h2>
            <ShowSelector />
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard 
            icon="📍"
            title="Personalized Parking"
            description="Best lot for your seats, with timing and cost"
          />
          <FeatureCard 
            icon="🏨"
            title="Smart Hotels"
            description="Top picks based on distance and budget"
          />
          <FeatureCard 
            icon="🍔"
            title="Food & Tips"
            description="Restaurants nearby plus insider pro tips"
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
```

---

## Input Form Component

**File:** `components/InputForm.tsx`

```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InputForm({ showId }: { showId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    section: '',
    row: '',
    from_location: '',
    party_size: 1,
    special_needs: {
      ada: false,
      strobe_warning: false,
      first_timer: false
    }
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/generate-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          show_id: showId,
          ...formData
        })
      });

      const { share_url } = await res.json();
      router.push(share_url);
    } catch (error) {
      console.error('Error generating guide:', error);
      alert('Failed to generate guide. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Your Seats
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Section (e.g. 101)"
            required
            value={formData.section}
            onChange={(e) => setFormData({ ...formData, section: e.target.value })}
            className="border rounded-lg px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Row (optional)"
            value={formData.row}
            onChange={(e) => setFormData({ ...formData, row: e.target.value })}
            className="border rounded-lg px-4 py-2 w-full"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Coming From
        </label>
        <input
          type="text"
          placeholder="City or Zip Code"
          required
          value={formData.from_location}
          onChange={(e) => setFormData({ ...formData, from_location: e.target.value })}
          className="border rounded-lg px-4 py-2 w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Party Size
        </label>
        <select
          value={formData.party_size}
          onChange={(e) => setFormData({ ...formData, party_size: Number(e.target.value) })}
          className="border rounded-lg px-4 py-2 w-full"
        >
          {[...Array(20)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Special Needs
        </label>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.special_needs.ada}
              onChange={(e) => setFormData({
                ...formData,
                special_needs: { ...formData.special_needs, ada: e.target.checked }
              })}
            />
            <span className="text-sm">ADA accessible parking/entrance</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.special_needs.strobe_warning}
              onChange={(e) => setFormData({
                ...formData,
                special_needs: { ...formData.special_needs, strobe_warning: e.target.checked }
              })}
            />
            <span className="text-sm">Strobe sensitivity warning needed</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.special_needs.first_timer}
              onChange={(e) => setFormData({
                ...formData,
                special_needs: { ...formData.special_needs, first_timer: e.target.checked }
              })}
            />
            <span className="text-sm">First-time concert goer</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50"
      >
        {loading ? 'Generating Your Guide...' : 'Generate My Guide →'}
      </button>
    </form>
  );
}
```

---

## Guide Page

**File:** `app/guide/[id]/page.tsx`

```typescript
import { createClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import ShareButton from '@/components/ShareButton';
import { format } from 'date-fns';

export default async function GuidePage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  
  const { data: guide } = await supabase
    .from('generated_guides')
    .select('*, show:shows(*)')
    .eq('share_token', params.id)
    .single();
  
  if (!guide) {
    notFound();
  }
  
  const { show, guide_data: recommendations } = guide;
  
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-6">
          <h1 className="text-3xl font-bold mb-2">🎵 Your Noah Kahan Guide</h1>
          <p className="text-lg">{show.venue_name}</p>
          <p className="text-sm opacity-90">
            {format(new Date(show.show_date), 'MMMM d, yyyy')}
          </p>
          <p className="text-sm opacity-90 mt-2">
            Section {guide.user_section} | Party of {guide.party_size}
          </p>
        </div>

        {/* Parking */}
        <Section title="📍 Getting There" icon="📍">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">Recommended Parking</h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">
              {recommendations.parking.lot.name}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
              <div>
                <span className="text-gray-600">Cost:</span>
                <span className="font-semibold ml-2">${recommendations.parking.lot.cost}</span>
              </div>
              <div>
                <span className="text-gray-600">Walk:</span>
                <span className="font-semibold ml-2">
                  {recommendations.parking.lot.distance_from_venue} mi
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              {recommendations.parking.reasoning}
            </p>
            
            <div className="bg-blue-50 p-4 rounded">
              <p className="font-semibold mb-1">⏰ Timing</p>
              <p className="text-sm">Leave by: <strong>{recommendations.timing.leave_by}</strong></p>
              <p className="text-sm">Arrive by: <strong>{recommendations.timing.arrive_by}</strong></p>
            </div>
          </div>
        </Section>

        {/* Hotels */}
        {recommendations.hotels?.length > 0 && (
          <Section title="🏨 Where to Stay" icon="🏨">
            <div className="grid gap-4">
              {recommendations.hotels.map((hotel, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border">
                  <h3 className="font-semibold">{hotel.name}</h3>
                  <p className="text-sm text-gray-600">{hotel.distance_miles} mi away</p>
                  <p className="text-sm">Rating: {hotel.rating}/5 ⭐</p>
                  <a 
                    href={hotel.google_maps_url}
                    target="_blank"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View on Google Maps →
                  </a>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Entrance */}
        <Section title="🚪 Your Entrance" icon="🚪">
          <div className="bg-white p-6 rounded-lg border">
            <p className="text-lg mb-2">
              Use: <strong>{recommendations.entrance.entrance.name}</strong>
            </p>
            <p className="text-sm text-gray-700">{recommendations.entrance.reasoning}</p>
          </div>
        </Section>

        {/* Food */}
        <Section title="🍔 Food Nearby" icon="🍔">
          <div className="grid gap-4">
            {recommendations.food.map((restaurant, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold">{restaurant.name}</h3>
                <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                <p className="text-sm">
                  {restaurant.distance_miles} mi | 
                  {'$'.repeat(restaurant.price_level)} | 
                  {restaurant.rating}/5 ⭐
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Pro Tips */}
        <Section title="💡 Pro Tips" icon="💡">
          <ul className="bg-white p-6 rounded-lg border space-y-2">
            {recommendations.pro_tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Share */}
        <div className="mt-8 text-center">
          <ShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}/guide/${params.id}`} />
        </div>
      </div>
    </main>
  );
}

function Section({ title, icon, children }: { 
  title: string; 
  icon: string; 
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span>{icon}</span>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
}
```

---

## Deployment Checklist

**Before deploying:**
- [ ] Set up Supabase project
- [ ] Run SQL schema
- [ ] Add test show data
- [ ] Get Google Maps API key
- [ ] Get Weather API key (optional for MVP)
- [ ] Test locally (`npm run dev`)
- [ ] Verify guide generation works

**Vercel deployment:**
```bash
npm install -g vercel
vercel login
vercel
# Follow prompts, add environment variables
```

**Environment variables in Vercel:**
- Add all from `.env.local`
- Set `NEXT_PUBLIC_BASE_URL` to deployed URL

---

## Test Data (Add to Supabase)

```sql
-- Test show: Madison Square Garden
INSERT INTO shows (artist, venue_name, venue_address, venue_city, venue_state, show_date, doors_open, show_start, capacity)
VALUES (
  'Noah Kahan',
  'Madison Square Garden',
  '4 Pennsylvania Plaza',
  'New York',
  'NY',
  '2026-03-15 19:00:00-05',
  '18:00',
  '19:30',
  20000
);

-- Venue data (simplified for testing)
INSERT INTO venue_data (show_id, seating_map, parking_lots, entrances)
VALUES (
  '<show_id_from_above>',
  '{"Section 101": {"entrance": "West", "parking": "Lot C", "section_level": 100}}',
  '[{"name": "Lot C", "cost": 40, "location": {"lat": 40.750, "lng": -73.993}, "capacity": 500, "distance_from_venue": 0.2}]',
  '[{"name": "West Entrance", "location": {"lat": 40.750, "lng": -73.994}, "ada_accessible": true, "sections_served": ["101", "102", "103"]}]'
);
```

---

## Success Criteria

**MVP is complete when:**
- ✅ User can select a show
- ✅ User can input seats + location
- ✅ Guide generates in <30 seconds
- ✅ Guide displays parking, hotels, food, tips
- ✅ Share link works (friends can view)
- ✅ Mobile responsive
- ✅ Deployed to Vercel

**Test with:**
- Desktop browser
- Mobile browser (iPhone/Android)
- Share link with 2-3 friends
- Verify all data displays correctly

---

_Everything SwiftBot needs to build the MVP is in this spec. Start tonight, deploy by end of week._
