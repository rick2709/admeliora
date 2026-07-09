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
  const [suppressHover, setSuppressHover] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!suppressHover) return;
    // Toggling pointer-events off then on (across two paints) breaks the browser's
    // stale :hover match on the just-clicked link, so the mega-menu doesn't stay
    // open after navigation just because the cursor hasn't physically moved.
    let raf2 = 0;
    const raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => setSuppressHover(false));
    });
    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [suppressHover]);

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

          <nav
            aria-label="Primary"
            onClick={() => setSuppressHover(true)}
            className={cn(
              "hidden md:flex items-center gap-7 h-full",
              suppressHover && "pointer-events-none"
            )}
          >
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
                    <ChevronDown size={14} className="mega-chevron" />
                  </button>

                  {/* Invisible bridge over the gap between trigger and panel — keeps :hover alive while the cursor travels down */}
                  <div className="absolute inset-x-0 top-full hidden h-4 group-hover:block group-focus-within:block" />

                  {/* Panel: centers itself within the header via inset-x-0 + mx-auto + max-w, so every menu lines up with the page container regardless of trigger position */}
                  <div className="absolute inset-x-0 top-full z-40 mx-auto hidden max-h-[75vh] w-full max-w-7xl overflow-y-auto rounded-xl border border-navy/[0.06] bg-white shadow-[0_8px_16px_-6px_rgba(11,33,73,0.16),0_28px_48px_-20px_rgba(11,33,73,0.35)] group-hover:flex group-hover:animate-mega-panel group-focus-within:flex group-focus-within:animate-mega-panel">
                    {item.megaMenu.type === "intro-links" ? (
                      <div className="grid w-full grid-cols-[1.1fr_1fr_1fr] gap-9 px-6 py-7 sm:px-8">
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
                      <div className="grid w-full grid-cols-4 gap-5 px-6 py-7 sm:px-8">
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
