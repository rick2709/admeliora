import type { Metadata } from "next";
import { Mail, Send } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionReveal, RevealItem } from "@/components/ui/SectionReveal";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site";
import { capacityPoints } from "@/lib/company";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join AD Meliora Investments — email your CV to admeliora@admeliorazw.com to be considered for engineering, operations & maintenance, and industrial-supplies roles.",
};

export default function CareersPage() {
  const email = siteConfig.emails[0].address;

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career with AD Meliora."
        description="We're always glad to hear from engineers, technicians and industry professionals who want to help us deliver — regardless."
        image={images.hero.whoWeAre}
      />

      <section className="bg-offwhite py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <SectionReveal className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Join our team
              </p>
              <h2 className="mt-3 text-balance font-heading text-2xl font-bold text-navy sm:text-3xl">
                We don&rsquo;t always have a vacancy open — but we&rsquo;re always
                open to meeting good people.
              </h2>
              <p className="mt-4 text-balance text-steel">
                AD Meliora hires across engineering, operations &amp; maintenance,
                water treatment, project management and industrial supplies. If
                you&rsquo;d like to be considered for current or future
                opportunities, send us your CV and a short note about what you do.
              </p>
              <p className="mt-4 text-balance text-steel">
                We review every application and will reach out if there&rsquo;s a
                fit — now or down the line.
              </p>
            </RevealItem>

            <RevealItem className="flex flex-col gap-2.5 rounded-2xl border border-navy/[0.06] bg-white p-4">
              {capacityPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5 rounded-xl bg-offwhite p-4">
                  <Send size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm font-semibold text-navy">{point}</span>
                </div>
              ))}
            </RevealItem>
          </SectionReveal>

          <SectionReveal className="mt-14">
            <RevealItem className="flex flex-col items-center gap-5 rounded-2xl bg-navy p-10 text-center sm:p-14">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent-light">
                <Mail size={20} />
              </span>
              <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Email us your CV
              </h3>
              <p className="max-w-md text-balance text-sm text-white/70 sm:text-base">
                Send your CV and a brief cover note to our team — let us know which
                area you&rsquo;re interested in and where you&rsquo;re based.
              </p>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent("Career enquiry")}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
              >
                {email}
                <Send size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
            </RevealItem>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
