import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";

const req = require.context("../stories/", true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo);
addDecorator(withKnobs);

configure(loadStories, module);
