import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({
  light,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-serif text-[19px] leading-none tracking-[0.02em] md:text-[21px]",
        light ? "text-ivory" : "text-ink",
        className,
      )}
    >
      {site.brandMark.lead}{" "}
      <span className="italic text-gold-dark/90">{site.brandMark.accent}</span>
    </span>
  );
}
