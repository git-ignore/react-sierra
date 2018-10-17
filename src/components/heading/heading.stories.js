import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Heading from "./index";
import { tagsMapping } from "./shape";

storiesOf("Heading", module).add("Heading", () => (
  <Fragment>
    {Object.keys(tagsMapping)
      .reverse()
      .map((size, i) => (
        <Heading size={size}>Heading {size}</Heading>
      ))}
  </Fragment>
));
