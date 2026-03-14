# Noah Kahan Fan Tour Guide - Project Brief

**Created:** 2026-03-05  
**For:** SwiftBot overnight build  
**Deadline:** MVP in 2-4 weeks, prototype ASAP  
**Status:** Ready to build

---

## Executive Summary

**What:** Personalized tour guide website for Noah Kahan stadium shows  
**Why:** Fans need custom recommendations (parking, hotels, timing, entrances) based on their specific seats and location  
**How:** Simple web form → AI-generated personalized guide → shareable with friends

**Not:** Native app, complex booking system, ticket sales  
**Is:** Fast, personalized, practical tour prep tool

---

## User Problem Statement

**Current state:**
- Noah Kahan sells out stadiums (10,000+ fans per show)
- Fans ask same questions repeatedly:
  - "Where do I park for Section 101?"
  - "Best hotel near venue?"
  - "Which entrance should I use?"
  - "What time should I leave to avoid traffic?"
- Generic venue websites don't personalize
- Friends coordinate separately (inefficient)

**Desired state:**
- Fan inputs: seat location, coming from, group size
- Gets: Custom guide covering parking, hotels, entrances, timing, restaurants
- Shares: One link for whole group ("master tour")

---

## Core Features (MVP)

### 1. Input Form

**User provides:**
- Show date/venue (dropdown)
- Ticket section/seat (text input)
- Coming from (city or zip code)
- Party size (1-20)
- Special needs (checkboxes):
  - ADA accessible parking/entrance
  - Strobe sensitivity warning needed
  - First-time concert goer

**Output:** Personalized guide URL (shareable)

### 2. Personalized Guide Pages

**Sections (in order):**

#### A. Your Show Summary
- Date, venue, doors open time, show start time
- Weather forecast (day-of)
- Your seats: Section X, Row Y, Seats Z

#### B. Getting There
**Parking:**
- Recommended lot for your seats
- Cost estimate
- When to arrive (based on traffic + distance)
- Alternative lots (if primary full)

**Traffic/Timing:**
- Leave home by: [TIME] (based on distance + traffic)
- Arrive at venue by: [TIME] (doors - 30min buffer)
- Real-time traffic alerts (optional)

#### C. Where to Stay
**Hotels (if coming from >50 miles):**
- 3 recommendations ranked by:
  1. Distance to venue
  2. Price tier (budget/mid/luxury)
  3. Rating (Google/TripAdvisor)
- Walking distance or need Uber?

#### D. Best Entrance
- Which door to use (based on seat section)
- Avoid crowd tips ("East entrance less crowded")
- ADA entrance if needed

#### E. Food & Drink
**Pre-show:**
- Restaurants within walking distance
- Quick food (if running late)
- Bar recommendations (21+ groups)

**At venue:**
- Concession stand nearest your seats
- Best time to buy (avoid halftime rush)

#### F. Pro Tips
- Best merch line (shortest wait)
- Bathroom locations (nearest your section)
- Where to meet up if group splits
- Cell service dead zones
- Post-show exit strategy

#### G. Group Coordination
**Master Tour Link:**
- Send this URL to all friends
- Everyone gets same guide
- Group chat integration (optional)

### 3. Admin Dashboard (Phase 2)

**Artist/tour manager can:**
- Upload venue data (seats, parking, entrances)
- Update recommendations
- See analytics (how many guides generated)
- Push updates to all generated guides

---

## Technical Architecture

### Tech Stack Recommendation

**Frontend:**
- Next.js (React) - Fast, SEO-friendly, easy deployment
- Tailwind CSS - Quick styling
- Vercel hosting - Free tier, auto HTTPS

**Backend:**
- Next.js API routes (no separate backend needed)
- Supabase (database) - Free tier, real-time updates
- Claude API (guide generation)

**Data:**
- Google Maps API (distance, traffic, hotels, restaurants)
- Weather API (OpenWeather or similar)
- Venue data (manual entry for MVP, API later)

### Data Model

**Shows table:**
```sql
- id (uuid)
- artist (text) "Noah Kahan"
- venue_name (text) "Madison Square Garden"
- venue_address (text)
- show_date (datetime)
- doors_open (time)
- show_start (time)
- capacity (int)
```

**Venue_Data table:**
```sql
- id (uuid)
- show_id (fk)
- seating_map (json) -- section → entrance mapping
- parking_lots (json) -- name, location, cost, capacity
- entrances (json) -- name, location, ADA, sections served
```

**Generated_Guides table:**
```sql
- id (uuid)
- show_id (fk)
- user_section (text)
- user_location (text)
- party_size (int)
- special_needs (json)
- guide_data (json) -- cached recommendations
- share_link (text)
- created_at (timestamp)
```

### User Flow

```
1. Landing page → Select show
2. Input form → Submit details
3. AI generates guide (15-30 seconds)
4. Guide page → Shareable URL
5. Friends click link → Same guide
```

---

## Wireframes / Layout

### Landing Page

