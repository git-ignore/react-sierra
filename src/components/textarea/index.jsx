// @flow

import React from 'react';
import styled from 'styled-components';
import Error from '../input/error';
import Container from '../input/container';
import {baseInputStyles} from '../input/styles';

type Props = {
  meta?: {
    touched: boolean,
    error: ?string
  }
};

const HTMLTextarea = styled.textarea`
  min-width: 150px;
  max-width: 100%;
  min-height: 65px;
  ${baseInputStyles};
`;

const Textarea = ({meta, ...rest}: Props) => (
  <Container>
    <HTMLTextarea {...rest} invalid={meta && meta.error} />
    {meta && meta.touched && meta.error && <Error>{meta.error}</Error>}
  </Container>
);

export default Textarea;
