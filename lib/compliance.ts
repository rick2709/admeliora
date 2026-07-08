export type ComplianceGroup = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export const complianceGroups: ComplianceGroup[] = [
  {
    id: "qms",
    title: "Quality Management",
    summary: "Documented processes that keep engineering, procurement and delivery consistent across every project.",
    items: [
      "Standardised project delivery methodology",
      "Document control and revision management",
      "Supplier and subcontractor quality vetting",
      "Client sign-off and handover procedures",
    ],
  },
  {
    id: "hse",
    title: "Health, Safety & Environment",
    summary: "A zero-harm culture enforced on every site, workshop and delivery vehicle.",
    items: [
      "Site-specific safety inductions and toolbox talks",
      "PPE compliance across all field personnel",
      "Incident reporting and root-cause investigation",
      "Environmental impact mitigation on active sites",
    ],
  },
  {
    id: "compliance",
    title: "Regulatory Compliance Framework",
    summary: "AMI operates within Zimbabwe's statutory and regulatory framework at every level of delivery.",
    items: [
      "Labour Act of Zimbabwe [Chapter 28:01]",
      "NSSA (National Social Security Authority) registration & compliance",
      "EMA (Environmental Management Agency) requirements",
      "Local Authority By-Laws and municipal regulations",
    ],
  },
];
