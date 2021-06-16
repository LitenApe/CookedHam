import { Story } from '@storybook/react';

import Component, { InputProps } from '../Input';

export default {
  title: 'Form',
  component: Component,
};

const Template: Story<InputProps> = (args) => <Component {...args} />;

export const TextField = Template.bind({});
TextField.args = { ...TextField.args };
