"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, Label, Button, ArrowIcon } from "@/components/ui";
import { products } from "@/lib/products";

const visible = products.filter((p) => p.images.length > 0);

function ChevronLeft() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 4l-4 4 4 4" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}

const arrowBase =
  "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-terra bg-transparent text-terra transition-colors hover:bg-terra hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra";

export function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap =
      parseInt(window.getComputedStyle(card.parentElement!).gap) || 24;
    const scrollAmount = cardWidth + gap;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior = reduceMotion ? "auto" : "smooth";

    const atStart = el.scrollLeft <= 1;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    if (direction === "right" && atEnd) {
      el.scrollTo({ left: 0, behavior });
    } else if (direction === "left" && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior });
    } else {
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior,
      });
    }
  };

  return (
    <section className="overflow-x-hidden bg-bg py-16 md:py-[120px]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <FadeIn>
          <Label>Featured Work</Label>
          <div className="mt-3 mb-10 flex flex-col items-stretch gap-4 md:mb-[60px] md:flex-row md:items-end md:justify-between md:gap-6">
            <h2 className="font-heading text-[clamp(32px,4vw,48px)] font-light leading-[1.05] text-text">
              Pieces shaped for your table
            </h2>
            <div className="flex shrink-0 items-center gap-2 self-end md:self-auto md:pb-2">
              <button
                type="button"
                onClick={() => scrollByCard("left")}
                aria-label="Previous"
                className={arrowBase}
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("right")}
                aria-label="Next"
                className={arrowBase}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-none overflow-x-auto scroll-pl-6 [scroll-snap-type:x_mandatory] md:scroll-pl-10"
      >
        <ul className="flex list-none gap-4 px-6 md:gap-6 md:px-10">
          {visible.map((product, i) => (
            <li
              key={product.id}
              className="w-[75vw] flex-shrink-0 [scroll-snap-align:start] md:w-[calc((100vw-96px)/3.25)] md:max-w-[440px]"
            >
              <FadeIn delay={i * 0.04}>
                <Link
                  href={`/gallery/${product.slug}`}
                  className="group block"
                >
                  <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-sm">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 75vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-3.5 px-1">
                    <h3
                      lang="he"
                      dir="rtl"
                      className="font-hebrew text-[24px] font-normal text-text"
                    >
                      {product.hebrew}
                    </h3>
                    <p className="mt-0.5 font-body text-[13px] italic text-text-mid">
                      {product.name}
                    </p>
                    <p className="mt-1 font-body text-[13px] text-text-light">
                      {product.tagline ?? product.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <FadeIn className="mt-10 text-center md:mt-[60px]">
          <Button href="/gallery" outline>
            View All Work <ArrowIcon />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
