import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { CTASection } from "@/components/ui/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A picture-dense gallery of AD Meliora's engineering, water treatment, roofing and operations & maintenance capability.",
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
