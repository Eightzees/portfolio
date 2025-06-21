const IconTypes = [
  "arrowhead_down",
  "arrowhead_left",
  "arrowhead_right",
  "cross",
  "hyphen",
] as const;
export type IconType = (typeof IconTypes)[number];
