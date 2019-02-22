// @flow

import type {GridRange} from './index';

import {css} from 'styled-components';
import {rem, media, sizes} from '../../styles/helpers';

const INITIAL_STYLE = css`
  display: block;
  width: 100%;
  flex: 0 0 100%;
`;

const getSizeStyle = (val: GridRange): ?string => {
  if (val === 0) {
    return css`
      display: none;
    `;
  }

  const width = (val / 12) * 100;
  const flex = (val / 12) * 100;

  return css`
    display: block;
    width: ${width}%;
    flex: 0 0 ${flex}%;
  `;
};

const shouldCalcStyle = val =>
  val !== undefined && typeof val === 'number' && val >= 0 && val <= 12;

// TODO: DRY: screen mapping
export const withSizeStyles = ({xs, sm, md, lg, xl}) => css`
  ${shouldCalcStyle(xs) ? getSizeStyle(xs) : INITIAL_STYLE};

  ${shouldCalcStyle(sm) &&
    media.sm`
        ${getSizeStyle(sm)};
  `};

  ${shouldCalcStyle(md) &&
    media.md`
        ${getSizeStyle(md)};
  `};

  ${shouldCalcStyle(lg) &&
    media.lg`
        ${getSizeStyle(lg)};
  `};

  ${shouldCalcStyle(xl) &&
    media.xl`
        ${getSizeStyle(xl)};
  `};
`;
