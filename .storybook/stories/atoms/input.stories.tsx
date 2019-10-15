import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { TextField, NumberField } from "../../../packages";

import { toNumberFormat } from "../../../packages/utils/toNumberFormat";

const stories = storiesOf("Atoms/Input", module);

stories.add("TextField", () => <TextField disabled={boolean("Disabled", false)} onChange={action("value changed")} />);

stories.add("NumberField", () => <NumberField disabled={boolean("Disabled", false)} format={toNumberFormat(text("format", "##/##/####"))} onChange={action("value changed")} />);
