import React, { ReactElement, } from "react";
import { RenderFunction, } from "@storybook/react";

const horizontalCenter = {
  display: "flex",
  justifyContent: "center",
};

export const CenterContent = (storyFn: RenderFunction): ReactElement => (
  <div style={horizontalCenter}>{storyFn()}</div>
);
