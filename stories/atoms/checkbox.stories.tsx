import React, { ReactElement, } from "react";

import { storiesOf, } from "@storybook/react";
import { action, } from "@storybook/addon-actions";
import { text, boolean, } from "@storybook/addon-knobs";

import { CenterContent, } from "../utils";
import { Checkbox, } from "../../src";

const stories = storiesOf("atoms/Checkbox", module);

stories.addParameters({
  info: { inline: true }
})

stories.addDecorator(CenterContent);

stories.add(
  "Uncontrolled Checkbox",
  () => (
    <Checkbox
      label={text("Label", "label")}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", false)}
      reversed={boolean("Reverse order", false)}
      onChange={action("clicked")}
    />
  )
);

stories.add(
  "Default Checkbox",
  () => (
    <Checkbox
<<<<<<< HEAD
      text={text("Checkbox text", 'text')}
=======
      label={text("Label", "label")}
>>>>>>> c0187e7... fixup! Add checkbox
      checked={boolean("Checked", false)}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", false)}
      reversed={boolean("Reverse order", false)}
      onChange={action("clicked")}
    />
  ));

stories.add(
  'Checked Checkbox',
  () => (
    <Checkbox
<<<<<<< HEAD
      text={text("Checkbox text", 'text')}
=======
      label={text("Label", "label")}
>>>>>>> c0187e7... fixup! Add checkbox
      checked={boolean("Checked", true)}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", false)}
      reversed={boolean("Reverse order", false)}
      onChange={action("clicked")}
    />
  ));

stories.add(
  'Disabled Checkbox',
  () => (
    <Checkbox
<<<<<<< HEAD
      text={text("Checkbox text", 'text')}
=======
      label={text("Label", "label")}
>>>>>>> c0187e7... fixup! Add checkbox
      checked={boolean("Checked", true)}
      value={text("Value", "component value")}
      disabled={boolean("Disabled", true)}
      reversed={boolean("Reverse order", false)}
      onChange={action("clicked")}
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
      onChange={action("clicked")}
    />
  ));
