# Clay Metuka — Website Build Status

## Current State (May 2026)

**Site is LIVE at claymetuka.com**

- **Hosting:** Vercel (clay-metuka team), auto-deploy on push to main
- **Repo:** github.com/clay-metuka/clay-metuka (PUBLIC — required for Vercel Hobby)
- **Framework:** Next.js 16 + Tailwind CSS v4 + TypeScript + React 19
- **Domain:** claymetuka.com via Namecheap, DNS pointed to Vercel
- **Dev tool:** Claude Code v2.1.81 (terminal, Windows), project at `C:\Users\tzvif\OneDrive\Desktop\clay-metuka`

## Pre-Launch Audit — Completed Passes

Site went through structured design audit via the impeccable skill family. Completed in order:

1. **/teach-impeccable** — design context calibration. Persisted CLAUDE.md with 6 principles: Hebrew-first, slow-craft pacing, imperfect/lived-in, mobile-equal-craft, restrained palette (terra leads/teal whispers), WCAG 2.1 AA floor.
2. **/audit** — comprehensive review against frontend-design anti-patterns. Found 4 Critical / 9 High / 8 Medium / 3 Low. Anti-pattern verdict: PASS (does not read as AI-generated; brand has defensible POV).
3. **/harden** — accessibility cluster (10 issues). Form labels with htmlFor, Hebrew lang/dir attributes via `<He>` component, skip-to-content link, focus-visible rings on Buttons + raw `<a>`, hamburger 44×44 touch target, FAQ aria-expanded, filter pill aria-pressed, heading hierarchy fix on Care, product card titles → h3, defensive type="submit" on form button.
4. **/normalize** — tokens + AA contrast. Bumped `text-light` #9B8E82 → #7A6B5C (4.87:1). Lifted footer sand opacities (sand/45 → sand/75, sand/40 → sand/70, sand/25 → sand/70). Hiddur Mitzvah body sand/50 → sand/75. Hardcoded #F5F0EA → text-bg token. Filter pill active state teal-on-teal → terra (decision-moment color per principle 5).
5. **/adapt** — responsive shortfalls. Mobile hero crop calibrated, gradient split (mobile bottom-up + desktop horizontal). Product detail h1 clamped 32-48px. Gallery 2-col on mobile with stacked card text.
6. **/animate** — reduced-motion respect. Global CSS override (`@media prefers-reduced-motion: reduce`) collapsing all animations + transitions to ~0ms. JS-level skip in FadeIn IntersectionObserver setup.
7. **/clarify** — Hebrew-first catalog hierarchy + empty filter state. Hebrew leading on gallery cards, Featured Work cards, product detail. Transliteration treated as italic phonetic guide. Empty state: "Nothing in this category yet. Commissions are always open — tell me what you're looking for."

**Skipped:** /distill (nav glassmorphism kept — subtle scroll-state effect liked).

**Pending:** /bolder for gallery + product detail (Featured Work resolved by carousel).

## Major Pre-Launch Decisions & Changes

### Hero photos swapped
- **Home hero:** `metuka-studio.jpg` (Metuka engraving plate, square photo, smile visible). Crop `object-[center_30%]` universally. Mobile gradient: bottom-up + extended top dim. Desktop gradient: horizontal dark-left + top sky-darkener.
- **Story hero:** `metuka-tray.jpeg` (tray sculpting portrait, action shot). Crop `object-[center_55%]` mobile / `object-[center_60%]` desktop.

### Hero composition
- Mobile: `min-h-[640px]`, `pt-[140px] pb-14`. Math: 640 − 196 padding = 444 available, content 427.6, 16.4 breathing room. Hero ~75% of iPhone 14 Pro viewport.
- Headline: "Ritual. Rooted. Handmade." with paragraph "Ceramic vessels for Jewish life. Made to be used." (50 chars, 2 lines on mobile, avoids "Handmade" repeat with headline).
- Both CTAs preserved on mobile (Explore the Collection + Commission a Piece).

### Featured Work — horizontal scroll carousel (replaces asymmetric grid)
- New file: `src/components/featured-carousel.tsx` (client component).
- Native CSS scroll-snap, no JS library.
- Mobile: 75vw card width, ~16px gap, ~17-20% peek of next card (75vw chosen over 80vw to ensure peek visible across rendering contexts including Windows Chrome scrollbar reservation).
- Desktop (md+): card width `calc((100vw-96px)/3.25)`, max 440px, ~21% peek of card 4. Shows 3 full cards + peek.
- Pulls all 8 visible products via `products.filter(p => p.images.length > 0)`. Kiddush Cup hidden (no photos).
- Cards use Hebrew-leading hierarchy: Hebrew h3 (24px font-hebrew lang/dir), transliteration italic 13px text-mid, tagline 13px text-light.
- **Chevron arrows** on both mobile and desktop, 40×40 terra-bordered circles, soft-loop behavior (clicking next at end smoothly scrolls back to start; clicking previous at start scrolls to end). Both arrows always full opacity. `aria-label` set, focus-visible ring, reduced-motion respected.
- Mobile arrow placement: row below heading, right-aligned. Desktop: inline with heading right-aligned.

