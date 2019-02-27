// @flow

import type {ThemeProps, ColorsType} from '../../styles';
import styled, {css} from 'styled-components';

type AppearanceType = 'primary' | 'secondary';

export type ShapeProps = {
  appearance: AppearanceType,
  theme: ThemeProps,
  disabled: boolean
};

type Props = ShapeProps & {
  withIcon: boolean,
  hasChildren: boolean
};

export const getButtonTextColor = (
  appearance: AppearanceType,
  colors: ColorsType
): string => (appearance === 'primary' ? '#FFF' : colors.grayText);

const withTextColor = ({appearance, theme: {colors}}: Props): string => `
  color: ${getButtonTextColor(appearance, colors)};
`;

const withBgColor = ({appearance, theme: {colors}}: Props): string => `
  background-color: ${
    appearance === 'primary' ? colors.primary : 'transparent'
  };
`;

const withBorderColor = ({appearance, theme: {colors}}: Props): string => `
  border-color: ${appearance === 'primary' ? colors.primary : colors.grayLight};
`;

const withDisabledStyle = ({disabled}: Props): string =>
  disabled
    ? `
        cursor: not-allowed;
        opacity: 0.7;
      `
    : `
        cursor: pointer;
      `;

const withHoverStyles = ({appearance, theme: {colors}}: Props): string =>
  appearance === 'primary'
    ? `
        &:hover {
          background-color: ${colors.primaryDarken};
        }
      `
    : `
        &:hover {
          border-color: ${colors.gray};
        }
      `;

const withAppearanceStyles = ({disabled}: Props): Array<Function> =>
  css`
  ${withTextColor}
  ${withBgColor}
  ${withBorderColor}
  ${withDisabledStyle} 
  ${!disabled && withHoverStyles};
`;

const withPaddings = ({withIcon, hasChildren}: Props): string => {
  if (!withIcon) {
    return `padding: 10px 30px;`;
  }

  return hasChildren ? `padding: 10px 30px 10px 25px;` : `padding: 10px 20px;`;
};

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
  transition: ${({theme}: Props): string => theme.transitions.base};
  white-space: nowrap;

  &:active {
    transform: scale(0.98);
  }
`;

export default Shape;
