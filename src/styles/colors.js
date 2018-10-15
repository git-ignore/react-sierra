// @flow

export type ColorsCollectionShape = $ReadOnly<{ [color: string]: string }>;

export const colors: ColorsCollectionShape = {
  white: "#F0F0F0",
  black: "#404040",
  gray: "#C7C7C7",
  blueDark: "#6294A2",
  blueLight: "#58C3DD"
};

export const gradients: ColorsCollectionShape = {
  primary: `linear-gradient(to right, ${colors.blueDark} 0%, ${
    colors.blueLight
  } 100%)`,
  secondary: "rgba(0, 0, 0, 0.3)"
};
