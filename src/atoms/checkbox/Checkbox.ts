import { createElement, ForwardedRef, forwardRef } from 'react';
import { BaseInput, BaseInputProps } from '../base_input';

function Checkbox(
  props: Omit<BaseInputProps<'input'>, 'type'>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return createElement(BaseInput, { ...props, type: 'checkbox', ref });
}

export default forwardRef(Checkbox);
