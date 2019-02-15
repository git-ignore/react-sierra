// @flow

import styled from 'styled-components';
import {rem, media} from '../../styles/helpers';
import {getFlex, getWidth} from './helpers';

const GRID_COLS = 12;

const gridRange = [...Array(GRID_COLS).keys()]
  .map(key => key + 1)
  .reduce((acc, key) => {
    acc[key] =  key;
    return acc;
  }, {});

type GridRange = $Keys<typeof gridRange>;

type Props = {
  xs?: GridRange,
  sm?: GridRange,
  md?: GridRange,
  lg?: GridRange,
  xlg?: GridRange
};

// Grid columns
const Column = styled.div`
  padding-right: ${rem(15)};
  padding-left: ${rem(15)};

  ${(props: Props): string =>
    props.xs ? getFlex(props.xs) : 'flex: 0 0 100%'};
  ${(props: Props): string => (props.xs ? getWidth(props.xs) : 'width: 100%')};

  ${media.sm`
    ${({sm}) => sm && getFlex(sm)};
    ${({sm}) => sm && getWidth(sm)};
  `};

  ${media.md`
    ${({md}) => md && getFlex(md)};
    ${({md}) => md && getWidth(md)};
  `};

  ${media.lg`
    ${({lg}) => lg && getFlex(lg)};
    ${({lg}) => lg && getWidth(lg)};
  `};

  ${media.xlg`
    ${({xl}) => xl && getFlex(xl)};
    ${({xl}) => xl && getWidth(xl)};
  `};
`;

export default Column;
