import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";

import { site } from "@/data/site";
import { SiteHeader } from "@/components/site-header";
import { PageHeading } from "@/components/page-heading";
import { InquirySection } from "@/components/inquiry-section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start an inquiry with Darling's FineJewels, or plan a visit to our Manila showroom.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { piece?: string };
}) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHeading
          eyebrow="Contact"
          title="Start an"
          italicTitle="inquiry."
          description="Whether you have a piece in mind or would simply like guidance, our team is here to help."
        />

        <section className="bg-ivory pb-20">
          <div className="container-luxe grid grid-cols-1 gap-8 border-t border-ink/10 py-14 sm:grid-cols-2">
            <Reveal>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <div>
                  <p className="label-caps text-ink/40">Call or Message</p>
                  <a href={site.phoneHref} className="link-underline mt-2 inline-block text-[15px] text-ink">
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-dark" strokeWidth={1.5} />
                <div>
                  <p className="label-caps text-ink/40">Showroom</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                    {site.location.line1}
                    <br />
                    {site.location.line2}, {site.location.line3}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <InquirySection presetInterest={searchParams.piece} />
      </main>
    </>
  );
}
