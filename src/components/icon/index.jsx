//  @flow

import type {IconName} from './icons';
import type {ThemeProps} from '../../styles';

import React from 'react';
import styled, {withTheme} from 'styled-components';
import {icons} from './icons';
import defaultTheme from '../../styles';

type Props = {
  name: IconName,
  theme: ThemeProps,
  size: number,
  color?: string
};

const SVG = styled.svg`
  display: inline-block;
  transition: color
    ${({theme: {transitions}}: Props): string => transitions.base};
  vertical-align: middle;
`;

const Icon = ({name, size, color, ...rest}: Props): React$Node => (
  <SVG
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    fill={color || rest.theme.colors.grayText}
    {...rest}
  >
    <path d={icons[name]} />
  </SVG>
);

Icon.defaultProps = {
  theme: defaultTheme,
  size: 18
};

export default withTheme(Icon);
