// @flow

import React from "react";
import styled, { css } from "styled-components";
import { baseColors, brandColors } from "../../styles";
import { onLargeScreensOnly } from "../../styles/helpers";

export const appearanceBgColorsMapping = {
  default: baseColors.grayBlue,
  primary: brandColors.primary,
  secondary: brandColors.secondary,
  white: baseColors.white,
  success: baseColors.success,
  alert: baseColors.error,
  outline: "transparent",
  flatten: "transparent"
};

const appearanceBorderColorsMapping = {
  ...appearanceBgColorsMapping,
  default: baseColors.grayBlue,
  outline: brandColors.primary
};

export const sizeStylesMapping = {
  sm: css`
    padding: 6px 20px;
    border-radius: 2em;
    font-size: 11px;
    line-height: 1.273em;
  `,
  md: css`
    padding: 10px 20px;
    border-radius: 2em;
    font-size: 12px;
    line-height: 1.5em;
  `,
  lg: css`
    padding: 10px 30px;
    border-radius: 2em;
    font-size: 16px;
    line-height: 1.5em;

    ${onLargeScreensOnly("padding: 10px 40px;")};
  `
};

type Props = {
  children: React$Node,
  onClick?: Function,
  appearance?: $Keys<typeof appearanceBgColorsMapping>,
  disabled?: boolean,
  size?: "sm" | "md" | "lg"
};

const withHoverStyles = ({ disabled = false }: Props) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      opacity: 0.6;
    `;
  }

  return css`
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
    }
  `;
};

const withAppearanceStyles = ({ appearance = "default" }: Props) =>
  css`
    border: 1px solid ${appearanceBorderColorsMapping[appearance]};
    background-color: ${appearanceBgColorsMapping[appearance]};
    color: ${appearance === "white" || appearance === "outline"
      ? brandColors.primary
      : baseColors.white};
  `;

const withSizeStyles = ({ size = "md" }: Props) => sizeStylesMapping[size];

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 2em;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5em;
  ${withAppearanceStyles};
  ${withHoverStyles};
  ${withSizeStyles};
  outline: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.2s ease-in-out;
  white-space: nowrap;
`;

export default Button;
