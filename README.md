# Noah Kahan Tour Guide - Project Overview

**Status:** Ready for SwiftBot build  
**Created:** 2026-03-05  
**Timeline:** MVP in 2-4 weeks, prototype in 24-48 hours

---

## Quick Links

📋 **[PROJECT_BRIEF.md](./PROJECT_BRIEF.md)** - Full product vision, market analysis, blind spots  
🔧 **[TECHNICAL_SPEC.md](./TECHNICAL_SPEC.md)** - Complete technical implementation guide  
🤖 **[SWIFTBOT_HANDOFF.md](./SWIFTBOT_HANDOFF.md)** - Step-by-step build plan for SwiftBot

---

## What Is This?

AI-powered personalized tour guide for Noah Kahan stadium concert fans.

**Problem:** Fans don't know where to park, which entrance to use, best hotels, etc.  
**Solution:** Input your seats + location → Get custom recommendations

---

## Why This Will Work

1. **Real demand** - Noah Kahan sells out stadiums (10,000+ fans per show)
2. **Real problem** - Fans ask same questions repeatedly
3. **Fast MVP** - 2-4 weeks to validate concept
4. **Your advantage** - Music industry connections (Buddys) = credibility

---

## Tech Stack

- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **AI:** Claude API (guide generation)
- **Maps:** Google Maps API
- **Hosting:** Vercel

---

## MVP Features

✅ Show selector (pick concert)  
✅ Input form (seats, location, party size)  
✅ AI-generated guide:
- Parking recommendations
- Arrival timing
- Hotels (if far away)
- Best entrance
- Food nearby
- Pro tips

✅ Shareable link (send to friends)

---

## What SwiftBot Should Build

**Tonight (4-6 hours):**
1. Project setup (Next.js + dependencies)
2. Database (Supabase + test data)
3. Landing page + show selector
4. Input form
5. API routes (generate guide)
6. Guide display page

**Tomorrow (2-3 hours):**
7. Polish UX (loading states, mobile)
8. Deploy to Vercel
9. Test end-to-end

---

## Success Criteria

**MVP is successful if:**
- Guide generates in <30 seconds
- Recommendations are accurate (verified manually)
- 5+ friends test and give feedback
- Page is mobile-responsive
- Share links work correctly

**This validates:**
- Technical approach works
- UX is good enough
- Value prop resonates
- Ready to pitch to Noah's team

---

## Next Steps After MVP

1. **Validate** with real fans (test at show)
2. **Pitch** to Noah Kahan's team (via Buddys)
3. **Expand** to more tour dates
4. **Scale** to other artists (Chappell Roan, Sabrina Carpenter)

---

## Blind Spots Addressed

**See PROJECT_BRIEF.md for full analysis:**
- Venue data accuracy → Manual verification + crowdsource
- Real-time changes → Timestamps + disclaimers
- Liability → Clear ToS
- Privacy → Anonymous, no accounts needed
- Artist approval → Reach out early, frame as fan tool
- Scalability → Vercel auto-scales

---

## Files in This Folder

```
noah-kahan-tour-site/
├── README.md              # This file
├── PROJECT_BRIEF.md       # Full product vision
├── TECHNICAL_SPEC.md      # Implementation guide
└── SWIFTBOT_HANDOFF.md    # Build instructions for SwiftBot
```

---

## For SwiftBot

**Start here:**
1. Read PROJECT_BRIEF.md (understand why)
2. Read TECHNICAL_SPEC.md (understand how)
3. Read SWIFTBOT_HANDOFF.md (understand what to build tonight)
4. Execute build plan

**Questions? Ask DanyaBot.**

---

_This is a fast-moving MVP. Ship quickly, iterate based on feedback._
