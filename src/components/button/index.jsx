// @flow

import React from "react";
import styled, { css } from "styled-components";
import {
  baseOffset,
  baseBorderRadius,
  baseTransition,
  typographySizeBase,
  colors
} from "../../styles";

type Props = {
  children: React$Node,
  onClick?: Function,
  outline?: boolean,
  disabled?: boolean
};

const hoverStyles = css`
  opacity: 0.9;
`;

const activeStyles = css`
  opacity: 0.7;
  transform: scale(0.98);
`;

const withStyle = ({ outline = false, disabled = false }: Props) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      opacity: 0.8;
    `;
  }

  if (outline) {
    return css`
      border: 1.5px solid ${colors.black};
      background: none;
      color: ${colors.black};

      ${!disabled &&
        css`
          &:hover,
          &:focus {
            background: ${colors.black};
            color: ${colors.white};
            ${hoverStyles};
          }

          &:active {
            ${activeStyles};
          }
        `};
    `;
  }

  return css`
    &:hover,
    &:focus {
      ${hoverStyles};
    }

    &:active {
      ${activeStyles};
    }
  `;
};

const Button = styled.button`
  padding: 10px 30px;
  margin-bottom: ${baseOffset};
  background: ${colors.black};
  border-radius: ${baseBorderRadius};
  color: ${colors.white};
  font-size: ${typographySizeBase};
  ${withStyle};
  outline: none;
  text-decoration: none;
  transition: ${baseTransition};
`;

export default Button;
