"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
  className,
  light,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "link-underline text-[12px] font-medium uppercase tracking-widest2 transition-colors duration-300",
        light ? "text-ivory/90 hover:text-ivory" : "text-ink/80 hover:text-ink",
        active && (light ? "text-ivory" : "text-ink"),
        className,
      )}
    >
      {children}
    </Link>
  );
}
