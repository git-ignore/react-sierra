// @flow

import { css } from "styled-components";

const sizes = {
  lg: 1280,
  md: 992
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args: any) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
