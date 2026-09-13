"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { primaryNav, site } from "@/data/site";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || !transparent;
  const light = transparent && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury",
          solid
            ? "bg-ivory/90 shadow-[0_1px_0_0_rgba(12,12,13,0.08)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="container-luxe flex h-20 items-center justify-between md:h-24">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={cn(
                "p-2 -ml-2 transition-colors",
                light ? "text-ivory" : "text-ink",
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Primary"
          >
            {primaryNav.slice(0, 2).map((item) => (
              <NavLink key={item.href} href={item.href} light={light}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            aria-label={`${site.brandName} — home`}
          >
            <Logo light={light} />
          </Link>

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Secondary"
          >
            {primaryNav.slice(2).map((item) => (
              <NavLink key={item.href} href={item.href} light={light}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className={cn(
                "hidden p-2 transition-colors md:inline-flex",
                light ? "text-ivory hover:text-champagne" : "text-ink hover:text-gold-dark",
              )}
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <a
              href={site.social.instagram.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className={cn(
                "hidden p-2 transition-colors md:inline-flex",
                light ? "text-ivory hover:text-champagne" : "text-ink hover:text-gold-dark",
              )}
            >
              <Instagram className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className={cn(
                "p-2 transition-colors md:hidden",
                light ? "text-ivory" : "text-ink",
              )}
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={cn(
                "hidden p-2 transition-colors md:inline-flex",
                light ? "text-ivory hover:text-champagne" : "text-ink hover:text-gold-dark",
              )}
            >
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-ink/10 bg-ivory/95 backdrop-blur-md"
            >
              <form
                role="search"
                onSubmit={(e) => e.preventDefault()}
                className="container-luxe flex items-center gap-4 py-5"
              >
                <Search className="h-4 w-4 shrink-0 text-ink/40" strokeWidth={1.5} />
                <input
                  autoFocus
                  type="search"
                  placeholder="Search rings, bracelets, necklaces…"
                  className="w-full border-0 bg-transparent p-0 font-serif text-lg text-ink placeholder:text-ink/35 focus:outline-none focus:ring-0"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="p-2 text-ink/50 hover:text-ink"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-ivory"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="container-luxe flex h-20 items-center justify-between">
            <Logo light className="opacity-90" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="p-2 text-ivory/80 hover:text-ivory"
            >
              <X className="h-6 w-6" strokeWidth={1.25} />
            </button>
          </div>

          <nav className="container-luxe flex flex-1 flex-col justify-center gap-2 pb-20">
            {primaryNav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-ivory/10 py-5 font-serif text-4xl leading-none text-ivory/90 transition-colors hover:text-champagne sm:text-5xl"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="container-luxe flex flex-col gap-4 pb-10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={site.social.instagram.href}
              target="_blank"
              rel="noreferrer noopener"
              className="label-caps-light flex items-center gap-2 text-ivory/70 hover:text-ivory"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              {site.social.instagram.handle}
            </a>
            <a href={site.phoneHref} className="label-caps-light text-ivory/70 hover:text-ivory">
              {site.phone}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
