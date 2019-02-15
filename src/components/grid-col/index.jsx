// @flow

import React from 'react';
import styled from 'styled-components';
import {rem, media, sizes} from '../../styles/helpers';
import {getFlex, getWidth} from '../../styles/grid';

// Todo: flow type number range
type GridRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  [size: $Keys<typeof sizes>]: GridRange
};

const Column = styled.div`
  padding-right: ${rem(15)};
  padding-left: ${rem(15)};

  ${({xs}: Props): string => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
  ${({xs}: Props): string => (xs ? getWidth(xs) : 'width: 100%')};

  ${media.sm`
    ${({sm}: Props): ?string => sm && getFlex(sm)};
    ${({sm}: Props): ?string => sm && getWidth(sm)};
  `};

  ${media.md`
    ${({md}: Props): ?string => md && getFlex(md)};
    ${({md}: Props): ?string => md && getWidth(md)};
  `};

  ${media.lg`
    ${({lg}: Props): ?string => lg && getFlex(lg)};
    ${({lg}: Props): ?string => lg && getWidth(lg)};
  `};

  ${media.xl`
    ${({xl}: Props): ?string => xl && getFlex(xl)};
    ${({xl}: Props): ?string => xl && getWidth(xl)};
  `};
`;

export default Column;
