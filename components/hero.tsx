"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { site } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { HeroVideo } from "@/components/hero-video";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease }}
      >
        {/* The montage cuts roughly every 1.2s; the old looping Ken Burns zoom
            fought that, so only the entrance settle above remains. */}
        <div className="relative h-full w-full">
          <HeroVideo />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/25 to-transparent md:via-ink/10" />

      <div className="container-luxe relative z-10 flex w-full flex-col items-start pb-24 pt-32 md:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="label-caps-light mb-6 text-ivory/70"
        >
          {site.brandName} &middot; {site.location.cityShort}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease }}
          className="max-w-3xl font-serif text-[2.75rem] leading-[1.05] text-ivory sm:text-6xl md:text-7xl"
        >
          Timeless beauty,
          <br />
          <span className="italic text-champagne">crafted to be cherished.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease }}
          className="mt-7 max-w-md text-[15px] leading-relaxed text-ivory/75 md:text-base"
        >
          Fine gold and diamond pieces curated for life&rsquo;s most meaningful
          moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease }}
          className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link href="/collections" className={buttonVariants({ variant: "inverse" })}>
            Explore the Collection
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline-light" })}>
            Make an Inquiry
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="label-caps-light rotate-90 text-ivory/50">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-ivory/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-ivory/70"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
