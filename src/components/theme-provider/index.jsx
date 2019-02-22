// @flow

import React from 'react';
import {ThemeProvider as BaseThemeProvider} from 'styled-components';
import theme from '../../styles';

type Props = {
  overriddenProps?: {[key: $Keys<typeof theme>]: any}
};

const ThemeProvider = ({overriddenProps, ...rest}: Props): React$Node => {
  const passedProps = {
    ...theme,
    ...overriddenProps
  };

  if (overriddenProps) {
    passedProps.colors = {
      ...passedProps.colors,
      ...overriddenProps.colors
    };
  }

  return <BaseThemeProvider theme={passedProps} {...rest} />;
};

export default ThemeProvider;
