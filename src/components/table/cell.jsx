// @flow

import type {ThemeProps} from '../../styles';

import React from 'react';
import styled, {css, withTheme} from 'styled-components';
import defaultTheme from '../../styles';

export type CellAlignType = {
  align?: 'left' | 'center' | 'right'
};

type Props = CellAlignType & {
  children: React$Node,
  isHeading?: boolean,
  theme: ThemeProps
};

const cellStyles = css`
  padding: 12px 15px;
  border-bottom: 1px solid
    ${({theme: {colors}}: Props): string => colors.grayLight};
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

Cell.defaultProps = {
  theme: defaultTheme
};

export default withTheme(Cell);
