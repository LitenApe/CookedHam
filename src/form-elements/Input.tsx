import { ComponentProps } from 'react';
import { useFormControlContext } from './FormControl';

export type InputProps = Omit<ComponentProps<'input'>, 'id'>;

export default function Input(props: InputProps) {
  const { id } = useFormControlContext();
  return <input {...props} aria-labelledby={id} />;
}
