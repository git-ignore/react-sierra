// @flow

import React from 'react';
import styled from 'styled-components';

const Shape = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

type Props = {
  children: React$Node
};

const Container = ({children}: Props): React$Node => <Shape>{children}</Shape>;

export default Container;
