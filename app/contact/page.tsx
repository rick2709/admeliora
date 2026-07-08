import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AD Meliora Investments — request a quote, ask about our services, or reach our Harare office directly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's scope your project."
        description="Send an enquiry, call our team, or drop by our Tynwald South office in Harare."
        image={images.hero.contact}
      />

      <section className="bg-offwhite py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionReveal>
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Contact details
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-3xl">
                We&rsquo;re ready when you are
              </h2>
            </RevealItem>

            <RevealItem className="mt-8 space-y-5">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone size={17} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Phone</p>
                  {siteConfig.phones.map((p) => (
                    <a
                      key={p.number}
                      href={p.href}
                      className="block text-sm text-steel hover:text-accent"
                    >
                      {p.number}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail size={17} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  {siteConfig.emails.map((e) => (
                    <a
                      key={e.address}
                      href={`mailto:${e.address}`}
                      className="block break-all text-sm text-steel hover:text-accent"
                    >
                      {e.address}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin size={17} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Address</p>
                  <p className="text-sm text-steel">{siteConfig.address.full}</p>
                </div>
              </div>

              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle size={17} fill="white" className="text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </RevealItem>

            <RevealItem className="mt-8 overflow-hidden rounded-2xl ring-1 ring-black/5">
              <iframe
                title="AD Meliora location — Tynwald South, Harare"
                src="https://www.google.com/maps?q=Tynwald+South+Industry,+Harare,+Zimbabwe&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </RevealItem>
          </SectionReveal>

          <SectionReveal>
            <RevealItem>
              <ContactForm />
            </RevealItem>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
