import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioGroup as Component } from '.';
import Radio from '../radio/Radio';
import Label from '../label/Label';
import { Legend } from '../legend';

export default {
  title: 'Atom/RadioGroup',
  component: Component,
} as Meta;

const Template: Story = (args) => (
  <Component {...args}>
    <Legend>Bicycle brand</Legend>
    <Radio key="radio-1" value="trek" />
    <Label key="radio-1-label">Trek</Label>
    <Radio key="radio-2" value="specialized" />
    <Label key="radio-2-label">Specialized</Label>
    <Radio key="radio-3" value="cannondale" />
    <Label key="radio-3-label">Cannondale</Label>
    <Radio key="radio-4" value="canyon" />
    <Label key="radio-4-label">Canyon</Label>
  </Component>
);

export const RadioGroup = Template.bind({});
RadioGroup.storyName = 'RadioGroup';
RadioGroup.args = {
  ...RadioGroup.args,
  name: 'bike-manufacturer',
  onChange: action('value changed'),
};
