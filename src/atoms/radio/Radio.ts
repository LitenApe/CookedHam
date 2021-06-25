import Input, { InputProps } from '../input/Input';

export type RadioProps = Omit<InputProps, 'type'>;

export default function Radio(props: RadioProps) {
  return Input({ ...props, type: 'radio' });
}
