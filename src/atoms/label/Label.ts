import { ComponentProps, createElement } from 'react';
export type LabelProps = ComponentProps<'label'>;

export default function Label(props: LabelProps) {
  const { id, ...rest } = props;
  return createElement('label', { htmlFor: id, ...rest });
}