### Product taglines (new field)
Added `tagline?: string` to Product type. All 8 visible products populated for carousel descriptors:
- Natla: "Ritual handwashing vessel"
- Kli Sheni: "Shabbat hot water vessel"
- Servingware: "Handmade serving tray"
- Challah Basket: "For your challah"
- Wine Pourer: "Spouted pourer for kiddush"
- Ceramic Mug: "Teal glaze, botanical carving"
- Espresso Cup: "For your morning ritual"
- Tea Light Holders: "For Shabbat candles"

### Renames & content fixes
- **Kiddush Divider → Wine Pourer.** Hebrew מחלק קידוש → מחלק יין. Slug `kiddush-divider` → `wine-pourer`. Image folder already `wine_pourer/`.
- **Tea Light Pair → Tea Light Holders.** Hebrew → מחזיקי נרות (was incorrect פמוטות = candlesticks).
- **Espresso Cup description.** Dropped "with a hamsa stamp" — not universal across all espresso cups. New: "A small, sturdy espresso cup, handmade for your morning ritual."
- **Hiddur Mitzvah Hebrew.** הידור מצווה → הידור מצוה (traditional defective spelling, single vav each word).

### Gallery product order
1. Natla, 2. Kli Sheni, 3. Servingware, 4. Challah Basket, 5. Wine Pourer, 6. Ceramic Mug, 7. Espresso Cup, 8. Tea Light Holders, 9. Kiddush Cup (hidden).
2-col mobile pairing: Wine Pourer + Mug, then Espresso + Tea Lights as bottom rows.

### Care page
- 4 boxes (dropped "Handle with love"). Equal sizing.
- "Dishwasher Safe" (was "Hand wash recommended"). Copy: "Top rack works. Just let pieces cool before they meet cold water."
- "Made to be used." h2 added with "CARE BASICS" label above the 4-box grid.
- Shipping copy generalized — no specific prices/timeframes.
- Oven safety reframed as "Shabbat Oven Safe" (blech/warming setup, not high-heat baking).

### Story page
- Process section hidden (TODO: restore when process photos available).
- "Hi, I'm Metuka" page hero — seal removed from above heading (was redundant with seal in nav/footer/Name section).
- "The Name" section — paragraph rewritten to lead with translation gloss: "The name means *Metuka*'s vessels. *Kli* is Hebrew for vessel. *Metuka* is my name, and also the word for sweet. *Clay* carries it across in English — it sounds like *kli*, and it's the material itself." No inline Hebrew (heading anchors it).
- Padding tightened ~25-30% across Hiddur Mitzvah, Why Clay, The Name sections.

### Commission flow
- Form wired to `mailto:metuka.hechtman@gmail.com` with all fields formatted into email body, subject "Commission inquiry from {name}". Hebrew survives URL encoding. WhatsApp alternative button preserved.
- Process copy softened: dropped sketch mention, dropped "3-6 weeks" specific. New step 3: "I'll give you a timing estimate once we've talked through the piece."
- No customization pricing displayed anywhere — kept conversational.

### Home page
- WhatsApp Inner Circle / Studio Circle CTA section hidden on home (commented out with TODO marker, restore when WhatsApp group launches).
- Maker section preserved with `metuka-about.jpeg` (different photo than hero — green leaf-pattern blouse, same person).

### Footer
- Mobile: shortened significantly. Connect section hidden on mobile (redundant copy with no button to tap). Tightened mobile padding inside and between sections.
- Bottom credits stack on mobile with `sm:pr-20` to clear floating WhatsApp FAB. Sand opacities at sand/70 throughout (was sand/25-45, all sub-AA).
- Desktop unchanged: 3 columns side-by-side with green WhatsApp button in Connect section.

### Logo / brand assets
- Seal logo at `public/images/logo.png` (was previously at `seal_final_192.png` — renamed during cleanup; old wordmark deleted).
- Favicon at `src/app/icon.png` synced from seal.
- Nav lockup: 40px circular seal + text logo image side-by-side, swaps light/dark based on scroll state.

## Pricing (Final)

| Product | Price NIS | Price USD |
|---|---|---|
| Natla | ₪200 | $56 |
| Kli Sheni | ₪175 | $49 |
| Servingware | From ₪250 | From $70 |
| Challah Basket | ₪300 | $84 |
| Kiddush Cup | ₪120 | $34 (hidden) |
| Tea Light Holders | ₪100 | $28 |
| Ceramic Mug | ₪150 | $42 |
| Espresso Cup | ₪70 | $20 |
| Wine Pourer | ₪150 | $42 |

