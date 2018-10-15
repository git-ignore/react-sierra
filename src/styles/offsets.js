// @flow

export type OffsetsShape = $ReadOnly<{ [size: string]: string }>;

export const offsets: OffsetsShape = {
  base: "8px",

  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "40px"
};
