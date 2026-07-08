# AD Meliora Investments — Marketing Site

Next.js (App Router) marketing site for AD Meliora Investments (Pvt) Ltd (AMI) — a Zimbabwean engineering, operations & maintenance, and industrial-supplies company.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css`, no `tailwind.config.js`)
- Framer Motion for page transitions, scroll reveals, and the mobile menu
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Before shipping changes, run:

```bash
npx tsc --noEmit   # typecheck
npm run lint       # eslint
npm run build      # production build
```

## Editing content

Every piece of copy, nav structure, and data-driven list on the site lives in `/lib` as typed TypeScript, not hardcoded in components — edit the data file and the relevant pages update automatically.

| File | Controls |
| --- | --- |
| `lib/site.ts` | Company name, tagline, phone numbers, emails, address, WhatsApp link, socials |
| `lib/nav.ts` | Header nav links, mega-menu columns, mobile bottom-nav tabs, footer links |
| `lib/images.ts` | **Every image on the site** (see below) |
| `lib/company.ts` | Vision, mission, core values, timeline, governance/HSE/capacity points |
| `lib/services.ts` | Service cards on `/services`, EPCM pillars |
| `lib/products.ts` | Product category cards on `/products` |
| `lib/sectors.ts` | Sector cards on `/sectors` |
| `lib/projects.ts` / `images.projectsGallery` (in `lib/images.ts`) | Filterable gallery on `/projects` |
| `lib/compliance.ts` | QMS / HSE / regulatory groups on `/compliance` |
| `lib/stats.ts` | Home page stat counters |
| `lib/hubs.ts` | The 4 "What we do" cards on the home page |

Page copy that isn't reused elsewhere (hero headlines, section intros) lives directly in the relevant `app/**/page.tsx` file.

## Images

All images are declared in `lib/images.ts` and consumed via `next/image` — nothing is hardcoded in the components themselves, so replacing a photo is a one-line change.

- Real AD Meliora photography lives in `public/images/*` (10 files — plant, water treatment, roofing production, branded vehicles, staff/PPE, the AMI logo).
- Where no customer photo exists for a specific product line yet (solar panels, copper tubes, pumps, bearings, power tools, paint, cranes, and a few institutional sector cards), the site falls back to themed Unsplash placeholders — these are called out in the comment at the top of `lib/images.ts`.
- **To swap in a new photo:** drop the file into `public/images/`, then update the relevant `src` in `lib/images.ts` to `"/images/your-file.jpg"`. No component changes needed.
- The logo mark used in the header/footer (`components/ui/Logo.tsx`) is the real AMI icon cropped out of the customer's logo file, exported as two transparent PNGs — `public/images/logo-ami-icon.png` (navy, for light backgrounds) and `public/images/logo-ami-icon-light.png` (white, for dark backgrounds). Regenerate these if the customer supplies an updated logo.
- The raw customer upload folder (`public/admeliora-public-images/`) is gitignored since its contents are already copied into `public/images/` — safe to delete once you've confirmed nothing else is needed from it.

## Connecting the contact form

`components/sections/ContactForm.tsx` currently validates client-side and simulates a submit (see the `// TODO` in `handleSubmit`). To make it functional, pick one:

1. **Formspree (fastest):** create a form at formspree.io, then point the `<form>` at its endpoint with a plain POST (or swap the `handleSubmit` body for a `fetch()` call to the Formspree endpoint) instead of the simulated `await new Promise(...)`.
2. **Route Handler + email provider:** add `app/api/contact/route.ts` that accepts the POST body and sends it via Resend, SendGrid, or similar, then replace the simulated submit in `ContactForm.tsx` with `fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })`.

The WhatsApp click-to-chat button and phone/email links elsewhere on the site are already live (`lib/site.ts`) and need no wiring.

## Deployment

Standard Next.js app — deploys as-is to Vercel or any Node host. Update `siteConfig.url` in `lib/site.ts` to the production domain before launch (it feeds `sitemap.ts`, `robots.ts`, and Open Graph metadata).
