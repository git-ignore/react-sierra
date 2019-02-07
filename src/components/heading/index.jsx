// @flow

import styled, {css} from 'styled-components';
import {media} from '../../styles/helpers';

const sizePropsMapping = {
  sm: css`
    font-size: 2.4rem;
    line-height: 1.35;

    ${media.md`
        font-size: 3rem;
    `};
  `,
  md: css`
    font-size: 3rem;
    line-height: 1.3;

    ${media.md`
        font-size: 3.6rem;
    `};
  `,
  lg: css`
    font-size: 4rem;
    line-height: 1.2;

    ${media.md`
        font-size: 5.0rem;
    `};
  `
};

type Props = {
  size: 'sm' | 'md' | 'lg'
};

const withSizeStyles = ({size = 'md'}: Props) => sizePropsMapping[size];

const Heading = styled.div`
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: -0.1rem;
  ${withSizeStyles};
`;

export default Heading;
