import { createElement } from 'react';
import Input, { InputProps } from '../input/Input';

export type CheckboxProps = Omit<InputProps, 'type'>;

export default function Checkbox(props: CheckboxProps) {
  return createElement(Input, { ...props, type: 'checkbox' });
}
