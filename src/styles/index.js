// @flow

import type { ColorsCollection } from "./types";

export const brandColors: ColorsCollection = {
  primary: "#1abc9c",
  secondary: "#9b59b6",
  dark: "#18232f",
  light: "#34495e"
};

export const baseColors: ColorsCollection = {
  success: "#4caf50",
  info: "#5bc0de",
  warning: "#f0ad4e",
  error: "#e74c3c",
  bg: "#2c3e50",
  gray: "#dee6ea",
  textGray: "#969da6",
  grayLight: "#edf3f6",
  grayBlue: "#64829f",
  deepBlue: "#171722",
  white: "#ffffff",
  border: "#465f78"
};

const baseShadowColor: string = "rgba(0, 0, 0, .2)";
export const boxShadow: string = `0 0 5px ${baseShadowColor}}`;

export const baseTransition: string = ".2s ease-in-out";

export const baseFontMamily: string = '"Lato",sans-serif;';
