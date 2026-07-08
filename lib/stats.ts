export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const homeStats: Stat[] = [
  { value: 100, suffix: "%", label: "Full project lifecycle delivery" },
  { value: 8, suffix: "+", label: "Sectors served" },
  { value: 15, suffix: "%", label: "Annual growth target" },
  { value: 10, suffix: "+", label: "Years of combined delivery experience" },
];
