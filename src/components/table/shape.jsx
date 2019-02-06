// @flow

import React, {PureComponent} from 'react';
import styled, {css} from 'styled-components';

export type Props = {
  fullWidth: boolean
};

const withWidthStyles = ({fullWidth}: Props) => css`
  width: ${fullWidth ? '100%' : 'auto'};
`;

const TableShape = styled.table`
  margin-bottom: 2.5rem;
  border-collapse: collapse;
  border-spacing: 0;

  ${withWidthStyles};
`;

export default TableShape;
