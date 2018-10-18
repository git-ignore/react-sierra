// @flow

import React from "react";
import styled, { css } from "styled-components";
import { baseColors, brandColors, baseFontMamily } from "../../styles";
import { media } from "../../styles/helpers";

type BtnAppearanceType = $Keys<typeof appearanceBgColorsMapping>;

export type Props = {
  appearance?: BtnAppearanceType,
  disabled?: boolean,
  size?: "sm" | "md" | "lg"
};

export const DEFAULT_APPEARANCE = "default";
export const DEFAULT_SIZE = "md";

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
    font-size: 11px;
    line-height: 1.273em;
  `,
  md: css`
    padding: 10px 20px;
    font-size: 12px;
    line-height: 1.5em;
  `,
  lg: css`
    padding: 10px 30px;
    font-size: 16px;
    line-height: 1.5em;

    ${media.md`padding: 10px 40px;`};
  `
};

export const getButtonColor = (appearance: BtnAppearanceType): string =>
  appearance === "white" || appearance === "outline"
    ? brandColors.primary
    : baseColors.white;

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

const withAppearanceStyles = ({ appearance = DEFAULT_APPEARANCE }: Props) =>
  css`
    border: 1px solid ${appearanceBorderColorsMapping[appearance]};
    background-color: ${appearanceBgColorsMapping[appearance]};
    color: ${getButtonColor(appearance)};
  `;

const withSizeStyles = ({ size = DEFAULT_SIZE }: Props) =>
  sizeStylesMapping[size];

const Shape = styled.button`
  border-radius: 2em;
  font-family: ${baseFontMamily};
  font-weight: 700;
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

export default Shape;
