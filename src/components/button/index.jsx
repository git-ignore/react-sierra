// @flow

import React from "react";
import styled from "styled-components";

type Props = ShpeProps & {
  children: React$Node,
  onClick?: Function
};

const Button = ({ children, onClick = () => void 0, ...rest }: Props) => (
  <Shape onClick={onClick} {...rest}>
    {children}
  </Shape>
);

export default Button;
