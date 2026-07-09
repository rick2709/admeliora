import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/ui/CTASection";
import { images } from "@/lib/images";
import { projectExpertise } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A picture-dense gallery of AD Meliora's engineering, water treatment, roofing and operations & maintenance capability, backed by decades of major infrastructure delivery experience.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Capability gallery"
        title="Plant, pipework, and people at work."
        description="A look at the engineering, water treatment, roofing and O&M capability behind every AMI delivery."
        image={images.hero.projects}
      />

      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Track record
              </p>
              <h2 className="mt-3 text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
                Decades of major infrastructure delivery experience.
              </h2>
              <p className="mt-4 text-balance text-steel">
                AD Meliora&apos;s leadership and technical teams possess decades of
                experience delivering major engineering and infrastructure projects
                in Africa and beyond. Our expertise spans:
              </p>
              <p className="mt-4 text-balance text-steel">
                This experience enables us to execute confidently while maintaining
                international standards of quality, safety, and performance.
              </p>
            </RevealItem>

            <RevealItem className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {projectExpertise.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-navy/[0.06] bg-white p-4"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm font-semibold text-navy">{item}</span>
                </div>
              ))}
            </RevealItem>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <ProjectGallery />
      </section>

      <CTASection
        title="Have a project in mind?"
        description="Send us the brief and we'll come back with a scoped proposal."
        primaryCta={{ label: "Request a quote", href: "/contact" }}
      />
    </>
  );
}
