// @flow

import styled from 'styled-components';
import {rem, media} from '../../styles/helpers';
import {getFlex, getWidth} from '../../styles/grid';

// Grid row
const Row = styled.div`
  margin-right: ${rem(-15)};
  margin-left: ${rem(-15)};
  display: flex;
  flex-wrap: wrap;
`;

export default Row;
