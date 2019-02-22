//  @flow

import type {IconName} from './icons';
import type {ThemeProps} from '../../styles';

import React from 'react';
import styled, {withTheme} from 'styled-components';
import {icons} from './icons';
import defaultTheme from '../../styles';

type Props = {
  name: IconName,
  size?: number,
  color?: string,
  theme: ThemeProps
};

const Shape = styled.svg`
  display: inline-block;
  transition: color
    ${({theme: {transitions}}: Props): string => transitions.base};
  vertical-align: middle;
`;

const Icon = ({name, size = 18, color, ...rest}: Props): React$Node => (
  <Shape
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    fill={color || rest.theme.colors.grayText}
    {...rest}
  >
    <path d={icons[name]} />
  </Shape>
);

Icon.defaultProps = {
  theme: defaultTheme
};

export default withTheme(Icon);
