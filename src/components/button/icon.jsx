// @flow

import type {ThemeProps} from '../../styles';

import styled from 'styled-components';
import Icon from '../icon';

type Props = {
  withoutOffset: boolean,
  theme: ThemeProps
};

const StyledIcon = styled(Icon)`
  margin-right: ${({
    withoutOffset,
    theme: {offsets}
  }: Props): ?(number | string) => (withoutOffset ? 0 : offsets.sm)};
`;

export default StyledIcon;
