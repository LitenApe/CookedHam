import { createElement } from 'react';
import Input, { InputProps } from '../input/Input';

export type RadioProps = Omit<InputProps, 'type'>;

export default function Radio(props: RadioProps) {
  return createElement(Input, { ...props, type: 'radio' });
}
