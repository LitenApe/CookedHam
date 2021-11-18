import { createElement, ForwardedRef, forwardRef } from 'react';
import { BaseInput, BaseInputProps } from '../base_input';

export type RadioProps = Omit<BaseInputProps<'input'>, 'type'>;

function Radio(
  props: RadioProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  return createElement(BaseInput, { ...props, type: 'radio', ref });
}

export default forwardRef(Radio);
