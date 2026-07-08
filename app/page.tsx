import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { ImageCard } from "@/components/ui/ImageCard";
import { Marquee } from "@/components/ui/Marquee";
import { CTASection } from "@/components/ui/CTASection";
import { homeStats } from "@/lib/stats";
import { homeHubs } from "@/lib/hubs";
import { sectors } from "@/lib/sectors";
import { projectGallery } from "@/lib/projects";
import { capacityPoints } from "@/lib/company";
import { epcmIntro } from "@/lib/home-extra";
import { epcmPillars } from "@/lib/services";

export const metadata: Metadata = {
  title: "Home",
  description:
    "AD Meliora Investments (AMI) delivers engineering, operations & maintenance, and industrial supplies for corporate, government and industrial clients across Zimbabwe.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Intro statement */}
      <section className="bg-white py-20 sm:py-28">
        <SectionReveal className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <RevealItem>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Who we are
            </p>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-4 text-balance font-heading text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              A Zimbabwean engineering, operations & maintenance, and
              industrial-supplies company built to carry full delivery risk.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-balance text-base text-steel sm:text-lg">
              AD Meliora Investments (AMI) partners with government, corporate and
              industrial clients across Zimbabwe — taking projects from concept and
              design through to a running, maintained asset. Our EPCM delivery
              model means one point of accountability, from the drawing board to
              the plant floor.
            </p>
          </RevealItem>
          <RevealItem className="mt-7">
            <Link
              href="/who-we-are"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-mid-blue"
            >
              Who we are <ArrowRight size={15} />
            </Link>
          </RevealItem>
        </SectionReveal>
      </section>

      {/* Stats band */}
      <section className="bg-navy py-16 sm:py-20">
        <SectionReveal className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:px-8 lg:grid-cols-4">
          {homeStats.map((stat) => (
            <RevealItem key={stat.label}>
              <StatCounter {...stat} />
            </RevealItem>
          ))}
        </SectionReveal>
      </section>

      {/* What we do */}
      <section className="bg-offwhite py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <RevealItem>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  What we do
                </p>
              </RevealItem>
              <RevealItem>
                <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
                  Full-lifecycle capability
                </h2>
              </RevealItem>
            </div>
            <RevealItem>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-mid-blue"
              >
                View all services <ArrowRight size={15} />
              </Link>
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeHubs.map((hub) => (
              <RevealItem key={hub.id}>
                <ImageCard
                  href={hub.href}
                  title={hub.title}
                  description={hub.description}
                  image={hub.image}
                />
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Sectors marquee */}
      <section className="border-y border-black/5 bg-white py-16 sm:py-20">
        <SectionReveal className="mx-auto max-w-7xl px-6 sm:px-8">
          <RevealItem className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Sectors we serve
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
              Trusted across 8 sectors
            </h2>
          </RevealItem>
        </SectionReveal>
        <div className="mt-10">
          <Marquee
            items={sectors.map((sector) => (
              <Link
                key={sector.id}
                href="/sectors"
                className="flex items-center gap-3 rounded-full border border-navy/10 bg-offwhite px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent"
              >
                {sector.title}
              </Link>
            ))}
          />
        </div>
      </section>

      {/* Projects / capability gallery */}
      <section className="bg-navy-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <RevealItem>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
                  Capability gallery
                </p>
              </RevealItem>
              <RevealItem>
                <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
                  Featured projects
                </h2>
              </RevealItem>
            </div>
            <RevealItem>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:text-white"
              >
                View all projects <ArrowRight size={15} />
              </Link>
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {projectGallery.slice(0, 9).map((project, i) => (
              <RevealItem key={i} className="group relative overflow-hidden rounded-2xl break-inside-avoid">
                <Link href="/projects" className="block">
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ aspectRatio: i % 3 === 0 ? "4/5" : "4/3" }}
                  >
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {project.category} <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Why AD Meliora */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <SectionReveal>
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Why AD Meliora
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-navy sm:text-4xl">
                Capacity, competence, and single-point accountability.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 text-balance text-steel">{epcmIntro}</p>
            </RevealItem>
            <RevealItem className="mt-8 space-y-3">
              {capacityPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-navy">{point}</span>
                </div>
              ))}
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="grid grid-cols-2 gap-4">
            {epcmPillars.map((pillar) => (
              <RevealItem
                key={pillar.letter}
                className="rounded-2xl bg-offwhite p-6 transition-colors hover:bg-blush/40"
              >
                <span className="font-heading text-3xl font-extrabold text-accent">
                  {pillar.letter}
                </span>
                <p className="mt-3 font-heading text-sm font-bold text-navy">{pillar.title}</p>
                <p className="mt-1.5 text-xs text-steel">{pillar.description}</p>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTASection
        title="Let's talk about your next project"
        description="Whether it's a full EPCM delivery or a single maintenance contract, our team is ready to scope it with you."
        primaryCta={{ label: "Request a quote", href: "/contact" }}
        secondaryCta={{ label: "View our services", href: "/services" }}
      />
    </>
  );
}
