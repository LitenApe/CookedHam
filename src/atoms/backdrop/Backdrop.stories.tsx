import { Meta, Story } from '@storybook/react';
import { Backdrop as Component } from '.';

export default {
  title: 'Atom/Backdrop',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Backdrop = Template.bind({});
Backdrop.args = { ...Backdrop.args, visible: true };
