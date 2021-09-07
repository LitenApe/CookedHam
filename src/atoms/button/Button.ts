import { createElement } from 'react';
import { DynamicProps, HTMLTags } from '../../utils/DynamicProps';

export default function Button<T extends HTMLTags = 'button'>(
  props: DynamicProps<T>
) {
  const { as = 'button', ...args } = props;
  return createElement(as, { type: 'button', ...args });
}
