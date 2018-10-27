// @flow

import React from 'react';
import styled, {css} from 'styled-components';
import {colors} from '../../styles';
import Error from './error';
import Container from './container';
import {baseInputStyles} from './styles';

type Props = {
  meta?: {
    touched: boolean,
    error: ?string
  }
};

const HTMLInput = styled.input`
  height: 38px;
  ${baseInputStyles};
`;

const Input = ({meta, ...rest}: Props) => (
  <Container>
    <HTMLInput {...rest} invalid={meta && meta.error} />
    {meta && meta.touched && meta.error && <Error>{meta.error}</Error>}
  </Container>
);

export default Input;
