import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Rendered height in pixels — width follows the artwork's aspect ratio. */
  height?: number;
  /** Wrap the mark in a white card — needed wherever it sits on a dark
   * background (footer, mobile menu). Skip it where the surface behind it
   * is already white, like the navbar. */
  card?: boolean;
};

const ASPECT = 1200 / 392;

// The customer's brand mark reads best on white — never a white-on-dark
// silhouette — so anywhere it isn't already on a white surface, it gets its
// own white card instead.
export function Logo({ className, height = 56, card = true }: LogoProps) {
  const width = Math.round(height * ASPECT);
  const image = (
    <Image
      src="/images/logo-full.png"
      alt="AD Meliora (AMI) — Engineering, Operations and Maintenance"
      width={width}
      height={height}
      style={{ height: `${height}px`, width: "auto" }}
      priority
    />
  );

  if (!card) {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>{image}</span>
    );
  }

  const padY = Math.round(height * 0.14);
  const padX = Math.round(padY * 1.3);

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_4px_16px_-4px_rgba(11,33,73,0.35)] ring-1 ring-black/5",
        className
      )}
      style={{ padding: `${padY}px ${padX}px` }}
    >
      {image}
    </span>
  );
}
