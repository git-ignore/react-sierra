// @flow

import {css} from 'styled-components';

const sizes = {
  xs: 420,
  sm: 550,
  md: 992,
  lg: 1280,
  xlg: 1600
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args: Array<any>) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const rem = (px: number): string => `${px / 16}rem;`;
