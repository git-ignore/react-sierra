import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Heading, { sizeStylesMapping } from "./index";
import { baseColors } from "../../styles";

const StoryContainer = styled.div`
  display: flex;
  min-height: 400px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${baseColors.bg};
`;

storiesOf("Heading", module).add("Sizes", () => (
  <StoryContainer>
    {Object.keys(sizeStylesMapping)
      .reverse()
      .map(size => (
        <Heading key={`heading-size-${size}`} size={size}>
          Heding {size}
        </Heading>
      ))}
  </StoryContainer>
));
