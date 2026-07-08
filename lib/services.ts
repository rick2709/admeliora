import { images } from "./images";

export type Service = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  image: { src: string; alt: string };
  highlighted?: boolean;
};

export const services: Service[] = [
  {
    id: "architecture-engineering",
    title: "Architecture & Engineering",
    summary:
      "Architectural design, civil & structural, electrical and mechanical engineering delivered to international standards.",
    points: [
      "Architectural design & drafting",
      "Civil & structural engineering",
      "Electrical engineering design",
      "Mechanical engineering design",
    ],
    image: images.plant.switchgear,
  },
  {
    id: "planning-front-end",
    title: "Planning & Front-End",
    summary:
      "De-risking projects before a single sod is turned — feasibility, planning, estimation and risk assessment.",
    points: [
      "Feasibility studies",
      "Project planning & scheduling",
      "Cost estimation",
      "Risk assessment",
    ],
    image: images.hero.whatWeDo,
  },
  {
    id: "construction-field",
    title: "Construction & Field Services",
    summary:
      "Boots-on-the-ground field execution — civil works, building construction and full installation services.",
    points: [
      "Civil works",
      "Building construction",
      "Electrical installation",
      "Mechanical installation",
    ],
    image: images.construction.civilWorks,
  },
  {
    id: "operations-maintenance",
    title: "Operations & Maintenance",
    summary:
      "Keeping plant running at peak reliability — from routine care to full shutdown maintenance and asset management.",
    points: [
      "Plant operations",
      "Equipment maintenance",
      "Shutdown maintenance",
      "Asset management",
    ],
    image: images.plant.conveyor,
  },
  {
    id: "water-treatment",
    title: "Water Treatment Plant Operation & Maintenance",
    summary:
      "Our key differentiator — filtration, dosing, UV disinfection and SCADA-monitored potable water systems, operated and maintained end-to-end.",
    points: [
      "Filtration systems",
      "Chemical dosing",
      "UV disinfection",
      "SCADA-monitored potable water systems",
    ],
    image: images.water.treatmentPlant,
    highlighted: true,
  },
  {
    id: "project-management",
    title: "Project Management (EPCM)",
    summary:
      "Single point of accountability across the full project lifecycle — planning, contracts, reporting and cost control.",
    points: [
      "Planning & scheduling",
      "Contract administration",
      "Progress reporting",
      "Cost control",
    ],
    image: images.plant.controlRoom,
  },
];

export const epcmPillars = [
  {
    letter: "E",
    title: "Engineering",
    description: "Architectural, civil, structural, electrical & mechanical design.",
  },
  {
    letter: "P",
    title: "Procurement",
    description: "Sourcing through our own industrial & hardware supply lines.",
  },
  {
    letter: "CM",
    title: "Construction Management",
    description: "Field execution, commissioning, ownership & risk carried by us.",
  },
];
