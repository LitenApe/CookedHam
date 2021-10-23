import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Accordion as Component, AccordionHeader, AccordionPanel } from '.';

export default {
  title: 'Atom/Accordion',
  component: Component,
  argTypes: {
    open: {
      name: 'open',
      description: 'controls whether or not the accordion content is visible',
      type: 'boolean',
    },
    onClick: {
      name: 'onClick',
      description:
        'click handler for toggling whether or not the content should be visible',
      type: 'function',
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Component {...args}>
    <AccordionHeader>Title</AccordionHeader>
    <AccordionPanel>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
      voluptatum ipsa deserunt ex assumenda? Officiis minima cum possimus
      deleniti, delectus veritatis laboriosam aspernatur vero nemo. Dolores,
      reiciendis. Libero, autem adipisci.
    </AccordionPanel>
  </Component>
);

export const Accordion = Template.bind({});
Accordion.args = {
  ...Accordion.args,
  onClick: action('toggle'),
};
