"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { easeOut } from "@/lib/motion";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const slideIn = {
  hidden: { opacity: 0, x: -24 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.12 + i * 0.06, ease: easeOut },
  }),
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[1100] flex flex-col bg-navy md:hidden"
        >
          <div className="flex h-[60px] items-center justify-between px-[22px]">
            <Logo variant="light" showWordmark={false} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center text-[30px] leading-none text-white"
            >
              ×
            </button>
          </div>

          <nav aria-label="Mobile primary" className="flex flex-col gap-1 px-[22px] py-6">
            {mainNav.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={slideIn}
                initial="hidden"
                animate="show"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 font-heading text-[30px] font-bold text-white transition-colors hover:text-accent-light"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div
            className="mt-auto px-[22px] pt-[22px]"
            style={{ paddingBottom: "calc(30px + env(safe-area-inset-bottom))" }}
          >
            <Link
              href="/contact"
              onClick={onClose}
              className="btn-fill flex items-center justify-center rounded-full bg-accent py-4 font-heading text-[15px] font-semibold text-white"
            >
              <span>
                Request a Quote <span className="btn-arrow">→</span>
              </span>
            </Link>
            <p className="mt-5 text-center text-[13px] tracking-wide text-[#9fb4d8]">
              {siteConfig.tagline}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
