"use client";

import { useState } from "react";
import Link from "next/link";
import { products, categories } from "@/lib/products";
import { FadeIn, Label, PlaceholderImage } from "@/components/ui";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

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
              className="cursor-pointer rounded-full border px-5 py-2 font-body text-xs capitalize tracking-[0.5px] transition-all duration-250"
              style={{
                borderColor:
                  filter === cat
                    ? "var(--color-teal-muted)"
                    : "var(--color-border)",
                background:
                  filter === cat
                    ? "color-mix(in srgb, var(--color-teal-muted) 5%, transparent)"
                    : "transparent",
                color:
                  filter === cat
                    ? "var(--color-teal-muted)"
                    : "var(--color-text-mid)",
                fontWeight: filter === cat ? 600 : 400,
              }}
            >
              {cat === "all" ? "All Pieces" : cat}
            </button>
          ))}
        </FadeIn>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.06}>
              <Link
                href={`/gallery/${product.slug}`}
                className="group block transition-transform duration-400 hover:-translate-y-[3px]"
              >
                <div className="img-zoom overflow-hidden rounded-sm">
                  <PlaceholderImage
                    aspect={
                      product.size === "lg"
                        ? "3/4"
                        : product.size === "md"
                          ? "4/5"
                          : "1/1"
                    }
                    label={product.name}
                  />
                </div>
                <div className="px-0.5 pt-3.5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading text-[19px] text-text">
                      {product.name}
                    </span>
                    <span className="font-heading text-[17px] text-text-mid">
                      {product.price}
                    </span>
                  </div>
                  <span className="font-hebrew text-[13px] text-teal-muted">
                    {product.hebrew}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
