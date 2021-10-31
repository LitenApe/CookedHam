import { Meta, Story } from '@storybook/react';
import { Button as Component } from '.';

export default {
  title: 'Atom/Button',
  component: Component,
  parameters: {
    componentSubtitle:
      'An element which enable users to trigger events and actions',
    docs: {
      description: {
        component: `
    The button is the most commonly used element for triggering actions
    and events, such as submitting a form, opening a dialog, canceling
    an action, and so on.
        `,
      },
    },
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'The accessible name and the content of the button',
      type: 'string',
    },
  },
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Button = Template.bind({});
Button.args = { ...Button.args, children: 'label' };
