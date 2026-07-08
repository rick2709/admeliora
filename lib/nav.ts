export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  megaMenu?: {
    columns: {
      heading: string;
      links: NavLink[];
    }[];
    featured?: {
      title: string;
      description: string;
      href: string;
      image: string;
    };
  };
};

export const mainNav: NavItem[] = [
  {
    label: "Who We Are",
    href: "/who-we-are",
    megaMenu: {
      columns: [
        {
          heading: "Company",
          links: [
            { label: "Vision & Mission", href: "/who-we-are#vision-mission" },
            { label: "Core Values", href: "/who-we-are#values" },
            { label: "Capacity & Competence", href: "/who-we-are#capacity" },
            { label: "Corporate Governance & Ethics", href: "/who-we-are#governance" },
            { label: "HSE Policy", href: "/who-we-are#hse" },
          ],
        },
        {
          heading: "Trust & Compliance",
          links: [
            { label: "Management Systems", href: "/compliance#qms" },
            { label: "HSE Framework", href: "/compliance#hse" },
            { label: "Regulatory Compliance", href: "/compliance#compliance" },
          ],
        },
      ],
      featured: {
        title: "Full project lifecycle delivery",
        description: "From concept to running asset — engineering, operations & maintenance you can rely on.",
        href: "/who-we-are",
        image: "/images/control-room-panel.jpg",
      },
    },
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    megaMenu: {
      columns: [
        {
          heading: "Services",
          links: [
            { label: "Architecture & Engineering", href: "/services#architecture-engineering" },
            { label: "Planning & Front-End", href: "/services#planning-front-end" },
            { label: "Construction & Field Services", href: "/services#construction-field" },
            { label: "Operations & Maintenance", href: "/services#operations-maintenance" },
            { label: "Water Treatment Plant O&M", href: "/services#water-treatment" },
            { label: "Project Management (EPCM)", href: "/services#project-management" },
          ],
        },
        {
          heading: "Explore",
          links: [
            { label: "Sectors We Serve", href: "/sectors" },
            { label: "Projects", href: "/projects" },
            { label: "Industrial & Hardware Supplies", href: "/products" },
          ],
        },
      ],
      featured: {
        title: "Water Treatment Plant O&M",
        description: "Filtration, dosing, UV and SCADA-monitored potable water systems — our key differentiator.",
        href: "/services#water-treatment",
        image: "/images/water-treatment-skid.jpg",
      },
    },
  },
  { label: "Sectors", href: "/sectors" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Compliance", href: "/compliance" },
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
    { label: "What We Do", href: "/what-we-do" },
    { label: "Compliance", href: "/compliance" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Architecture & Engineering", href: "/services#architecture-engineering" },
    { label: "Operations & Maintenance", href: "/services#operations-maintenance" },
    { label: "Water Treatment O&M", href: "/services#water-treatment" },
    { label: "Project Management (EPCM)", href: "/services#project-management" },
  ],
  explore: [
    { label: "Sectors We Serve", href: "/sectors" },
    { label: "Projects", href: "/projects" },
    { label: "Industrial & Hardware Supplies", href: "/products" },
  ],
};