USD calculated at ~$0.28/₪ ratio.

## Design System (Final)

**Colors:** Terracotta `#B5674E` (primary, decisions/CTAs), teal `#4A8C8C` / `#5B8E8A` (whispers — labels, Hebrew, check icons), warm parchment `#FAF6F1` (background), warm near-black `#2C2825` (text), text-light bumped to `#7A6B5C` for AA.

**Typography:** Cormorant Garamond (headings, weight 300), DM Sans (body), Frank Ruhl Libre (Hebrew), TAN Mon Cheri (text logo, Canva export).

## Wired Up

- WhatsApp links: all locations → `wa.me/972522552693`
- Social: Instagram (@clay_metuka), Facebook (/claymetuka)
- Auto-deploy: GitHub → Vercel pipeline
- Multi-photo galleries on all products via ProductGallery component
- mailto commission form (no backend)
- Skip-to-content link on every page
- Focus rings on all interactive elements
- Hebrew screen-reader pronunciation via lang/dir attributes

## TODO — Outstanding

### High priority
- **Run /bolder pass** on gallery + product detail pages (Featured Work resolved by carousel). Audit flagged these as "leans Shopify-default-feeling" — character pass would push past template territory. Reference: Story page Hiddur Mitzvah / The Name sections as the character model.
- **Real natla photo confirmation** — current photo is correct (two-handled, second handle hidden by camera angle), but worth getting Metuka to confirm and shoot additional angles.
- **Story page process photos** — currently hidden. Restore section when AI-generated or real photos available.
- **Metuka creates WhatsApp group** "Clay Metuka — Studio Circle" — wire invite link into restored home Inner Circle section.
- **Kiddush Cup needs photos** — currently hidden from gallery and carousel.

### Lower priority
- **Etsy shop** setup (secondary discovery channel)
- **Blog / Journal page** for SEO long-tail
- **OG / social sharing card** images
- **Google Search Console + Analytics**
- **Spouted kiddush cup product development**
- **Commission form → Resend API** (replace mailto with real backend) — v2

## Key Files

```
src/
  app/
    page.tsx           — Home page (hero + carousel section + maker)
    layout.tsx         — Root layout (skip link, nav, footer, FAB)
    globals.css        — Tailwind v4 tokens + reduced-motion override
    icon.png           — Favicon (seal logo)
    gallery/
      page.tsx         — Gallery grid with filters + empty state
      [slug]/page.tsx  — Product detail (Hebrew-leading hierarchy)
    story/page.tsx     — About/Story (Hiddur Mitzvah + The Name sections)
    commission/page.tsx — Commission form (mailto handoff)
    care/page.tsx      — Care basics + FAQ + shipping
  components/
    nav.tsx            — Navigation (transparent over hero, frosted on scroll)
    footer.tsx         — Footer (mobile-shortened, AA contrast)
    ui.tsx             — FadeIn, Label, Button (with type prop), He, PlaceholderImage, ArrowIcon
    product-gallery.tsx — Multi-image gallery on product detail
    featured-carousel.tsx — NEW: home page horizontal scroll carousel with arrows + soft-loop
    whatsapp-fab.tsx   — Floating WhatsApp button
  lib/
    products.ts        — 9 products, schema includes images[] + tagline?
public/
  images/
    logo.png           — Seal logo
    clay_metuka_text_white.png / _dark.png — Text logos
    metuka-studio.jpg  — Home hero (engraving plate)
    metuka-tray.jpeg   — Story hero (sculpting tray)
    metuka-about.jpeg  — Home Maker section
    products/          — Per-product image folders
```

## Project Knowledge / CLAUDE.md

The CLAUDE.md file at repo root contains the design context (users, brand personality, aesthetic direction, 6 principles, anti-references, tokens) — read by all future Claude Code sessions before touching the codebase. This is the canonical brand spec.

## Recent Commits (chronological, most recent first)

- /clarify + Featured Work carousel + 4 refinements (Story padding, Wine Pourer rename, Care dishwasher, Gallery reorder + Espresso desc fix, Tagline field, Carousel with soft-loop arrows)
- /animate (reduced-motion respect, global CSS override + JS skip in FadeIn)
- /normalize (text-light token bump, footer opacities, Hiddur paragraph, hero cream token, filter pill terra active)
- /harden (accessibility cluster — 10 issues)
- CLAUDE.md design context persisted via /teach-impeccable
- Various pre-audit tweaks: hero photo swap, paragraph rewrite, footer mobile shortening, story seal removal, Care 4-box layout
