"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Wrench, Box, Building2, MessageCircle } from "lucide-react";
import { bottomNavItems } from "@/lib/nav";
import { cn } from "@/lib/utils";

const icons = {
  home: Home,
  services: Wrench,
  products: Box,
  projects: Building2,
  contact: MessageCircle,
};

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current && y > 260;
      setHidden(goingDown);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      aria-label="Mobile primary"
      initial={false}
      animate={{ y: hidden ? "120%" : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-[1050] flex items-end justify-around border-t border-navy/10 bg-white/90 shadow-[0_-6px_24px_-12px_rgba(11,33,73,0.3)] backdrop-blur-lg backdrop-saturate-150 md:hidden"
      style={{ paddingBottom: "calc(8px + env(safe-area-inset-bottom))" }}
    >
      {bottomNavItems.map((item) => {
        const Icon = icons[item.icon];
        const active = isActive(item.href);
        const isContact = item.icon === "contact";

        if (isContact) {
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="flex min-w-0 flex-1 flex-col items-center gap-0.5 px-1 pt-1.5 pb-1"
            >
              <motion.span
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="-mt-[22px] flex h-[46px] w-[46px] items-center justify-center rounded-full border-[3px] border-white bg-accent shadow-[0_8px_20px_-4px_rgba(30,107,230,0.6)]"
              >
                <Icon size={22} strokeWidth={2} className="text-white" />
              </motion.span>
              <span className="text-[10px] font-bold font-heading text-accent">
                {item.label}
              </span>
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className="flex min-h-[52px] min-w-0 flex-1 flex-col items-center justify-center gap-1 py-2.5"
          >
            <Icon
              size={23}
              strokeWidth={2}
              className={cn(active ? "text-accent" : "text-[#6a7793]")}
            />
            <span
              className={cn(
                "text-[10px] font-semibold font-heading",
                active ? "text-accent" : "text-[#6a7793]"
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </motion.nav>
  );
}
