import {
  ComponentProps,
  ElementType,
  ForwardedRef,
  createElement,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import { FieldProps, useField } from '../field';

import { mergeRefs } from '../../utils/functions/mergeRefs';

type PermittedTags = 'input' | 'textarea';

export type BaseInputProps<T extends ElementType> = {
  as?: T;
  error?: string;
} & Omit<ComponentProps<T>, 'ref'>;

function BaseInput<T extends PermittedTags = 'input'>(
  props: BaseInputProps<T>,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
): JSX.Element {
  const internalRef = useRef<HTMLInputElement>();
  const { as = 'input', ...rest } = props;
  const { getFieldProps } = useField();
  const { error, ...args } = getFieldProps(rest as FieldProps);

  useEffect(() => {
    internalRef.current?.setCustomValidity(error ?? '');
  }, [error, internalRef]);

  return createElement(as, {
    'aria-invalid': !!error,
    ...args,
    ref: mergeRefs(internalRef, ref),
  });
}

export default forwardRef(BaseInput);
