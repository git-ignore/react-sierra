import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Button from "./index";
import { colors } from "../../styles";

const DemoButton = styled(Button)`
  margin: 12px;
`;

storiesOf("Button", module).add("Buttons", () => (
  <Fragment>
    <Fragment>
      <DemoButton>Button</DemoButton>
      <DemoButton disabled>Disabled</DemoButton>
    </Fragment>

    <hr />

    <Fragment>
      <DemoButton outline>Outline</DemoButton>
      <DemoButton outline disabled>
        Outline disabled
      </DemoButton>
    </Fragment>
  </Fragment>
));
