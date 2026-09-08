import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="flex min-h-[80vh] flex-col items-center justify-center bg-ivory px-6 pt-24 text-center"
      >
        <span className="label-caps text-ink/40">Error 404</span>
        <h1 className="mt-6 font-serif text-4xl text-ink sm:text-5xl">
          This page has <span className="italic text-gold-dark">wandered off.</span>
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/55">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s
          bring you back to something beautiful.
        </p>
        <Link href="/" className={`${buttonVariants({ variant: "primary" })} mt-10`}>
          Return Home
        </Link>
      </main>
    </>
  );
}
