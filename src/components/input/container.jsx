// @flow

import React from 'react';
import styled from 'styled-components';

export type InputProps = {
  invalid?: boolean
};

type Props = {
  meta?: {
    touched: boolean,
    error: ?string
  }
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Container;
