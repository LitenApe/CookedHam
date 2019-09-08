import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

type props = {
  text: string,
  disabled?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function Button({ text, ...rest }: props) {
  return <button type="button" {...rest}>{text}</button>
}

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
