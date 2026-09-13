import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { site } from "@/data/site";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";

export function HouseTeaser() {
  return (
    <section className="bg-ivory py-28 md:py-36">
      <div className="container-luxe grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="aspect-[4/5] w-full overflow-hidden lg:aspect-[5/6]">
            <ImagePlaceholder
              tone="beige"
              eyebrow="Showroom Photography"
              caption="Showroom — Exterior"
              className="h-full w-full"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="label-caps text-ink/45">The House</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              The House of <span className="italic text-gold-dark">{site.shortName}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/60">
              From carefully selected pieces to personal service, {site.brandName}{" "}
              brings together timeless jewelry and modern elegance for clients
              who value beauty, craftsmanship and meaning.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex items-start gap-3 border-t border-ink/10 pt-7">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={1.5} />
              <p className="text-[14px] leading-relaxed text-ink/60">
                {site.location.line1}
                <br />
                {site.location.line2}
                <br />
                {site.location.line3}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <Link
              href="/the-house"
              className="link-underline mt-9 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink hover:text-gold-dark"
            >
              Visit the Showroom
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
