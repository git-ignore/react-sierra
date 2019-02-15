// @flow

export const getWidth = (val: number): string => {
  const width = (val / 12) * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
export const getFlex = (val: number): string => {
  const flex = (val / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};
