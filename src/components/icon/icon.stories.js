import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Icon from "./index";
import { icons } from "./icons";
import { baseColors } from "../../styles";

const StoryContainer = styled.div`
  display: flex;
  min-height: 400px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${baseColors.bg};
`;

const DemoIcon = styled(Icon)`
  margin: 12px;
`;

storiesOf("Icon", module).add("Icons", () => (
  <StoryContainer>
    {Object.keys(icons).map(name => (
      <DemoIcon key={`icon-${name}`} name={name} />
    ))}
  </StoryContainer>
));
