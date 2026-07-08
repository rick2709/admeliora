import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/site";

const socialInitials: Record<string, string> = {
  LinkedIn: "in",
  Facebook: "f",
  Twitter: "X",
};

function FooterColumn({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">{heading}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-white/75 hover:text-accent-light transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm text-white/60">{siteConfig.description}</p>
            <p className="mt-6 font-heading text-xl font-bold text-accent-light">
              {siteConfig.tagline.replace(/\.$/, "")}!
            </p>
            <div className="mt-6 flex gap-3">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white/80 transition-colors hover:bg-accent hover:text-white"
                >
                  {socialInitials[s.label]}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn heading="Company" links={footerLinks.company} />
          <FooterColumn heading="Services" links={footerLinks.services} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Get in touch</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.phones[0].href}
                  className="flex items-start gap-2.5 text-sm text-white/75 hover:text-accent-light transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>
                    {siteConfig.phones[0].number}
                    <br />
                    {siteConfig.phones[1].number}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.emails[0].address}`}
                  className="flex items-start gap-2.5 text-sm text-white/75 hover:text-accent-light transition-colors break-all"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  {siteConfig.emails[0].address}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/75">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {siteConfig.address.full}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">Built for corporate & government procurement.</p>
        </div>
      </div>
    </footer>
  );
}
