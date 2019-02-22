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
    <Fragment>
      <ThemeProvider>
        <Fragment>{children}</Fragment>
      </ThemeProvider>
    </Fragment>
  </Fragment>
);

export default Wrapper;
