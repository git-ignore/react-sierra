// @flow

import React, {Fragment} from 'react';
import {GlobalStyle} from '../../src';
import {ThemeProvider} from '../../src';

type Props = {
  children: React$Node
};

const Wrapper = ({children}: Props) => (
  <Fragment>
    <GlobalStyle />

    <Fragment>{children}</Fragment>
  </Fragment>
);

export default Wrapper;
