# Sprint 01: Noah Kahan Tour Guide MVP

**Agent:** SwiftBot  
**Project:** Noah Kahan Fan Tour Guide  
**Sprint Duration:** 3 days (2026-03-05 to 2026-03-08)  
**Sprint Goal:** Ship working prototype to Vercel with shareable URL  
**Success Metric:** 5+ friends test successfully and rate "helpful"

---

## Sprint Overview

**What we're building:**
AI-powered personalized tour guide for Noah Kahan stadium shows. Fans input their seats and location, get custom recommendations for parking, timing, entrances, food, and pro tips.

**Why this sprint matters:**
- Fast validation of product concept (2-4 weeks to market)
- Real artist (Noah Kahan), real demand (stadium shows)
- JA has music industry connections via Buddys (door opener)
- If successful, pitch to artist's team next week

**Sprint deliverable:**
Working website deployed to Vercel where anyone can:
1. Select a show
2. Input their info
3. Get a personalized guide
4. Share with friends

---

## Pre-Sprint Setup (Before You Start)

### Required Accounts
- [ ] Supabase account (free tier) - https://supabase.com
- [ ] Vercel account (free tier) - https://vercel.com
- [ ] Google Cloud (for Maps API) - Optional for MVP

### Required API Keys
- [x] Anthropic API key (already have)
- [ ] Supabase project URL + anon key
- [ ] Supabase service key (for database admin)

### Development Environment
- [x] Node.js v18+ installed
- [x] npm or pnpm
- [x] Git initialized
- [ ] Code editor (Cursor, VS Code, or similar)

---

## Day 1: Foundation (March 5, Evening → March 6 Morning)

**Goal:** Project setup + database + landing page  
**Time estimate:** 4-6 hours  
**End state:** Can select a show from landing page

---

### Task 1.1: Initialize Next.js Project

**Acceptance criteria:**
- [x] Next.js 14 project created with App Router
- [x] TypeScript configured
- [x] Tailwind CSS working
- [x] Dev server runs without errors (`npm run dev`)
- [x] Git repository initialized

**Commands:**
```bash
cd ~/.openclaw/workspace/noah-kahan-tour-site
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
git init
git add .
git commit -m "Initial Next.js setup"
```

**File structure check:**
```
noah-kahan-tour-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

**Verification:**
- Run `npm run dev`
- Open http://localhost:3000
- See default Next.js page
- No errors in console

---

### Task 1.2: Install Dependencies

**Acceptance criteria:**
- [x] All required packages installed
- [x] `package.json` updated
- [x] No dependency conflicts
- [x] TypeScript types available

**Commands:**
```bash
npm install @supabase/supabase-js
npm install @anthropic-ai/sdk
npm install date-fns
npm install lucide-react
npm install nanoid
npm install -D @types/node
```

**Verification:**
```bash
npm list --depth=0
# Should show all packages installed
```

---

### Task 1.3: Environment Variables Setup

**Acceptance criteria:**
- [x] `.env.local` file created
- [x] `.env.local` added to `.gitignore`
- [x] Placeholder values for all keys
- [x] `.env.example` created for documentation

**Create `.env.local`:**
```env
# Supabase (get from https://app.supabase.com)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_KEY=your-service-key-here

# Anthropic (already have)
ANTHROPIC_API_KEY=sk-ant-api03-...

# Google Maps (optional for MVP)
GOOGLE_MAPS_API_KEY=AIza...

# Base URL (update after Vercel deploy)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Create `.env.example`:**
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=
ANTHROPIC_API_KEY=
GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Update `.gitignore`:**
```
.env*.local
.env
```

**Verification:**
- `.env.local` exists and has all keys
- `.env.local` NOT committed to git
- Can access process.env variables in code

---

### Task 1.4: Create Supabase Project & Database

**Acceptance criteria:**
- [x] Supabase project created
- [x] Database schema applied (3 tables)
- [x] Test show data inserted
- [x] Can query data successfully

**Steps:**

1. **Create Supabase project:**
   - Go to https://app.supabase.com
   - "New Project"
   - Name: "noah-kahan-tour"
   - Strong password
   - Region: US East (closest to you)
   - Free tier

2. **Run SQL schema:**
   - Open SQL Editor in Supabase
   - Copy entire schema from TECHNICAL_SPEC.md
   - Execute

**SQL Schema (from TECHNICAL_SPEC.md):**
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
  seating_map JSONB NOT NULL,
  parking_lots JSONB NOT NULL,
  entrances JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Generated guides
CREATE TABLE generated_guides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  show_id UUID REFERENCES shows(id) ON DELETE CASCADE,
  user_section TEXT NOT NULL,
  user_location TEXT NOT NULL,
  party_size INTEGER NOT NULL,
  special_needs JSONB,
  guide_data JSONB NOT NULL,
  share_token TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  views INTEGER DEFAULT 0
);

-- Indexes
CREATE INDEX idx_shows_date ON shows(show_date);
CREATE INDEX idx_guides_token ON generated_guides(share_token);
CREATE INDEX idx_guides_show ON generated_guides(show_id);

