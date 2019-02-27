// @flow

import type {ShapeProps} from './shape';
import type {IconName} from '../icon/icons';

import React from 'react';
import {withTheme} from 'styled-components';
import Icon from './icon';
import Shape, {getButtonTextColor} from './shape';
import defaultTheme from '../../styles';

type Props = ShapeProps & {
  children: React$Node,
  onClick?: Function,
  icon?: IconName
};

const Button = ({
  children,
  onClick = () => void 0,
  icon,
  ...rest
}: Props): React$Node => (
  <Shape {...rest} onClick={onClick} withIcon={!!icon}>
    {icon ? (
      <Icon
        name={icon}
        color={getButtonTextColor(rest.appearance, rest.theme.colors)}
      />
    ) : null}
    {children}
  </Shape>
);

Button.defaultProps = {
  theme: defaultTheme,
  appearance: 'primary',
  disabled: false
};

export default withTheme(Button);
