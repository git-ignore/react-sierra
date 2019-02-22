// @flow

import type {ThemeProps} from '../../styles';

import {css} from 'styled-components';

export type InputProps = {
  invalid?: boolean,
  theme: ThemeProps
};

const withStatusStyles = ({
  invalid = false,
  theme: {colors}
}: InputProps): Array<any> => css`
  border: 1px solid ${invalid ? 'red' : colors.grayLight};
`;

export const withBaseInputStyles = ({
  theme: {colors}
}: InputProps): Array<any> => css`
  padding: 6px 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: none;
  font-family: inherit;
  font-size: 1.5rem;
  line-height: normal;

  ${withStatusStyles};

  &:focus {
    border: 1px solid ${colors.primary};
    outline: 0;
  }
`;
