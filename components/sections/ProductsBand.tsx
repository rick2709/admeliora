import Link from "next/link";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { productCategories } from "@/lib/products";

const homeProductOrder = [
  "roofing",
  "electrical-solar",
  "pumps",
  "plumbing",
  "mechanical",
  "power-tools",
];

const homeProducts = homeProductOrder
  .map((id) => productCategories.find((p) => p.id === id))
  .filter((p): p is (typeof productCategories)[number] => Boolean(p));

export function ProductsBand() {
  return (
    <section id="products" className="bg-steel py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionReveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <RevealItem>
              <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#8fb4f5]">
                Industrial &amp; hardware supplies
              </p>
            </RevealItem>
            <RevealItem>
              <h2
                className="font-heading font-extrabold uppercase"
                style={{ fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: 1.03, letterSpacing: "-0.02em" }}
              >
                Stocked to keep
                <br />
                your site moving
              </h2>
            </RevealItem>
          </div>
          <RevealItem>
            <Link
              href="/contact"
              className="btn-fill inline-flex items-center rounded-full bg-accent px-6 py-3.5 font-heading text-sm font-semibold text-white"
            >
              <span>
                Request a supplies quote <span className="btn-arrow">→</span>
              </span>
            </Link>
          </RevealItem>
        </SectionReveal>

        <SectionReveal
          className="grid gap-3.5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}
        >
          {homeProducts.map((product) => (
            <RevealItem
              key={product.id}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-[22px] transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_28px_56px_-12px_rgba(11,33,73,0.32)]"
            >
              <div className="mb-1.5 font-heading text-base font-bold text-white">
                {product.title.replace(" Materials", "")}
              </div>
              <div className="text-[12.5px] leading-relaxed text-[#c3ccda]">
                {product.summary}
              </div>
            </RevealItem>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
