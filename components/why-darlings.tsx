import { pillars } from "@/data/site";
import { Reveal } from "@/components/reveal";

export function WhyDarlings() {
  return (
    <section className="bg-beige py-28 md:py-36">
      <div className="container-luxe">
        <Reveal>
          <span className="label-caps text-ink/45">Why Darling&rsquo;s</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl text-ink sm:text-5xl">
            Built on quiet confidence.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 0.08}>
              <div className="border-t border-ink/15 pt-7">
                <span className="font-serif text-lg text-gold-dark">
                  {pillar.index}
                </span>
                <h3 className="mt-4 text-[13px] font-medium uppercase tracking-widest2 text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-ink/55">
                  {pillar.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
