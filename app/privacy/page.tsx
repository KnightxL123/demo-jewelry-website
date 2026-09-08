import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <PageHeading eyebrow="Legal" title="Privacy" italicTitle="Policy" />
        <section className="bg-ivory pb-28 md:pb-36">
          <div className="container-luxe max-w-2xl">
            <p className="text-[15px] leading-relaxed text-ink/60">
              This page is a placeholder for a design demo. A finished privacy
              policy — covering how inquiry and contact information is
              collected, used and stored — will be provided before this site
              goes live.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
