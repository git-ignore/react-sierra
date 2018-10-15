// @flow

import React from "react";
import styled, { css } from "styled-components";
import {
  colors,
  gradients,
  radiuses,
  offsets,
  transitions
} from "../../styles";

type Props = {
  appearance?: "primary" | "secondary",
  outline?: boolean,
  disabled?: boolean
};

const BORDER_WIDTH = "2px";

const getAppearanceStyles = ({
  appearance = "primary",
  outline = false,
  disabled = false
}: Props) => css`
    ${
      outline
        ? css`
            background: transparent;
            color: ${colors.black};
            border-width: ${BORDER_WIDTH};
            border-style: solid;
            border-color: ${appearance === "primary"
              ? colors.blueDark
              : gradients.secondary};
            padding: ${offsets.xs} ${offsets.lg};
          `
        : css`
            background: ${gradients[appearance]};
            color: ${colors.white};
            border: none;
            padding: calc(${offsets.xs} + ${BORDER_WIDTH})
              calc(${offsets.lg} + ${BORDER_WIDTH});
          `
    };

    ${
      disabled
        ? css`
            color: ${colors.gray};
            background: transparent;
            cursor: not-allowed;
            border-width: ${BORDER_WIDTH};
            border-style: solid;
            border-color: ${colors.gray};
            padding: ${offsets.xs} ${offsets.lg};
          `
        : css`
            cursor: pointer;
            &:hover {
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05),
                0 4px 10px rgba(33, 37, 41, 0.25);
            }

            &:active {
              box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.125),
                0 3px 15px rgba(0, 0, 0, 0.05),
                0 2px 10px rgba(33, 37, 41, 0.25);
            }

            &:focus {
              box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05),
                0 2px 10px rgba(33, 37, 41, 0.25);
            }
          `
    };}
`;

const Shape = styled.button`
  box-sizing: border-box;
  margin: 0;
  font-size: 17px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.11);
  user-select: none;
  border-radius: ${radiuses.md};
  transition: all ${transitions.sm};
  ${getAppearanceStyles};
`;

export default Shape;
