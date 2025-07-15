const IconTypes = [
  "arrow_down",
  "arrow_left",
  "arrow_upper_right",
  "arrowhead_down",
  "arrowhead_left",
  "arrowhead_right",
  "cross",
  "hyphen",
] as const;
export type IconType = (typeof IconTypes)[number];
