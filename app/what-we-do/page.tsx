import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { ImageCard } from "@/components/ui/ImageCard";
import { CTASection } from "@/components/ui/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Explore AD Meliora's services, the sectors we serve, and our project delivery capability.",
};

const landingCards = [
  {
    href: "/services",
    title: "Services",
    description: "Architecture & engineering, construction, O&M, water treatment and EPCM project management.",
    image: images.hero.services,
  },
  {
    href: "/sectors",
    title: "Sectors We Serve",
    description: "Government, local authorities, energy, water & sanitation, mining, oil & gas, industrial and commercial.",
    image: images.hero.sectors,
  },
  {
    href: "/projects",
    title: "Projects",
    description: "A picture-dense look at our plant, water-treatment, roofing and O&M capability.",
    image: images.hero.projects,
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Engineering, operations, and industrial supply — end to end."
        description="From front-end feasibility through construction to the long-term operation of a running asset, AMI delivers across the full project lifecycle."
        image={images.hero.whatWeDo}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {landingCards.map((card) => (
              <RevealItem key={card.href}>
                <ImageCard
                  href={card.href}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  aspect="aspect-[3/4]"
                />
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTASection
        title="Need supplies as well as delivery?"
        description="AMI also stocks industrial and hardware supplies — roofing, electrical, plumbing, pumps and more."
        primaryCta={{ label: "Browse products", href: "/products" }}
        secondaryCta={{ label: "Request a quote", href: "/contact" }}
      />
    </>
  );
}
