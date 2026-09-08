import { Reveal } from "@/components/reveal";

export function BrandStatement() {
  return (
    <section className="bg-ivory py-28 md:py-36">
      <div className="container-luxe">
        <Reveal>
          <span className="label-caps text-ink/45">
            Darling&rsquo;s FineJewels &middot; Manila
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-serif text-4xl leading-[1.12] text-ink sm:text-5xl md:text-6xl">
            Jewelry is more
            <br />
            than what you <span className="italic text-gold-dark">wear.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-lg text-[15px] leading-relaxed text-ink/60 md:text-base">
            Every piece carries a story — a celebration, a milestone, a
            promise, a memory. We curate gold and diamond jewelry meant to be
            worn often and kept always.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
