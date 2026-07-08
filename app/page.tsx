import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProductsBand } from "@/components/sections/ProductsBand";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { Marquee } from "@/components/ui/Marquee";
import { homeStats } from "@/lib/stats";
import { homeHubs } from "@/lib/hubs";
import { sectors, sectorMarqueeItems } from "@/lib/sectors";
import { homeProjectShowcase } from "@/lib/projects";
import { capacityPoints } from "@/lib/company";
import { epcmIntro, homeIntroStatement } from "@/lib/home-extra";
import { epcmPillars } from "@/lib/services";
import { siteConfig } from "@/lib/site";

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
      <section className="bg-white py-16 sm:py-24 lg:py-[120px]">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
          <SectionReveal>
            <RevealItem>
              <p className="mb-6 font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Who we are
              </p>
            </RevealItem>
            <RevealItem>
              <p
                className="text-balance font-heading font-semibold text-navy"
                style={{ fontSize: "clamp(24px, 4vw, 40px)", lineHeight: 1.28, letterSpacing: "-0.01em" }}
              >
                {homeIntroStatement}
              </p>
            </RevealItem>
            <RevealItem className="mt-8">
              <Link
                href="/who-we-are"
                className="link-arrow inline-flex items-center gap-2 font-heading text-[15px] font-semibold text-accent hover:text-mid-blue"
              >
                Learn about us <span className="btn-arrow">→</span>
              </Link>
            </RevealItem>
          </SectionReveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-navy py-14 sm:py-[84px]">
        <div
          className="pointer-events-none absolute -right-10 -top-[60px] h-[320px] w-[320px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,107,230,.28), transparent 70%)" }}
        />
        <SectionReveal
          className="relative mx-auto grid max-w-[1200px] gap-9 px-6 sm:px-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {homeStats.map((stat) => (
            <RevealItem key={stat.label}>
              <StatCounter {...stat} />
            </RevealItem>
          ))}
        </SectionReveal>
      </section>

      {/* What we do */}
      <section id="services" className="bg-offwhite py-16 sm:py-24 lg:py-[120px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="mb-[52px] flex flex-wrap items-end justify-between gap-5">
            <div>
              <RevealItem>
                <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  What we do
                </p>
              </RevealItem>
              <RevealItem>
                <h2
                  className="font-heading font-extrabold uppercase text-navy"
                  style={{ fontSize: "clamp(30px, 5vw, 56px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
                >
                  Four ways we
                  <br />
                  keep assets running
                </h2>
              </RevealItem>
            </div>
            <RevealItem>
              <Link
                href="/contact"
                className="link-arrow inline-flex items-center gap-2 font-heading text-[15px] font-semibold text-accent hover:text-mid-blue"
              >
                Talk to our team <span className="btn-arrow">→</span>
              </Link>
            </RevealItem>
          </SectionReveal>

          <SectionReveal
            className="grid gap-[22px]"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {homeHubs.map((hub) => (
              <RevealItem key={hub.id}>
                <Link
                  href={hub.href}
                  className="group relative flex min-h-[400px] items-end overflow-hidden rounded-[18px] bg-navy transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_28px_56px_-12px_rgba(11,33,73,0.32)]"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={hub.image.src}
                      alt={hub.image.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 25vw"
                      className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11,33,73,.95), rgba(11,33,73,.15) 65%)",
                    }}
                  />
                  <div className="relative p-[26px]">
                    {hub.badge && (
                      <span className="mb-3 inline-block rounded-md bg-accent px-2.5 py-1 font-heading text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white">
                        {hub.badge}
                      </span>
                    )}
                    <h3 className="mb-2 font-heading text-xl font-bold leading-tight text-white">
                      {hub.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-[#cdddf7]">
                      {hub.description}
                    </p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <ProductsBand />

      {/* Sectors marquee */}
      <section id="sectors" className="overflow-hidden bg-white py-16 sm:py-24 lg:py-[120px]">
        <SectionReveal className="mx-auto max-w-7xl px-6 sm:px-8">
          <RevealItem className="mb-12 text-center">
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Sectors we serve
            </p>
            <h2
              className="font-heading font-extrabold uppercase text-navy"
              style={{ fontSize: "clamp(30px, 5vw, 56px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Eight industries.
              <br />
              One standard.
            </h2>
          </RevealItem>
        </SectionReveal>
        <div className="py-1.5">
          <Marquee
            items={sectorMarqueeItems.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#e6ecf6] bg-white px-6 py-3 font-heading text-[17px] font-bold text-navy"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {label}
              </span>
            ))}
          />
        </div>
        <div className="mx-auto mt-9 grid max-w-7xl grid-cols-2 gap-4 px-6 sm:px-8 lg:grid-cols-4">
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              href="/sectors"
              className="rounded-xl border border-navy/[0.06] bg-offwhite px-6 py-7 text-center font-heading text-base font-semibold text-navy transition-transform duration-300 hover:-translate-y-1 sm:text-lg"
            >
              {sector.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Projects gallery */}
      <section id="projects" className="bg-offwhite py-16 sm:py-24 lg:py-[120px]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="mb-12">
            <RevealItem>
              <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Featured capability
              </p>
            </RevealItem>
            <RevealItem>
              <h2
                className="font-heading font-extrabold uppercase text-navy"
                style={{ fontSize: "clamp(30px, 5vw, 56px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
              >
                Pioneering projects
              </h2>
            </RevealItem>
          </SectionReveal>

          <SectionReveal
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(6, 1fr)", gridAutoRows: "200px" }}
          >
            {homeProjectShowcase.map((project) => (
              <RevealItem
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-navy"
                style={{
                  gridColumn: `span ${project.colSpan} / span ${project.colSpan}`,
                  gridRow: `span ${project.rowSpan} / span ${project.rowSpan}`,
                }}
              >
                <Link href="/projects" className="block h-full w-full">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 40vw"
                      className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(11,33,73,.85), transparent 55%)",
                    }}
                  />
                  <div className="absolute bottom-5 left-[22px]">
                    {project.colSpan === 4 ? (
                      <span className="mb-2 inline-block rounded-md bg-accent/90 px-2.5 py-1 font-heading text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white">
                        {project.category}
                      </span>
                    ) : (
                      <span className="block font-heading text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8fb4f5]">
                        {project.category}
                      </span>
                    )}
                    <div
                      className="font-heading font-bold text-white"
                      style={{ fontSize: project.colSpan === 4 ? "20px" : "16px" }}
                    >
                      {project.title}
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Why AD Meliora */}
      <section id="why" className="relative overflow-hidden bg-navy py-16 text-white sm:py-24 lg:py-[120px]">
        <div
          className="pointer-events-none absolute -bottom-20 -left-[60px] h-[360px] w-[360px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,107,230,.22), transparent 70%)" }}
        />
        <div
          className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          <SectionReveal>
            <RevealItem>
              <p className="mb-[18px] font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#8fb4f5]">
                Why AD Meliora
              </p>
            </RevealItem>
            <RevealItem>
              <h2
                className="mb-6 font-heading font-extrabold uppercase"
                style={{ fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.04, letterSpacing: "-0.02em" }}
              >
                Capacity, competence
                <br />& a single point
                <br />
                of accountability
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="max-w-[440px] text-base leading-relaxed text-[#cdddf7]">{epcmIntro}</p>
            </RevealItem>
            <RevealItem className="mt-8 space-y-3">
              {capacityPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-[#dbe6fb]">{point}</span>
                </div>
              ))}
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="flex flex-col gap-3.5">
            {epcmPillars.map((pillar) => (
              <RevealItem
                key={pillar.letter}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="shrink-0 font-heading text-xl font-extrabold text-accent">
                  {pillar.letter}
                </span>
                <div>
                  <div className="mb-1 font-heading text-base font-bold text-white">{pillar.title}</div>
                  <div className="text-[13.5px] leading-relaxed text-[#a9bce0]">
                    {pillar.description}
                  </div>
                </div>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="contact" className="overflow-hidden bg-white py-20 sm:py-[100px] lg:py-[140px]">
        <div className="mx-auto max-w-[1000px] px-6 text-center sm:px-8">
          <SectionReveal>
            <RevealItem>
              <p className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Keep in touch
              </p>
            </RevealItem>
            <RevealItem>
              <h2
                className="mb-7 font-heading font-extrabold uppercase text-navy"
                style={{ fontSize: "clamp(34px, 6.5vw, 76px)", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                Let&rsquo;s build
                <br />
                something that lasts
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mb-9 max-w-[520px] text-[17px] leading-relaxed text-steel">
                Tell us about your project or supplies requirement — our team responds fast, with
                a scoped quote you can act on.
              </p>
            </RevealItem>
            <RevealItem className="flex flex-wrap justify-center gap-3.5">
              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill inline-flex items-center rounded-full bg-accent px-8 py-[17px] font-heading text-base font-semibold text-white"
              >
                <span>
                  Request a quote <span className="btn-arrow">→</span>
                </span>
              </a>
              <a
                href={siteConfig.phones[0].href}
                className="inline-flex items-center rounded-full border-[1.5px] border-[#e3e9f2] bg-offwhite px-8 py-[17px] font-heading text-base font-semibold text-navy"
              >
                {siteConfig.phones[0].number}
              </a>
            </RevealItem>
            <RevealItem>
              <p className="mt-[26px] text-sm text-[#7a879c]">
                {siteConfig.address.full.replace(", Zimbabwe", "")} · {siteConfig.emails[0].address}
              </p>
            </RevealItem>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
