// @flow

import { css } from "styled-components";
import { baseMediaBreakdown } from "./index";

export const onLargeScreensOnly = (style: string): Array<any> =>
  css`
    @media ${baseMediaBreakdown} {
      ${style};
    }
  `;
