import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHeading eyebrow="Legal" title="Terms &" italicTitle="Conditions" />
        <section className="bg-ivory pb-28 md:pb-36">
          <div className="container-luxe max-w-2xl">
            <p className="text-[15px] leading-relaxed text-ink/60">
              This page is a placeholder for a design demo. Finished terms and
              conditions will be provided before this site goes live.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