-- Disable RLS for MVP (re-enable later)
ALTER TABLE shows DISABLE ROW LEVEL SECURITY;
ALTER TABLE venue_data DISABLE ROW LEVEL SECURITY;
ALTER TABLE generated_guides DISABLE ROW LEVEL SECURITY;
```

3. **Insert test show data:**

```sql
-- Test show: Madison Square Garden
INSERT INTO shows (
  artist, venue_name, venue_address, venue_city, venue_state, 
  show_date, doors_open, show_start, capacity
) VALUES (
  'Noah Kahan',
  'Madison Square Garden',
  '4 Pennsylvania Plaza',
  'New York',
  'NY',
  '2026-03-15 19:00:00-05',
  '18:00',
  '19:30',
  20000
) RETURNING id;

-- Copy the returned ID, use it below as <SHOW_ID>
```

4. **Insert venue data:**

```sql
-- Replace <SHOW_ID> with actual UUID from above
INSERT INTO venue_data (show_id, seating_map, parking_lots, entrances)
VALUES (
  '<SHOW_ID>',
  '{
    "Section 101": {"entrance": "West", "parking": "Lot C", "section_level": 100},
    "Section 102": {"entrance": "West", "parking": "Lot C", "section_level": 100},
    "Section 201": {"entrance": "East", "parking": "Lot B", "section_level": 200}
  }',
  '[
    {
      "name": "Lot C (West Side)",
      "cost": 40,
      "location": {"lat": 40.7505, "lng": -73.9934},
      "capacity": 500,
      "distance_from_venue": 0.2
    },
    {
      "name": "Lot B (East Side)",
      "cost": 45,
      "location": {"lat": 40.7515, "lng": -73.9910},
      "capacity": 300,
      "distance_from_venue": 0.3
    }
  ]',
  '[
    {
      "name": "West Entrance (33rd St)",
      "location": {"lat": 40.7505, "lng": -73.9935},
      "ada_accessible": true,
      "sections_served": ["101", "102", "103", "104", "105"]
    },
    {
      "name": "East Entrance (7th Ave)",
      "location": {"lat": 40.7515, "lng": -73.9925},
      "ada_accessible": true,
      "sections_served": ["201", "202", "203", "204", "205"]
    }
  ]'
);
```

5. **Update `.env.local` with Supabase keys:**
   - Go to Project Settings → API
   - Copy URL → `NEXT_PUBLIC_SUPABASE_URL`
   - Copy `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Copy `service_role` → `SUPABASE_SERVICE_KEY` (keep secret!)

**Verification:**
- Run query in Supabase SQL Editor: `SELECT * FROM shows;`
- Should return 1 row (Madison Square Garden)
- Run: `SELECT * FROM venue_data;`
- Should return venue data with parking/entrances

---

### Task 1.5: Create Supabase Client

**Acceptance criteria:**
- [x] `lib/supabase.ts` created
- [x] Client correctly initialized
- [x] Can query shows from code
- [x] TypeScript types working

**Create `lib/supabase.ts`:**
```typescript
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseKey);
}
```

**Verification test (temporary):**
Add to `app/page.tsx`:
```typescript
import { createClient } from '@/lib/supabase';

export default async function Home() {
  const supabase = createClient();
  const { data: shows } = await supabase.from('shows').select('*');
  
  return (
    <div>
      <h1>Test</h1>
      <pre>{JSON.stringify(shows, null, 2)}</pre>
    </div>
  );
}
```

- Refresh page
- Should see show data in JSON
- Remove test code after verification

---

### Task 1.6: Create TypeScript Types

**Acceptance criteria:**
- [x] `lib/types.ts` created with all interfaces
- [x] Types match database schema
- [x] No TypeScript errors

**Create `lib/types.ts`:**
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
  created_at?: string;
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
  from_location: string;
  party_size: number;
  special_needs: {
    ada: boolean;
    strobe_warning: boolean;
    first_timer: boolean;
  };
}

export interface GeneratedGuide {
  id: string;
  show_id: string;
  user_section: string;
  user_location: string;
  party_size: number;
  special_needs: any;
  guide_data: GuideRecommendations;
  share_token: string;
  created_at: string;
  views: number;
}

