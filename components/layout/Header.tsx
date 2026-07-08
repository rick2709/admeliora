"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { MobileMenuButton } from "@/components/layout/MobileMenuButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const mq = window.matchMedia("(max-width: 767px)");
    const onMq = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onMq);

    // Sync initial state from the browser APIs once mounted — no SSR equivalent exists
    // for scroll position or matchMedia, so this one-time post-mount sync is intentional.
    onScroll();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(mq.matches);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  const isSolid = scrolled || isMobile;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-stretch transition-[height,background-color,box-shadow,border-color] duration-[350ms] ease-out",
          scrolled ? "h-[62px]" : "h-[78px]",
          isSolid
            ? "border-b border-navy/10 bg-white/92 shadow-[0_6px_24px_-12px_rgba(11,33,73,0.35)] backdrop-blur-lg backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-8">
          <Link href="/" aria-label="AD Meliora home" className="shrink-0">
            <Logo variant={isSolid ? "dark" : "light"} />
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-7 h-full">
            {mainNav.map((item) =>
              item.megaMenu ? (
                <div key={item.label} className="group static flex h-full items-center">
                  <button
                    type="button"
                    className={cn(
                      "nav-underline flex items-center gap-1 font-heading text-sm font-semibold tracking-wide",
                      isSolid ? "text-navy" : "text-white"
                    )}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  </button>

                  {/* Invisible bridge over the gap between trigger and panel */}
                  <div className="absolute inset-x-0 top-full hidden h-4 group-hover:block group-focus-within:block" />

                  <div className="pointer-events-none absolute inset-x-0 top-full z-40 flex -translate-y-2.5 border-t border-navy/[0.06] bg-white opacity-0 shadow-[0_24px_40px_-20px_rgba(11,33,73,0.35)] transition-[opacity,transform] duration-[280ms] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.megaMenu.type === "intro-links" ? (
                      <div className="mx-auto grid w-full max-w-7xl grid-cols-[1.1fr_1fr_1fr] gap-9 px-6 py-7 sm:px-8">
                        <div>
                          <p className="mb-2 font-heading text-xl font-bold text-navy">
                            {item.label}
                          </p>
                          <p className="max-w-[280px] text-[13.5px] leading-relaxed text-steel">
                            {item.megaMenu.intro}
                          </p>
                        </div>
                        {item.megaMenu.columns.map((col, i) => (
                          <div key={i} className="flex flex-col gap-0.5">
                            {col.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="py-2 text-sm font-semibold text-navy hover:text-accent transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mx-auto grid w-full max-w-7xl grid-cols-4 gap-5 px-6 py-7 sm:px-8">
                        {item.megaMenu.cards.map((card) => (
                          <Link
                            key={card.title}
                            href={card.href}
                            className="block rounded-2xl border border-navy/[0.06] bg-offwhite p-[18px] transition-colors hover:border-accent/30"
                          >
                            <span className="mb-1.5 block font-heading text-[15px] font-bold text-navy">
                              {card.title}
                            </span>
                            <span className="text-[12.5px] leading-relaxed text-steel">
                              {card.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "nav-underline font-heading text-sm font-semibold tracking-wide whitespace-nowrap",
                    isSolid ? "text-navy" : "text-white"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link
            href="/contact"
            className="btn-fill hidden shrink-0 items-center rounded-full bg-accent px-[22px] py-3 font-heading text-[13.5px] font-semibold tracking-wide text-white md:inline-flex"
          >
            <span>
              Request a Quote <span className="btn-arrow">→</span>
            </span>
          </Link>

          <MobileMenuButton
            open={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            dark={isSolid}
          />
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
