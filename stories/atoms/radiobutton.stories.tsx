import React, { ReactElement, } from "react";
import { storiesOf, } from "@storybook/react";
import { text, boolean, } from "@storybook/addon-knobs";

import { action, } from "@storybook/addon-actions";
import { RadioButton, } from "../../src/atoms/radiobutton";

const stories = storiesOf("atoms/RadioButton", module);

stories.add("Default RadioButton", (): ReactElement => (
  <RadioButton
    label={text("Label", "label")}
    checked={boolean("Checked", false)}
    onChange={action("State change requested")}
    value={text("Value", "value")}
    disabled={boolean("Disabled", false)}
    reversed={boolean("Reversed", false)}
  />
));

stories.add("Checked RadioButton", (): ReactElement => (
  <RadioButton
    label={text("Label", "label")}
    checked={boolean("Checked", true)}
    onChange={action("State change requested")}
    value={text("Value", "value")}
    disabled={boolean("Disabled", false)}
    reversed={boolean("Reversed", false)}
  />
));

stories.add("Disabled RadioButton", (): ReactElement => (
  <RadioButton
    label={text("Label", "label")}
    checked={boolean("Checked", false)}
    onChange={action("State change requested")}
    value={text("Value", "value")}
    disabled={boolean("Disabled", true)}
    reversed={boolean("Reversed", false)}
  />
));

stories.add("Reversed RadioButton", (): ReactElement => (
  <RadioButton
    label={text("Label", "label")}
    checked={boolean("Checked", false)}
    onChange={action("State change requested")}
    value={text("Value", "value")}
    disabled={boolean("Disabled", false)}
    reversed={boolean("Reversed", true)}
  />
));
