/**
 * Centralised image map. Every image used across the site is declared here.
 *
 * REAL AD MELIORA PHOTOGRAPHY is in /public/images/ (see the 10 files below).
 * Only 10 real photos exist today, so they are reused across multiple
 * thematically-related slots (e.g. the water-treatment skid room appears on
 * the water-sanitation sector card as well as the water-treatment service).
 * Categories with no matching real photo yet (solar panels, inverters,
 * copper tubes, pumps, bearings, power tools, cranes, government/local
 * authority/residential sectors) still use themed Unsplash placeholders —
 * swap the `src` for a local file once AMI supplies a photo for that item.
 */

export type SiteImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

const local = (file: string) => `/images/${file}`;

// Real AD Meliora photography (public/images/*)
const photo = {
  logo: local("logo-ami.jpg"),
  staffBanner: local("company-banner-staff.jpg"),
  pickup: local("branded-vehicle-pickup.jpg"),
  truck: local("branded-vehicle-truck.jpg"),
  conveyorSilo: local("plant-conveyor-silo.jpg"),
  rollForming: local("plant-pipework-overview.jpg"),
  roofingSheets: local("plant-structure-piping.jpg"),
  steelStructure: local("control-room-panel.jpg"),
  waterSkid: local("water-treatment-skid.jpg"),
  waterScada: local("water-treatment-scada.jpg"),
  conveyorBridges: local("plant-conveyor-bridges.jpg"),
  roSkid: local("water-treatment-ro-skid-containerised.jpg"),
  roPlant: local("water-treatment-ro-plant.jpg"),
  pumpStation: local("pump-station-grundfos.jpg"),
  pumphouseMetering: local("water-pumphouse-metering.jpg"),
  gearsCloseup: local("mechanical-gears-closeup.jpg"),
};

