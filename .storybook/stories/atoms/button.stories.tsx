import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import { CenterContent } from "../utils";
import {
  Button, PrimaryButton, SecondaryButton, TertiaryButton
} from "../../../packages";

const stories = storiesOf("Atoms/Button", module);

stories.addDecorator(CenterContent);

stories.add("Button", () => (
  <Button
    fat={boolean("Fat", false)}
    wide={boolean("Wide", false)}
    rounded={boolean("Round", false)}
    disabled={boolean("Disabled", false)}
    onClick={action("Clicked")}
  >
    {text("Button text", "text")}
  </Button>
));

stories.add("PrimaryButton", () => (
  <PrimaryButton
    fat={boolean("Fat", false)}
    wide={boolean("Wide", false)}
    rounded={boolean("Round", false)}
    disabled={boolean("Disabled", false)}
    onClick={action("Clicked")}
  >
    {text("Button text", "text")}
  </PrimaryButton>
));

stories.add("SecondaryButton", () => (
  <SecondaryButton
    fat={boolean("Fat", false)}
    wide={boolean("Wide", false)}
    rounded={boolean("Round", false)}
    disabled={boolean("Disabled", false)}
    onClick={action("Clicked")}
  >
    {text("Button text", "text")}
  </SecondaryButton>
));

stories.add("TertiaryButton", () => (
  <TertiaryButton
    fat={boolean("Fat", false)}
    wide={boolean("Wide", false)}
    rounded={boolean("Round", false)}
    disabled={boolean("Disabled", false)}
    onClick={action("Clicked")}
  >
    {text("Button text", "text")}
  </TertiaryButton>
));
