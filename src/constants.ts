export const REPOSITORY_NAME: String = "portfolio";
const colorTypes = ["blue", "brown", "green", "orange", "yellow"] as const;
export type ColorType = (typeof colorTypes)[number];
