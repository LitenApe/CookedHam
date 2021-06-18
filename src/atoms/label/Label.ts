import { ComponentProps, createElement } from 'react';
import { useFormFieldContext } from '../../utils/contexts/FormFieldContext';

export type LabelProps = Omit<ComponentProps<'label'>, 'htmlFor'>;

export default function Label(props: LabelProps) {
  const { id } = useFormFieldContext();
  return createElement('label', { ...props, htmlFor: id });
}
