// @flow

import type { Props as ShapeProps } from "./shape";

import React from "react";
import styled from "styled-components";
import Shape from "./shape";

type Props = ShapeProps & {
  children: React$Node,
  onClick?: Function
};

const Button = ({ children, onClick = () => void 0, ...rest }: Props) => (
  <Shape onClick={onClick} {...rest}>
    {children}
  </Shape>
);

export default Button;
