// @flow

import React from 'react';
import styled, {css} from 'styled-components';
import {offsets, colors, baseFontMamily, baseTransition} from '../../styles';

type AppearanceType = "primary" | "secondary";

export type Props = {
  appearance?: AppearanceType,
  disabled?: boolean,
  withIcon: boolean
};

export const getButtonColor = (appearance: AppearanceType): string =>
  appearance === 'primary' ? '#FFF' : colors.darkGray;

const withTextColor = ({appearance = 'primary'}: Props) =>
  css`
    color: ${getButtonColor(appearance)};
  `;

const withBgColor = ({appearance}: Props) => css`
  background-color: ${appearance === 'primary'
    ? colors.primary
    : 'transparent'};
`;

const withBorderColor = ({appearance}: Props) =>
  css`
    border-color: ${appearance === 'primary'
      ? colors.primary
      : colors.grayLight};
  `;

const withDisabledStyle = ({disabled}: Props) =>
  disabled
    ? css`
        cursor: not-allowed;
        opacity: 0.7;
      `
    : css`
        cursor: pointer;
      `;

const withHoverStyles = ({appearance}: Props) =>
  appearance === 'primary'
    ? css`
        &:hover {
          background-color: ${colors.primaryDarken};
        }
      `
    : css`
        &:hover {
          border-color: ${colors.gray};
        }
      `;

const withAppearanceStyles = ({disabled = false}: Props) => css`
  ${withTextColor} 
  ${withBgColor}
  ${withBorderColor}
  ${withDisabledStyle} 
  ${!disabled && withHoverStyles};
`;

const withPaddings = ({withIcon}: Props) =>
  withIcon
    ? css`
        padding: 11px 30px 11px 25px;
      `
    : css`
        padding: 11px 30px;
      `;

const Shape = styled.button`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  ${withAppearanceStyles};
  ${withPaddings};
  outline: none;
  text-transform: uppercase;
  transition: ${baseTransition};
  white-space: nowrap;

  &:active {
    transform: scale(0.98);
  }
`;

Shape.defaultProps = {
  appearance: 'primary',
  disabled: false
};

export default Shape;
