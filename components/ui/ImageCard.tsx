"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageCardProps = {
  href: string;
  title: string;
  description?: string;
  image: { src: string; alt: string };
  className?: string;
  aspect?: string;
  badge?: string;
};

export function ImageCard({
  href,
  title,
  description,
  image,
  className,
  aspect = "aspect-[4/5]",
  badge,
}: ImageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-navy shadow-md hover:shadow-2xl transition-shadow duration-300",
        className
      )}
    >
      <Link href={href} className="block h-full">
        <div className={cn("relative w-full overflow-hidden", aspect)}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/30 to-transparent" />
          {badge && (
            <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {badge}
            </span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white text-balance">
                {title}
              </h3>
              {description && (
                <p className="mt-1.5 text-sm text-white/75 line-clamp-2">{description}</p>
              )}
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-accent group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
