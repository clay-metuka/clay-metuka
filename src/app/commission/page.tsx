"use client";

import { useState } from "react";
import { FadeIn, Label, Button, ArrowIcon } from "@/components/ui";

const COMMISSION_EMAIL = "metuka.hechtman@gmail.com";

export default function CommissionPage() {
  const [isGift, setIsGift] = useState(false);

  const inputClass =
    "w-full rounded border border-border bg-bg px-4 py-3 font-body text-sm text-text outline-none transition-all";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => (data.get(key) as string | null)?.trim() ?? "";

    const name = get("name");
    const fields: Array<[string, string]> = [
      ["Name", name],
      ["Email", get("email")],
      ["Phone / WhatsApp", get("phone")],
      ["What you're looking for", get("looking_for")],
      ["Occasion", get("occasion")],
      ["Timeline", get("timeline")],
    ];
    if (isGift) {
      fields.push(["Gift", "Yes"]);
      fields.push(["Gift message", get("gift_message")]);
    }

    const body = fields
      .filter(([, v]) => v.length > 0)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    const subject = name
      ? `Commission inquiry from ${name}`
      : "Commission inquiry";

    window.location.href = `mailto:${COMMISSION_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-bg py-16 pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-[100px]">
          {/* Left — info */}
          <FadeIn>
            <Label>Commission</Label>
            <h1 className="mt-2 mb-6 font-heading text-[clamp(36px,4.5vw,52px)] font-light leading-[1.1] text-text">
              Let&apos;s create something together
            </h1>
            <p className="mb-12 font-body text-base leading-[1.75] text-text-mid">
              Every commission begins with a conversation. Tell me what
              you&apos;re looking for, and I&apos;ll bring it to life in clay.
            </p>

            {/* Steps */}
            <div className="mb-12 flex flex-col gap-9">
              {[
                [
                  "Tell me what you're looking for",
                  "Fill out the form or message me on WhatsApp.",
                ],
                [
                  "We'll talk through the details",
                  "Dimensions, personalization, glaze — we'll lock everything in together before I start.",
                ],
                [
                  "I'll create your piece",
                  "I'll give you a timing estimate once we've talked through the piece.",
                ],
                [
                  "Your piece arrives",
                  "Double-boxed, carefully shipped to your door.",
                ],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-5">
                  <span className="min-w-[28px] font-heading text-xl font-light text-teal-light">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="mb-1 font-body text-[15px] font-semibold text-text">
                      {title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-text-mid">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Customization list */}
            <h3 className="mb-4 font-heading text-[22px] font-normal text-text">
              What can be customized
            </h3>
            {[
              "Hebrew family name or meaningful words",
              "Children's names, wedding date, anniversary",
              "Size, shape, and glaze color preferences",
              "Custom designs for specific holidays",
            ].map((item, i) => (
              <div key={i} className="mb-2.5 flex items-center gap-2.5">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="var(--color-teal-muted)" strokeWidth="2" strokeLinecap="round"><path d="M2 7l3.5 3.5L12 4"/></svg>
                <span className="font-body text-sm text-text-mid">{item}</span>
              </div>
            ))}
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.15}>
            <div className="rounded-md border border-border bg-bg-white p-8 shadow-[0_4px_32px_rgba(0,0,0,0.03)] md:p-11">
              <h2 className="mb-7 font-heading text-2xl font-normal text-text">
                Commission Form
              </h2>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="cm-name" className="mb-1.5 block font-body text-xs font-semibold tracking-[0.5px] text-text">
                    Name *
                  </label>
                  <input
                    id="cm-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cm-email" className="mb-1.5 block font-body text-xs font-semibold tracking-[0.5px] text-text">
                    Email *
                  </label>
                  <input
                    id="cm-email"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cm-phone" className="mb-1.5 block font-body text-xs font-semibold tracking-[0.5px] text-text">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="cm-phone"
                    type="tel"
                    name="phone"
                    placeholder="+972..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="cm-looking-for" className="mb-1.5 block font-body text-xs font-semibold tracking-[0.5px] text-text">
                    What are you looking for? *
                  </label>
                  <textarea
                    id="cm-looking-for"
                    name="looking_for"
                    placeholder="A natla with my family name in Hebrew..."
                    rows={3}
                    className={`${inputClass} resize-y`}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cm-occasion" className="mb-1.5 block font-body text-xs font-semibold text-text">
                      Occasion
                    </label>
                    <select
                      id="cm-occasion"
                      name="occasion"
                      defaultValue=""
                      className={`${inputClass} text-text-mid`}
                    >
                      <option value="">Select...</option>
                      {[
                        "Shabbat",
                        "Wedding",
                        "Rosh Hashanah",
                        "Hanukkah",
                        "Passover",
                        "Bar/Bat Mitzvah",
                        "Housewarming",
                        "Other",
                      ].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cm-timeline" className="mb-1.5 block font-body text-xs font-semibold text-text">
                      Timeline
                    </label>
                    <select id="cm-timeline" name="timeline" className={`${inputClass} text-text-mid`}>
                      {[
                        "No rush",
                        "Within 1 month",
                        "Within 2 months",
                        "Specific date",
                      ].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <input
                    id="cm-gift"
                    type="checkbox"
                    checked={isGift}
                    onChange={() => setIsGift(!isGift)}
                    className="h-4 w-4 accent-terra"
                  />
                  <label htmlFor="cm-gift" className="cursor-pointer font-body text-sm text-text">
                    This is a gift
                  </label>
                </div>

                {isGift && (
                  <div>
                    <label htmlFor="cm-gift-message" className="mb-1.5 block font-body text-xs font-semibold text-text">
                      Gift message
                    </label>
                    <textarea
                      id="cm-gift-message"
                      name="gift_message"
                      placeholder="What should the card say?"
                      rows={2}
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                )}

                <Button type="submit" className="mt-1 w-full justify-center">
                  Send Request <ArrowIcon />
                </Button>
              </form>

              <div className="mt-6 border-t border-border pt-6 text-center">
                <p className="mb-3 font-body text-[13px] text-text-light">
                  Prefer to chat?
                </p>
                <a
                  href="https://wa.me/972522552693?text=Hi%20Metuka!%20I'm%20interested%20in%20commissioning%20a%20piece."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] px-4 py-3 font-body text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
