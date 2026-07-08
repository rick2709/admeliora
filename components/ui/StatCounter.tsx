"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

type StatCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export function StatCounter({ value, prefix = "", suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 90 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(reduceMotion ? value : value);
    }
  }, [isInView, motionValue, value, reduceMotion]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix]);

  return (
    <div className="flex flex-col gap-1">
      <span
        ref={ref}
        className="font-heading text-4xl sm:text-5xl font-bold text-white tabular-nums"
      >
        {prefix}0{suffix}
      </span>
      <motion.span className="text-sm sm:text-base text-white/70 max-w-[16ch]">
        {label}
      </motion.span>
    </div>
  );
}
