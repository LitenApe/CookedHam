import Input, { InputProps } from '../input/Input';

export default function Radio(props: InputProps) {
  return Input({ ...props, type: 'radio' });
}
