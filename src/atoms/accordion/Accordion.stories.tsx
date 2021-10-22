import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { Accordion as Component, AccordionHeader, AccordionPanel } from '.';

export default {
  title: 'Atom/Accordion',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

let open = false;

export const Accordion = Template.bind({});
Accordion.args = {
  ...Accordion.args,
  open,
  onClick: action('toggle'),
  children: [
    <AccordionHeader key="accordion_title">Title</AccordionHeader>,
    <AccordionPanel key="accordion_content">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
      voluptatum ipsa deserunt ex assumenda? Officiis minima cum possimus
      deleniti, delectus veritatis laboriosam aspernatur vero nemo. Dolores,
      reiciendis. Libero, autem adipisci.
    </AccordionPanel>,
  ],
};
