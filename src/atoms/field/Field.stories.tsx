import { Meta, Story } from '@storybook/react';
import Input from '../input/Input';
import Label from '../label/Label';
import Component, { Props } from './Field';

export default {
  title: 'Atom/Field',
  component: Component,
} as Meta;

const Template: Story<Props> = ({ children, ...args }) => (
  <Component {...args}>{children}</Component>
);

export const Field = Template.bind({});
Field.args = {
  defaultValue: 'mushrooms',
  children: ({ id, value, setValue }) => (
    <>
      <Label htmlFor={id}>label</Label>
      <Input
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  ),
};
