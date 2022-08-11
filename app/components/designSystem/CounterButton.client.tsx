import { createComponent } from "@lit-labs/react";
import { MyElement } from "aps-org-components";
import * as React from "react";

export const CounterButton = createComponent(
  React, "my-element", MyElement, {
    onClick: "click"
  }
);

export default CounterButton;
  