import { createElement } from 'react';
import { useFormFieldContext } from '../../utils/contexts/FormFieldContext';
import { DynamicProps } from '../../utils/DynamicProps';

export type LabelProps = Omit<DynamicProps<'label'>, 'as'>;

export default function Label(props: LabelProps) {
  const { id } = useFormFieldContext();
  return createElement('label', { htmlFor: id, ...props });
}
