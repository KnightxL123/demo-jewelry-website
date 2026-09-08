import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Product } from "@/data/products";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/collections/${product.slug}`}
      className="group block focus-visible:outline-none"
      aria-label={`View ${product.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
        <div className="relative h-full w-full transition-transform duration-[1400ms] ease-luxury group-hover:scale-[1.06]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <ImagePlaceholder
              tone={product.placeholderTone}
              eyebrow={product.category}
              caption={product.name}
            />
          )}
        </div>

        <span className="pointer-events-none absolute left-5 top-5 font-serif text-sm text-ink/50 md:text-base">
          {product.index}
        </span>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex items-center gap-2 bg-ivory/95 px-6 py-3 text-[11px] font-medium uppercase tracking-widest2 text-ink shadow-sm">
            View Piece
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 transition-transform duration-500 ease-luxury group-hover:translate-x-1">
        <div>
          <p className="label-caps text-gold-dark/80">{product.category}</p>
          <h3 className="mt-1.5 font-serif text-xl text-ink">{product.name}</h3>
          <p className="mt-1 text-[13px] text-ink/50">{product.material}</p>
        </div>
        <ArrowUpRight
          className="mt-1 hidden h-4 w-4 shrink-0 text-ink/40 transition-colors group-hover:text-gold-dark sm:block"
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
}
