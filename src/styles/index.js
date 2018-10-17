// @flow

import type { ColorsCollection } from "./types";

export type ColorsCollectionShape = ColorsCollection;

export const colors: ColorsCollection = Object.freeze({
  black: "#111111",
  gray: "#A7A7A7",
  white: "#F5F5F5",
  blue: "#0062FF",
  red: "#ff1500",
  yellow: "#ffbf00",
  green: "#00b30f"
});

export const fontFamily = `-apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;

const offset = 16;
const typographyRatio = 1.15;
const typographyRatioSm = 1.13;
const availableTypographySizes = ["xlg", "lg", "md", "sm", "xs", "xxs"];

export const baseOffset = `${offset}px`;
export const typographySizeBase = baseOffset;

export const typographySizes: {
  [string]: {
    fontSize: string,
    lineHeight: string
  }
} = availableTypographySizes.reverse().reduce(
  (o, size, i) => ({
    ...o,
    [size]: {
      fontSize: `${Math.round(offset * Math.pow(typographyRatio, i))}px`,
      lineHeight: (1.6 - 0.05 * (i + 1)).toFixed(2)
    }
  }),
  {}
);

export const baseTransition = "all .2s ease";

export const baseBorderRadius = "2px";
