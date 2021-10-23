import { Meta, Story } from '@storybook/react';
import { Alert as Component } from '.';

export default {
  title: 'Atom/Alert',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component as="p" {...args} />;

export const Alert = Template.bind({});
Alert.args = { ...Alert.args, children: 'Alert message' };
