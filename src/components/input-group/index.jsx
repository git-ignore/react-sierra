// @flow

import React from 'react';
import styled from 'styled-components';
import {HTMLInput} from '../input';
import Button from '../button/shape';

type Props = {
  children: React$Node,
  vertical?: boolean
};

// TODO: vertical docs and styles

const hFirstElementStyles = `
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-right: none;
`;

const hLastElementStyles = `
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-left: none;
`;

const vFirstElementStyles = `
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;
`;

const vLastElementStyles = `
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: none;
`;

const horizontalStyles = `
  flex-direction: row;

  & > ${Button}:first-child {
    ${hFirstElementStyles}
  }

  & > *:first-child {
    ${HTMLInput} {
      ${hFirstElementStyles}
    }
  }

  & > ${Button}:last-child {
    ${hLastElementStyles}
  }

  & > *:last-child {
    ${HTMLInput} {
      ${hLastElementStyles}
    }
  }
`;

const verticallStyles = `
  flex-direction: column;

 ${Button}:first-child {
    ${vFirstElementStyles}
  }

  & > *:first-child {
    ${HTMLInput} {
      ${vFirstElementStyles}
    }
  }

  ${Button}:last-child {
    ${vLastElementStyles}
  }

  & > *:last-child {
      ${HTMLInput} {
        ${vLastElementStyles}
      }
  }
`;

const Wrapper = styled.div`
  display: flex;

  & > *,
  ${HTMLInput} {
    height: 100%;
  }

  & > *:not(:last-child):not(:first-child) {
    ${HTMLInput} {
      border-radius: 0;
    }
  }

  & > ${Button}:not(:last-child):not(:first-child) {
    border-radius: 0;
  }

  ${({vertical = false}: Props): string =>
    vertical ? verticallStyles : horizontalStyles}
`;

export default ({children, ...rest}: Props): React$Node => (
  <Wrapper {...rest}>{children}</Wrapper>
);