export interface GuideRecommendations {
  parking: {
    lot: ParkingLot;
    alternatives: ParkingLot[];
    reasoning: string;
  };
  timing: {
    leave_by: string;
    arrive_by: string;
    drive_time_minutes: number;
    traffic_level: 'light' | 'moderate' | 'heavy';
  };
  entrance: {
    entrance: Entrance;
    walk_time_minutes: number;
    crowd_level: 'low' | 'medium' | 'high';
    reasoning: string;
  };
  hotels?: Hotel[];
  food?: Restaurant[];
  pro_tips: string[];
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
  price_level: number;
  google_maps_url: string;
}
```

**Verification:**
- No TypeScript errors in VS Code
- Can import types: `import { Show } from '@/lib/types';`

---

### Task 1.7: Build Landing Page

**Acceptance criteria:**
- [x] `app/page.tsx` displays hero section
- [x] Show selector dropdown works
- [x] "Get Your Guide" button navigates to form
- [x] Mobile responsive
- [x] Looks professional (Tailwind styled)

**Create `app/page.tsx`:**
```typescript
import Link from 'next/link';
import ShowSelector from '@/components/ShowSelector';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Noah Kahan Tour Guide
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Your personalized stadium companion. Get custom recommendations for 
            parking, hotels, food, and insider tips based on your seats.
          </p>
        </div>

        {/* Show Selector */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Select Your Show
            </h2>
            <ShowSelector />
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard 
            icon="📍"
            title="Smart Parking"
            description="Best lot for your seats with timing and cost breakdown"
          />
          <FeatureCard 
            icon="🏨"
            title="Hotel Picks"
            description="Top recommendations based on distance and your budget"
          />
          <FeatureCard 
            icon="💡"
            title="Pro Tips"
            description="Insider knowledge: best entrances, merch lines, and more"
          />
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>Not affiliated with Noah Kahan or venues. Recommendations for informational purposes only.</p>
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
    <div className="text-center p-6">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

**Create `components/ShowSelector.tsx`:**
```typescript
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Show } from '@/lib/types';
import { format } from 'date-fns';

export default function ShowSelector() {
  const router = useRouter();
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState('');

  useEffect(() => {
    fetchShows();
  }, []);

  async function fetchShows() {
    try {
      const res = await fetch('/api/shows');
      const data = await res.json();
      setShows(data.shows || []);
    } catch (error) {
      console.error('Error fetching shows:', error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedShow) {
      router.push(`/show/${selectedShow}`);
    }
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Loading shows...</p>
      </div>
    );
  }

  if (shows.length === 0) {
    return (
      <div className="text-center py-8 text-gray-600">
        <p>No upcoming shows available.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <select
          value={selectedShow}
          onChange={(e) => setSelectedShow(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
        >
          <option value="">Choose a show...</option>
          {shows.map((show) => (
            <option key={show.id} value={show.id}>
              {show.venue_name} - {show.venue_city}, {show.venue_state} - 
              {format(new Date(show.show_date), ' MMM d, yyyy')}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={!selectedShow}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
      >
        Get Your Personalized Guide →
      </button>
    </form>
  );
}
```

**Create `app/api/shows/route.ts`:**
```typescript
import { createClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createClient();
    
    const { data: shows, error } = await supabase
      .from('shows')
      .select('*')
      .gte('show_date', new Date().toISOString())
      .order('show_date', { ascending: true });
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ shows });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

**Verification:**
- Visit http://localhost:3000
- See hero section
- Show selector dropdown shows "Madison Square Garden"
- Click "Get Your Guide" → redirects to `/show/[id]` (404 for now, that's expected)
- Page looks good on mobile (test in Chrome DevTools)

**Checkpoint:** Landing page complete, can select show ✅

---

## Day 1 Completion Checklist

- [ ] Project initialized with Next.js + TypeScript + Tailwind
- [ ] All dependencies installed
- [ ] Environment variables configured
- [ ] Supabase project created with test data
- [ ] Supabase client working
- [ ] TypeScript types defined
- [ ] Landing page built and styled
- [ ] Show selector fetching data from database
- [ ] No errors in console
- [ ] Mobile responsive

**Git commit:**
```bash
git add .
git commit -m "Day 1: Project setup, database, landing page complete"
```

**Tomorrow:** Build input form + guide generation API

---

## Day 2: Core Functionality (March 6)

**Goal:** Input form → Claude API → Generated guide  
**Time estimate:** 6-8 hours  
**End state:** Can generate a complete guide

---

### Task 2.1: Build Show Detail Page with Input Form

**Acceptance criteria:**
- [x] `/show/[id]` page loads show details
- [x] Input form with all required fields
- [x] Form validation working
- [x] Submit triggers guide generation
- [x] Loading state displays during generation

**Create `app/show/[id]/page.tsx`:**
```typescript
import { createClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import InputForm from '@/components/InputForm';

export default async function ShowPage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  
  const { data: show, error } = await supabase
    .from('shows')
    .select('*')
    .eq('id', params.id)
    .single();
  
  if (error || !show) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Show Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {show.artist}
          </h1>
          <p className="text-xl mb-1">{show.venue_name}</p>
          <p className="text-lg opacity-90">
            {show.venue_city}, {show.venue_state}
          </p>
          <p className="text-lg opacity-90">
            {format(new Date(show.show_date), 'EEEE, MMMM d, yyyy')}
          </p>
          <div className="mt-4 pt-4 border-t border-white/30">
            <p className="text-sm">
              Doors: {show.doors_open} | Show: {show.show_start}
            </p>
          </div>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Plan Your Visit</h2>
          <p className="text-gray-600 mb-6">
            Tell us about your seats and we'll create a personalized guide
            with parking, timing, food recommendations, and insider tips.
          </p>
          <InputForm showId={show.id} />
        </div>
      </div>
    </main>
  );
}
```

**Create `components/InputForm.tsx`:**
```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  section: string;
  row: string;
  from_location: string;
  party_size: number;
  special_needs: {
    ada: boolean;
    strobe_warning: boolean;
    first_timer: boolean;
  };
}

