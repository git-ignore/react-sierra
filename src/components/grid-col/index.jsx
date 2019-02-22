// @flow

import React from 'react';
import styled from 'styled-components';
import {rem, media, sizes} from '../../styles/helpers';
import {withSizeStyles} from './styles';

// Todo: flow type number range
export type GridRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  [size: $Keys<typeof sizes>]: GridRange
};

const Column = styled.div`
  padding-right: ${rem(15)};
  padding-left: ${rem(15)};
  ${withSizeStyles};
`;

export default Column;
