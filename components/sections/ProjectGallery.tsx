"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { projectCategories, projectGallery, type ProjectCategory } from "@/lib/projects";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = projectGallery.filter(
    (p) => filter === "All" || p.category === filter
  );

  const activeItem = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8">
      <div className="flex flex-wrap gap-2.5">
        {(["All", ...projectCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat);
              setActiveIndex(null);
            }}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              filter === cat
                ? "border-accent bg-accent text-white"
                : "border-navy/15 bg-white text-navy hover:border-accent hover:text-accent"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <SectionReveal
        key={filter}
        className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
      >
        {filtered.map((project, i) => (
          <RevealItem key={project.src + i} className="break-inside-avoid">
            <motion.button
              type="button"
              layoutId={`project-${filter}-${i}`}
              onClick={() => setActiveIndex(i)}
              whileHover={{ y: -4 }}
              className="group relative block w-full overflow-hidden rounded-2xl text-left"
              style={{ aspectRatio: i % 3 === 0 ? "4/5" : "4/3" }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-navy opacity-0 transition-opacity group-hover:opacity-100">
                {project.category}
              </span>
            </motion.button>
          </RevealItem>
        ))}
      </SectionReveal>

      <AnimatePresence>
        {activeItem && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-dark/90 p-4 sm:p-10"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Project image preview"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={20} />
            </button>
            <motion.div
              layoutId={`project-${filter}-${activeIndex}`}
              className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 to-transparent p-5">
                <p className="text-sm font-semibold text-white">{activeItem.category}</p>
                <p className="text-xs text-white/70">{activeItem.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
