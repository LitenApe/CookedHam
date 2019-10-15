import React, { ReactElement } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import { Checkbox } from "../../../packages";

const stories = storiesOf("Atoms/Checkbox", module);

stories.add(
  "Checkbox",
  (): ReactElement => (
    <Checkbox
      label={text("Label", "label")}
      checked={boolean("Checked", false)}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", false)}
      onChange={action("State changed attempt")}
    />
  )
);
