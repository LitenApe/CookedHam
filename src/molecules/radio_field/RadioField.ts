import { ForwardedRef, createElement, forwardRef } from 'react';
import { RadioGroup, RadioGroupProps } from '../../atoms/radio_group';

import { BaseField } from '../base_field';
import { Field } from '../../atoms/field';
import { Label } from '../../atoms/label';
import { Legend } from '../../atoms/legend';
import { Radio } from '../../atoms/radio';
import { useId } from '../../utils/hooks/useId';

type RadioProps = Parameters<typeof Radio>[0];
interface Option extends Omit<RadioProps, 'children' | 'value' | 'name'> {
  label: string;
  value: string;
}

type RadioFieldProps = {
  name: string;
  label: string;
  options: Array<Option>;
} & Omit<RadioGroupProps, 'children'>;

function RadioField(
  props: RadioFieldProps,
  ref: ForwardedRef<HTMLFieldSetElement>
) {
  const { label, options, name, required, ...rest } = props;
  const id = useId('radio-field');

  return createElement(
    BaseField,
    rest,
    createElement(RadioGroup, { ref }, [
      createElement(Legend, { key: `${id}_group_legend_${label}` }, label),
      options.map(({ label, ...radioProps }, index) =>
        createElement(
          Field,
          { key: `${id}_group_${name}_option_${label}` },
          createElement('div', null, [
            createElement(Radio, {
              required: required && index === 0,
              ...radioProps,
              name: name,
              key: `${id}_radio_${label}`,
            }),
            createElement(Label, { key: `${id}_label_${label}` }, label),
          ])
        )
      ),
    ])
  );
}

export default forwardRef(RadioField);
