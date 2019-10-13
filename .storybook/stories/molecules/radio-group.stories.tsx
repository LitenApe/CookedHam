import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { RadioGroup } from "../../../src";

const stories = storiesOf("Molecules/RadioGroup", module);

stories.add("RadioGroup", () => (
  <RadioGroup
    label="Sports"
    name="sport"
    options={[
      { label: "Track and Field", value: "taf", },
      { label: "Obstacle Course Racing", value: "ocr", },
      { label: "Football", value: "fb", defaultChecked: true, },
      { label: "Volleyball", value: "vb", },
      { label: "Dodgeball", value: "db", }
    ]}
    onChange={action("State changed")}
    horizontal={boolean("Horizontal", false)}
  />
));
