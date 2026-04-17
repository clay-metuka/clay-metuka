import Link from "next/link";
import Image from "next/image";
import { FadeIn, Label, Button, PlaceholderImage, ArrowIcon } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO — full-width image with gradient overlay ═══ */}
      <section className="relative h-[50vh] min-h-[420px] w-full overflow-hidden md:h-[70vh] md:min-h-[560px]">
        {/* Background image */}
        <Image
          src="/images/products/espresso_cup/lifestyle.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 95%" }}
        />
        {/* Gradient overlay — dark left, clear right */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(44,40,37,0.85) 0%, rgba(44,40,37,0.7) 30%, rgba(44,40,37,0.2) 60%, rgba(44,40,37,0.05) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end pt-[100px] pb-14 md:items-center md:pt-0 md:pb-0">
          <div className="mx-auto w-full max-w-[1320px] px-6 pl-8 md:px-10 md:pl-16">
            <div className="max-w-full md:max-w-[50%]">
              <FadeIn>
                <Label className="!text-teal-light/70 mb-5">
                  Handmade in Israel
                </Label>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="mb-7 font-heading text-[clamp(44px,6vw,72px)] font-light leading-[1.05] tracking-[-0.02em] text-[#F5F0EA]">
                  Ritual.
                  <br />
                  Rooted.
                  <br />
                  Handmade.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mb-10 max-w-[400px] font-body text-[17px] leading-[1.75] text-sand/75">
                  Ceramic vessels for Jewish life — shaped by hand, meant to be
                  used, made to be cherished.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-3.5">
                  <Button href="/gallery">
                    Explore the Collection <ArrowIcon />
                  </Button>
                  <Button
                    href="/commission"
                    outline
                    className="!text-sand/80 !border-sand/30 hover:!bg-sand/10"
                  >
                    Commission a Piece
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PIECES — asymmetric grid ═══ */}
      <section className="bg-bg py-[120px]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <FadeIn>
            <Label>Featured Work</Label>
            <h2 className="mt-3 mb-[60px] font-heading text-[clamp(32px,4vw,48px)] font-light text-text">
              Pieces shaped for your table
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.3fr_1fr]">
            {/* Left — tall */}
            <FadeIn>
              <Link href="/gallery" className="group block">
                <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src="/images/products/kli_sheni/hero.jpeg"
                    alt="Kli Sheni — כלי שני"
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-1 pt-3.5">
                  <span className="font-heading text-[22px] text-text">
                    Kli Sheni
                  </span>
                  <span className="ml-2.5 font-hebrew text-[15px] text-teal-muted">
                    כלי שני
                  </span>
                  <p className="mt-1 font-body text-[13px] text-text-light">
                    Shabbat hot water vessel
                  </p>
                </div>
              </Link>
            </FadeIn>

            {/* Right — stacked */}
            <div className="flex flex-col gap-5">
              <FadeIn delay={0.1}>
                <Link href="/gallery" className="group block">
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src="/images/products/shabbat_tray/lifestyle.jpeg"
                      alt="Shabbat Tray — מגש שבת"
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-1 pt-3.5">
                    <span className="font-heading text-[22px] text-text">
                      Shabbat Tray
                    </span>
                    <span className="ml-2.5 font-hebrew text-[15px] text-teal-muted">
                      מגש שבת
                    </span>
                    <p className="mt-1 font-body text-[13px] text-text-light">
                      Handmade serving tray
                    </p>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Link href="/gallery" className="group block">
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src="/images/products/mug/hero.jpg.jpeg"
                      alt="Ceramic Mug — ספל"
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-1 pt-3.5">
                    <span className="font-heading text-[22px] text-text">
                      Ceramic Mug
                    </span>
                    <span className="ml-2.5 font-hebrew text-[15px] text-teal-muted">
                      ספל
                    </span>
                    <p className="mt-1 font-body text-[13px] text-text-light">
                      Teal glaze, botanical carving
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>

          <FadeIn className="mt-[60px] text-center">
            <Button href="/gallery" outline>
              View All Work <ArrowIcon />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ═══ BRAND STORY + embedded quote ═══ */}
      <section className="bg-bg-white">
        <div className="grid min-h-[560px] grid-cols-1 md:grid-cols-[5fr_4fr]">
          <PlaceholderImage
            aspect="auto"
            label="Metuka in her studio"
            className="min-h-[400px] md:min-h-[560px]"
          />
          <div className="flex flex-col justify-center px-6 py-16 md:px-[72px] md:py-20">
            <FadeIn>
              <Label>The Maker</Label>
              <h2 className="mt-3 mb-6 font-heading text-[clamp(28px,3.5vw,42px)] font-light leading-[1.15] text-text">
                Every piece begins
                <br className="hidden md:block" />
                with a conversation
              </h2>
              <p className="mb-5 font-body text-base leading-[1.75] text-text-mid">
                I&apos;m Metuka — an Israeli artist and mother of three. I shape
                clay into vessels for Jewish ritual and daily life. Every piece
                is food safe, oven safe, and made to be used — not just admired.
              </p>

              {/* Quote — quiet aside */}
              <div className="mb-7 border-l-2 border-teal/25 pl-4">
                <p className="font-heading text-base font-light italic leading-snug text-text-mid">
                  &ldquo;Why doesn&apos;t this exist already?&rdquo;
                </p>
                <span className="mt-1 block font-body text-[11px] text-text-light">
                  — on seeing the Kli Sheni
                </span>
              </div>

              <Button href="/story" outline>
                Read My Story <ArrowIcon />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ WHATSAPP CTA ═══ */}
      <section className="bg-bg-alt py-[100px]">
        <div className="mx-auto max-w-[580px] px-6 text-center md:px-10">
          <FadeIn>
            <Label className="mb-3">Inner Circle</Label>
            <h2 className="mb-4 font-heading text-[clamp(28px,3.5vw,40px)] font-light text-text">
              Be first to know
            </h2>
            <p className="mx-auto mb-9 max-w-md font-body text-[15px] leading-[1.7] text-text-mid">
              Join the Clay Metuka WhatsApp group for first access to limited
              drops and behind-the-scenes studio content.
            </p>
            <a
              href="https://wa.me/972522552693?text=Hi%20Metuka!%20I'd%20love%20to%20learn%20more%20about%20your%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[4px] bg-[#25D366] px-9 py-3.5 font-body text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Join WhatsApp Group
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
