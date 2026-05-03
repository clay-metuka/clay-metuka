import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProduct } from "@/lib/products";
import { FadeIn, Label, Button, ArrowIcon, He } from "@/components/ui";
import { ProductGallery } from "@/components/product-gallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const ritual =
    product.ritual ||
    "Every piece is shaped to bring beauty and meaning to your daily and weekly rituals.";

  return (
    <div className="bg-bg py-16 pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        {/* Back link */}
        <Link
          href="/gallery"
          className="mb-10 inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-terra transition-opacity hover:opacity-75"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 4l-4 4 4 4"/></svg>
          Back to Gallery
        </Link>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          {/* Images */}
          <div>
            <ProductGallery images={product.images} alt={product.name} />
          </div>

          {/* Details */}
          <div className="pt-2">
            <FadeIn>
              <Label>{product.category}</Label>
              <h1 className="mt-2 font-heading text-5xl font-light text-text">
                {product.name}
              </h1>
              <He className="mt-1 mb-5 block text-[22px] text-teal-muted">
                {product.hebrew}
              </He>

              {/* Divider */}
              <div className="mb-6 h-[1.5px] w-10 bg-terra" />

              <p className="mb-7 font-body text-base leading-[1.7] text-text-mid">
                {product.longDescription || product.description}
              </p>

              {/* Badges */}
              <div className="mb-7 flex flex-wrap gap-4">
                {["Food Safe", "Shabbat Oven Safe", "Microwave Safe", "Handmade"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-1.5 font-body text-xs text-text-mid"
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="var(--color-teal-muted)" strokeWidth="2" strokeLinecap="round"><path d="M2 7l3.5 3.5L12 4"/></svg>
                      {badge}
                    </span>
                  )
                )}
              </div>

              {/* Ritual story */}
              <div className="mb-9 rounded-r border-l-2 border-teal/20 bg-teal-muted/[0.04] py-5 pr-6 pl-6">
                <p className="font-heading text-[15px] font-normal italic leading-relaxed text-text-mid">
                  {ritual}
                </p>
              </div>

              {/* Price + status */}
              <div className="mb-7 flex items-center gap-5">
                <span className="font-heading text-[32px] font-normal text-text">
                  {product.price}
                </span>
                {product.priceUSD && (
                  <span className="font-body text-sm text-text-light">
                    ({product.priceUSD})
                  </span>
                )}
                <span
                  className="font-body text-[10px] font-semibold uppercase tracking-[2px]"
                  style={{
                    color:
                      product.status === "drop"
                        ? "var(--color-teal-muted)"
                        : "var(--color-terra)",
                  }}
                >
                  {product.status === "drop"
                    ? "Available Now"
                    : "Available for Commission"}
                </span>
              </div>

              {/* CTAs */}
              <div className="flex gap-3">
                <Button href="/commission">
                  {product.status === "drop"
                    ? "Buy Now"
                    : "Commission This Piece"}{" "}
                  <ArrowIcon />
                </Button>
                <a
                  href="https://wa.me/972522552693?text=Hi%20Metuka!%20I'd%20love%20to%20learn%20more%20about%20your%20work."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded bg-[#25D366] text-white transition-opacity hover:opacity-90"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
