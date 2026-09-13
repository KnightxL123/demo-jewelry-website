import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";

/**
 * Demo feed — reuses the campaign and product photography rather than
 * inventing separate social posts. Replace with the client's real Instagram
 * grid before launch.
 */
const posts = [
  { src: "/images/editorial-lifestyle.png", alt: "Hands wearing fine gold and diamond jewelry" },
  { src: "/images/signature-diamond-ring.png", alt: "Signature Diamond Ring" },
  { src: "/images/diamond-tennis-bracelet.png", alt: "Diamond Tennis Bracelet" },
  { src: "/images/hero-campaign.png", alt: "Campaign portrait wearing 18K gold and diamonds" },
  { src: "/images/18k-gold-necklace.png", alt: "18K Gold Necklace" },
  { src: "/images/classic-diamond-studs.png", alt: "Classic Diamond Studs" },
  { src: "/images/gold-link-bracelet.png", alt: "Gold Link Bracelet" },
  { src: "/images/diamond-pendant.png", alt: "Diamond Pendant" },
] as const;

export function SocialSection() {
  return (
    <section className="bg-beige py-28 md:py-36">
      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="label-caps text-ink/45">Follow The House</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl text-ink sm:text-5xl">
                {site.social.instagram.handle}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={site.social.instagram.href}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-ink/70 hover:text-ink"
            >
              Follow on Instagram
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {posts.map((post, i) => (
            <Reveal key={post.src} delay={(i % 4) * 0.06}>
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group block"
                aria-label="View on Instagram"
              >
                <div className="aspect-square overflow-hidden bg-ink/5">
                  <div className="relative h-full w-full transition-transform duration-[1200ms] ease-luxury group-hover:scale-[1.08]">
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      sizes="(min-width: 640px) 25vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