export default function InputForm({ showId }: { showId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
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
    setError('');

    try {
      const res = await fetch('/api/generate-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          show_id: showId,
          ...formData
        })
      });

      if (!res.ok) {
        throw new Error('Failed to generate guide');
      }

      const { share_url } = await res.json();
      router.push(share_url);
    } catch (err) {
      console.error('Error generating guide:', err);
      setError('Failed to generate guide. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Seats */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Seats *
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Section (e.g. 101)"
            required
            value={formData.section}
            onChange={(e) => setFormData({ ...formData, section: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Row (optional)"
            value={formData.row}
            onChange={(e) => setFormData({ ...formData, row: e.target.value })}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Check your ticket for section number
        </p>
      </div>

      {/* Coming From */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Coming From *
        </label>
        <input
          type="text"
          placeholder="City or Zip Code (e.g. Brooklyn NY, 11201)"
          required
          value={formData.from_location}
          onChange={(e) => setFormData({ ...formData, from_location: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Party Size */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Party Size *
        </label>
        <select
          value={formData.party_size}
          onChange={(e) => setFormData({ ...formData, party_size: Number(e.target.value) })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {[...Array(20)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} {i === 0 ? 'person' : 'people'}
            </option>
          ))}
        </select>
      </div>

      {/* Special Needs */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Special Considerations (optional)
        </label>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.special_needs.ada}
              onChange={(e) => setFormData({
                ...formData,
                special_needs: { ...formData.special_needs, ada: e.target.checked }
              })}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-700">ADA accessible parking & entrance needed</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.special_needs.strobe_warning}
              onChange={(e) => setFormData({
                ...formData,
                special_needs: { ...formData.special_needs, strobe_warning: e.target.checked }
              })}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-700">Strobe/flash sensitivity (show warning)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.special_needs.first_timer}
              onChange={(e) => setFormData({
                ...formData,
                special_needs: { ...formData.special_needs, first_timer: e.target.checked }
              })}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-700">First-time concert goer (include basics)</span>
          </label>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Generating Your Guide...</span>
          </>
        ) : (
          'Generate My Personalized Guide →'
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        This usually takes 15-30 seconds
      </p>
    </form>
  );
}
```

**Verification:**
- Navigate to a show page
- All form fields display correctly
- Can type in all inputs
- Checkboxes toggle
- Submit button shows loading state
- Form validation works (try submitting empty)

---

### Task 2.2: Create Claude API Integration

**Acceptance criteria:**
- [x] `lib/claude.ts` created
- [x] Can call Claude API successfully
- [x] Generates realistic guide recommendations
- [x] Returns properly formatted JSON
- [x] Error handling in place

**Create `lib/claude.ts`:**
```typescript
import Anthropic from '@anthropic-ai/sdk';
import { GuideInput, GuideRecommendations, Show, VenueData } from './types';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function generateGuide(
  show: Show,
  venueData: VenueData,
  input: GuideInput
): Promise<GuideRecommendations> {
  
  const prompt = buildPrompt(show, venueData, input);
  
  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: prompt
      }]
    });

    const responseText = message.content[0].type === 'text' 
      ? message.content[0].text 
      : '';
    
    // Parse JSON from Claude's response
    const recommendations = parseClaudeResponse(responseText);
    
    return recommendations;
  } catch (error) {
    console.error('Claude API error:', error);
    throw new Error('Failed to generate guide');
  }
}

function buildPrompt(show: Show, venueData: VenueData, input: GuideInput): string {
  return `You are a helpful tour guide assistant for Noah Kahan concert attendees.

SHOW INFORMATION:
- Artist: ${show.artist}
- Venue: ${show.venue_name}
- Location: ${show.venue_city}, ${show.venue_state}
- Date: ${show.show_date}
- Doors open: ${show.doors_open}
- Show starts: ${show.show_start}

USER DETAILS:
- Seats: Section ${input.section}${input.row ? `, Row ${input.row}` : ''}
- Coming from: ${input.from_location}
- Party size: ${input.party_size} ${input.party_size === 1 ? 'person' : 'people'}
- ADA needs: ${input.special_needs.ada ? 'Yes' : 'No'}
- Strobe sensitivity: ${input.special_needs.strobe_warning ? 'Yes' : 'No'}
- First-timer: ${input.special_needs.first_timer ? 'Yes' : 'No'}

VENUE DATA:
Available parking lots: ${JSON.stringify(venueData.parking_lots, null, 2)}
Available entrances: ${JSON.stringify(venueData.entrances, null, 2)}
Seating map: ${JSON.stringify(venueData.seating_map, null, 2)}

TASK:
Generate a comprehensive, personalized tour guide with these exact sections:

1. PARKING RECOMMENDATION:
   - Choose best lot based on their section (use seating_map)
   - Provide reasoning (why this lot?)
   - List 1-2 alternatives
   ${input.special_needs.ada ? '- MUST prioritize ADA accessible option' : ''}

2. TIMING:
   - Calculate realistic leave time from their location
   - Recommend arrival time (factor in parking, walking, security)
   - Estimate drive time in minutes
   - Assess traffic level (light/moderate/heavy)

3. ENTRANCE RECOMMENDATION:
   - Which entrance should they use? (based on seating_map)
   - Estimated walk time from parking
   - Crowd level expectation (low/medium/high)
   - Reasoning for this entrance
   ${input.special_needs.ada ? '- MUST be ADA accessible' : ''}

4. PRO TIPS (5-7 tips):
   - Best merch line to avoid crowds
   - Bathroom locations nearest their section
   - Best concession stand
   - When to arrive for best merch selection
   - Post-show exit strategy
   - Cell service tips
   - Where to meet up if group separates
   ${input.special_needs.strobe_warning ? '- Include strobe/flash warning for show' : ''}
   ${input.special_needs.first_timer ? '- Include first-timer basics (what to expect, what to bring)' : ''}

FORMAT YOUR RESPONSE AS VALID JSON (no markdown, no code blocks):
{
  "parking": {
    "lot": { "name": "...", "cost": 40, "location": {...}, "capacity": 500, "distance_from_venue": 0.2 },
    "alternatives": [ {...}, {...} ],
    "reasoning": "This lot is closest to Section ${input.section} and has easy access to the West entrance..."
  },
  "timing": {
    "leave_by": "5:30 PM",
    "arrive_by": "6:45 PM",
    "drive_time_minutes": 45,
    "traffic_level": "moderate"
  },
  "entrance": {
    "entrance": { "name": "...", "location": {...}, "ada_accessible": true, "sections_served": [...] },
    "walk_time_minutes": 5,
    "crowd_level": "medium",
    "reasoning": "The West entrance serves Section ${input.section} and is closest to your parking..."
  },
  "pro_tips": [
    "Arrive by 6:45 PM for best merch selection before the rush",
    "Merch line on the east side typically has shorter wait times",
    "Bathrooms in Section 120 are closest to your seats",
    "Cell service can be spotty during the show - plan meetup spots in advance",
    "Exit via 33rd St after the show to avoid the 7th Ave crowd"
  ]
}

IMPORTANT:
- Be specific and practical
- Use real data from venue_data
- Personalize to their section and location
- Return ONLY the JSON object, no other text
- Make sure JSON is valid (proper quotes, no trailing commas)`;
}

function parseClaudeResponse(response: string): GuideRecommendations {
  // Remove markdown code blocks if present
  let cleaned = response.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\n/, '').replace(/\n```$/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\n/, '').replace(/\n```$/, '');
  }
  
  try {
    const parsed = JSON.parse(cleaned);
    return parsed;
  } catch (error) {
    console.error('Failed to parse Claude response:', error);
    console.error('Response was:', response);
    throw new Error('Invalid response format from AI');
  }
}
```

**Verification test:**
Create `test-claude.ts` (temporary):
```typescript
import { generateGuide } from './lib/claude';

