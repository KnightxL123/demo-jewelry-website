import { site } from "@/data/site";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ivory">
      <div className="flex flex-col items-center gap-5">
        <svg viewBox="0 0 64 64" fill="none" className="h-8 w-8 animate-pulse text-gold-dark">
          <path d="M14 22 L32 8 L50 22 L32 58 Z" stroke="currentColor" strokeWidth="1" />
          <path d="M14 22 L50 22" stroke="currentColor" strokeWidth="1" />
        </svg>
        <span className="label-caps text-ink/40">{site.brandName}</span>
      </div>
    </div>
  );
}
