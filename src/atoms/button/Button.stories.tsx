import { Meta, Story } from '@storybook/react';
import { DynamicProps } from '../../utils/DynamicProps';
import Component from './Button';

export default {
  title: 'Atom/Button',
  component: Component,
} as Meta;

const Template: Story<DynamicProps<'button'>> = (args) => (
  <Component {...args} />
);

export const Button = Template.bind({});
Button.args = {
  ...Button.args,
  children: 'label',
};