```
┌─────────────────────────────────────┐
│  NOAH KAHAN TOUR GUIDE              │
│  Your Personal Stadium Companion    │
├─────────────────────────────────────┤
│                                     │
│  [Hero Image: Noah performing]     │
│                                     │
│  Select Your Show:                  │
│  ┌──────────────────────────────┐  │
│  │ [Dropdown: Upcoming Shows]   │  │
│  └──────────────────────────────┘  │
│                                     │
│  [Get Your Guide →]                 │
│                                     │
└─────────────────────────────────────┘
```

### Input Form

```
┌─────────────────────────────────────┐
│  PLAN YOUR VISIT                    │
│  Madison Square Garden - Mar 15     │
├─────────────────────────────────────┤
│                                     │
│  Your Seats                         │
│  ┌──────────────────────────────┐  │
│  │ Section: [____]              │  │
│  │ Row:     [____] (optional)   │  │
│  └──────────────────────────────┘  │
│                                     │
│  Coming From                        │
│  ┌──────────────────────────────┐  │
│  │ City or Zip: [__________]    │  │
│  └──────────────────────────────┘  │
│                                     │
│  Party Size: [▼ 1-20]              │
│                                     │
│  Special Needs                      │
│  ☐ ADA accessible                   │
│  ☐ Strobe sensitivity warning       │
│  ☐ First-time concert goer          │
│                                     │
│  [Generate My Guide →]              │
│                                     │
└─────────────────────────────────────┘
```

### Guide Page

```
┌─────────────────────────────────────┐
│  🎵 YOUR NOAH KAHAN GUIDE           │
│  Madison Square Garden - Mar 15     │
│  Section 101, Row 5                 │
├─────────────────────────────────────┤
│                                     │
│  📍 GETTING THERE                   │
│  ┌──────────────────────────────┐  │
│  │ RECOMMENDED PARKING           │  │
│  │ Lot C (West Side)             │  │
│  │ $40 | 0.2 mi walk             │  │
│  │                               │  │
│  │ Leave by: 5:30 PM             │  │
│  │ Arrive by: 6:45 PM            │  │
│  └──────────────────────────────┘  │
│                                     │
│  🏨 WHERE TO STAY                   │
│  [3 hotel cards]                    │
│                                     │
│  🚪 YOUR ENTRANCE                   │
│  Use: West Entrance (33rd St)       │
│                                     │
│  🍔 FOOD NEARBY                     │
│  [3 restaurant cards]               │
│                                     │
│  💡 PRO TIPS                        │
│  • Merch line: East side least busy│
│  • Bathrooms: Section 120 (close)  │
│  • Exit via 33rd after show        │
│                                     │
│  [📤 Share This Guide]              │
│                                     │
└─────────────────────────────────────┘
```

---

## Blind Spots & Mitigation

### Blind Spot #1: Venue Data Accuracy

**Problem:** Wrong parking lot or entrance ruins experience

**Mitigation:**
- Manual verification for each venue (first show)
- Crowdsource corrections (report button)
- Partner with venue directly for official data
- Start with 1-2 venues, perfect those first

### Blind Spot #2: Real-Time Changes

**Problem:** Parking lot full, entrance closed, traffic accident

**Mitigation:**
- Display generation timestamp ("As of 3:00 PM")
- "Check venue site for updates" disclaimer
- Future: Real-time traffic API integration
- SMS alerts for major changes (Phase 2)

### Blind Spot #3: Liability

**Problem:** Fan follows guide, has bad experience, blames us

**Mitigation:**
- Clear disclaimer: "Recommendations only, not guarantees"
- Terms of service (standard web app boilerplate)
- Don't make medical claims (ADA is "accessibility info" not "medical advice")
- Insurance (E&O policy if this scales)

### Blind Spot #4: Data Privacy

**Problem:** Collecting user location, seat info

**Mitigation:**
- Don't require account/email for MVP
- Anonymous guide generation
- GDPR-compliant (if EU users)
- Clear privacy policy

### Blind Spot #5: Stale Data

**Problem:** Restaurant closed, hotel booked up

**Mitigation:**
- Pull fresh data from APIs (Google Maps, Yelp)
- Last-updated timestamp on recommendations
- User feedback: "Was this helpful?" (yes/no)
- Update guides 24hrs before show

### Blind Spot #6: Artist Approval

**Problem:** Using Noah Kahan's name/brand without permission

**Mitigation:**
- Reach out to his team EARLY (via Buddys connections)
- Frame as "fan-built tool" not official merch
- Offer to white-label for official use
- Don't monetize until artist approves
- Fair use disclaimer (informational, non-commercial MVP)

### Blind Spot #7: Scalability

**Problem:** 10,000 fans hit site at once (ticket sale day)

