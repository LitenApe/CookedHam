import { Meta, Story } from '@storybook/react';
import Component, { RadioProps } from './Radio';

export default {
  title: 'Atom/Form',
  component: Component,
} as Meta;

const Template: Story<RadioProps> = (args) => <Component {...args} />;

export const Radio = Template.bind({});
Radio.args = { ...Radio.args };
