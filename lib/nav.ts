import { images } from "./images";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavCard = {
  title: string;
  description: string;
  href: string;
};

export type MegaMenuImage = { src: string; alt: string };

export type MegaMenu =
  | {
      type: "intro-links";
      intro: string;
      columns: NavLink[][];
      image: MegaMenuImage;
    }
  | {
      type: "cards";
      cards: NavCard[];
      image: MegaMenuImage;
    };

export type NavItem = {
  label: string;
  href: string;
  megaMenu?: MegaMenu;
};

export const mainNav: NavItem[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    megaMenu: {
      type: "intro-links",
      intro:
        "A Zimbabwean engineering, O&M and industrial-supplies partner built to deliver — regardless.",
      columns: [
        [
          { label: "Company Overview", href: "/who-we-are" },
          { label: "Vision & Mission", href: "/who-we-are#vision-mission" },
          { label: "Core Values", href: "/who-we-are#values" },
        ],
        [
          { label: "Governance & Ethics", href: "/compliance#governance" },
          { label: "HSE Policy", href: "/compliance#hse" },
          { label: "Compliance", href: "/compliance" },
        ],
      ],
      image: images.hero.homeCarousel[0],
    },
  },
  {
    label: "What We Do",
    href: "/services",
    megaMenu: {
      type: "cards",
      image: images.plant.switchgear,
      cards: [
        {
          title: "Engineering & O&M",
          description: "Concept to running asset",
          href: "/services#operations-maintenance",
        },
        {
          title: "Water Treatment O&M",
          description: "SCADA-monitored potable water",
          href: "/services#water-treatment",
        },
        {
          title: "Project Management",
          description: "EPCM delivery model",
          href: "/services#project-management",
        },
        {
          title: "Industrial Supplies",
          description: "Roofing, electrical, pumps & more",
          href: "/products",
        },
      ],
    },
  },
  { label: "Products", href: "/products" },
  { label: "Sectors", href: "/sectors" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const bottomNavItems = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Services", href: "/services", icon: "services" },
  { label: "Products", href: "/products", icon: "products" },
  { label: "Projects", href: "/projects", icon: "projects" },
  { label: "Contact", href: "/contact", icon: "contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "What We Do", href: "/services" },
    { label: "Compliance", href: "/compliance" },
    { label: "Projects", href: "/projects" },
  ],
  services: [
    { label: "Engineering & O&M", href: "/services#operations-maintenance" },
    { label: "Water Treatment", href: "/services#water-treatment" },
    { label: "Project Management", href: "/services#project-management" },
    { label: "Industrial Supplies", href: "/products" },
  ],
  explore: [
    { label: "Sectors We Serve", href: "/sectors" },
    { label: "Projects", href: "/projects" },
    { label: "Industrial & Hardware Supplies", href: "/products" },
  ],
};
