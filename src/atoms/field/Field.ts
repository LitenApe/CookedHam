import {
  Children,
  cloneElement,
  ComponentProps,
  createElement,
  Fragment,
  isValidElement,
  PropsWithChildren,
} from 'react';
import useId from '../../utils/hooks/useId';

export default function Field(
  props: PropsWithChildren<ComponentProps<'input'>>
) {
  const id = useId('form-field');
  const { children, ...rest } = props;

  return createElement(
    Fragment,
    null,
    Children.map(children, (child) =>
      !isValidElement(child)
        ? child
        : cloneElement(child, { id, ...rest, ...child.props })
    )
  );
}
