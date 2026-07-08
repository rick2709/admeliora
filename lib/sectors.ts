import { images } from "./images";

export type Sector = {
  id: string;
  title: string;
  line: string;
  image: { src: string; alt: string };
};

export const sectors: Sector[] = [
  {
    id: "government",
    title: "Government Ministries & Departments",
    line: "Delivery partners trusted with public infrastructure and services.",
    image: images.sectors.government,
  },
  {
    id: "local-authorities",
    title: "Local Authorities & Rural District Councils",
    line: "Engineering and maintenance support for municipal infrastructure.",
    image: images.sectors.localAuthorities,
  },
  {
    id: "energy-power",
    title: "Energy & Power",
    line: "Electrical, solar and power infrastructure engineering and maintenance.",
    image: images.sectors.energyPower,
  },
  {
    id: "water-sanitation",
    title: "Water & Sanitation Authorities",
    line: "Water treatment plant operation and maintenance at scale.",
    image: images.sectors.waterSanitation,
  },
  {
    id: "mining",
    title: "Mining",
    line: "Plant operations, maintenance and industrial supplies for mineral processing.",
    image: images.sectors.mining,
  },
  {
    id: "oil-gas",
    title: "Oil & Gas Support Services",
    line: "Engineering and field services supporting oil and gas operations.",
    image: images.sectors.oilGas,
  },
  {
    id: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    line: "Full lifecycle engineering and O&M for manufacturing facilities.",
    image: images.sectors.industrialManufacturing,
  },
  {
    id: "commercial-residential",
    title: "Commercial & Residential Developments",
    line: "Construction, roofing and building supply for developers and homeowners.",
    image: images.sectors.commercialResidential,
  },
];

export const sectorFocusNote =
  "Our primary focus is corporate clients, alongside government and NGOs, with individual clients served as a secondary priority.";
