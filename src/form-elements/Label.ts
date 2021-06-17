import { ComponentProps, createElement } from 'react';
import { useFormControlContext } from './FormControl';

export type LabelProps = Omit<ComponentProps<'label'>, 'id'>;

export default function Label(props: LabelProps) {
  const { children, ...rest } = props;
  const { id } = useFormControlContext();

  return createElement('label', { ...rest, htmlFor: id }, children);
}
