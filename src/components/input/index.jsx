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

const HTMLInput = styled.input`
  height: 38px;
  ${withBaseInputStyles};
`;

const Input = ({meta, ...rest}: Props) => (
  <Container>
    <HTMLInput {...rest} invalid={meta && meta.error} />
    {meta &&
      meta.touched &&
      meta.error && <Error theme={rest.theme}>{meta.error}</Error>}
  </Container>
);

Input.defaultProps = {
  theme: defaultTheme
};

export default withTheme(Input);
