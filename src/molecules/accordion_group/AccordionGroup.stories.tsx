import { Meta, Story } from '@storybook/react';
import { AccordionGroup as Component } from '.';
import {
  Accordion,
  AccordionHeader,
  AccordionPanel,
} from '../../atoms/accordion';

export default {
  title: 'Molecules/AccordionGroup',
  component: Component,
  argTypes: {
    open: {
      name: 'open',
      description: 'controls which accordion that should be open',
      type: 'number',
    },
    onClick: {
      name: 'onClick',
      description: 'click handler to react on accordion toggle events',
    },
    initial: {
      name: 'initial',
      description: 'sets initial accordion to be open',
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Component {...args}>
    <Accordion>
      <AccordionHeader>Content 1</AccordionHeader>
      <AccordionPanel>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        voluptatum ipsa deserunt ex assumenda? Officiis minima cum possimus
        deleniti, delectus veritatis laboriosam aspernatur vero nemo. Dolores,
        reiciendis. Libero, autem adipisci.
      </AccordionPanel>
    </Accordion>
    <Accordion>
      <AccordionHeader>Content 2</AccordionHeader>
      <AccordionPanel>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        voluptatum ipsa deserunt ex assumenda? Officiis minima cum possimus
        deleniti, delectus veritatis laboriosam aspernatur vero nemo. Dolores,
        reiciendis. Libero, autem adipisci.
      </AccordionPanel>
    </Accordion>
    <Accordion>
      <AccordionHeader>Content 3</AccordionHeader>
      <AccordionPanel>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        voluptatum ipsa deserunt ex assumenda? Officiis minima cum possimus
        deleniti, delectus veritatis laboriosam aspernatur vero nemo. Dolores,
        reiciendis. Libero, autem adipisci.
      </AccordionPanel>
    </Accordion>
  </Component>
);

export const AccordionGroup = Template.bind({});
AccordionGroup.storyName = 'AccordionGroup';
AccordionGroup.args = {
  ...AccordionGroup.args,
  initial: 1,
};
