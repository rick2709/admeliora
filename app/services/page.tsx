import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/ui/CTASection";
import { images } from "@/lib/images";
import { services, epcmPillars } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture & engineering, planning, construction & field services, operations & maintenance, water treatment plant O&M, and EPCM project management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services built for full project accountability."
        description="Every service AMI offers connects into a single EPCM delivery model — engineering, procurement, construction management, and ongoing operations."
        image={images.hero.services}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-6 sm:space-y-28 sm:px-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <SectionReveal
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-2xl",
                  i % 2 === 1 && "lg:order-2"
                )}
              >
                <RevealItem className="h-full w-full">
                  <div className="relative h-full w-full">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover"
                    />
                    {service.highlighted && (
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                    )}
                  </div>
                </RevealItem>
              </SectionReveal>

              <SectionReveal className={cn(i % 2 === 1 && "lg:order-1")}>
                {service.highlighted && (
                  <RevealItem>
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Key differentiator
                    </span>
                  </RevealItem>
                )}
                <RevealItem>
                  <h2 className="mt-4 text-balance font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h2>
                </RevealItem>
                <RevealItem>
                  <p className="mt-4 text-balance text-steel">{service.summary}</p>
                </RevealItem>
                <RevealItem className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span className="text-sm text-navy">{point}</span>
                    </div>
                  ))}
                </RevealItem>
                <RevealItem className="mt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-mid-blue"
                  >
                    Request this service <ArrowRight size={15} />
                  </Link>
                </RevealItem>
              </SectionReveal>
            </div>
          ))}
        </div>
      </section>

      {/* EPCM explainer */}
      <section id="epcm" className="scroll-mt-24 bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
                Delivery model
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
                The EPCM Delivery Model
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 text-white/70">
                Engineering, Procurement, Construction Management — with AMI
                carrying ownership and risk from concept to a running asset.
              </p>
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {epcmPillars.map((pillar) => (
              <RevealItem
                key={pillar.letter}
                className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <span className="font-heading text-4xl font-extrabold text-accent-light">
                  {pillar.letter}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-white/65">{pillar.description}</p>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTASection
        title="Scope your project with our engineering team"
        description="Tell us what you need delivered — we'll respond with a scope, timeline and quote."
        primaryCta={{ label: "Request a quote", href: "/contact" }}
        secondaryCta={{ label: "See our sectors", href: "/sectors" }}
      />
    </>
  );
}
