import { Meta, Story } from '@storybook/react';
import { RadioField as Component } from '.';

export default {
  title: 'Molecule/RadioField',
  component: Component,
} as Meta;

const Template: Story = (args) => (
  <Component label="field label" options={[]} name="os" {...args} />
);

export const RadioField = Template.bind({});
RadioField.storyName = 'RadioField';
RadioField.args = {
  ...RadioField.args,
  error: '',
  label: 'Preferred Operating System',
  options: [
    {
      label: 'Linux',
      value: 'linux',
    },
    {
      label: 'Windows',
      value: 'windows',
    },
    {
      label: 'MacOS',
      value: 'macos',
    },
  ],
};
