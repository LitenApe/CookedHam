import { ComponentProps, createElement, ForwardedRef, forwardRef } from 'react';
import Field from '../field/Field';

function Radios(
  props: ComponentProps<'fieldset'> & ComponentProps<'input'>,
  ref: ForwardedRef<HTMLFieldSetElement>
) {
  const { children, ...rest } = props;
  return createElement(
    Field,
    rest,
    createElement('fieldset', { ref }, children)
  );
}

export default forwardRef(Radios);
