import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

import { site, footerNav } from "@/data/site";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-luxe grid grid-cols-1 gap-12 py-20 md:grid-cols-4 md:gap-8 md:py-24">
        <div className="md:col-span-2">
          <Logo light />
          <p className="label-caps-light mt-4 text-ivory/50">
            Fine Jewelry &middot; Manila, Philippines
          </p>
          <p className="mt-8 max-w-xs text-[15px] leading-relaxed text-ivory/60">
            Premium gold and diamond pieces, imported and local, curated for
            life&rsquo;s most meaningful moments.
          </p>
        </div>

        <div>
          <h3 className="label-caps-light mb-6 text-ivory/40">Navigate</h3>
          <ul className="space-y-4">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-[15px] text-ivory/75 hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label-caps-light mb-6 text-ivory/40">Contact</h3>
          <ul className="space-y-4 text-[15px] text-ivory/75">
            <li>
              <a href={site.phoneHref} className="link-underline hover:text-ivory">
                {site.phone}
              </a>
            </li>
            <li className="leading-relaxed text-ivory/60">
              {site.location.line1}
              <br />
              {site.location.line2}
              <br />
              {site.location.line3}
            </li>
            <li className="flex items-center gap-4 pt-2">
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="text-ivory/70 transition-colors hover:text-champagne"
              >
                <Instagram className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href={site.social.facebook.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="text-ivory/70 transition-colors hover:text-champagne"
              >
                <Facebook className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-4 py-7 text-[11px] uppercase tracking-widest2 text-ivory/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Darling&rsquo;s FineJewels by Candys</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ivory/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ivory/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
