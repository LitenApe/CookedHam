import { createElement, ForwardedRef, forwardRef } from 'react';
import { Field } from '../../atoms/field';
import { Radio, RadioProps } from '../../atoms/radio';
import { RadioGroup, RadioGroupProps } from '../../atoms/radio_group';
import { useId } from '../../utils/hooks/useId';

interface Option extends Omit<RadioProps, 'children'> {
  label: string;
}

type RadioFieldProps = {
  label: string;
  options: Array<Option>;
} & Omit<RadioGroupProps, 'children' | 'ref'>;

function RadioField(
  props: RadioFieldProps,
  ref: ForwardedRef<HTMLFieldSetElement>
) {
  const { label, options, ...rest } = props;
  const id = useId('radio-field');

  return createElement(
    Field,
    null,
    createElement(
      RadioGroup,
      { ...rest, ref },
      options.map(({ label, ...radioProps }) =>
        createElement(
          Radio,
          { ...radioProps, key: `${id}_radio_${label}` },
          label
        )
      )
    )
  );
}

export default forwardRef(RadioField);
