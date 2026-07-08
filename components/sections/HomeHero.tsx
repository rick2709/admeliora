"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { easeOut } from "@/lib/motion";

const headline = "WE DELIVER REGARDLESS".split(" ");

export function HomeHero() {
  return (
    <section className="relative flex min-h-[94vh] items-end overflow-hidden bg-navy-dark">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image
          src={images.hero.home.src}
          alt={images.hero.home.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/80 via-navy-dark/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:px-8 sm:pb-28">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          {headline.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: easeOut }}
              className="mr-4 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: easeOut }}
          className="mt-6 max-w-xl text-balance text-lg text-white/80 sm:text-xl"
        >
          Engineering, Operations & Maintenance — from concept to running asset.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: easeOut }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Explore our services
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Request a quote
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
        >
          {siteConfig.positioning}
        </motion.p>
      </div>
    </section>
  );
}