**Mitigation:**
- Vercel auto-scales (handles traffic spikes)
- Cache generated guides (don't regenerate identical requests)
- Rate limiting on API calls
- Static generation where possible

### Blind Spot #8: Multi-Show Complexity

**Problem:** Fans going to multiple shows want one master guide

**Mitigation:**
- MVP: One show at a time
- Phase 2: "My Tour" page (all your shows)
- Each guide has unique URL (easy to save/share)

---

## MVP Scope (Build This First)

**In scope:**
- ✅ Landing page + show selector
- ✅ Input form (seats, location, party size)
- ✅ AI-generated guide (parking, hotels, entrances, food, tips)
- ✅ Shareable link (one URL for whole group)
- ✅ 1-2 test venues (Madison Square Garden, Red Rocks)

**Out of scope (Phase 2):**
- ❌ User accounts / login
- ❌ Real-time traffic alerts
- ❌ Ticket purchasing
- ❌ In-app messaging
- ❌ Mobile app (web only)
- ❌ Artist admin dashboard
- ❌ Analytics/reporting

---

## Build Timeline

**Week 1 (Prototype):**
- Day 1-2: Setup Next.js + Tailwind + Supabase
- Day 3-4: Build input form + data model
- Day 5-7: AI guide generation (Claude integration)

**Week 2 (Polish):**
- Day 8-10: Styling, responsive design
- Day 11-12: Testing with real venue data
- Day 13-14: Deploy to Vercel, get feedback

**Week 3-4 (Iterate):**
- Gather user feedback (test with friends)
- Fix bugs, improve recommendations
- Add 2-3 more venues
- Prepare pitch for Noah's team

---

## Success Metrics (MVP)

**Validation criteria:**
- ✅ 10+ guides generated (friends/family testing)
- ✅ >80% find guide "helpful or very helpful"
- ✅ Shareable links work (group coordination)
- ✅ Page load <3 seconds
- ✅ Mobile responsive (most fans use phones)

**Growth metrics (post-MVP):**
- Guides generated per show
- Share rate (% of guides shared)
- Return usage (fans use for multiple shows)
- Artist/venue interest

---

## Revenue Model (Future)

**Phase 1 (MVP):** Free, no monetization  
**Phase 2 (Validate):** Freemium or artist-paid

**Option A: Artist Pays**
- Noah's team pays $X per tour
- Included with ticket purchase
- Positions as "premium fan experience"

**Option B: Fan Pays**
- $5-10 per show/tour
- Unlock full personalized guide
- Freemium: Basic free, premium features paid

**Option C: Sponsorship**
- Hotels/restaurants sponsor recommendations
- "Official hotel partner of Noah Kahan tour"

---

## Go-to-Market

**Phase 1: Manual Validation**
1. Build MVP for 1-2 venues
2. Test with 10-20 friends going to shows
3. Gather feedback, iterate

**Phase 2: Artist Pitch**
1. Reach out to Noah Kahan's team (via Buddys)
2. Pitch as fan experience enhancement
3. Offer white-label version
4. Get testimonials from early users

**Phase 3: Expand**
1. Add more Noah Kahan tour dates
2. Reach out to other touring artists (Chappell Roan, Sabrina Carpenter)
3. Build reputation as "the tour guide tool"

---

## Competitive Analysis

**Existing solutions:**
- Venue websites (generic, not personalized)
- Spotify presale emails (basic info only)
- Google Maps (shows location, not optimized route)
- Fan forums/Reddit (unreliable, scattered)

**Gap:** No one offers AI-personalized, all-in-one tour guides

**Our edge:**
- Personalized (your seats + your location)
- All-in-one (parking + hotels + food + tips)
- Shareable (group coordination)
- Fast (generate in seconds)

---

## Risks & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Artist says no | Medium | High | Reach out early, frame as fan tool |
| Venue data wrong | High | Medium | Manual verification, user feedback |
| No one uses it | Low | High | Start small, validate with friends |
| Tech doesn't scale | Low | Medium | Vercel auto-scales, cache guides |
| Privacy concerns | Low | Medium | Anonymous, clear privacy policy |

---

## Next Steps (For SwiftBot)

**Immediate (Tonight):**
1. Create Next.js project
2. Set up Tailwind CSS
3. Build landing page + show selector
4. Create input form component

**Tomorrow:**
5. Set up Supabase (database)
6. Integrate Claude API (guide generation)
7. Build guide page template

**This Week:**
8. Add 1-2 test venues (real data)
9. Test end-to-end flow
10. Deploy to Vercel

**Questions for SwiftBot to answer:**
- Which Next.js template/starter?
- Supabase vs other database?
- Claude API integration approach?
- Deployment strategy (Vercel vs alternatives)?

---

## Resources Needed

**Development:**
- Next.js knowledge (SwiftBot has this)
- Claude API key (we have this)
- Google Maps API key (need to get)
- Weather API key (free tier available)

**Data:**
- Venue seating maps (manual entry for MVP)
- Parking lot locations (Google Maps)
- Restaurant/hotel data (Google Places API)

**Design:**
- Simple, clean UI (Tailwind components)
- Mobile-first (most fans use phones)
- Accessible (ADA compliance)

---

## Success Definition

**MVP is successful if:**
1. Guide generates in <30 seconds
2. Recommendations are accurate (verified manually)
3. 5+ friends test and give feedback
4. Page is mobile-responsive
5. Shareable links work correctly

**This validates that:**
- Technical approach works
- User experience is good enough
- Value prop resonates with fans
- Ready to pitch to Noah's team

---

_Hand this entire brief to SwiftBot. Everything needed to build MVP is here._
