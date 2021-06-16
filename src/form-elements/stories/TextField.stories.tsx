import { Story } from '@storybook/react';

import Component, { TextFieldProps } from '../TextField';

export default {
  title: 'Form',
  component: Component,
};

const Template: Story<TextFieldProps> = (args) => <Component {...args} />;

export const TextField = Template.bind({});
TextField.args = { ...TextField.args };
