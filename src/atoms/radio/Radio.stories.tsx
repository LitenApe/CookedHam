import { Story } from '@storybook/react';
import Component from './Radio';
import { InputProps } from '../input/Input';

export default {
  title: 'Form',
  component: Component,
};

const Template: Story<InputProps> = (args) => <Component {...args} />;

export const Radio = Template.bind({});
Radio.args = { ...Radio.args };
