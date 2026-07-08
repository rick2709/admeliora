import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/ui/CTASection";
import { images } from "@/lib/images";
import { complianceGroups } from "@/lib/compliance";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "AD Meliora's management systems and compliance framework — Quality Management, HSE, and regulatory compliance under Zimbabwean law.",
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Trust & compliance"
        title="Management systems built for procurement scrutiny."
        description="AMI operates within a documented quality, safety and regulatory framework — built to meet the standards of corporate and government procurement."
        image={images.hero.compliance}
      />

      <section className="bg-offwhite py-20 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-8 px-6 sm:px-8">
          {complianceGroups.map((group) => (
            <SectionReveal
              key={group.id}
              id={group.id}
              className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10"
            >
              <RevealItem>
                <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                  {group.title}
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="mt-3 max-w-2xl text-steel">{group.summary}</p>
              </RevealItem>
              <RevealItem className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-offwhite p-4"
                  >
                    <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-sm font-medium text-navy">{item}</span>
                  </div>
                ))}
              </RevealItem>
            </SectionReveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Need documentation for a procurement process?"
        description="We can provide supporting compliance documentation on request."
        primaryCta={{ label: "Contact our team", href: "/contact" }}
      />
    </>
  );
}
