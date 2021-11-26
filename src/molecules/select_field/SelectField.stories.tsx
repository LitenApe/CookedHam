import { Meta, Story } from '@storybook/react';
import { SelectField as Component } from '.';

export default {
  title: 'Molecule/SelectField',
  component: Component,
} as Meta;

const Template: Story = (args) => (
  <Component label="field label" options={[]} {...args} />
);

export const SelectField = Template.bind({});
SelectField.storyName = 'SelectField';
SelectField.args = {
  ...SelectField.args,
  error: '',
  label: 'Choose a camera manufacturer',
  options: [
    {
      label: 'Fujifilm',
      value: 'fujifilm',
    },
    {
      label: 'Canon',
      value: 'canon',
    },
    {
      label: 'Nikon',
      value: 'nikon',
    },
  ],
};
