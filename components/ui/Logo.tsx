import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  /** Rendered height in pixels — width follows the artwork's aspect ratio. */
  height?: number;
};

const ASPECT = 1200 / 392;

export function Logo({ className, variant = "dark", height = 56 }: LogoProps) {
  const src = variant === "dark" ? "/images/logo-full.png" : "/images/logo-full-light.png";
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src={src}
      alt="AD Meliora (AMI) — Engineering, Operations and Maintenance"
      width={width}
      height={height}
      className={cn("shrink-0", className)}
      style={{ height: `${height}px`, width: "auto" }}
      priority
    />
  );
}