export const images = {
  hero: {
    // Homepage hero carousel — deliberately drawn from photos not used
    // anywhere else on the homepage, so nothing repeats on the same page.
    homeCarousel: [
      {
        src: photo.conveyorBridges,
        alt: "Elevated conveyor bridges at an AD Meliora mineral-processing site",
      },
      {
        src: photo.pumpStation,
        alt: "Grundfos pump station with industrial pumps and pipework",
      },
      {
        src: photo.steelStructure,
        alt: "Multi-level industrial steel structure with pipe racks and walkways",
      },
      {
        src: photo.waterSkid,
        alt: "Containerised water treatment skid with filtration and dosing tanks",
      },
      {
        src: photo.staffBanner,
        alt: "AD Meliora technicians in PPE beside the company vision and values banner",
      },
      {
        src: photo.gearsCloseup,
        alt: "Close-up of precision metal gears and drive components",
      },
    ] satisfies SiteImage[],
    whoWeAre: {
      src: photo.staffBanner,
      alt: "AD Meliora technicians in PPE beside the company vision and values banner",
    } satisfies SiteImage,
    whatWeDo: {
      src: photo.rollForming,
      alt: "AD Meliora technicians operating the in-house roll-forming production line",
    } satisfies SiteImage,
    services: {
      src: photo.pickup,
      alt: "AD Meliora branded pickup on site, ready to deliver engineering services",
    } satisfies SiteImage,
    products: {
      src: photo.truck,
      alt: "AD Meliora branded flatbed truck ready to deliver industrial supplies",
    } satisfies SiteImage,
    sectors: {
      src: photo.steelStructure,
      alt: "Multi-level industrial steel structure with pipe racks and walkways",
    } satisfies SiteImage,
    projects: {
      src: unsplash("photo-1590959651373-a3db0f38c961", 1600),
      alt: "Construction crane on an active AD Meliora project site",
    } satisfies SiteImage,
    compliance: {
      src: photo.staffBanner,
      alt: "AD Meliora technicians in full PPE beside the HSE and values banner",
    } satisfies SiteImage,
    contact: {
      src: photo.pickup,
      alt: "AD Meliora branded pickup truck outside the Tynwald South premises",
    } satisfies SiteImage,
  },

  plant: {
    controlRoom: {
      src: photo.waterScada,
      alt: "SCADA control screen showing filtration, dosing and UV process flow",
    } satisfies SiteImage,
    conveyor: {
      src: photo.conveyorSilo,
      alt: "Conveyor bridges and silo at a mineral-processing plant",
    } satisfies SiteImage,
    refinery: {
      src: photo.pumphouseMetering,
      alt: "Pumphouse structure with electrical control and metering installation",
    } satisfies SiteImage,
    steelworks: {
      src: photo.steelStructure,
      alt: "Multi-level steel process structure and pipe racks",
    } satisfies SiteImage,
    switchgear: {
      src: photo.waterScada,
      alt: "Control screen and instrumentation panel for plant monitoring",
    } satisfies SiteImage,
  },

  water: {
    treatmentPlant: {
      src: photo.roSkid,
      alt: "AD Meliora technicians beside a containerised RO water treatment skid",
    } satisfies SiteImage,
    dosingSkid: {
      src: photo.waterSkid,
      alt: "Chemical dosing pumps and tanks inside a water treatment skid",
    } satisfies SiteImage,
    pipework: {
      src: photo.steelStructure,
      alt: "Industrial pipework and steel structure",
    } satisfies SiteImage,
    reservoir: {
      src: photo.roPlant,
      alt: "RO water treatment plant with chemical dosing tanks and pipework",
    } satisfies SiteImage,
  },

  roofing: {
    metalSheets: {
      src: photo.roofingSheets,
      alt: "Freshly rolled IBR roofing sheets on the AD Meliora production line",
    } satisfies SiteImage,
    rollForming: {
      src: photo.rollForming,
      alt: "AD Meliora's in-house roll-forming machine producing roofing sheets",
    } satisfies SiteImage,
    installation: {
      src: photo.roofingSheets,
      alt: "AD Meliora technicians finishing roofing sheet production",
    } satisfies SiteImage,
  },

  electrical: {
    solarPanels: {
      src: unsplash("photo-1509391366360-2e959784a276", 1600),
      alt: "Solar panels installed on an industrial rooftop",
    } satisfies SiteImage,
    inverters: {
      src: unsplash("photo-1466611653911-95081537e5b7", 1600),
      alt: "Solar inverter and battery installation",
    } satisfies SiteImage,
    transformers: {
      src: unsplash("photo-1620714223084-8fcacc6dfd8d", 1600),
      alt: "Electrical transformer and switchgear yard",
    } satisfies SiteImage,
    controlPanel: {
      src: photo.waterScada,
      alt: "Technician-monitored control panel screen",
    } satisfies SiteImage,
  },

  plumbing: {
    copperTubes: {
      src: photo.waterSkid,
      alt: "Pipework, tubing and fittings inside a water treatment skid",
    } satisfies SiteImage,
    valves: {
      src: photo.waterSkid,
      alt: "Industrial valves and PVC pipework inside a treatment skid",
    } satisfies SiteImage,
  },

  pumps: {
    slurry: {
      src: photo.pumpStation,
      alt: "Grundfos pump station with industrial pumps and pipework",
    } satisfies SiteImage,
    submersible: {
      src: unsplash("photo-1581091226825-a6a2a5aee158", 1600),
      alt: "Submersible pump equipment",
    } satisfies SiteImage,
  },

  mechanical: {
    bearings: {
      src: local("mechanical-gears-closeup.jpg"),
      alt: "Close-up of precision metal gears and drive components",
    } satisfies SiteImage,
    machining: {
      src: unsplash("photo-1565043589221-1a6fd9ae45c7", 1600),
      alt: "Precision machining of metal shafts",
    } satisfies SiteImage,
  },

  hardware: {
    buildingMaterials: {
      src: photo.pickup,
      alt: "AD Meliora branded pickup outside the premises, stocked for building-materials delivery",
    } satisfies SiteImage,
    paint: {
      src: unsplash("photo-1562259949-e8e7689d7828", 1600),
      alt: "Paint cans and building supplies",
    } satisfies SiteImage,
  },

  powerTools: {
    driills: {
      src: unsplash("photo-1504148455328-c376907d081c", 1600),
      alt: "Industrial power tools on a workbench",
    } satisfies SiteImage,
  },

  construction: {
    crane: {
      src: unsplash("photo-1590959651373-a3db0f38c961", 1600),
      alt: "Construction crane on an active site",
    } satisfies SiteImage,
    ppeEngineers: {
      src: photo.staffBanner,
      alt: "AD Meliora technicians in full PPE on site",
    } satisfies SiteImage,
    civilWorks: {
      src: photo.steelStructure,
      alt: "Structural steelwork and civil construction",
    } satisfies SiteImage,
  },

  fleet: {
    delivery: {
      src: photo.truck,
      alt: "AD Meliora branded flatbed delivery truck",
    } satisfies SiteImage,
  },

  sectors: {
    government: {
      src: photo.pickup,
      alt: "AD Meliora branded pickup on site for a government infrastructure project",
    } satisfies SiteImage,
    localAuthorities: {
      src: unsplash("photo-1519501025264-65ba15a82390", 1200),
      alt: "Municipal infrastructure and local authority services",
    } satisfies SiteImage,
    energyPower: {
      src: photo.waterScada,
      alt: "SCADA control screen monitoring plant and power infrastructure systems",
    } satisfies SiteImage,
    waterSanitation: {
      src: photo.waterSkid,
      alt: "Water treatment skid supplying a municipal sanitation system",
    } satisfies SiteImage,
    mining: {
      src: photo.conveyorSilo,
      alt: "Mineral-processing plant conveyors and silo",
    } satisfies SiteImage,
    oilGas: {
      src: photo.pumphouseMetering,
      alt: "Industrial pipework and metering installation",
    } satisfies SiteImage,
    industrialManufacturing: {
      src: photo.rollForming,
      alt: "Manufacturing floor with the AD Meliora roll-forming line",
    } satisfies SiteImage,
    commercialResidential: {
      src: unsplash("photo-1486406146926-c627a92ad1ab", 1200),
      alt: "Commercial and residential development",
    } satisfies SiteImage,
  },

  projectsGallery: [
    {
      src: photo.conveyorSilo,
      alt: "Mineral-processing plant conveyor bridges and silo",
      category: "Engineering",
    },
    {
      src: photo.steelStructure,
      alt: "Multi-level steel process structure and pipe racks",
      category: "Engineering",
    },
    {
      src: photo.rollForming,
      alt: "Roll-forming line producing IBR roofing sheets",
      category: "Roofing",
    },
    {
      src: photo.roofingSheets,
      alt: "Technicians finishing roofing sheet production",
      category: "Roofing",
    },
    {
      src: photo.waterSkid,
      alt: "Containerised water treatment skid with filtration and dosing",
      category: "Water Treatment",
    },
    {
      src: photo.waterScada,
      alt: "SCADA monitoring screen for a water treatment system",
      category: "Water Treatment",
    },
    {
      src: photo.truck,
      alt: "AD Meliora flatbed truck ready for site delivery",
      category: "O&M",
    },
    {
      src: photo.pickup,
      alt: "AD Meliora branded pickup at the Tynwald South premises",
      category: "O&M",
    },
    {
      src: photo.staffBanner,
      alt: "AD Meliora technicians on site in full PPE",
      category: "O&M",
    },
  ],
};
