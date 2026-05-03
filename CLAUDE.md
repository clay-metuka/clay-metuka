<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

These defaults are optimized for AI coding agents (and humans) working on apps that deploy to Vercel.

- Treat Vercel Functions as stateless + ephemeral (no durable RAM/FS, no background daemons), use Blob or marketplace integrations for preserving state
- Edge Functions (standalone) are deprecated; prefer Vercel Functions
- Don't start new projects on Vercel KV/Postgres (both discontinued); use Marketplace Redis/Postgres instead
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Provision Marketplace native integrations with `vercel integration add` (CI/agent-friendly)
- Sync env + project settings with `vercel env pull` / `vercel pull` when you need local/offline parity
- Use `waitUntil` for post-response work; avoid the deprecated Function `context` parameter
- Set Function regions near your primary data source; avoid cross-region DB/service roundtrips
- Tune Fluid Compute knobs (e.g., `maxDuration`, memory/CPU) for long I/O-heavy calls (LLMs, APIs)
- Use Runtime Cache for fast **regional** caching + tag invalidation (don't treat it as global KV)
- Use Cron Jobs for schedules; cron runs in UTC and triggers your production URL via HTTP GET
- Use Vercel Blob for uploads/media; Use Edge Config for small, globally-read config
- If Enable Deployment Protection is enabled, use a bypass secret to directly access them
- Add OpenTelemetry via `@vercel/otel` on Node; don't expect OTEL support on the Edge runtime
- Enable Web Analytics + Speed Insights early
- Use AI Gateway for model routing, set AI_GATEWAY_API_KEY, using a model string (e.g. 'anthropic/claude-sonnet-4.6'), Gateway is already default in AI SDK
  needed. Always curl https://ai-gateway.vercel.sh/v1/models first; never trust model IDs from memory
- For durable agent loops or untrusted code: use Workflow (pause/resume/state) + Sandbox; use Vercel MCP for secure infra access
<!-- VERCEL BEST PRACTICES END -->

## Design Context

### Users

Observant Jewish women in Israel and the diaspora — gift-buyers, commissioners, and women furnishing their own ritual table. They arrive across two contexts that the design must hold equally:

- **Phone-quick from Instagram**: came from a story or post, has 10–30 seconds, needs to grasp the brand instantly and decide whether to follow, DM, or save for later.
- **Desktop-deep curious browse**: laptop in lap, time to read the Story, look at the work, get a feel before committing to a commission inquiry.

Jobs-to-be-done range from "find a meaningful gift for a wedding / bat mitzvah / housewarming" to "commission an heirloom-feeling piece for our own Shabbat table." Intent is patient — buyers expect to wait weeks for handmade work, not minutes.

### Brand Personality

**Earthy, intimate, lived-in.** Voice is Metuka in first person — direct, warm, no marketing speak. Religious context (halacha, Shabbat, hiddur mitzvah) handled with confidence, never preachy or apologetic. Hebrew is not decoration: כלי מתוקה is the actual name, English is the bridge. Tagline: *Ritual. Rooted. Handmade.*

The brand should feel like a kitchen table during nap time — honest about its scale, proud of what it makes, not pretending to be a polished e-commerce machine.

### Aesthetic Direction

**North star**: slow-craft artisan studios — East Fork, Heath Ceramics, Notary. Earthy palette, generous photography, story-forward over hard-sell, room to breathe.

**Anti-references**: stiff white-cube gallery minimalism, slick conversion-funnel e-commerce, generic Judaica gift-shop with crowded category grids and discount banners.

**Theme**: light mode only. Warm cream (`#FAF6F1`) is the canvas; pages are read on it, not on white. Imperfection is welcomed as a handmade signal.

**Existing tokens to honor** (in `src/app/globals.css`):

- Backgrounds: `bg` `#FAF6F1`, `bg-alt` `#F0EBE3`, `bg-white` `#FEFDFB`
- Text: `text` `#2C2825`, `text-mid` `#6B5E54`, `text-light` `#9B8E82`
- Terracotta (primary): `terra` `#B5674E`, `terra-dark` `#9E5A42`, `terra-light` `#D4946E`
- Teal (secondary, used as a whisper): `teal` `#4A8C8C`, `teal-light` `#7AB5B0`, `teal-muted` `#5B8E8A`, `teal-deep` `#2D6363`
- Neutrals: `sand` `#D4C5B2`, `border` `#E0D7CC`, `olive` `#5B8C6A`
- Type: heading `Cormorant Garamond` serif, body `DM Sans`, Hebrew `Frank Ruhl Libre`

### Design Principles

1. **Hebrew-first, English as the bridge.** The brand is fundamentally Hebrew — `כלי מתוקה` is the actual name. English glosses help non-Hebrew readers; they don't lead. Apply to product naming, section anchors, and any future copy decisions.

2. **Slow-craft pacing.** Generous whitespace, unhurried typography, story-forward. Avoid urgency tactics, popups, countdown timers, "limited time" framing. The whole site should feel like the work itself — patient.

3. **Imperfect, human, lived-in.** First-person voice, real textures, visible hand-engraving. Don't over-polish photography or copy into e-commerce gloss. Kitchen-table honesty beats studio shine.

4. **Mobile and desktop earn equal craft.** Users arrive from Instagram (phone) and from laptops (desktop) in roughly equal weight. No "primary" viewport — both flows tested at 375px and 1440px+. Hero crops, type scales, gradients, gallery grids all adapt with intention, not as afterthoughts.

5. **Restrained palette — terra leads, teal whispers.** Terracotta is the only loud color: CTAs, occasional accents. Teal is for labels, subtle dividers, hover states — not co-primary. Don't let the page become a sea of orange. Keep most surface area in cream and warm neutrals.

6. **Accessibility as craft, WCAG 2.1 AA floor.** Best practices, not formal certification. Keyboard-reachable, readable contrast (especially terra on cream), alt text on every meaningful image, `prefers-reduced-motion` respected on FadeIn and image-zoom, Hebrew rendered with proper font and direction.

### Implementation Conventions

Patterns that emerged from the audit-driven refinement passes. Future implementations should follow these for consistency.

#### `Product.tagline` field — short card descriptors

`src/lib/products.ts` exports `Product.tagline?: string` — a hand-written 3–5 word descriptor used as the body line on Featured Work carousel cards. Falls back to `description` when absent (`product.tagline ?? product.description`). Add a tagline to any new product that surfaces in carousel/featured contexts. Examples: `"Shabbat hot water vessel"`, `"Spouted pourer for kiddush"`, `"For your morning ritual"`.

#### Hebrew-leading card hierarchy

Cards (Featured Work carousel, gallery grid, product detail heading) lead with Hebrew, not English. Pattern:

```tsx
<h3 lang="he" dir="rtl" className="font-hebrew text-[24px] font-normal text-text">
  {product.hebrew}
</h3>
<p className="mt-0.5 font-body text-[13px] italic text-text-mid">{product.name}</p>
<p className="mt-1 font-body text-[13px] text-text-light">{product.tagline ?? product.description}</p>
```

Sizes scale to context: gallery card 18/22px mobile/desktop Hebrew, Featured Work 24px, product detail h1 32px (matching the Story Name section reference).

#### Featured Work carousel (`src/components/featured-carousel.tsx`)

`"use client"` component, native CSS scroll-snap (no JS carousel library, no library dependency).

- **Section**: `overflow-x-hidden` to contain peek bleed
- **Scroll track**: `overflow-x-auto`, `scrollbar-none`, `[scroll-snap-type:x_mandatory]`, `scroll-pl-6 md:scroll-pl-10` (snap aligns with content padding)
- **Cards**: `w-[75vw]` mobile, `w-[calc((100vw-96px)/3.25)] md:max-w-[440px]` desktop. `flex-shrink-0`, `[scroll-snap-align:start]`
- **Gap**: `gap-4 md:gap-6` (16px / 24px)
- **Padding**: `px-6 md:px-10` on the inner ul

Anti-patterns prohibited: auto-rotate, dot indicators, pagination "1 of 8" text, arrows floating over cards. Native gesture (touch swipe / trackpad / shift+wheel) is the primary input; arrows are additive.

#### Soft-loop arrow controls

Both arrows always render at full opacity — no disabled state. Click handlers wrap on overflow:

- Click `Next` at end (`scrollLeft + clientWidth >= scrollWidth - 1`) → `scrollTo({ left: 0 })` (wrap to start)
- Click `Previous` at start (`scrollLeft <= 1`) → `scrollTo({ left: scrollWidth })` (wrap to end)
- Otherwise `scrollBy({ left: ±(cardWidth + gap) })`

All scroll calls use `behavior: reduceMotion ? "auto" : "smooth"` — respects `prefers-reduced-motion` per the global override in `globals.css`.

Arrow placement: top-right of section heading at `md+`, row below heading right-aligned on mobile (`flex-col md:flex-row` switch). Both viewports show arrows — they're additive to native gesture, not a replacement.

If a future component (gallery, product detail) adopts a carousel, reuse this same pattern + soft-loop convention.

#### `<He>` component for inline Hebrew

`src/components/ui.tsx` exports `<He>` which wraps children in `<span lang="he" dir="rtl" font-hebrew>`. Use anywhere Hebrew appears inline (not as a heading). For headings, set `lang`/`dir` directly on the heading element (e.g., `<h3 lang="he" dir="rtl">`) and apply `font-hebrew` via className — `<He>` renders a span and isn't suitable for headings.
