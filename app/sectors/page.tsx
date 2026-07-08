import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/ui/CTASection";
import { images } from "@/lib/images";
import { sectors, sectorFocusNote } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "Sectors We Serve",
  description:
    "AD Meliora serves government ministries, local authorities, energy & power, water & sanitation, mining, oil & gas, industrial and commercial sectors across Zimbabwe.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors we serve"
        title="Eight sectors. One accountable delivery partner."
        description={sectorFocusNote}
        image={images.hero.sectors}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <RevealItem
                key={sector.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={sector.image.src}
                  alt={sector.image.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 24vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-base font-bold text-white text-balance">
                    {sector.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-white/70 text-balance">{sector.line}</p>
                </div>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTASection
        title="Don't see your sector listed?"
        description="We work across a wide range of industrial and public-sector contexts — get in touch to discuss your project."
        primaryCta={{ label: "Contact our team", href: "/contact" }}
        secondaryCta={{ label: "View our services", href: "/services" }}
      />
    </>
  );
}
