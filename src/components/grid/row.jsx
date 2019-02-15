import styled from 'styled-components';
import {rem, media} from '../../styles/helpers';
import {getFlex, getWidth} from './helpers';

// Grid row
const Row = styled.div`
  margin-right: ${rem(-15)};
  margin-left: ${rem(-15)};
  display: flex;
  flex-wrap: wrap;
`;

// Grid columns
const Column = styled.div`
  padding-right: ${rem(15)};
  padding-left: ${rem(15)};

  ${({xs}) => (xs ? getFlex(xs) : 'flex: 0 0 100%')};
  ${({xs}) => (xs ? getWidth(xs) : 'width: 100%')};

  ${media.sm`
    ${({sm}) => sm && getFlex(sm)};
    ${({sm}) => sm && getWidth(sm)};
  `};

  ${media.md`
    ${({md}) => md && getFlex(md)};
    ${({md}) => md && getWidth(md)};
  `};

  ${media.lg`
    ${({lg}) => lg && getFlex(lg)};
    ${({lg}) => lg && getWidth(lg)};
  `};

  ${media.xlg`
    ${({xl}) => xl && getFlex(xl)};
    ${({xl}) => xl && getWidth(xl)};
  `};
`;
