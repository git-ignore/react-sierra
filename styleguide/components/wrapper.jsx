import React, {Fragment} from 'react';
import {GlobalStyle} from '../../src';

const Wrapper = ({children}) => (
  <Fragment>
    <GlobalStyle />
    {children}
  </Fragment>
);

export default Wrapper;
