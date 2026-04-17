import Image from "next/image";
import { products } from "@/lib/products";
import { FadeIn, Label, Button, PlaceholderImage } from "@/components/ui";

export const metadata = { title: "Shop — Limited Drops" };

export default function ShopPage() {
  const drops = products.filter((p) => p.status === "drop");

  return (
    <div className="bg-bg py-16 pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <FadeIn>
          <Label>Shop</Label>
          <h1 className="mt-2 font-heading text-[clamp(40px,5vw,60px)] font-light text-text">
            Limited Drops
          </h1>
          <p className="mt-4 mb-12 max-w-[400px] font-body text-base leading-[1.7] text-text-mid">
            Small batches, made by hand. When they&apos;re gone, they&apos;re
            gone.
          </p>
        </FadeIn>

        {/* Drop banner */}
        <FadeIn>
          <div className="mb-10 flex items-center justify-between rounded bg-text px-8 py-8 md:px-10">
            <div>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[3px] text-teal-light">
                Now Available
              </span>
              <h2 className="mt-2 font-heading text-[28px] font-light text-sand/85">
                Spring 2026 Drop
              </h2>
            </div>
            <span className="font-body text-[13px] text-sand/50">
              {drops.length} pieces
            </span>
          </div>
        </FadeIn>

        {/* Drop items */}
        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {drops.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div className="overflow-hidden rounded-sm border border-border bg-bg-white">
                <div className="relative">
                  {p.image ? (
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <PlaceholderImage aspect="4/5" label="Photo" />
                  )}
                  <span className="absolute top-3 right-3 rounded-[3px] bg-bg-white px-3 py-1.5 font-body text-[11px] font-semibold text-teal-muted shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    {3 - i} of 3 left
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading text-xl text-text">
                      {p.name}
                    </span>
                    <span className="font-hebrew text-sm text-teal-muted">
                      {p.hebrew}
                    </span>
                  </div>
                  <p className="mt-1.5 mb-4 font-body text-[13px] leading-snug text-text-light">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-[22px] text-text">
                      {p.price}
                    </span>
                    <Button className="!px-6 !py-2.5 !text-xs">Buy Now</Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Sold social proof */}
        <FadeIn>
          <p className="mb-4 font-body text-[11px] uppercase tracking-[2px] text-text-light">
            Previously Sold
          </p>
          <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-sm opacity-50"
              >
                <PlaceholderImage aspect="1/1" label="" />
                <div className="absolute inset-0 flex items-center justify-center bg-text/55">
                  <span className="font-body text-[11px] font-bold uppercase tracking-[3px] text-sand">
                    Sold
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* WA CTA */}
        <FadeIn>
          <div className="rounded bg-bg-alt p-12 text-center">
            <p className="mb-4 font-body text-[15px] text-text-mid">
              Don&apos;t miss the next drop.
            </p>
            <a
              href="https://wa.me/972522552693?text=Hi%20Metuka!%20I'd%20love%20to%20learn%20more%20about%20your%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[#25D366] px-7 py-3 font-body text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Join WhatsApp Group
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
