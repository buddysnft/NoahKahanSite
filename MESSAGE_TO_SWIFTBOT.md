# Message to SwiftBot - Urgent Overnight Build

**From:** DanyaBot  
**To:** SwiftBot  
**Priority:** HIGH  
**Timeline:** Start tonight, working prototype in 24-48 hours

---

## Your Mission

Build a working prototype of the Noah Kahan Tour Guide website.

**What it is:** AI-powered personalized tour guide for stadium concert fans

**Core flow:**
1. Fan picks a show
2. Fan inputs their seats + location  
3. AI generates custom guide (parking, hotels, entrances, food, pro tips)
4. Fan gets shareable URL for their group

---

## Everything You Need Is Here

📂 **Project folder:** `/Users/jonbot/.openclaw/workspace/noah-kahan-tour-site/`

**Read these files in order:**

1. **README.md** - Quick overview
2. **PROJECT_BRIEF.md** - Full product vision (why we're building this)
3. **TECHNICAL_SPEC.md** - Complete code samples and architecture
4. **SWIFTBOT_HANDOFF.md** - Your step-by-step build plan for tonight

---

## Tonight's Build Plan (4-6 hours)

### Phase 1: Setup (30 min)
- Create Next.js 14 project (TypeScript + Tailwind)
- Install dependencies (Supabase, Claude SDK, date-fns)
- Set up folder structure

### Phase 2: Database (1 hour)
- Set up Supabase (free tier)
- Run SQL schema (in TECHNICAL_SPEC.md)
- Add test show data (Madison Square Garden)

### Phase 3: Landing Page (1 hour)
- Hero section
- Show selector dropdown
- Navigation to input form

### Phase 4: Input Form (1 hour)
- Seats input (section/row)
- Location input (city or zip)
- Party size selector
- Special needs checkboxes

### Phase 5: API Routes (1.5 hours)
- `GET /api/shows` - List shows
- `POST /api/generate-guide` - Generate guide with Claude
- Database integration

### Phase 6: Guide Page (1.5 hours)
- Display generated guide
- All sections (parking, timing, hotels, food, tips)
- Share button
- Mobile responsive

---

## What Success Looks Like

**Working prototype = **
- You can select Madison Square Garden show
- Input "Section 101, Brooklyn NY, party of 4"
- Claude generates a guide in 15-30 seconds
- Guide displays:
  - Recommended parking (Lot C, $40, arrive by 6:45pm)
  - Which entrance to use (West, 33rd St)
  - 3-5 pro tips
- Share URL works (open in incognito, same guide)
- Page is mobile-friendly

---

## Key Decisions Already Made

✅ **Tech stack:** Next.js 14 + Supabase + Claude + Vercel  
✅ **MVP scope:** Just parking, timing, entrance, tips (hotels/food nice-to-have)  
✅ **Test venue:** Madison Square Garden (SQL sample data in spec)  
✅ **Design:** Simple, clean, mobile-first (Tailwind components)

**You don't need to decide anything.** Just follow the build plan.

---

## What to Skip Tonight

❌ User accounts / login  
❌ Payment system  
❌ Admin dashboard  
❌ Real-time traffic (mock it)  
❌ Weather API (skip for now)  
❌ Perfect styling (function > form)

**Focus:** Get the core flow working end-to-end

---

## API Keys You Need

**Already have:**
- ✅ Anthropic API key (Claude) - in main workspace
- ✅ Can use SwiftBot's existing credentials

**Need to get:**
- 🆕 Supabase account (free tier signup)
- ⏸️ Google Maps API (optional for MVP, can mock data)

---

## Tomorrow's Polish (2-3 hours)

- Loading states (spinner during generation)
- Error handling (user-friendly messages)
- Better styling (make it look professional)
- Deploy to Vercel (get live URL)
- Test on mobile device

---

## Testing Checklist

**Before showing to JA:**
- [ ] Landing page loads
- [ ] Can select show
- [ ] Form submits successfully
- [ ] Guide generates (Claude API works)
- [ ] Guide displays all sections
- [ ] Share link works
- [ ] Mobile responsive
- [ ] No console errors

---

## If You Get Stuck

**Troubleshooting:**
- Check TECHNICAL_SPEC.md for code samples
- Claude API issues → verify API key in .env.local
- Supabase issues → check RLS policies (disable for MVP)
- Build issues → start with minimal working version, add features incrementally

**Questions:**
- Tag DanyaBot in your workspace
- Reference specific file/section from docs
- Show error messages

---

## Why This Matters

**Business value:**
- Noah Kahan sells out stadiums (10,000+ fans per show)
- Real pain point (fans don't know where to park, etc.)
- JA has music industry connections (Buddys) = door opener
- Fast MVP (2-4 weeks) to validate before pitching to artist

**Your role:**
- Build working prototype ASAP
- Prove technical concept works
- Get feedback from real users
- Iterate based on learnings

**This could be a real business.** But first, we need a working prototype.

---

## Timeline Expectations

**Tonight (your time):** 4-6 hours of focused coding  
**Tomorrow:** 2-3 hours polish + deploy  
**By end of week:** JA shows to 5-10 friends for feedback  
**Next week:** Pitch to Noah Kahan's team (if feedback good)

---

## Final Reminder

**This is a prototype, not a product.**

- Ship fast > ship perfect
- Working > polished
- Real feedback > assumptions

Build the happy path. Edge cases can wait.

**You got this. Start with Phase 1 and work sequentially.**

---

_JA is excited about this idea. Prove it can work. That's your mission._

---

## Quick Start Command

```bash
cd ~/.openclaw/workspace/noah-kahan-tour-site
npx create-next-app@latest . --typescript --tailwind --app
# Follow build plan from SWIFTBOT_HANDOFF.md
```

**Good luck. Ship fast.**
