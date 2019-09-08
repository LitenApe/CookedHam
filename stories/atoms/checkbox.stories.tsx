import React, { ReactElement, } from "react";

import { storiesOf, } from "@storybook/react";
import { action, } from "@storybook/addon-actions";
import { text, boolean, } from "@storybook/addon-knobs";

import { Checkbox, } from "../../src";

const stories = storiesOf("atoms/Checkbox", module);

stories.add(
  "Default Checkbox",
  (): ReactElement => (
    <Checkbox
      label={text("Label", "label")}
      checked={boolean("Checked", false)}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", false)}
      reversed={boolean("Reverse order", false)}
      onChange={action("State changed attempt")}
    />
  )
);

stories.add(
  "Checked Checkbox",
  (): ReactElement => (
    <Checkbox
      label={text("Label", "label")}
      checked={boolean("Checked", true)}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", false)}
      reversed={boolean("Reverse order", false)}
      onChange={action("State changed attempt")}
    />
  )
);

stories.add(
  "Disabled Checkbox",
  (): ReactElement => (
    <Checkbox
      label={text("Label", "label")}
      checked={boolean("Checked", true)}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", true)}
      reversed={boolean("Reverse order", false)}
      onChange={action("State changed attempt")}
    />
  )
);

stories.add(
  "Reversed Checkbox",
  (): ReactElement => (
    <Checkbox
      label={text("Label", "label")}
      checked={boolean("Checked", true)}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", false)}
      reversed={boolean("Reverse order", true)}
      onChange={action("State changed attempt")}
    />
  )
);
