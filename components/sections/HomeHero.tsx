"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { easeOut } from "@/lib/motion";

const line1 = ["We", "Deliver"];
const line2 = ["Regardless."];

const SLIDE_INTERVAL_MS = 6500;

function HeroWord({ word, index }: { word: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: "0.4em" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.13, ease: easeOut }}
      className="inline-block"
    >
      {word}
    </motion.span>
  );
}

export function HomeHero() {
  const slides = images.hero.homeCarousel;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden text-white">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== active}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <div className="absolute inset-0 motion-safe:animate-[ami-kenburns_22s_ease-in-out_infinite_alternate]">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(11,33,73,.94) 0%, rgba(11,33,73,.78) 42%, rgba(11,33,73,.42) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(11,33,73,.9), transparent 40%)" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-[130px] pt-[120px] sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-[26px] inline-flex items-center gap-[9px] rounded-full border px-4 py-2"
          style={{
            background: "rgba(30,107,230,.16)",
            borderColor: "rgba(30,107,230,.4)",
          }}
        >
          <span
            className="h-[7px] w-[7px] rounded-full bg-accent"
            style={{ boxShadow: "0 0 0 4px rgba(30,107,230,.25)" }}
          />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-[#cfe0ff]">
            Engineering · Operations · Maintenance
          </span>
        </motion.div>

        <h1
          className="mb-[26px] font-heading font-extrabold uppercase text-white"
          style={{
            fontSize: "clamp(44px, 8.5vw, 104px)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
          }}
        >
          {line1.map((word, i) => (
            <span key={word} className="mr-4">
              <HeroWord word={word} index={i} />
            </span>
          ))}
          <br />
          {line2.map((word, i) => (
            <span key={word} className="text-accent">
              <HeroWord word={word} index={line1.length + i} />
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
          className="mb-[38px] max-w-[560px] text-[#dbe6fb]"
          style={{ fontSize: "clamp(16px, 2.1vw, 21px)", lineHeight: 1.55 }}
        >
          Engineering, operations &amp; maintenance — from concept to running asset.
          Zimbabwe&rsquo;s EPCM and industrial-supplies partner for corporate and
          government projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: easeOut }}
          className="flex flex-wrap gap-3.5"
        >
          <Link
            href="/services"
            className="btn-fill inline-flex items-center rounded-full bg-accent px-7 py-4 font-heading text-[15px] font-semibold text-white"
          >
            <span>
              Explore our services <span className="btn-arrow">→</span>
            </span>
          </Link>
          <Link
            href="/contact"
            className="btn-ghost inline-flex items-center rounded-full border-[1.5px] border-white/35 bg-transparent px-7 py-4 font-heading text-[15px] font-semibold text-white"
          >
            <span>Request a quote</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1, ease: easeOut }}
        className="absolute bottom-[26px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
      >
        <span className="font-heading text-[10.5px] uppercase tracking-[0.22em]">Scroll</span>
        <span
          className="h-[34px] w-px"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,.7), transparent)",
          }}
        />
      </motion.div>

      <div className="absolute bottom-[34px] right-6 z-10 flex items-center gap-2.5 sm:right-8">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1} of ${slides.length}`}
            aria-current={i === active}
            className="p-1.5"
          >
            <span
              className="block h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? "22px" : "7px",
                background: i === active ? "#ffffff" : "rgba(255,255,255,.4)",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
