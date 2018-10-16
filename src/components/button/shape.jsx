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

export type Props = {
  disabled?: boolean,
  outline?: boolean
};

const Shape = styled.button`
  padding: 10px 30px;
  margin-bottom: ${baseOffset};
  background: ${colors.black};
  border-radius: ${baseBorderRadius};
  color: ${colors.white};
  font-size: ${typographySizeBase};
  ${({ disabled = false }: Props) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.8;
    `};

  ${({ outline = false, disabled = false }: Props) =>
    outline &&
    css`
      border: 1.5px solid ${colors.black};
      background: none;
      color: ${colors.black};

      ${!disabled &&
        css`
          &:hover,
          &:focus {
            background: ${colors.black};
            color: ${colors.white};
          }
        `};
    `};

  ${({ disabled = false }: Props) =>
    !disabled &&
    css`
      &:hover,
      &:focus {
        opacity: 0.9;
      }

      &:active {
        opacity: 0.7;
        transform: scale(0.98);
      }
    `};
  outline: none;
  text-decoration: none;
  transition: ${baseTransition};
`;

export default Shape;
