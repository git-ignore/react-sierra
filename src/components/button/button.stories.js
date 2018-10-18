import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { baseColors } from "../../styles";
import Button, { appearanceBgColorsMapping, sizeStylesMapping } from "./index";

const DemoButton = styled(Button)`
  margin: 12px;
`;

const StoryContainer = styled.div`
  display: flex;
  min-height: 400px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${baseColors.bg};
`;

const Divider = styled.hr`
  width: 100%;
`;

storiesOf("Button", module).add("Appearances", () => (
  <StoryContainer>
    {Object.keys(appearanceBgColorsMapping).map(color => (
      <DemoButton key={`button-${color}`} appearance={color}>
        {color}
      </DemoButton>
    ))}
    <Divider />
    {Object.keys(appearanceBgColorsMapping).map(color => (
      <DemoButton key={`button-${color}`} appearance={color} disabled>
        {color}
      </DemoButton>
    ))}
  </StoryContainer>
));

storiesOf("Button", module).add("Sizes", () => (
  <StoryContainer>
    {Object.keys(sizeStylesMapping)
      .reverse()
      .map(size => (
        <DemoButton key={`button-${size}`} size={size}>
          Button {size}
        </DemoButton>
      ))}
  </StoryContainer>
));
