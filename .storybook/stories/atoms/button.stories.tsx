import React from "react";

import { storiesOf, } from "@storybook/react";
import { action, } from "@storybook/addon-actions";
import { text, boolean, } from "@storybook/addon-knobs";

import { CenterContent, } from "../utils";
import {
  Button, PrimaryButton, SecondaryButton, TertiaryButton,
} from "../../../src";

const stories = storiesOf("Atoms/Button", module);

stories.addDecorator(CenterContent);

stories.add("Button", () => (
  <Button
    disabled={boolean("Disabled", false)}
    rounded={boolean("Round", false)}
    onClick={action("Clicked")}
  >
    {text("Button text", "text")}
  </Button>
));

stories.add("PrimaryButton", () => (
  <PrimaryButton
    disabled={boolean("Disabled", false)}
    rounded={boolean("Round", false)}
    onClick={action("Clicked")}
  >
    {text("Button text", "text")}
  </PrimaryButton>
));

stories.add("SecondaryButton", () => (
  <SecondaryButton
    disabled={boolean("Disabled", false)}
    rounded={boolean("Round", false)}
    onClick={action("Clicked")}
  >
    {text("Button text", "text")}
  </SecondaryButton>
));

stories.add("TertiaryButton", () => (
  <TertiaryButton
    disabled={boolean("Disabled", false)}
    rounded={boolean("Round", false)}
    onClick={action("Clicked")}
  >
    {text("Button text", "text")}
  </TertiaryButton>
));
