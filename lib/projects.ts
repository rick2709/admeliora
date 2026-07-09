import { images } from "./images";

export type ProjectCategory = "Engineering" | "Water Treatment" | "Roofing" | "O&M";

export type ProjectImage = {
  src: string;
  alt: string;
  category: ProjectCategory;
};

export const projectCategories: ProjectCategory[] = [
  "Engineering",
  "Water Treatment",
  "Roofing",
  "O&M",
];

export const projectGallery: ProjectImage[] = images.projectsGallery as ProjectImage[];

export const projectExpertise = [
  "Thermal Power Plants",
  "Mining Infrastructure",
  "Oil and Gas Facilities",
  "Water and Wastewater Treatment Plants",
  "High Voltage Substations",
  "Industrial Facilities",
  "Civil and Building Construction",
];

export type HomeShowcaseItem = {
  title: string;
  category: string;
  image: { src: string; alt: string };
  colSpan: 2 | 4;
  rowSpan: 1 | 2;
};

export const homeProjectShowcase: HomeShowcaseItem[] = [
  {
    title: "Mineral processing plant",
    category: "Engineering",
    image: images.plant.conveyor,
    colSpan: 4,
    rowSpan: 2,
  },
  {
    title: "Control room & SCADA",
    category: "O&M",
    image: images.plant.controlRoom,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Treatment skid & dosing",
    category: "Water",
    image: images.water.reservoir,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Roll-forming production",
    category: "Roofing",
    image: images.roofing.metalSheets,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Conveyors & bulk handling",
    category: "Mining",
    image: images.fleet.delivery,
    colSpan: 4,
    rowSpan: 1,
  },
];