const testShow = {
  id: 'test',
  artist: 'Noah Kahan',
  venue_name: 'Madison Square Garden',
  venue_city: 'New York',
  venue_state: 'NY',
  show_date: '2026-03-15T19:00:00',
  doors_open: '18:00',
  show_start: '19:30',
  capacity: 20000
};

const testVenueData = {
  id: 'test',
  show_id: 'test',
  seating_map: {
    "Section 101": { entrance: "West", parking: "Lot C", section_level: 100 }
  },
  parking_lots: [{
    name: "Lot C",
    cost: 40,
    location: { lat: 40.7505, lng: -73.9934 },
    capacity: 500,
    distance_from_venue: 0.2
  }],
  entrances: [{
    name: "West Entrance",
    location: { lat: 40.7505, lng: -73.9935 },
    ada_accessible: true,
    sections_served: ["101"]
  }]
};

const testInput = {
  show_id: 'test',
  section: '101',
  row: '5',
  from_location: 'Brooklyn NY',
  party_size: 4,
  special_needs: { ada: false, strobe_warning: false, first_timer: false }
};

generateGuide(testShow, testVenueData, testInput)
  .then(result => console.log(JSON.stringify(result, null, 2)))
  .catch(err => console.error(err));
```

Run: `npx tsx test-claude.ts`

Expected: JSON guide with parking, timing, entrance, pro_tips

Delete test file after verification.

---

### Task 2.3: Create Generate Guide API Route

**Acceptance criteria:**
- [x] `POST /api/generate-guide` endpoint working
- [x] Fetches show + venue data
- [x] Calls Claude API
- [x] Saves guide to database
- [x] Returns shareable URL
- [x] Error handling complete

**Create `app/api/generate-guide/route.ts`:**
```typescript
import { createClient } from '@/lib/supabase';
import { generateGuide } from '@/lib/claude';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  try {
    const input = await request.json();
    const supabase = createClient();
    
    // 1. Fetch show
    const { data: show, error: showError } = await supabase
      .from('shows')
      .select('*')
      .eq('id', input.show_id)
      .single();
    
    if (showError || !show) {
      return NextResponse.json(
        { error: 'Show not found' },
        { status: 404 }
      );
    }
    
    // 2. Fetch venue data
    const { data: venueData, error: venueError } = await supabase
      .from('venue_data')
      .select('*')
      .eq('show_id', input.show_id)
      .single();
    
    if (venueError || !venueData) {
      return NextResponse.json(
        { error: 'Venue data not found' },
        { status: 404 }
      );
    }
    
    // 3. Generate guide with Claude
    const recommendations = await generateGuide(show, venueData, input);
    
    // 4. Save to database
    const shareToken = nanoid(10); // Short unique ID
    
    const { data: savedGuide, error: saveError } = await supabase
      .from('generated_guides')
      .insert({
        show_id: input.show_id,
        user_section: input.section,
        user_location: input.from_location,
        party_size: input.party_size,
        special_needs: input.special_needs,
        guide_data: recommendations,
        share_token: shareToken
      })
      .select()
      .single();
    
    if (saveError) {
      console.error('Error saving guide:', saveError);
      return NextResponse.json(
        { error: 'Failed to save guide' },
        { status: 500 }
      );
    }
    
    // 5. Return shareable URL
    return NextResponse.json({
      success: true,
      guide_id: savedGuide.id,
      share_url: `/guide/${shareToken}`
    });
    
  } catch (error) {
    console.error('Generate guide error:', error);
    return NextResponse.json(
      { error: 'Failed to generate guide' },
      { status: 500 }
    );
  }
}
```

**Verification:**
- Submit form on show page
- Should see loading spinner
- After 15-30 seconds, redirects to `/guide/[token]`
- Check Supabase: `SELECT * FROM generated_guides;` should show 1 row
- Error handling: Try with invalid show_id, should get error message

**Checkpoint:** Can generate guide end-to-end ✅

---

## Day 2 Completion Checklist

- [ ] Show detail page loads correctly
- [ ] Input form accepts all fields
- [ ] Form validation working
- [ ] Claude API integration complete
- [ ] Generate guide API route working
- [ ] Guide saves to database successfully
- [ ] Returns shareable URL
- [ ] Error handling in place
- [ ] No console errors

**Git commit:**
```bash
git add .
git commit -m "Day 2: Input form and guide generation complete"
```

**Tomorrow:** Display generated guide + deployment

---

## Day 3: Guide Display & Deployment (March 7)

**Goal:** Beautiful guide page + deployed to Vercel  
**Time estimate:** 4-6 hours  
**End state:** Live URL anyone can access

---

### Task 3.1: Build Guide Display Page

**Acceptance criteria:**
- [x] `/guide/[token]` page loads guide from database
- [x] All sections display beautifully
- [x] Mobile responsive
- [x] Share button works
- [x] Handles 404 for invalid tokens

**Create `app/guide/[token]/page.tsx`:**
```typescript
import { createClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import ShareButton from '@/components/ShareButton';

export default async function GuidePage({ params }: { params: { token: string } }) {
  const supabase = createClient();
  
  // Fetch guide with show data
  const { data: guide, error } = await supabase
    .from('generated_guides')
    .select(`
      *,
      show:shows(*)
    `)
    .eq('share_token', params.token)
    .single();
  
  if (error || !guide) {
    notFound();
  }
  
  // Increment views
  await supabase
    .from('generated_guides')
    .update({ views: guide.views + 1 })
    .eq('id', guide.id);
  
  const { show, guide_data: rec } = guide;
  
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-6 shadow-lg">
          <div className="text-4xl mb-3">🎵</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Your Noah Kahan Guide</h1>
          <div className="space-y-1 opacity-95">
            <p className="text-xl font-semibold">{show.venue_name}</p>
            <p className="text-lg">{show.venue_city}, {show.venue_state}</p>
            <p>{format(new Date(show.show_date), 'EEEE, MMMM d, yyyy')}</p>
            <p className="text-sm mt-3 pt-3 border-t border-white/30">
              Section {guide.user_section} • Party of {guide.party_size}
            </p>
          </div>
        </div>

        {/* Parking */}
        <Section title="📍 Getting There & Parking" icon="📍">
          <Card>
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              {rec.parking.lot.name}
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="text-gray-600">Cost:</span>
                <span className="font-semibold ml-2">${rec.parking.lot.cost}</span>
              </div>
              <div>
                <span className="text-gray-600">Distance:</span>
                <span className="font-semibold ml-2">
                  {rec.parking.lot.distance_from_venue} mi walk
                </span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{rec.parking.reasoning}</p>
            
            {/* Timing */}
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-semibold text-blue-900 mb-2">⏰ Recommended Timing</p>
              <div className="space-y-1 text-sm">
                <p><strong>Leave by:</strong> {rec.timing.leave_by}</p>
                <p><strong>Arrive by:</strong> {rec.timing.arrive_by}</p>
                <p className="text-gray-600">
                  ~{rec.timing.drive_time_minutes} min drive • 
                  Traffic: {rec.timing.traffic_level}
                </p>
              </div>
            </div>
          </Card>
        </Section>

        {/* Entrance */}
        <Section title="🚪 Which Entrance to Use" icon="🚪">
          <Card>
            <h3 className="text-xl font-bold mb-2">
              {rec.entrance.entrance.name}
            </h3>
            <p className="text-gray-700 mb-3">{rec.entrance.reasoning}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>🚶 {rec.entrance.walk_time_minutes} min walk from parking</span>
              <span>•</span>
              <span>Crowd level: {rec.entrance.crowd_level}</span>
            </div>
            {rec.entrance.entrance.ada_accessible && (
              <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
                ♿ This entrance is ADA accessible
              </div>
            )}
          </Card>
        </Section>

        {/* Pro Tips */}
        <Section title="💡 Insider Tips" icon="💡">
          <Card>
            <ul className="space-y-3">
              {rec.pro_tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 text-lg font-bold mt-0.5">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        {/* Share */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md text-center">
          <h3 className="font-semibold text-lg mb-3">Share with Your Group</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Send this link to your friends so everyone has the same info
          </p>
          <ShareButton 
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/guide/${params.token}`}
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Recommendations for informational purposes only. Always check venue website for updates.</p>
          <p className="mt-2">Not affiliated with Noah Kahan or {show.venue_name}.</p>
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
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <span>{title}</span>
      </h2>
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      {children}
    </div>
  );
}
```

**Create `components/ShareButton.tsx`:**
```typescript
'use client';

import { useState } from 'react';

export default function ShareButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy link');
    }
  }

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Noah Kahan Tour Guide',
          text: 'Check out my personalized tour guide!',
          url: url
        });
      } catch (err) {
        // User cancelled, ignore
      }
    } else {
      handleCopy();
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button
        onClick={handleShare}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        📤 Share Guide
      </button>
      
      <button
        onClick={handleCopy}
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {copied ? '✅ Copied!' : '📋 Copy Link'}
      </button>
    </div>
  );
}
```

**Create `app/not-found.tsx`:**
```typescript
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Guide not found</p>
        <Link 
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg inline-block"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
```

**Verification:**
- Generate a guide
- Navigate to guide URL
- All sections display correctly
- Parking, timing, entrance, tips all visible
- Share button copies URL
- Page looks good on mobile
- Try invalid URL → see 404 page

---

### Task 3.2: Polish & Mobile Optimization

**Acceptance criteria:**
- [x] All pages mobile responsive
- [x] Loading states smooth
- [x] No layout shift
- [x] Fast page loads (<3 sec)
- [x] Accessible (keyboard navigation, screen readers)

**Updates to `app/layout.tsx`:**
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Noah Kahan Tour Guide - Personalized Concert Planning',
  description: 'Get personalized recommendations for parking, timing, food, and insider tips for Noah Kahan shows.',
  keywords: 'Noah Kahan, concert guide, tour guide, parking, Madison Square Garden',
  openGraph: {
    title: 'Noah Kahan Tour Guide',
    description: 'Your personalized stadium companion',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <a href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Noah Kahan Tour Guide
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
```

**Test checklist:**
- [ ] Test on iPhone (Chrome DevTools responsive mode)
- [ ] Test on Android (DevTools)
- [ ] Test on tablet (DevTools)
- [ ] Test keyboard navigation (Tab key)
- [ ] Test with screen reader (basic check)
- [ ] Check page load speed (Lighthouse)

---

### Task 3.3: Deploy to Vercel

**Acceptance criteria:**
- [x] Project deployed to Vercel
- [x] Environment variables set
- [x] Custom domain (optional)
- [x] HTTPS working
- [x] Live site accessible

**Steps:**

1. **Prepare for deployment:**
```bash
# Test production build locally
npm run build
npm run start
# Visit http://localhost:3000 - should work
```

2. **Push to GitHub:**
```bash
git add .
git commit -m "Day 3: Guide display page complete, ready for deployment"
git branch -M main
# Create GitHub repo, then:
git remote add origin https://github.com/YOUR_USERNAME/noah-kahan-tour.git
git push -u origin main
```

3. **Deploy to Vercel:**
- Go to https://vercel.com
- Sign in with GitHub
- "New Project"
- Import your GitHub repo
- Framework: Next.js (auto-detected)
- Root directory: ./
- Build command: `npm run build` (default)
- Environment variables:
  - Add all from `.env.local`
  - Update `NEXT_PUBLIC_BASE_URL` to your Vercel URL
- "Deploy"

4. **Post-deployment:**
- Wait for build to complete
- Visit your Vercel URL
- Test full flow (landing → form → generate guide → view guide)
- Share guide URL with friend (test shareable link)

5. **Update environment variable:**
- After first deploy, copy Vercel URL (e.g., `https://noah-kahan-tour.vercel.app`)
- Go to Project Settings → Environment Variables
- Update `NEXT_PUBLIC_BASE_URL` to your Vercel URL
- Redeploy (Deployments → click ... → Redeploy)

**Verification:**
- Site loads at Vercel URL
- Can select show
- Can generate guide
- Guide displays correctly
- Share link works
- No errors in Vercel logs

---

## Day 3 Completion Checklist

- [ ] Guide display page complete
- [ ] All sections render correctly
- [ ] Share button works
- [ ] 404 page for invalid guides
- [ ] Mobile responsive (tested)
- [ ] Site navigation working
- [ ] Production build succeeds
- [ ] Deployed to Vercel
- [ ] Live URL working
- [ ] Share links work across devices

**Git commit:**
```bash
git add .
git commit -m "Sprint 01 complete: MVP deployed to Vercel"
git push
```

---

## Sprint Completion Criteria

**MVP is DONE when:**

✅ **User flow works:**
1. User visits site
2. Selects show
3. Inputs seats + location
4. Gets personalized guide in <30 seconds
5. Can share link with friends
6. Friends see same guide

✅ **Quality:**
- No critical bugs
- Mobile responsive
- Loading states smooth
- Error handling works
- Site deployed and accessible

✅ **Content:**
- Guide includes parking, timing, entrance, pro tips
- Recommendations are specific to user's inputs
- Looks professional

---

## Testing Protocol

**Before declaring sprint complete:**

1. **Full user flow test (you):**
   - [ ] Navigate to site
   - [ ] Select Madison Square Garden
   - [ ] Input: Section 101, Brooklyn NY, 4 people
   - [ ] Generate guide
   - [ ] Verify all sections display
   - [ ] Copy share link
   - [ ] Open in incognito → same guide shows

2. **Share with 2-3 friends:**
   - [ ] Send them Vercel URL
   - [ ] Ask them to generate a guide
   - [ ] Gather feedback:
     - Was it helpful?
     - Was anything confusing?
     - What would make it better?

3. **Browser testing:**
   - [ ] Chrome (desktop)
   - [ ] Safari (mobile)
   - [ ] Firefox (desktop)

4. **Edge cases:**
   - [ ] Invalid show ID → 404
   - [ ] Invalid guide token → 404
   - [ ] Network error → user-friendly message

---

## Post-Sprint Actions

### Immediate (after sprint complete):
1. **Document learnings:**
   - What worked well?
   - What was harder than expected?
   - Any technical debt to address?

2. **Gather user feedback:**
   - Share with 5-10 friends
   - Ask specific questions:
     - "Would you use this for a real concert?"
     - "What's missing?"
     - "Any wrong/confusing info?"

3. **Create bugs/features backlog:**
   - Log any bugs found
   - List feature ideas from feedback

### Next steps (after feedback):
4. **Sprint 02 planning:**
   - Real Google Maps integration
   - Hotel/restaurant recommendations
   - Weather forecast
   - Real-time traffic

5. **Artist pitch prep:**
   - Compile user testimonials
   - Create pitch deck
   - Reach out to Noah's team via Buddys

---

## Success Metrics

**Sprint 01 success = **
- ✅ MVP deployed and working
- ✅ 5+ people test successfully
- ✅ >80% say "this is helpful"
- ✅ No critical bugs blocking usage

**If successful:**
→ Proceed to Sprint 02 (polish + more features)  
→ Start artist outreach via Buddys connections

**If not successful:**
→ Iterate based on feedback  
→ Fix critical issues  
→ Re-test before Sprint 02

---

## Files Created This Sprint

```
noah-kahan-tour-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── show/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── guide/
│   │   └── [token]/
│   │       └── page.tsx
│   └── api/
│       ├── shows/
│       │   └── route.ts
│       └── generate-guide/
│           └── route.ts
├── components/
│   ├── ShowSelector.tsx
│   ├── InputForm.tsx
│   └── ShareButton.tsx
├── lib/
│   ├── supabase.ts
│   ├── claude.ts
│   └── types.ts
├── .env.local
├── .env.example
└── README.md (updated)
```

---

## Emergency Contacts

**If stuck:**
- Tag DanyaBot in SwiftBot workspace
- Reference specific task number
- Include error messages
- Show what you've tried

**If blocked by external dependencies:**
- Supabase issues → check docs.supabase.com
- Vercel issues → check vercel.com/docs
- Claude API issues → check docs.anthropic.com

---

## Final Sprint Review

**Questions to answer:**
1. Did we ship working MVP? (Yes/No)
2. Can users generate personalized guides? (Yes/No)
3. Is the site deployed and accessible? (Yes/No)
4. Did we stay within scope? (Yes/No)
5. What surprised us (good or bad)?

**Document answers in:**
`/Users/jonbot/.openclaw/workspace/noah-kahan-tour-site/SPRINT_01_REVIEW.md`

---

_You got this, SwiftBot. Ship fast, iterate based on feedback. Good luck! 🚀_
