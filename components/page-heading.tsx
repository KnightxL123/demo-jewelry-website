import { Reveal } from "@/components/reveal";

export function PageHeading({
  eyebrow,
  title,
  italicTitle,
  description,
}: {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  description?: string;
}) {
  return (
    <section className="bg-ivory pb-16 pt-40 md:pb-20 md:pt-48">
      <div className="container-luxe">
        <Reveal>
          <span className="label-caps text-ink/45">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
            {title} {italicTitle && <span className="italic text-gold-dark">{italicTitle}</span>}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-ink/60 md:text-base">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
