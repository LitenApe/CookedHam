import {
  ComponentProps,
  createElement,
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import { mergeRefs } from '../../utils/functions/mergeRefs';
import { HTMLTags } from '../../utils/types/DynamicProps';
import { FieldProps, useField } from '../field';

type PermittedTags = 'input' | 'textarea';

export type BaseInputProps<T extends HTMLTags> = {
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
