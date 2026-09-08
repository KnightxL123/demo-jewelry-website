import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { getProductBySlug, products } from "@/data/products";
import { SiteHeader } from "@/components/site-header";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="bg-ivory pb-24 pt-32 md:pb-32 md:pt-40">
          <div className="container-luxe">
            <Reveal>
              <Link
                href="/collections"
                className="link-underline mb-12 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink/60 hover:text-ink"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
                Back to Collection
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <ImagePlaceholder
                      tone={product.placeholderTone}
                      eyebrow={product.category}
                      caption={product.name}
                      className="h-full w-full"
                    />
                  )}
                </div>
              </Reveal>

              <div>
                <Reveal delay={0.1}>
                  <span className="label-caps text-gold-dark/80">
                    {product.category}
                  </span>
                </Reveal>
                <Reveal delay={0.15}>
                  <h1 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                    {product.name}
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-3 text-[14px] uppercase tracking-widest2 text-ink/45">
                    {product.material}
                  </p>
                </Reveal>

                <Reveal delay={0.25}>
                  <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/65 md:text-base">
                    {product.detail}
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="mt-10 border-t border-ink/10 pt-8">
                    <p className="label-caps mb-5 text-ink/40">
                      Pricing available upon inquiry
                    </p>
                    <Link
                      href={`/contact?piece=${encodeURIComponent(product.name)}`}
                      className={buttonVariants({ variant: "primary" })}
                    >
                      Inquire About This Piece
                    </Link>
                  </div>
                </Reveal>

                <Reveal delay={0.35}>
                  <p className="mt-6 max-w-md text-[13px] leading-relaxed text-ink/40">
                    This is sample product content for a design demo. Specifications,
                    availability and pricing will be confirmed directly with our team.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-ink/10 bg-ivory pb-28 pt-24 md:pb-36">
          <div className="container-luxe">
            <Reveal>
              <div className="flex items-end justify-between">
                <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                  You May Also Admire
                </h2>
                <Link
                  href="/collections"
                  className="link-underline hidden items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink/60 hover:text-ink sm:inline-flex"
                >
                  View All
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
