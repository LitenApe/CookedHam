import React, { ReactElement } from "react";

const horizontalCenter = {
  display: "flex",
  justifyContent: "center",
};

export const CenterContent = (storyFn: () => JSX.Element): ReactElement => (
  <div style={horizontalCenter}>{storyFn()}</div>
);
