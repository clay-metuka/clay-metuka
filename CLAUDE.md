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
