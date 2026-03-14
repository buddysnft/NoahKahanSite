# Harrison's Redesign Implementation Plan

## ✅ Assets Received
- [x] Tour poster image (saved to public/tour-poster.jpg)
- [ ] Penny illustration (will create SVG)

## 🎯 Implementation Phases

### Phase 1: Landing Page Redesign (30 min)
- [ ] Full-bleed tour poster
- [ ] Typography update (Google Fonts: Rye + Courier Prime)
- [ ] "Arrive → Explore" two-beat scroll
- [ ] Create Penny SVG (German Shepherd line art)
- [ ] Penny fixed position (bottom right desktop, bottom center mobile)
- [ ] Penny subtle wag animation on hover

### Phase 2: Field Notes Notebook Component (1.5 hours)
- [ ] Notebook cover page
- [ ] 9-page structure (Cover, Plan, Hotels, Noah's Picks, Eats, Parking, Getting There, Entrance, Tips)
- [ ] Swipe left/right on mobile
- [ ] Click edge on desktop
- [ ] Page indicator dots
- [ ] Paper texture overlay (CSS)
- [ ] Coffee ring stain on page 7-8
- [ ] Dog-eared corner detail

### Phase 3: Content Conversion (1 hour)
- [ ] Convert all 31 city guides to notebook format
- [ ] Badge Noah's personal picks
- [ ] Add hand-drawn map style for parking
- [ ] Photo + arrow overlay for venue entrance
- [ ] Timeline format for "Plan Your Day"

### Phase 4: Typography & Textures (30 min)
- [ ] Paper grain texture (CSS/SVG overlay)
- [ ] Warm shadows (not cool/digital)
- [ ] Woodblock display font (Rye)
- [ ] Typewriter body font (Courier Prime)
- [ ] Remove system fonts entirely

### Phase 5: Polish & Details (30 min)
- [ ] Mobile-first optimization
- [ ] High contrast for sunlight readability
- [ ] One-thumb navigation
- [ ] Fast load times
- [ ] Penny stamp on cover page
- [ ] Tone of voice adjustments (dry, warm, specific)

## 📊 Estimated Total Time: 3.5-4 hours

## 🎨 Design Tokens

### Colors (Keep Current)
- Gold: #d4834f (ink/stamp color)
- Cream: #faf8f5 (paper background)
- Brown: #3d3427 (text)
- Tan: #8b7355 (accent)

### Typography (NEW)
- Display: 'Rye', serif (woodblock style)
- Body UI: 'DM Sans', sans-serif
- Notebook: 'Courier Prime', monospace (typewriter)

### Textures
- Paper grain: subtle noise overlay, 2% opacity
- Coffee ring: PNG on page 7-8, 15% opacity
- Shadows: warm (rgba(0,0,0,0.1)), soft blur

## 📝 Notes
- Full redesign from Harrison's 8-page brief
- Penny = German Shepherd, Noah Kahan's dog
- Field Notes aesthetic = physical notebook metaphor
- Mobile-first: 390px screen priority
- Load fast for 1 bar of service in parking lot
