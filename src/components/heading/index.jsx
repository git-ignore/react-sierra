// // @flow

// import React from "react";
// import styled, { css } from "styled-components";
// import { baseColors, baseFontMamily } from "../../styles";
// import { media } from "../../styles/helpers";

// export const sizeStylesMapping = {
//   md: css`
//     font-size: 24px;
//     ${media.md`font-size: 28px;`};
//   `,
//   lg: css`
//     font-size: 30px;
//     ${media.md`font-size: 40px;`};
//     ${media.lg`font-size: 48px;`};
//   `
// };

// type Props = {
//   children: React$Node,
//   as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div",
//   size?: $Keys<typeof sizeStylesMapping>
// };

// const withSizeStyles = ({ size = "md" }: Props) => sizeStylesMapping[size];

// const Shape = styled.div`
//   margin-bottom: 1em;
//   color: ${baseColors.textGray};
//   font-family: ${baseFontMamily};
//   font-weight: 300;
//   line-height: 1.3em;

//   ${withSizeStyles};
// `;

// const Heading = ({ children, as = "div", ...rest }: Props): React$Node => (
//   <Shape as={as} {...rest}>
//     {children}
//   </Shape>
// );

// export default Heading;
