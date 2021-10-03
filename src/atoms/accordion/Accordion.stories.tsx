import { Meta, Story } from '@storybook/react';
import { Accordion as Component } from '.';

export default {
  title: 'Atom/Accordion',
  component: Component,
} as Meta;

const Template: Story = (args) => <Component {...args} />;

export const Accordion = Template.bind({});
Accordion.args = {
  ...Accordion.args,
  children: [
    <Component.Header key="accordion_title">Title</Component.Header>,
    <Component.Panel key="accordion_content">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
      voluptatum ipsa deserunt ex assumenda? Officiis minima cum possimus
      deleniti, delectus veritatis laboriosam aspernatur vero nemo. Dolores,
      reiciendis. Libero, autem adipisci.
    </Component.Panel>,
  ],
};
