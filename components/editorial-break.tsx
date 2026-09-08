import Image from "next/image";

import { Reveal } from "@/components/reveal";

const EDITORIAL_IMAGE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3IKxAOa84X7Sjcy4i2sT4qTHmID/hf_20260908_162015_8dfd0131-2496-403a-8be3-686980d0713d.png";

export function EditorialBreak() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink">
      <Image
        src={EDITORIAL_IMAGE}
        alt="Hands wearing fine gold and diamond jewelry"
        fill
        sizes="100vw"
        className="object-cover"
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
