import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

import { themeSelector } from "../themeSelector";

import { Button } from "../../dist/index";

const story = storiesOf("Atoms/Button", module);

story.addDecorator(themeSelector);

story.add(
  "Default Button",
  () => (
    <Button
      text={text("Text", "Click Me")}
      disabled={boolean("Disabled", false)}
      onClick={action("clicked")}
    />
  ),
  {
    info: { inline: true }
  }
);
