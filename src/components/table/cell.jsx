// @flow

import React, {PureComponent} from 'react';
import styled, {css} from 'styled-components';
import {colors} from '../../styles';

export type CellAlignType = {
  align?: "left" | "center" | "right"
};

type Props = CellAlignType & {
  children: any,
  isHeading?: boolean
};

const cellStyles = css`
  padding: 12px 15px;
  text-align: ${({align = 'left' }: Props): string => align};
  border-bottom: 1px solid ${colors.grayLight};

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
