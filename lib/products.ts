import { images } from "./images";

export type ProductCategory = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  image: { src: string; alt: string };
  note?: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: "roofing",
    title: "Roofing Materials",
    summary: "Roofing sheets, tiles, metal roofing systems and insulation.",
    items: ["Roofing sheets", "Roofing tiles", "Metal roofing systems", "Insulation"],
    image: images.roofing.metalSheets,
    note: "In-house roll-forming capability — sheets produced to length, on demand.",
  },
  {
    id: "electrical-solar",
    title: "Electrical & Solar",
    summary: "From MK sockets to full solar power systems and switchgear.",
    items: [
      "MK plugs & sockets",
      "Solar panels",
      "Inverters",
      "Charge controllers",
      "Batteries",
      "Control-panel wiring",
      "Transformers & switchgear",
    ],
    image: images.electrical.solarPanels,
  },
  {
    id: "plumbing",
    title: "Plumbing",
    summary: "Copper, brass and PVC plumbing supplies for every application.",
    items: ["Copper tubes", "Brass fittings & valves", "Taps & mixers", "PVC & galvanised fittings"],
    image: images.plumbing.copperTubes,
  },
  {
    id: "pumps",
    title: "Pumps",
    summary: "Heavy-duty pumps for industrial and mining applications.",
    items: ["Slurry pumps", "Dewatering pumps", "Submersible pumps", "Impellers"],
    image: images.pumps.slurry,
  },
  {
    id: "mechanical",
    title: "Mechanical",
    summary: "Precision mechanical components and machining services.",
    items: ["Bearings", "Drive gears", "Shafts", "Machining, balancing & alignment"],
    image: images.mechanical.bearings,
  },
  {
    id: "hardware-building",
    title: "Hardware & Building Materials",
    summary: "General hardware and building materials from trusted brands.",
    items: ["Cement", "Plaster", "Boards", "Adhesives", "Fasteners", "Wheelbarrows", "Dulux paints"],
    image: images.hardware.buildingMaterials,
  },
  {
    id: "power-tools",
    title: "Power Tools",
    summary: "Industrial-grade power tools and accessories.",
    items: ["INGCO power tools", "Hitachi power tools", "Industrial accessories"],
    image: images.powerTools.driills,
  },
];
