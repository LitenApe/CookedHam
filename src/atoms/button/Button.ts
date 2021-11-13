import {
  ComponentProps,
  createElement,
  ForwardedRef,
  forwardRef,
  MouseEvent,
} from 'react';
import { isDefined } from '../../utils/functions/isDefined';
import { DynamicProps } from '../../utils/types/DynamicProps';

type PermittedTags = 'a' | 'button';

function Button<T extends PermittedTags = 'button'>(
  props: DynamicProps<T>,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
): JSX.Element {
  const { as = 'button', onClick, ...args } = props;

  const isDisabled =
    (args as ComponentProps<'button'>).disabled === true ||
    args['aria-disabled'] === true;

  function clickHandler(event: MouseEvent<any>) {
    if (!isDisabled && isDefined(onClick)) {
      onClick(event);
    }
  }

  return createElement(as, {
    type: 'button',
    'aria-disabled': isDisabled,
    onClick: clickHandler,
    ...args,
    ref,
  });
}

export default forwardRef(Button);
