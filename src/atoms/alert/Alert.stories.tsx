import { Meta, Story } from '@storybook/react';
import { Alert as Component } from '.';

export default {
  title: 'Atom/Alert',
  component: Component,
  parameters: {
    componentSubtitle: 'Notification of important information',
    docs: {
      description: {
        component: `
    An alert is a component that displays a brief, important
    message in a way that attracts the user's attention without
    interrupting the user's task. Dynamically rendered alerts
    are automatically announced by most screen readers, and in
    some operating systems, they may trigger an alert sound.

    The Alert component makes use of aria-live instead of
    the alert role so that developers and designers can choose
    whether or not a given alert should interrupt a screen reader
    or not.
        `,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Component as="p" {...args} />;

export const Alert = Template.bind({});
Alert.args = { ...Alert.args, children: 'Alert message' };
