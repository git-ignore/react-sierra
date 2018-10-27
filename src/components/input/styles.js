// @flow

import styled, {css} from 'styled-components';
import {colors} from '../../styles';

export type InputProps = {
  invalid?: boolean
};

const withStatusStyles = ({invalid = false}: InputProps) => css`
  border: 1px solid ${invalid ? 'red' : colors.grayLight};
`;

export const baseInputStyles = css`
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
