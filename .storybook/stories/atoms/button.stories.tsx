import React, { ReactElement, } from "react";

import { storiesOf, } from "@storybook/react";
import { action, } from "@storybook/addon-actions";
import { text, boolean, } from "@storybook/addon-knobs";

import { CenterContent, } from "../utils";
import { Button, } from "../../../src";

const stories = storiesOf("Atoms/Button", module);

stories.addDecorator(CenterContent);

stories.add(
  "Default Button",
  (): ReactElement => (
    <Button
      disabled={boolean("Disabled", false)}
      rounded={boolean("Round", false)}
      accent={boolean("Accent", false)}
      onClick={action("Clicked")}
    >
      {text("Button text", "text")}
    </Button>
  )
);

stories.add(
  "Disabled Button",
  (): ReactElement => (
    <Button
      disabled={boolean("Disabled", true)}
      rounded={boolean("Round", false)}
      accent={boolean("Accent", false)}
      onClick={action("Clicked")}
    >
      {text("Button text", "text")}
    </Button>
  )
);

stories.add(
  "Round Button",
  (): ReactElement => (
    <Button
      disabled={boolean("Disabled", false)}
      rounded={boolean("Round", true)}
      accent={boolean("Accent", false)}
      onClick={action("Clicked")}
    >
      {text("Button text", "text")}
    </Button>
  )
);

stories.add(
  "Accent Button",
  (): ReactElement => (
    <Button
      disabled={boolean("Disabled", false)}
      rounded={boolean("Round", false)}
      accent={boolean("Accent", true)}
      onClick={action("Clicked")}
    >
      {text("Button text", "text")}
    </Button>
  )
);
