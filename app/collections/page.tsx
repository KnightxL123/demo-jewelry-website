import type { Metadata } from "next";

import { products } from "@/data/products";
import { SiteHeader } from "@/components/site-header";
import { PageHeading } from "@/components/page-heading";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "A curated edit of gold and diamond jewelry — sample pieces from Darling's FineJewels.",
};

export default function CollectionsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHeading
          eyebrow="Demo Product Selection"
          title="The"
          italicTitle="Collection"
          description="Pieces chosen to become part of your story. Every item below is sample content for this demo — names, materials and descriptions will be replaced with the client's real pieces and photography."
        />

        <section className="bg-ivory pb-28 md:pb-36">
          <div className="container-luxe">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <Reveal key={product.slug} delay={(i % 3) * 0.08}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
