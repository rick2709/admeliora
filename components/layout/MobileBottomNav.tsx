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
      const diff = y - lastY.current;
      if (y < 60) {
        setHidden(false);
      } else if (diff > 8) {
        setHidden(true);
      } else if (diff < -8) {
        setHidden(false);
      }
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
      animate={{ y: hidden ? "110%" : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/85 backdrop-blur-lg md:hidden"
    >
      <ul className="flex items-stretch justify-between px-1">
        {bottomNavItems.map((item) => {
          const Icon = icons[item.icon];
          const active = isActive(item.href);
          const isContact = item.icon === "contact";

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="flex flex-col items-center justify-center gap-0.5 py-2.5 min-h-[52px]"
              >
                <motion.span
                  whileTap={{ scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                    isContact
                      ? "bg-accent text-white"
                      : active
                      ? "bg-accent/10 text-accent"
                      : "text-steel"
                  )}
                >
                  <Icon size={19} strokeWidth={2.25} />
                </motion.span>
                <span
                  className={cn(
                    "text-[10.5px] font-medium",
                    active ? "text-accent" : "text-steel/80"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
