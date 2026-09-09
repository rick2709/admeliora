import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Rendered height in pixels — width follows the artwork's aspect ratio. */
  height?: number;
};

const ASPECT = 1200 / 392;

// The customer's brand mark reads best on white, so it always sits on its own
// white card — even over a dark header/footer — rather than switching to a
// white silhouette version.
export function Logo({ className, height = 56 }: LogoProps) {
  const width = Math.round(height * ASPECT);
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
      <Image
        src="/images/logo-full.png"
        alt="AD Meliora (AMI) — Engineering, Operations and Maintenance"
        width={width}
        height={height}
        style={{ height: `${height}px`, width: "auto" }}
        priority
      />
    </span>
  );
}
