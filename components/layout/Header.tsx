"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { MobileMenuButton } from "@/components/layout/MobileMenuButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = scrolled || mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isSolid
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5"
            : "bg-gradient-to-b from-navy-dark/70 to-transparent py-4"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="AD Meliora home" className="relative z-10">
            <Logo variant={isSolid ? "dark" : "light"} />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {mainNav.map((item) =>
              item.megaMenu ? (
                // `static` (not `relative`) is the trick: it takes this item out of the
                // positioning context so the panel below anchors to the fixed <header>
                // instead of this individual item — every panel gets the same width and
                // alignment no matter which nav item triggered it.
                <div key={item.label} className="group static">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      isSolid ? "text-navy hover:text-accent" : "text-white hover:text-accent-light"
                    )}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    />
                  </Link>

                  {/* Invisible bridge over the visual gap between the trigger and the
                      panel, so the pointer never leaves a hoverable descendant of
                      `.group` while moving down into the panel — prevents flicker. */}
                  <div className="absolute inset-x-0 top-full hidden h-4 group-hover:block group-focus-within:block" />

                  <div className="absolute inset-x-0 top-full z-40 mx-auto hidden max-w-7xl px-5 group-hover:flex group-focus-within:flex sm:px-8">
                    <div className="mt-4 h-[26rem] w-full overflow-y-auto rounded-xl bg-white shadow-[0_10px_15px_-3px_rgba(11,33,73,0.1),0_20px_40px_-12px_rgba(11,33,73,0.2)] ring-1 ring-black/5 group-hover:animate-mega-panel group-focus-within:animate-mega-panel">
                      <div className="grid h-full grid-cols-[1.6fr_1fr] gap-0">
                        <div className="grid grid-cols-2 gap-6 p-7">
                          {item.megaMenu.columns.map((col) => (
                            <div key={col.heading}>
                              <p className="text-xs font-semibold uppercase tracking-wide text-steel/70">
                                {col.heading}
                              </p>
                              <ul className="mt-3 space-y-2.5">
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      className="text-sm font-medium text-navy hover:text-accent transition-colors"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {item.megaMenu.featured && (
                          <Link
                            href={item.megaMenu.featured.href}
                            className="group/featured relative flex h-full flex-col justify-end overflow-hidden bg-navy p-5"
                          >
                            <Image
                              src={item.megaMenu.featured.image}
                              alt=""
                              fill
                              sizes="480px"
                              className="object-cover opacity-60 transition-transform duration-500 group-hover/featured:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/50 to-transparent" />
                            <div className="relative">
                              <p className="font-heading text-base font-bold text-white text-balance">
                                {item.megaMenu.featured.title}
                              </p>
                              <p className="mt-1 text-xs text-white/70 line-clamp-2">
                                {item.megaMenu.featured.description}
                              </p>
                              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent-light">
                                Learn more <ArrowRight size={12} />
                              </span>
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isSolid ? "text-navy hover:text-accent" : "text-white hover:text-accent-light"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              Request a Quote
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

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
