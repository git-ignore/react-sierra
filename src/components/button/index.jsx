// @flow

import type { Props as ShapeProps } from "./shape";
import type { IconName } from "../icon/icons";
import Shape, {
  DEFAULT_APPEARANCE,
  DEFAULT_SIZE,
  getButtonColor
} from "./shape";

import React from "react";
import Icon from "./icon";

type Props = ShapeProps & {
  children: React$Node,
  onClick?: Function,
  icon?: IconName
};

export const sizeToIconSizeMapping = {
  sm: 12,
  md: 18,
  lg: 20
};

const Button = ({
  children,
  onClick = () => void 0,
  icon,
  ...rest
}: Props): React$Node => (
  <Shape {...rest}>
    {icon ? (
      <Icon
        name={icon}
        color={getButtonColor(rest.appearance || DEFAULT_APPEARANCE)}
        size={sizeToIconSizeMapping[rest.size || DEFAULT_SIZE]}
      />
    ) : null}
    {children}
  </Shape>
);

export default Button;
