# SwiftBot Build Instructions - Noah Kahan Tour Site

**Priority:** High  
**Timeline:** Start tonight, MVP in 24-48 hours  
**Goal:** Functional prototype ready for testing

---

## What You're Building

**Product:** AI-powered personalized tour guide for Noah Kahan concert fans

**Core flow:**
1. Fan picks a show (dropdown)
2. Fan inputs seats + location
3. AI generates custom guide (parking, hotels, food, tips)
4. Fan gets shareable link for group

**Tech stack:**
- Next.js 14 + TypeScript + Tailwind
- Supabase (database)
- Claude API (guide generation)
- Vercel (deployment)

---

## Files to Read (In Order)

1. **PROJECT_BRIEF.md** - Full product context, blind spots, go-to-market
2. **TECHNICAL_SPEC.md** - Complete implementation guide, code samples
3. This file - Step-by-step build plan

---

## Tonight's Build Plan (4-6 hours)

### Phase 1: Setup (30 min)

**Tasks:**
- [ ] Create Next.js project with TypeScript + Tailwind
- [ ] Install dependencies (Supabase, Anthropic SDK, date-fns, lucide-react)
- [ ] Set up project structure (app/, components/, lib/)
- [ ] Create `.env.local` with placeholder keys
- [ ] Initialize Git repo

**Verification:** `npm run dev` starts successfully

---

### Phase 2: Database (1 hour)

**Tasks:**
- [ ] Sign up for Supabase (free tier)
- [ ] Create new project
- [ ] Run SQL schema from TECHNICAL_SPEC.md
  - `shows` table
  - `venue_data` table
  - `generated_guides` table
- [ ] Add test show data (Madison Square Garden example)
- [ ] Create Supabase client (`lib/supabase.ts`)
- [ ] Test connection

**Verification:** Can query test show from Supabase

---

### Phase 3: Landing Page (1 hour)

**Tasks:**
- [ ] Build `app/page.tsx` (hero + show selector)
- [ ] Create `components/ShowSelector.tsx`
  - Fetch shows from Supabase
  - Dropdown to pick show
  - "Get Your Guide" button → `/show/[id]` page
- [ ] Style with Tailwind (make it look good)

**Verification:** Landing page loads, shows test data

---

### Phase 4: Input Form (1 hour)

**Tasks:**
- [ ] Create `app/show/[id]/page.tsx`
- [ ] Build `components/InputForm.tsx` (all fields from spec)
  - Section/row input
  - Location input
  - Party size selector
  - Special needs checkboxes
  - Submit button
- [ ] Form validation (required fields)

**Verification:** Form submits, console logs data

---

### Phase 5: API Routes (1.5 hours)

**Tasks:**
- [ ] Create `app/api/shows/route.ts` (GET shows list)
- [ ] Create `app/api/generate-guide/route.ts` (POST)
  - Fetch show + venue data
  - Call Claude API (use template from TECHNICAL_SPEC)
  - Save guide to database
  - Return share URL
- [ ] Create `lib/claude.ts` wrapper
- [ ] Handle errors gracefully

**Verification:** Can generate a guide (mock data if needed)

---

### Phase 6: Guide Display (1.5 hours)

**Tasks:**
- [ ] Create `app/guide/[id]/page.tsx`
- [ ] Fetch guide from database by share_token
- [ ] Display all sections:
  - Header (show info, seats)
  - Parking recommendations
  - Timing (leave by, arrive by)
  - Hotels (if applicable)
  - Entrance recommendation
  - Food recommendations
  - Pro tips
- [ ] Create `components/ShareButton.tsx`
- [ ] Style everything (mobile-first)

**Verification:** Full guide displays correctly

---

## Tomorrow's Polish (2-3 hours)

### Phase 7: UX Improvements

**Tasks:**
- [ ] Loading states (spinner during guide generation)
- [ ] Error handling (user-friendly messages)
- [ ] Mobile responsiveness (test on phone)
- [ ] Add hero images (public domain concert photos)
- [ ] Favicon + metadata (SEO)

---

### Phase 8: Deployment

**Tasks:**
- [ ] Create Vercel account
- [ ] Deploy to Vercel
- [ ] Add environment variables
- [ ] Test deployed version
- [ ] Get shareable URL

**Verification:** Site works on live URL

---

## Key Decisions to Make

**1. Real APIs vs Mock Data?**

**Recommendation for MVP:**
- ✅ Use Claude API (we have key)
- ✅ Use Supabase (free tier)
- ⚠️ Mock Google Maps data for now (add API later)
- ⚠️ Skip Weather API for MVP

**Reasoning:** Faster to ship, can add real APIs incrementally

---

**2. How Much to Build Tonight?**

**Minimum viable overnight build:**
- ✅ Landing page
- ✅ Input form
- ✅ Claude integration (guide generation)
- ✅ Guide display page
- ⚠️ Skip hotels/food for now (focus on parking + timing + tips)

**Polish tomorrow:**
- Add hotels/restaurants
- Real Google Maps integration
- Weather forecast
- Better styling

---

**3. Data Sources for MVP?**

**For test show (Madison Square Garden):**
- Use Wikipedia for venue info
- Use Google Maps manually for parking lots
- Claude can generate realistic hotel/restaurant recommendations
- Pro tips can be generic but useful

**Don't overthink:** This is a prototype. Accuracy improves with real data later.

---

## Guardrails

**Things NOT to build tonight:**
- ❌ User accounts / login
- ❌ Payment system
- ❌ Admin dashboard
- ❌ Multiple venues (start with 1-2)
- ❌ Real-time traffic
- ❌ Mobile app (web only)

**Stay focused:** Just prove the core concept works.

---

## Testing Checklist

**Before showing to JA:**
- [ ] Landing page loads fast (<2 sec)
- [ ] Can select a show
- [ ] Input form accepts all fields
- [ ] Guide generates successfully
- [ ] Guide displays all sections
- [ ] Share link works (open in incognito)
- [ ] Works on mobile (Chrome DevTools)
- [ ] No console errors

---

## Troubleshooting

**If Claude API fails:**
- Check API key is set correctly
- Verify `.env.local` is loaded
- Start with simple prompt, add complexity later

**If Supabase connection fails:**
- Verify URL and anon key in env vars
- Check RLS (Row Level Security) policies
- Use Supabase dashboard to test queries

**If deployment fails:**
- Check build succeeds locally first (`npm run build`)
- Verify all env vars set in Vercel
- Check Vercel build logs

---

## Success = Prototype Works

**You'll know it's working when:**
1. You can input "Section 101, Brooklyn NY, party of 4"
2. Claude generates a guide
3. Guide displays parking (Lot C), timing (leave by 5:30pm), and 3-5 pro tips
4. You can share the URL with a friend and they see the same guide

**That's the MVP.** Everything else is polish.

---

## Questions to Ask Before Starting

1. Do I have all API keys? (Anthropic, Supabase)
2. Do I understand the core user flow?
3. What's the absolute minimum I can ship tonight?
4. What can wait until tomorrow?

**If stuck:** Focus on the happy path (working prototype). Edge cases can wait.

---

## Final Reminder

**This is a 2-week MVP, not a 6-month product.**

- Shipping > perfection
- Working prototype > polished design
- Real feedback > assumptions

Build fast, iterate based on actual user testing.

**Good luck. Start with Phase 1 setup and work through sequentially.**

---

_JA wants to see a working prototype ASAP. Prioritize speed over polish. You got this._
