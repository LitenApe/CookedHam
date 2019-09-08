import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { Button } from '../../src/atoms/buttons';

const stories = storiesOf("atoms/Button", module);

stories.addParameters({
  info: { inline: true }
})

stories.add(
  'Default Button',
  () => (
    <Button
      text={text("Button text", 'text')}
      disabled={boolean("Disabled", false)}
      onClick={action('Clicked')}
    />
  ));
