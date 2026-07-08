"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  className?: string;
  speed?: "slow" | "fast";
  reverse?: boolean;
};

export function Marquee({ items, className, speed = "slow", reverse = false }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden no-scrollbar", className)}>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-offwhite to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-offwhite to-transparent z-10" />
      <div
        className={cn(
          "flex w-max gap-8 motion-safe:animate-marquee",
          speed === "fast" && "motion-safe:animate-marquee-fast",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
