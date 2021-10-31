import { Meta, Story } from '@storybook/react';
import { Backdrop as Component } from '.';

export default {
  title: 'Atom/Backdrop',
  component: Component,
  parameters: {
    componentSubtitle:
      'An overlay to highlight content which needs the users attention',
    docs: {
      description: {
        component: `
    The overlay is a simple "backdrop" to hide away the current
    content temporarily. Commonly used to highlight images when
    clicked on or to hightlight content which needs the users
    attention. Can also be found in combination with modals,
    where content is hidden away until the user chooses to see
    the information
        `,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Backdrop = Template.bind({});
Backdrop.args = { ...Backdrop.args, visible: true };
