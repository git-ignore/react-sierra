// @flow

import React from 'react';
import styled, {css} from 'styled-components';
import {colors} from '../../styles';

export type CellAlignType = {
  align?: 'left' | 'center' | 'right'
};

type Props = CellAlignType & {
  children: React$Node,
  isHeading?: boolean
};

const cellStyles = css`
  padding: 12px 15px;
  border-bottom: 1px solid ${colors.grayLight};
  text-align: ${({align = 'left'}: Props): string => align};

  &:first-child {
    padding-left: 0;
  }
`;

const TH = styled.th`
  ${cellStyles};
`;
const TD = styled.td`
  ${cellStyles};
`;

const Cell = ({children, isHeading, ...rest}: Props): React$Node => {
  const Tag = isHeading ? TH : TD;
  return <Tag {...rest}>{children}</Tag>;
};

export default Cell;
