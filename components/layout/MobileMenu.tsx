"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site";
import { staggerContainer, fadeUp } from "@/lib/motion";
import { useEffect } from "react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
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
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-navy lg:hidden"
        >
          <motion.nav
            variants={staggerContainer(0.06, 0.15)}
            initial="hidden"
            animate="show"
            className="flex flex-1 flex-col justify-center gap-1 px-8 pt-20 pb-8"
            aria-label="Mobile primary"
          >
            {mainNav.map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-white/10 py-4 font-heading text-3xl font-bold text-white transition-colors hover:text-accent-light"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="pt-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.nav>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="border-t border-white/10 px-8 py-6 flex flex-col gap-3"
          >
            <a
              href={siteConfig.phones[0].href}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <Phone size={15} /> {siteConfig.phones[0].number}
            </a>
            <a
              href={`mailto:${siteConfig.emails[0].address}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <Mail size={15} /> {siteConfig.emails[0].address}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
