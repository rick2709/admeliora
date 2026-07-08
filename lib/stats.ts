export type Stat = {
  value?: number;
  suffix?: string;
  display?: string;
  label: string;
};

export const homeStats: Stat[] = [
  { value: 8, suffix: "+", label: "Sectors served" },
  { value: 15, suffix: "%", label: "Annual growth target" },
  { display: "EPCM", label: "Single-partner delivery" },
  { display: "360°", label: "Full project lifecycle" },
];
