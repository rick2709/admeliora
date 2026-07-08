import type { Metadata } from "next";
import { ShieldCheck, HardHat, Wrench } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/ui/CTASection";
import { images } from "@/lib/images";
import {
  vision,
  mission,
  coreValues,
  timeline,
  governancePoints,
  hsePoints,
  capacityPoints,
} from "@/lib/company";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "AD Meliora Investments (AMI) — our vision, mission, core values, corporate governance, HSE policy and capacity to deliver.",
};

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Built to carry delivery risk, start to finish."
        description="AD Meliora Investments (AMI) is a Zimbabwean engineering, operations & maintenance, and industrial-supplies company delivering full project lifecycle solutions."
        image={images.hero.whoWeAre}
      />

      {/* Vision & Mission */}
      <section id="vision-mission" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Vision</p>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
                {vision}
              </p>
            </RevealItem>
          </SectionReveal>
          <SectionReveal>
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Mission</p>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
                {mission}
              </p>
            </RevealItem>
          </SectionReveal>
        </div>
      </section>

      {/* Core values */}
      <section id="values" className="scroll-mt-24 bg-offwhite py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="text-center">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Core values
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
                What guides our delivery
              </h2>
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <RevealItem
                key={value.title}
                className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <h3 className="font-heading text-lg font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-steel">{value.description}</p>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Capacity & competence — timeline */}
      <section id="capacity" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="text-center">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Capacity & competence
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">
                Full project lifecycle, one partner
              </h2>
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((stage, i) => (
              <RevealItem key={stage.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {stage.year}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">{stage.title}</h3>
                <p className="mt-1.5 text-sm text-steel">{stage.description}</p>
              </RevealItem>
            ))}
          </SectionReveal>

          <SectionReveal className="mt-16 grid grid-cols-1 gap-3 rounded-2xl bg-offwhite p-8 sm:grid-cols-2">
            {capacityPoints.map((point) => (
              <RevealItem key={point} className="flex items-start gap-3">
                <Wrench size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-navy">{point}</span>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* Governance & HSE */}
      <section id="governance" className="scroll-mt-24 bg-navy py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <SectionReveal className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
            <RevealItem className="flex items-center gap-3">
              <ShieldCheck size={22} className="text-accent-light" />
              <h3 className="font-heading text-xl font-bold text-white">
                Corporate Governance & Ethics
              </h3>
            </RevealItem>
            <RevealItem className="mt-5 space-y-3">
              {governancePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  <span className="text-sm text-white/75">{point}</span>
                </div>
              ))}
            </RevealItem>
          </SectionReveal>

          <SectionReveal id="hse" className="scroll-mt-24 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
            <RevealItem className="flex items-center gap-3">
              <HardHat size={22} className="text-accent-light" />
              <h3 className="font-heading text-xl font-bold text-white">HSE Policy</h3>
            </RevealItem>
            <RevealItem className="mt-5 space-y-3">
              {hsePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  <span className="text-sm text-white/75">{point}</span>
                </div>
              ))}
            </RevealItem>
          </SectionReveal>
        </div>
      </section>

      <CTASection
        title="Want the full picture on our compliance framework?"
        description="See how AMI aligns with Zimbabwe's regulatory and quality standards."
        primaryCta={{ label: "View compliance", href: "/compliance" }}
        secondaryCta={{ label: "Contact our team", href: "/contact" }}
      />
    </>
  );
}
