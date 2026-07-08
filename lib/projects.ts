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
    image: images.water.dosingSkid,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Roll-forming production",
    category: "Roofing",
    image: images.roofing.rollForming,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Conveyors & bulk handling",
    category: "Mining",
    image: images.construction.civilWorks,
    colSpan: 4,
    rowSpan: 1,
  },
];
