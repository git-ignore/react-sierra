// @flow

import styled from 'styled-components';
import {media} from '../../styles/helpers';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  ${media.xs`
    width: 85%;
  `};

  ${media.md`
    width: 80%;
  `};

  ${media.xl`
    width: 75%;
  `};
`;

export default Container;
