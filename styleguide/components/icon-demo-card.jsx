// @flow

import React from 'react';
import styled from 'styled-components';
import {offsets} from '../../src/styles';

const Card = styled.div`
  display: flex;
  align-items: center;
  margin: ${offsets.sm};
`;

const Name = styled.span`
  margin-left: calc(${offsets.sm} / 2);
`;

type Props = {
  children: React$Node,
  name: string
};

const DemoCard = ({children, name}: Props): React$Node => (
  <Card>
    {children}
    <Name>{name}</Name>
  </Card>
);

export default DemoCard;
