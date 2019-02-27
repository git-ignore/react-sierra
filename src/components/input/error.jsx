// @flow

import styled from 'styled-components';
import type {ThemeProps} from '../../styles';

type Props = {
  theme: ThemeProps
};

const Error = styled.span`
  position: absolute;
  bottom: -${({theme: {offsets}}: Props): string => offsets.md};
  padding: 3px 10px;
  color: ${({theme: {colors}}: Props): string => colors.alert};
  font-size: 1.1rem;
`;

export default Error;
