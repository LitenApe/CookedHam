import { createElement } from 'react';
import { DynamicProps } from '../../utils/DynamicProps';

export type ButtonProps = DynamicProps<'button'>;

export default function Button(props: ButtonProps) {
  return createElement('button', { type: 'button', ...props });
}
