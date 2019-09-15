import React from "react";
import { storiesOf, } from "@storybook/react";
import { text, } from "@storybook/addon-knobs";

import { RadioButton, } from "../../src/atoms/radiobutton";

const stories = storiesOf("atoms/RadioButton", module);

stories.addParameters({
  info: { inline: true, },
});

stories.add("Uncontrolled RadioButton", () => (
  <RadioButton
    label={text("Label", "label")}
  />
));
