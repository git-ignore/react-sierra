// @flow

import type {InputProps} from './styles';

import React from 'react';
import styled, {withTheme} from 'styled-components';
import Error from './error';
import Container from './container';
import {withBaseInputStyles} from './styles';
import defaultTheme from '../../styles';

type Props = InputProps & {
  meta?: {
    touched: boolean,
    error: ?string
  }
};

export const HTMLInput = styled.input`
  margin: 0;
  ${withBaseInputStyles};
`;

const Input = ({meta, ...rest}: Props) => (
  <Container {...rest}>
    <HTMLInput {...rest} invalid={meta && meta.error} />
    {meta && meta.touched && meta.error && (
      <Error theme={rest.theme}>{meta.error}</Error>
    )}
  </Container>
);

Input.defaultProps = {
  theme: defaultTheme
};

export default withTheme(Input);
