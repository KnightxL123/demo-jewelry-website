import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { PageHeading } from "@/components/page-heading";
import { WhyAurelle } from "@/components/why-aurelle";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    `${site.brandName} curates premium gold and diamond jewelry, imported and local, for life's most meaningful moments.`,
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHeading
          eyebrow="About"
          title="About"
          italicTitle={`${site.shortName}.`}
          description="A considered edit of fine gold and diamond jewelry — imported and local pieces, chosen for craftsmanship and lasting appeal."
        />

        <section className="bg-ivory pb-28 md:pb-36">
          <div className="container-luxe grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <Reveal>
                <span className="label-caps text-ink/45">Our Approach</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-serif text-3xl leading-snug text-ink sm:text-4xl">
                  We believe fine jewelry should be worn, not just kept.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/60">
                  {site.brandName} brings together an edit of premium
                  gold and diamond pieces — imported and local — selected for
                  quality, wearability and lasting design. Our aim is simple:
                  to help you find a piece that feels like it was always
                  meant to be yours.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
                  Every visit to our showroom is treated as personal, not
                  transactional — an unhurried space to look, ask questions,
                  and decide with confidence.
                </p>
              </Reveal>
            </div>

            <Reveal className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5">
                <Image
                  src="/images/hands-craftsmanship.png"
                  alt="A jeweller inspecting an 18K gold diamond ring through a loupe"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <WhyAurelle />

        <section className="bg-ivory py-24 md:py-28">
          <div className="container-luxe flex flex-col items-start justify-between gap-8 border-t border-ink/10 pt-14 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-3xl text-ink sm:text-4xl">
                See the collection for yourself.
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/55">
                Explore our curated edit, or start an inquiry with our team.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <Link
                href="/collections"
                className="link-underline inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink hover:text-gold-dark"
              >
                Collections
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
              <Link
                href="/contact"
                className="link-underline inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink hover:text-gold-dark"
              >
                Contact
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
