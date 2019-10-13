import React, { ReactElement } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import { Radio } from "../../../src";

const stories = storiesOf("Atoms/Radio", module);

stories.add("Radio", (): ReactElement => (
  <Radio
    label={text("Label", "label")}
    checked={boolean("Checked", false)}
    onChange={action("State change requested")}
    value={text("Value", "value")}
    disabled={boolean("Disabled", false)}
  />
));
