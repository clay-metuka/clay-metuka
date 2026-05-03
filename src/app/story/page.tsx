import Image from "next/image";
import { FadeIn, Label, He } from "@/components/ui";
// TODO: re-add PlaceholderImage when Process section is restored

export const metadata = { title: "My Story" };

export default function StoryPage() {
  return (
    <>
      {/* Hero split */}
      <section className="grid min-h-[80vh] grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[400px] md:min-h-[600px]">
          <Image
            src="/images/metuka-studio.jpg"
            alt="Metuka working with clay on her rooftop studio"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center bg-bg-white px-6 py-16 md:px-[72px] md:py-24">
          <FadeIn>
            <Image
              src="/images/logo.png"
              alt="Clay Metuka"
              width={88}
              height={88}
              className="mb-6 rounded-full"
            />
            <Label>My Story</Label>
            <h1 className="mt-3 mb-8 font-heading text-[clamp(36px,4.5vw,56px)] font-light leading-[1.1] text-text">
              Hi, I&apos;m Metuka
            </h1>
            <div className="flex flex-col gap-4 font-body text-base leading-[1.85] text-text-mid">
              <p>
                I&apos;m an Israeli artist and mother of three. I shape clay
                into vessels for Jewish ritual and daily life — pieces meant to
                be held, used, and filled with meaning.
              </p>
              <p>
                My studio is wherever I can find quiet — the kitchen table during
                naps, the porch in the evenings. It&apos;s not glamorous, but
                it&apos;s mine.
              </p>
              <p>
                Every piece carries something of this land. The clay is earthy
                and warm. The glazes remind me of the hills and the sea. And the
                Hebrew letters I carve connect the person who uses it to
                something ancient and alive.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Clay */}
      <section className="bg-bg py-[120px]">
        <div className="mx-auto max-w-[680px] px-6 text-center md:px-10">
          <FadeIn>
            <Label className="mb-3">The Medium</Label>
            <h2 className="mb-8 font-heading text-4xl font-light text-text">
              Why clay
            </h2>
            <p className="font-heading text-xl font-light italic leading-[1.7] text-text-mid">
              Clay is the oldest material. It comes from the earth, shaped by
              hands, transformed by fire. There&apos;s something sacred about
              turning raw earth into a vessel that holds water for a blessing, or
              bread for a Shabbat table.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TODO: restore when process photos are ready */}
      {/*
      <section className="overflow-hidden bg-bg-white py-[100px]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <FadeIn>
            <Label>The Process</Label>
            <h2 className="mt-3 mb-12 font-heading text-4xl font-light text-text">
              From clay to table
            </h2>
          </FadeIn>
          <div className="scrollbar-none flex gap-5 overflow-x-auto pb-5">
            {[
              "Raw Clay",
              "Shaping",
              "Engraving",
              "Bisque Fire",
              "Glazing",
              "Final Fire",
            ].map((step, i) => (
              <FadeIn
                key={step}
                delay={i * 0.08}
                className="flex-shrink-0"
                style={{ minWidth: "220px" }}
              >
                <PlaceholderImage
                  aspect="3/4"
                  label={step}
                  className="w-[220px] rounded-sm"
                />
                <div className="mt-3.5">
                  <span className="font-heading text-[13px] font-light text-teal-muted">
                    0{i + 1}
                  </span>
                  <span className="ml-2.5 font-body text-sm font-medium text-text">
                    {step}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Hiddur Mitzvah */}
      <section className="bg-text py-[100px]">
        <div className="mx-auto max-w-[680px] px-6 text-center md:px-10">
          <FadeIn>
            <He className="mb-3 block text-[32px] text-teal-light">
              הידור מצוה
            </He>
            <h2 className="mb-6 font-heading text-[32px] font-light text-sand/85">
              Hiddur Mitzvah
            </h2>
            <p className="font-body text-base leading-[1.8] text-sand/50">
              The concept of beautifying the commandments. A handmade vessel for
              washing hands before bread isn&apos;t just functional — it turns a
              daily act into a moment of meaning.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Name */}
      <section className="bg-bg py-[100px]">
        <div className="mx-auto max-w-[680px] px-6 text-center md:px-10">
          <FadeIn>
            <Label className="mb-4">The Name</Label>
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Clay Metuka seal"
                width={140}
                height={140}
                className="h-[140px] w-[140px] object-contain"
              />
            </div>
            <He className="mb-5 block text-[32px] text-terra">
              כלי מתוקה
            </He>
            <p className="font-body text-base leading-[1.75] text-text-mid">
              In Hebrew, it&apos;s <He>כלי מתוקה</He> —{" "}
              <em>Metuka</em>&apos;s vessels. <em>Kli</em> means vessel.{" "}
              <em>Metuka</em> is my name, and also the word for sweet.{" "}
              <em>Clay</em> carries it across in English — it sounds like{" "}
              <em>kli</em>, and it&apos;s the material itself.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
