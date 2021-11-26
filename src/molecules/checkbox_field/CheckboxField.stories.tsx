import { Meta, Story } from '@storybook/react';
import { CheckboxField as Component } from '.';

export default {
  title: 'Molecule/CheckboxField',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component label="field label" {...args} />;

export const CheckboxField = Template.bind({});
CheckboxField.storyName = 'CheckboxField';
CheckboxField.args = {
  ...CheckboxField.args,
  error: '',
  label: 'field label',
};
