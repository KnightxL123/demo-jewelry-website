import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { BrandStatement } from "@/components/brand-statement";
import { FeaturedCollection } from "@/components/featured-collection";
import { EditorialBreak } from "@/components/editorial-break";
import { WhyDarlings } from "@/components/why-darlings";
import { HouseTeaser } from "@/components/house-teaser";
import { SocialSection } from "@/components/social-section";
import { InquirySection } from "@/components/inquiry-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader transparent />
      <main id="main-content">
        <Hero />
        <BrandStatement />
        <FeaturedCollection />
        <EditorialBreak />
        <WhyDarlings />
        <HouseTeaser />
        <SocialSection />
        <InquirySection />
      </main>
    </>
  );
}
