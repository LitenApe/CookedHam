import {
  ComponentProps,
  createElement,
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import { mergeRefs } from '../../utils/functions/mergeRefs';
import { useField } from '../field';

function Select(
  props: { error?: string } & ComponentProps<'select'>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const internalRef = useRef<HTMLSelectElement>();
  const { getFieldProps } = useField();
  const { error, ...args } = getFieldProps(props);

  useEffect(() => {
    internalRef.current?.setCustomValidity(error ?? '');
  }, [error, internalRef]);

  return createElement('select', {
    'aria-invalid': !!error,
    ...args,
    ref: mergeRefs(internalRef, ref),
  });
}

export default forwardRef(Select);
