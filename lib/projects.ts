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
