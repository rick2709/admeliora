import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/ui/CTASection";
import { images } from "@/lib/images";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Industrial & Hardware Supplies",
  description:
    "Roofing materials, electrical & solar, plumbing, pumps, mechanical, hardware & building materials, and power tools — AD Meliora's industrial supplies catalogue.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrial & hardware supplies"
        title="Stock and supply for every phase of the build."
        description="AMI's supplies division stands apart from our engineering delivery — a dedicated catalogue of industrial and hardware products, including in-house roll-formed roofing."
        image={images.hero.products}
      />

      <section className="bg-offwhite py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <RevealItem
                key={category.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-navy">{category.title}</h3>
                  <p className="mt-1.5 text-sm text-steel">{category.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-offwhite px-2.5 py-1 text-xs font-medium text-navy"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {category.note && (
                    <p className="mt-4 text-xs font-semibold text-accent">{category.note}</p>
                  )}
                </div>
              </RevealItem>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTASection
        eyebrow="Supplies enquiry"
        title="Request a supplies quote"
        description="Send us your bill of quantities or a list of what you need — we'll come back with pricing and lead times."
        primaryCta={{ label: "Request a supplies quote", href: "/contact" }}
      />
    </>
  );
}
