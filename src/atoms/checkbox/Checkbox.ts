import Input, { InputProps } from '../input/Input';

export type CheckboxProps = Omit<InputProps, 'type'>;

export default function Checkbox(props: CheckboxProps) {
  return Input({ ...props, type: 'checkbox' });
}
