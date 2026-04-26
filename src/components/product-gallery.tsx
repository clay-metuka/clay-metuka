"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceholderImage } from "@/components/ui";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [selected, setSelected] = useState(0);

  if (!images || images.length === 0) {
    return (
      <PlaceholderImage
        aspect="4/5"
        label="Main Photo"
        className="rounded-sm"
      />
    );
  }

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
        <Image
          key={selected}
          src={images[selected]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnail strip — only when 2+ images */}
      {images.length > 1 && (
        <div
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "thin" }}
        >
          {images.map((src, i) => {
            const active = i === selected;
            return (
              <button
                key={src}
                onClick={() => setSelected(i)}
                aria-label={`View photo ${i + 1} of ${images.length}`}
                aria-current={active}
                className="relative aspect-square w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-sm transition-all duration-300"
                style={{
                  border: `2px solid ${
                    active ? "var(--color-terra)" : "var(--color-border)"
                  }`,
                  opacity: active ? 1 : 0.65,
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
