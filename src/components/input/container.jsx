// @flow

import type {ThemeProps} from '../../styles';

import styled from 'styled-components';

export type InputProps = {
  invalid?: boolean,
  theme: ThemeProps
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme: {offsets}}: InputProps): string => offsets.md};
`;

export default Container;
