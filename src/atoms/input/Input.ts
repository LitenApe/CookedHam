import { createElement, ForwardedRef, forwardRef } from 'react';
import { BaseInput, BaseInputProps } from '../base_input';

type PermittedTags = 'input' | 'textarea';

function Input<T extends PermittedTags = 'input'>(
  props: BaseInputProps<T>,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
) {
  return createElement(BaseInput, {
    type: props.as === 'textarea' ? undefined : 'text',
    ...props,
    ref,
  });
}

export default forwardRef(Input);
