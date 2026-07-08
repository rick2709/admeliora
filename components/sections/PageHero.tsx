"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-navy-dark sm:min-h-[62vh]">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/75 to-navy-dark/30" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mt-3 max-w-3xl text-balance font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: easeOut }}
          className="mt-5 max-w-2xl text-balance text-base text-white/75 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
