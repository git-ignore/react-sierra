// @flow

import React, {Fragment} from 'react';
import {GlobalStyle} from '../../src';

type Props = {
  children: React$Node
};

const Wrapper = ({children}: Props) => (
  <Fragment>
    <GlobalStyle />
    {children}
  </Fragment>
);

export default Wrapper;
