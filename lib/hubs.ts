import { images } from "./images";

export type Hub = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: { src: string; alt: string };
};

export const homeHubs: Hub[] = [
  {
    id: "eom",
    title: "Engineering, Operations & Maintenance",
    description: "Full-lifecycle engineering delivery from design through to running-asset maintenance.",
    href: "/services#operations-maintenance",
    image: images.plant.conveyor,
  },
  {
    id: "water",
    title: "Water Treatment Plant O&M",
    description: "Filtration, dosing, UV and SCADA-monitored potable water systems.",
    href: "/services#water-treatment",
    image: images.water.treatmentPlant,
  },
  {
    id: "epcm",
    title: "Project Management (EPCM)",
    description: "Engineering, Procurement, Construction Management — single-point accountability.",
    href: "/services#project-management",
    image: images.hero.whatWeDo,
  },
  {
    id: "supplies",
    title: "Industrial & Hardware Supplies",
    description: "Roofing, electrical, plumbing, pumps, mechanical and building materials.",
    href: "/products",
    image: images.hardware.buildingMaterials,
  },
];
