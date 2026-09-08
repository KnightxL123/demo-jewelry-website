import { ArrowRight } from "lucide-react";

import { site } from "@/data/site";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";

const tones = ["champagne", "ink", "beige", "ivory", "beige", "ink", "champagne", "ivory"] as const;

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
          {tones.map((tone, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06}>
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group block"
                aria-label="View on Instagram"
              >
                <div className="aspect-square overflow-hidden">
                  <div className="h-full w-full transition-transform duration-[1200ms] ease-luxury group-hover:scale-[1.08]">
                    <ImagePlaceholder tone={tone} caption={`Instagram post ${i + 1}`} showCaption={false} />
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
