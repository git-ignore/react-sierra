// @flow

import styled from 'styled-components';
import {rem, media} from '../../styles/helpers';

// Grid row
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: ${rem(-15)};
  margin-left: ${rem(-15)};
`;

export default Row;
