import { Meta, Story } from '@storybook/react';
import { DynamicProps } from '../../utils/DynamicProps';
import Component from './Button';

export default {
  title: 'Atom/Button',
  component: Component,
  argTypes: {
    children: {
      name: 'children',
      description: 'The accessible name and the content of the button',
      defaultValue: 'label',
      type: 'string',
    },
  },
} as Meta;

const Template: Story<DynamicProps<'button'>> = (args) => (
  <Component {...args} />
);

export const Button = Template.bind({});
Button.args = { ...Button.args };
