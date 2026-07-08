import { images } from "./images";

export type Hub = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: { src: string; alt: string };
  badge?: string;
};

export const homeHubs: Hub[] = [
  {
    id: "eom",
    title: "Engineering, Operations & Maintenance",
    description:
      "Full-lifecycle engineering plus plant operations, equipment upkeep and shutdown maintenance.",
    href: "/services#operations-maintenance",
    image: images.hero.whatWeDo,
  },
  {
    id: "water",
    title: "Water Treatment Plant O&M",
    description:
      "Filtration, dosing, UV and SCADA-monitored potable water systems, operated to spec.",
    href: "/services#water-treatment",
    image: images.water.treatmentPlant,
    badge: "Differentiator",
  },
  {
    id: "epcm",
    title: "Project Management (EPCM)",
    description:
      "Planning, scheduling, contract administration and cost control under one accountable team.",
    href: "/services#project-management",
    image: images.plant.refinery,
  },
  {
    id: "supplies",
    title: "Industrial & Hardware Supplies",
    description:
      "Roofing, electrical & solar, pumps, plumbing, mechanical spares, power tools and building materials.",
    href: "/products",
    image: images.hardware.buildingMaterials,
  },
];
