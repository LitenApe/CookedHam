import {
  ComponentProps,
  FocusEvent,
  ForwardedRef,
  createElement,
  createRef,
  forwardRef,
} from 'react';

import Field from '../field/Field';
import { isNull } from '../../utils/functions/isNull';
import { isUndefined } from '../../utils/functions/isUndefined';
import { mergeRefs } from '../../utils/functions/mergeRefs';

export type RadioGroupProps = Omit<ComponentProps<'fieldset'>, 'ref'> &
  Omit<ComponentProps<'input'>, 'ref'>;

function RadioGroup(
  props: RadioGroupProps,
  ref: ForwardedRef<HTMLFieldSetElement>
): JSX.Element {
  const fieldsetRef = createRef<HTMLFieldSetElement>();
  const { children, onBlur, ...rest } = props;

  function onBlurHandler(event: FocusEvent<HTMLInputElement>) {
    if (isUndefined(onBlur)) {
      return;
    }

    if (isNull(fieldsetRef.current)) {
      return onBlur(event);
    }

    if (!fieldsetRef.current.contains(event.relatedTarget)) {
      return onBlur(event);
    }
  }

  return createElement(
    Field,
    { ...rest, onBlur: onBlurHandler },
    createElement(
      'fieldset',
      { role: 'radiogroup', ref: mergeRefs(ref, fieldsetRef) },
      children
    )
  );
}

export default forwardRef(RadioGroup);
