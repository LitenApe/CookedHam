import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { CenterContent, } from "../utils";
import { Button, } from "../../src";

const stories = storiesOf("atoms/Button", module);

stories.addParameters({
  info: { inline: true }
})

stories.addDecorator(CenterContent);

stories.add(
  'Default Button',
  () => (
    <Button
      text={text("Button text", 'text')}
      disabled={boolean("Disabled", false)}
      rounded={boolean("Round", false)}
      accent={boolean("Accent", false)}
      onClick={action('Clicked')}
    />
  ));

stories.add(
  'Disabled Button',
  () => (
    <Button
      text={text("Button text", 'text')}
      disabled={boolean("Disabled", true)}
      rounded={boolean("Round", false)}
      accent={boolean("Accent", false)}
      onClick={action('Clicked')}
    />
  ));

stories.add(
  'Round Button',
  () => (
    <Button
      text={text("Button text", 'text')}
      disabled={boolean("Disabled", false)}
      rounded={boolean("Round", true)}
      accent={boolean("Accent", false)}
      onClick={action('Clicked')}
    />
  ));

stories.add(
  'Accent Button',
  () => (
    <Button
      text={text("Button text", 'text')}
      disabled={boolean("Disabled", false)}
      rounded={boolean("Round", false)}
      accent={boolean("Accent", true)}
      onClick={action('Clicked')}
    />
  ));
