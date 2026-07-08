import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTASection({
  eyebrow = "Keep in touch",
  title,
  description,
  primaryCta = { label: "Request a quote", href: "/contact" },
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-accent) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--color-mid-blue) 0, transparent 45%)",
        }}
      />
      <SectionReveal className="relative mx-auto max-w-4xl px-6 text-center">
        <RevealItem>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            {eyebrow}
          </p>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-bold text-white text-balance">
            {title}
          </h2>
        </RevealItem>
        {description && (
          <RevealItem>
            <p className="mt-5 text-base sm:text-lg text-white/70 text-balance">{description}</p>
          </RevealItem>
        )}
        <RevealItem className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            {primaryCta.label}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryCta.label}
            </Link>
          )}
        </RevealItem>
      </SectionReveal>
    </section>
  );
}
