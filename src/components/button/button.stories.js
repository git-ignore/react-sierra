import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "./index";
import { offsets } from "../../styles";

const DemoButton = styled(Button)`
  margin: ${offsets.xs};
`;

storiesOf("Button", module).add("Button appearances", () => (
  <Fragment>
    <DemoButton>Primary button</DemoButton>
    <DemoButton appearance="secondary">Secondary button</DemoButton>
    <DemoButton outline>Primary outline</DemoButton>
    <DemoButton appearance="secondary" outline>
      Secondary outline
    </DemoButton>
    <DemoButton disabled>Primary button</DemoButton>
  </Fragment>
));
