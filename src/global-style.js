// @flow

import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {baseFontMamily} from './styles';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: ${baseFontMamily};
  }
`;

export default GlobalStyle;
