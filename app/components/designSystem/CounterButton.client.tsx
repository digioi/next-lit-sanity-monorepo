import * as React from "react";
import { createComponent } from "@lit-labs/react";
import { MyElement } from "repo-components";
export const Component = "my-element";
export default createComponent(
  React, Component, MyElement, {
  onClick: "click"
  } 
)

  