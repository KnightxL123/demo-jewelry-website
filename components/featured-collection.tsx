import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";

export function FeaturedCollection() {
  return (
    <section id="collection" className="bg-ivory py-28 md:py-36">
      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="label-caps text-ink/45">Demo Product Selection</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl text-ink sm:text-5xl">
                The Collection
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/55">
                Pieces chosen to become part of your story.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Link
              href="/collections"
              className="link-underline hidden items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink/70 hover:text-ink md:inline-flex"
            >
              View All Pieces
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 0.08}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:hidden">
          <Link href="/collections" className={buttonVariants({ variant: "outline" })}>
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
