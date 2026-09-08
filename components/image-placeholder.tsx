import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Editorial photography placeholder.
//
// This demo has no client photography yet, so every "image" in the layout is
// this component: a tonal, textured panel with a fine diamond mark and a
// small caption naming exactly what photography belongs here. It is built to
// be dropped in place of a real <Image /> later — same box, same aspect
// ratio, same hover behavior — once the client supplies real photography.
// ---------------------------------------------------------------------------

type Tone = "ink" | "champagne" | "beige" | "ivory";

const toneStyles: Record<Tone, string> = {
  ink: "bg-[linear-gradient(155deg,#1c1c1f_0%,#0c0c0d_55%,#141414_100%)] text-ivory/70",
  champagne:
    "bg-[linear-gradient(155deg,#f0e6d4_0%,#e7dac2_55%,#ddcba5_100%)] text-ink/60",
  beige:
    "bg-[linear-gradient(155deg,#efe8db_0%,#e3d8c4_55%,#d8caae_100%)] text-ink/60",
  ivory:
    "bg-[linear-gradient(155deg,#faf8f3_0%,#f1ece2_55%,#e8dfcd_100%)] text-ink/60",
};

export function ImagePlaceholder({
  tone = "champagne",
  caption,
  eyebrow,
  className,
  markClassName,
  showCaption = true,
}: {
  tone?: Tone;
  caption: string;
  eyebrow?: string;
  className?: string;
  markClassName?: string;
  showCaption?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative isolate flex h-full w-full items-center justify-center overflow-hidden",
        toneStyles[tone],
        className,
      )}
      role="img"
      aria-label={caption}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 64px)",
        }}
        aria-hidden="true"
      />
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <DiamondMark
        className={cn(
          "relative h-10 w-10 opacity-[0.55] transition-transform duration-700 ease-luxury group-hover:scale-110 md:h-14 md:w-14",
          markClassName,
        )}
      />

      {showCaption && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-6">
          <span className="text-[10px] font-medium uppercase tracking-widest2 opacity-70">
            {eyebrow ?? "Photography Placeholder"}
          </span>
          <span className="hidden text-right text-[10px] font-medium uppercase tracking-widest2 opacity-70 sm:block">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}

function DiamondMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 22 L32 8 L50 22 L32 58 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M14 22 L50 22" stroke="currentColor" strokeWidth="1" />
      <path d="M22 22 L32 8 L42 22" stroke="currentColor" strokeWidth="1" />
      <path d="M22 22 L32 58" stroke="currentColor" strokeWidth="0.75" />
      <path d="M42 22 L32 58" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}
