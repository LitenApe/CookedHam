import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import Field from '../field/Field';

function RadioGroup(
  props: ComponentProps<'fieldset'> & ComponentProps<'input'>,
  ref: ForwardedRef<HTMLFieldSetElement>
) {
  const { children, ...rest } = props;
  return createElement(
    Field,
    rest,
    createElement('fieldset', { role: 'radiogroup', ref }, children)
  );
}

export default forwardRef(RadioGroup);
