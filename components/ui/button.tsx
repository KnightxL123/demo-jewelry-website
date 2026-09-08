import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] font-medium uppercase tracking-widest2 transition-colors duration-300 ease-luxury disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-ivory px-9 py-4 hover:bg-ink/85 border border-ink",
        inverse:
          "bg-ivory text-ink px-9 py-4 hover:bg-ivory/90 border border-ivory",
        outline:
          "border border-ink/30 text-ink px-9 py-4 hover:border-ink hover:bg-ink hover:text-ivory",
        "outline-light":
          "border border-ivory/40 text-ivory px-9 py-4 hover:border-ivory hover:bg-ivory hover:text-ink",
        ghost: "text-ink px-1 py-1 hover:text-gold-dark",
        "ghost-light": "text-ivory px-1 py-1 hover:text-champagne",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
