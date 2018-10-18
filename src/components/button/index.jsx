// @flow

import type {Props as ShapeProps} from './shape';
import type {IconName} from '../icon/icons';
import Shape, {getButtonColor} from './shape';

import React from 'react';
import Icon from './icon';

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
        color={getButtonColor(rest.appearance || Shape.defaultProps.appearance)}
      />
    ) : null}
    {children}
  </Shape>
);

export default Button;
