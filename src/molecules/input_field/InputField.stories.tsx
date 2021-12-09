import { Meta, Story } from '@storybook/react';

import { InputField as Component } from '.';

export default {
  title: 'Molecule/InputField',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component label="field label" {...args} />;

export const InputField = Template.bind({});
InputField.storyName = 'InputField';
InputField.args = {
  ...InputField.args,
  error: '',
  label: 'field label',
};
