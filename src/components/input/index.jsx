// @flow

import React from 'react';
import styled, {css} from 'styled-components';
import {colors} from '../../styles';
import {media} from '../../styles/helpers';

type Props = {
  meta?: {
    touched: boolean,
    error: ?string
  }
};

type InputProps = {
  invalid?: boolean
};

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const withStatusStyles = ({invalid = false}: InputProps) => css`
  border: 1px solid ${invalid ? 'red' : colors.grayLight};
`;

const HTMLInput = styled.input`
  height: 38px;
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

const Error = styled.span`
  padding: 3px 10px;
  color: #f50031;
  font-size: 1.1rem;
`;

const Input = ({meta, ...rest}: Props) => (
  <InputContainer>
    <HTMLInput {...rest} invalid={meta && meta.error} />
    {meta && meta.touched && meta.error && <Error>{meta.error}</Error>}
  </InputContainer>
);

export default Input;
