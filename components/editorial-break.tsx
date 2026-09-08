import { ImagePlaceholder } from "@/components/image-placeholder";
import { Reveal } from "@/components/reveal";

export function EditorialBreak() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink">
      <ImagePlaceholder
        tone="ink"
        eyebrow="Lifestyle Photography"
        caption="Made For Moments That Matter"
        className="h-full w-full"
        showCaption={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

      <div className="container-luxe absolute inset-0 flex flex-col items-start justify-end pb-20">
        <Reveal>
          <h2 className="max-w-xl font-serif text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
            Made for
            <br />
            moments that <span className="italic text-champagne">matter.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
