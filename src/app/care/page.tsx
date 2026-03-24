"use client";

import { useState } from "react";
import { FadeIn, Label } from "@/components/ui";

const FAQS = [
  { q: "How long does a commission take?", a: "3–6 weeks depending on kiln scheduling and complexity. I'll keep you updated throughout." },
  { q: "Can I see a sketch before you start?", a: "Yes! I'll confirm everything — dimensions, Hebrew text, glaze colors — before I begin." },
  { q: "Are your pieces food safe?", a: "All pieces use food-safe, lead-free, cadmium-free glazes. Safe for oven and microwave." },
  { q: "Do you ship internationally?", a: "Yes — Israel domestic and worldwide. Everything ships double-boxed. Full replacement if anything arrives damaged." },
  { q: "What payment methods do you accept?", a: "Israel: bit, PayBox, bank transfer. International: PayPal or Zelle." },
  { q: "Can I customize the Hebrew text?", a: "Family names, meaningful words, children's names, wedding dates — tell me what matters to you." },
];

export default function CarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-bg py-16 pb-[120px]">
      <div className="mx-auto max-w-[800px] px-6 md:px-10">
        <FadeIn>
          <Label>Care & FAQ</Label>
          <h1 className="mt-2 font-heading text-[clamp(36px,5vw,52px)] font-light text-text">
            Taking care of your pieces
          </h1>
          <p className="mt-4 mb-12 font-body text-base leading-[1.7] text-text-mid">
            Everything you need to know about your Clay Metuka ceramics.
          </p>
        </FadeIn>

        {/* Care cards */}
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            ["Food Safe", "All pieces use food-safe, lead-free, cadmium-free glazes."],
            ["Oven & Microwave", "Safe for both. Avoid sudden temperature changes."],
            ["Dishwasher", "Hand wash recommended for longevity."],
            ["Handle with Love", "Durable but not indestructible. Treat it well."],
          ].map(([title, desc], i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="rounded border border-border bg-bg-white p-6">
                <div className="mb-2 flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="var(--color-teal-muted)" strokeWidth="2" strokeLinecap="round"><path d="M2 7l3.5 3.5L12 4"/></svg>
                  <h3 className="font-body text-sm font-semibold text-text">
                    {title}
                  </h3>
                </div>
                <p className="font-body text-sm leading-relaxed text-text-mid">
                  {desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* FAQ */}
        <FadeIn>
          <Label className="mb-3">FAQ</Label>
          <h2 className="mb-8 font-heading text-[32px] font-light text-text">
            Common questions
          </h2>
        </FadeIn>

        <div className="mb-16 flex flex-col gap-1.5">
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div
                className="rounded border bg-bg-white transition-colors duration-250"
                style={{
                  borderColor:
                    openFaq === i
                      ? "color-mix(in srgb, var(--color-terra) 20%, transparent)"
                      : "var(--color-border)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between bg-transparent px-6 py-[18px] text-left"
                >
                  <span className="font-body text-[15px] font-medium text-text">
                    {faq.q}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="var(--color-terra)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="shrink-0 transition-transform duration-250"
                    style={{
                      transform:
                        openFaq === i ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-[18px] font-body text-sm leading-[1.7] text-text-mid">
                    {faq.a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Shipping */}
        <FadeIn>
          <div className="rounded border border-teal/[0.07] bg-teal-muted/[0.03] p-9">
            <h3 className="mb-5 font-heading text-[22px] font-normal text-text">
              Shipping
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-1.5 font-body text-[13px] font-semibold text-text">
                  Israel Domestic
                </h4>
                <p className="font-body text-sm leading-relaxed text-text-mid">
                  ₪25–45, 2–5 business days.
                </p>
              </div>
              <div>
                <h4 className="mb-1.5 font-body text-[13px] font-semibold text-text">
                  International
                </h4>
                <p className="font-body text-sm leading-relaxed text-text-mid">
                  $30–65, 3–14 days. Double-boxed with full breakage protection.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
