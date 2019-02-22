// @flow

import type {InputProps} from '../input/styles';

import React from 'react';
import styled, {withTheme} from 'styled-components';
import Error from '../input/error';
import Container from '../input/container';
import {withBaseInputStyles} from '../input/styles';
import defaultTheme from '../../styles';

type Props = InputProps & {
  meta?: {
    touched: boolean,
    error: ?string
  }
};

const HTMLTextarea = styled.textarea`
  min-width: 150px;
  max-width: 100%;
  min-height: 65px;
  ${withBaseInputStyles};
`;

const Textarea = ({meta, ...rest}: Props): React$Node => (
  <Container>
    <HTMLTextarea {...rest} invalid={meta && meta.error} />
    {meta &&
      meta.touched &&
      meta.error && <Error theme={rest.theme}>{meta.error}</Error>}
  </Container>
);

Textarea.defaultProps = {
  theme: defaultTheme
};

export default withTheme(Textarea);
