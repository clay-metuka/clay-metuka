"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, categories } from "@/lib/products";
import { FadeIn, Label, PlaceholderImage, He } from "@/components/ui";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  // TODO: Add occasion-based filters (e.g. Shabbat, Ritual, Everyday) when we
  // have 3+ products tagged with each occasion. Currently filtering on category only.
  const filtered = (
    filter === "all" ? products : products.filter((p) => p.category === filter)
  ).filter((p) => p.images.length > 0);

  return (
    <div className="bg-bg py-16 md:py-[60px] pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <FadeIn>
          <Label>Gallery</Label>
          <h1 className="mt-2 font-heading text-[clamp(40px,5vw,60px)] font-light text-text">
            The Work
          </h1>
          <p className="mt-4 mb-10 max-w-[440px] font-body text-base leading-[1.7] text-text-mid">
            Every piece is handmade, food safe, and designed to become part of
            your daily rituals.
          </p>
        </FadeIn>

        {/* Filter pills */}
        <FadeIn className="mb-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className="cursor-pointer rounded-full border px-5 py-2 font-body text-xs capitalize tracking-[0.5px] transition-all duration-250"
              style={{
                borderColor:
                  filter === cat
                    ? "var(--color-terra)"
                    : "var(--color-border)",
                background:
                  filter === cat
                    ? "color-mix(in srgb, var(--color-terra) 6%, transparent)"
                    : "transparent",
                color:
                  filter === cat
                    ? "var(--color-terra)"
                    : "var(--color-text-mid)",
                fontWeight: filter === cat ? 600 : 400,
              }}
            >
              {cat === "all" ? "All Pieces" : cat}
            </button>
          ))}
        </FadeIn>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.06}>
              <Link
                href={`/gallery/${product.slug}`}
                className="group block transition-transform duration-400 hover:-translate-y-[3px]"
              >
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-sm">
                  {product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <PlaceholderImage aspect="4/5" label={product.name} />
                  )}
                </div>
                <div className="px-0.5 pt-3.5">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-heading text-[16px] font-normal text-text sm:text-[19px]">
                      {product.name}
                    </h3>
                    <span className="font-heading text-[15px] text-text-mid sm:text-[17px]">
                      {product.price}
                    </span>
                  </div>
                  <He className="text-[13px] text-teal-muted">
                    {product.hebrew}
                  </He>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
