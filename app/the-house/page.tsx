import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { site } from "@/data/site";
import { SiteHeader } from "@/components/site-header";
import { PageHeading } from "@/components/page-heading";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The House",
  description:
    "Visit the Darling's FineJewels showroom in Sta. Cruz, Manila — fine gold and diamond jewelry, imported and local.",
};

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.location.full,
)}`;

export default function TheHousePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHeading
          eyebrow="The House"
          title="The House of"
          italicTitle="Darling’s"
          description="From carefully selected pieces to personal service, Darling's FineJewels brings together timeless jewelry and modern elegance for clients who value beauty, craftsmanship and meaning."
        />

        <section className="bg-ivory pb-28 md:pb-36">
          <div className="container-luxe grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:h-full">
                <ImagePlaceholder
                  tone="ink"
                  eyebrow="Showroom Photography"
                  caption="Interior — San Miguel Building"
                  className="h-full w-full"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="label-caps text-ink/45">Manila, Philippines</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-serif text-3xl leading-snug text-ink sm:text-4xl">
                  A showroom dedicated to fine gold and diamond jewelry,
                  imported and local.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex items-start gap-4 border-t border-ink/10 pt-8">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={1.5} />
                  <div>
                    <p className="label-caps text-ink/40">Showroom Address</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                      {site.location.line1}
                      <br />
                      {site.location.line2}
                      <br />
                      {site.location.line3}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-6 flex items-start gap-4">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={1.5} />
                  <div>
                    <p className="label-caps text-ink/40">Call or Message</p>
                    <a href={site.phoneHref} className="link-underline mt-2 inline-block text-[15px] text-ink">
                      {site.phone}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={buttonVariants({ variant: "primary" })}
                  >
                    Get Directions
                  </a>
                  <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
                    Start an Inquiry
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-beige py-28 md:py-36">
          <div className="container-luxe">
            <Reveal>
              <span className="label-caps text-ink/45">Inside the Showroom</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-xl font-serif text-3xl text-ink sm:text-4xl">
                A space designed for quiet, considered decisions.
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {(["beige", "ink", "champagne"] as const).map((tone, i) => (
                <Reveal key={tone} delay={i * 0.1}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImagePlaceholder
                      tone={tone}
                      eyebrow="Showroom Photography"
                      caption={`Interior detail ${i + 1}`}
                      className="h-full w-full"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory py-24 md:py-28">
          <div className="container-luxe flex flex-col items-start justify-between gap-8 border-t border-ink/10 pt-14 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-3xl text-ink sm:text-4xl">
                Explore the collection.
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/55">
                Browse our curated edit of gold and diamond pieces before your visit.
              </p>
            </div>
            <Link
              href="/collections"
              className="link-underline inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink hover:text-gold-dark"
            >
              View the Collection
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
