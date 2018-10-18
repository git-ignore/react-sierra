//  @flow

import type { IconName } from "./icons";

import React from "react";
import styled from "styled-components";
import { icons } from "./icons";
import { baseColors } from "../../styles";

type Props = {
  name: IconName,
  size?: number,
  color?: string
};

const Shape = styled.svg`
  display: inline-block;
  transition: color 0.2s ease-in-out;
  vertical-align: middle;
`;

const Icon = ({
  name,
  size = 18,
  color = baseColors.textGray,
  ...rest
}: Props): React$Node => (
  <Shape
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    fill={color}
    {...rest}
  >
    <path d={icons[name]} />
  </Shape>
);

export default Icon;
