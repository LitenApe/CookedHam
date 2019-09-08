import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { Button } from '../../src/atoms/buttons';

class ButtonGroup extends React.Component {
  render(){
    return <div>{ this.props.children }</div>
  }
}

const stories = storiesOf("molecules/ButtonGroup", module);

stories.addParameters({
  info: { inline: true }
});

stories.add('Default Button', () => (
  <ButtonGroup>
    <Button text={text("Button 1", "hello")} onClick={action("Clicked 1")} />
    <Button text={text("Button 2" , "world")} onClick={action("Clicked 2")} />
  </ButtonGroup>
));
