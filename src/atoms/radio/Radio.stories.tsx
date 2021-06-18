import { Story } from '@storybook/react';
import Component, { RadioProps } from './Radio';

export default {
  title: 'Form',
  component: Component,
};

const Template: Story<RadioProps> = (args) => <Component {...args} />;

export const Radio = Template.bind({});
Radio.args = { ...Radio.args };
