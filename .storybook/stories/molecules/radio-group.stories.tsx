import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { RadioGroup } from "../../../packages";

const stories = storiesOf("Molecules/RadioGroup", module);

stories.add("RadioGroup", () => (
  <RadioGroup
    label="Sports"
    name="sport"
    options={[
      { label: "Track and Field", value: "taf", },
      { label: "Obstacle Course Racing", value: "ocr", },
      { label: "Football", value: "fb", defaultChecked: true, },
      { label: "Volleyball", value: "vb", disabled: true, },
      { label: "Dodgeball", value: "db", }
    ]}
    onChange={action("State changed")}
  />
));
