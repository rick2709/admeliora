"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type StatCounterProps = {
  value?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
};

export function StatCounter({ value, prefix = "", suffix = "", display, label }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 90 });

  useEffect(() => {
    if (isInView && value !== undefined) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    if (display !== undefined) return;
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix, display]);

  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <span
        ref={ref}
        className="font-heading font-extrabold leading-none text-accent"
        style={{ fontSize: "clamp(44px, 6vw, 68px)" }}
      >
        {display !== undefined ? display : `${prefix}0${suffix}`}
      </span>
      <span className="text-sm tracking-wide text-[#a9bce0]">{label}</span>
    </div>
  );
}
